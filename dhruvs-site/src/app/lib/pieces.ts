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
};

export type PieceFrontmatter = {
  title: string;
  date: string;
  description?: string;
};

export type Piece = PieceFrontmatter & {
  slug: string;
  images: PieceImage[];
};

const pieceImagePattern =
  /!\[([^\]]*)\]\(\s*"?([^"\s)]+)"?(?:\s+"([^"]+)")?\s*\)/g;

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
  return [...content.matchAll(pieceImagePattern)].map((match) => ({
    alt: match[1]?.trim() ?? "",
    src: match[2] ?? "",
    title: match[3],
  }));
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
