import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const piecesDirectory = path.join(
  process.cwd(),
  "src",
  "app",
  "content",
  "pieces",
);

export type PieceImage = {
  alt: string;
  src: string;
  title?: string;
  width?: number;
  height?: number;
};

export type PieceFrontmatter = {
  title: string;
  date: string;
  description?: string;
  sourceUrl?: string;
};

export type Piece = PieceFrontmatter & {
  slug: string;
  images: PieceImage[];
};

const pieceImagePattern =
  /!\[([^\]]*)\]\(\s*"?([^"\s)]+)"?(?:\s+"([^"]+)")?\s*\)/g;

function isJpegStartOfFrame(marker: number) {
  return (
    (marker >= 0xc0 && marker <= 0xc3) ||
    (marker >= 0xc5 && marker <= 0xc7) ||
    (marker >= 0xc9 && marker <= 0xcb) ||
    (marker >= 0xcd && marker <= 0xcf)
  );
}

function readPngDimensions(buffer: Buffer) {
  if (
    buffer.length < 24 ||
    buffer[0] !== 0x89 ||
    buffer.toString("ascii", 1, 4) !== "PNG"
  ) {
    return null;
  }

  return {
    width: buffer.readUInt32BE(16),
    height: buffer.readUInt32BE(20),
  };
}

function readJpegDimensions(buffer: Buffer) {
  if (buffer.length < 4 || buffer[0] !== 0xff || buffer[1] !== 0xd8) {
    return null;
  }

  let offset = 2;

  while (offset < buffer.length) {
    if (buffer[offset] !== 0xff) {
      offset += 1;
      continue;
    }

    while (buffer[offset] === 0xff) {
      offset += 1;
    }

    const marker = buffer[offset];
    offset += 1;

    if (marker === 0xd9 || marker === 0xda) {
      break;
    }

    if (marker >= 0xd0 && marker <= 0xd7) {
      continue;
    }

    if (offset + 2 > buffer.length) {
      return null;
    }

    const segmentLength = buffer.readUInt16BE(offset);

    if (segmentLength < 2 || offset + segmentLength > buffer.length) {
      return null;
    }

    if (isJpegStartOfFrame(marker)) {
      return {
        height: buffer.readUInt16BE(offset + 3),
        width: buffer.readUInt16BE(offset + 5),
      };
    }

    offset += segmentLength;
  }

  return null;
}

function getPublicImageDimensions(src: string) {
  if (!src.startsWith("/")) {
    return null;
  }

  const imagePath = path.join(process.cwd(), "public", src.slice(1));

  if (!fs.existsSync(imagePath)) {
    return null;
  }

  const buffer = fs.readFileSync(imagePath);

  return readPngDimensions(buffer) ?? readJpegDimensions(buffer);
}

function isMarkdownFile(fileName: string) {
  return fileName.endsWith(".md") || fileName.endsWith(".mdx");
}

function normalizeDate(rawDate: string | Date | undefined) {
  if (rawDate instanceof Date) {
    return rawDate.toISOString().slice(0, 10);
  }

  return rawDate ? String(rawDate) : undefined;
}

function parsePieceImages(content: string): PieceImage[] {
  return [...content.matchAll(pieceImagePattern)].map((match) => {
    const src = match[2] ?? "";
    const dimensions = getPublicImageDimensions(src);

    return {
      alt: match[1]?.trim() ?? "",
      src,
      title: match[3],
      width: dimensions?.width,
      height: dimensions?.height,
    };
  });
}

function parsePieceFile(fileContents: string, slug: string): Piece {
  const { data, content } = matter(fileContents);
  const frontmatter = data as Partial<PieceFrontmatter>;
  const date = normalizeDate(data.date as string | Date | undefined);

  if (!frontmatter.title || !date) {
    throw new Error(`Piece "${slug}" is missing required frontmatter.`);
  }

  return {
    slug,
    title: frontmatter.title,
    date,
    description: frontmatter.description,
    sourceUrl: frontmatter.sourceUrl,
    images: parsePieceImages(content),
  };
}

export function getAllPieceSlugs() {
  if (!fs.existsSync(piecesDirectory)) {
    return [];
  }

  return fs
    .readdirSync(piecesDirectory)
    .filter(isMarkdownFile)
    .map((fileName) => fileName.replace(/\.(md|mdx)$/, ""));
}

export function getPieceBySlug(slug: string) {
  const filePath = [".md", ".mdx"]
    .map((extension) => path.join(piecesDirectory, `${slug}${extension}`))
    .find((candidate) => fs.existsSync(candidate));

  if (!filePath) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return parsePieceFile(fileContents, slug);
}

export function getAllPieces() {
  return getAllPieceSlugs()
    .map((slug) => getPieceBySlug(slug))
    .filter((piece): piece is Piece => piece !== null)
    .sort((a, b) => b.date.localeCompare(a.date));
}
