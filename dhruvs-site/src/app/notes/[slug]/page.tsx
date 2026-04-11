import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";

import { AmbientBackground } from "../../components/ambient-background";
import {
  formatNoteDate,
  getAllNoteSummaries,
  getNoteBySlug,
} from "../../lib/notes";

type NotePageProps = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata({
  params,
}: NotePageProps): Promise<Metadata> {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    return {
      title: "Note not found",
    };
  }

  return {
    title: `${note.title} | dhruv venkat`,
    description: note.description,
  };
}

export function generateStaticParams() {
  return getAllNoteSummaries().map((note) => ({
    slug: note.slug,
  }));
}

export default async function NotePage({ params }: NotePageProps) {
  const { slug } = await params;
  const note = getNoteBySlug(slug);

  if (!note) {
    notFound();
  }

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0b0d10] text-zinc-200 selection:bg-zinc-700 selection:text-white">
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-5xl px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        <header className="mb-12 border-b border-zinc-800 pb-10">
          <Link
            href="/notes"
            className="animated-underline mb-8 inline-flex text-[11px] uppercase tracking-[0.25em] text-zinc-500 transition hover:text-white"
          >
            notes
          </Link>

          <div className="mx-auto max-w-[42rem]">
            <p className="mb-4 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
              {formatNoteDate(note.date)}
            </p>

            <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
              {note.title}
            </h1>
          </div>
        </header>

        <article className="mx-auto max-w-[42rem]">
          <div className="note-prose text-[15px] leading-7 text-zinc-300 sm:text-[16px]">
            <ReactMarkdown>{note.content}</ReactMarkdown>
          </div>
        </article>
      </div>
    </main>
  );
}
