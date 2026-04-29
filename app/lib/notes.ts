import fs from "node:fs";
import path from "node:path";

import matter from "gray-matter";

const notesDirectory = path.join(process.cwd(), "src", "app", "content", "notes");

export type NoteFrontmatter = {
  title: string;
  date: string;
  description?: string;
  pinned?: boolean;
};

export type NoteSummary = NoteFrontmatter & {
  slug: string;
};

export type Note = NoteSummary & {
  content: string;
};

const noteDateFormatter = new Intl.DateTimeFormat("en-US", {
  month: "short",
  day: "numeric",
  year: "numeric",
});

function isMarkdownFile(fileName: string) {
  return fileName.endsWith(".md") || fileName.endsWith(".mdx");
}

function parseNoteFile(fileContents: string, slug: string): Note {
  const { data, content } = matter(fileContents);
  const frontmatter = data as Partial<NoteFrontmatter>;
  const rawDate = data.date as string | Date | undefined;
  const normalizedDate =
    rawDate instanceof Date
      ? rawDate.toISOString().slice(0, 10)
      : rawDate
        ? String(rawDate)
        : undefined;

  if (!frontmatter.title || !normalizedDate) {
    throw new Error(`Note "${slug}" is missing required frontmatter.`);
  }

  return {
    slug,
    title: frontmatter.title,
    date: normalizedDate,
    description: frontmatter.description,
    pinned: Boolean(data.pinned),
    content: content.trim(),
  };
}

function sortNotes<T extends { date: string; pinned?: boolean }>(items: T[]) {
  return [...items].sort((a, b) => {
    if (a.pinned !== b.pinned) {
      return a.pinned ? -1 : 1;
    }

    return b.date.localeCompare(a.date);
  });
}

export function formatNoteDate(date: string) {
  return noteDateFormatter.format(new Date(`${date}T00:00:00`));
}

export function getAllNoteSlugs() {
  return fs
    .readdirSync(notesDirectory)
    .filter(isMarkdownFile)
    .map((fileName) => fileName.replace(/\.(md|mdx)$/, ""));
}

export function getNoteBySlug(slug: string) {
  const filePath = [".md", ".mdx"]
    .map((extension) => path.join(notesDirectory, `${slug}${extension}`))
    .find((candidate) => fs.existsSync(candidate));

  if (!filePath) {
    return null;
  }

  const fileContents = fs.readFileSync(filePath, "utf8");
  return parseNoteFile(fileContents, slug);
}

export function getAllNotes() {
  const notes = getAllNoteSlugs()
    .map((slug) => getNoteBySlug(slug))
    .filter((note): note is Note => note !== null);

  return sortNotes(notes);
}

export function getAllNoteSummaries(): NoteSummary[] {
  return getAllNotes().map(({ slug, title, date, description, pinned }) => ({
    slug,
    title,
    date,
    description,
    pinned,
  }));
}
