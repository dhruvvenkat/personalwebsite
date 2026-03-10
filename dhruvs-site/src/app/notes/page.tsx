import Link from "next/link";

import { AmbientBackground } from "../components/ambient-background";
import { Panel } from "../components/panel";
import { formatNoteDate, notes } from "../data/notes";

export default function NotesIndexPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0b0d10] text-zinc-200 selection:bg-zinc-700 selection:text-white">
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-4xl px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        <header className="mb-14 border-b border-zinc-800 pb-10">
          <Link
            href="/"
            className="mb-8 inline-flex text-[11px] uppercase tracking-[0.25em] text-zinc-500 transition hover:text-white"
          >
            dhruv venkat
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                notes
              </p>

              <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
                Notes
              </h1>
            </div>

            <p className="max-w-md text-[15px] leading-7 text-zinc-400 lg:pt-8">
              Short writing on AI-native engineering, systems, and the product
              decisions that shape dependable software.
            </p>
          </div>
        </header>

        <Panel title="all notes">
          <div className="border-t border-zinc-800">
            {notes.map((note) => (
              <Link
                key={note.slug}
                href={`/notes/${note.slug}`}
                className="group grid gap-2 border-b border-zinc-800 py-5 transition sm:grid-cols-[120px_1fr] sm:gap-6"
              >
                <span className="pt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-zinc-500">
                  {formatNoteDate(note.date)}
                </span>
                <span className="text-lg font-light text-zinc-200 transition group-hover:text-white">
                  {note.title}
                </span>
              </Link>
            ))}
          </div>
        </Panel>
      </div>
    </main>
  );
}
