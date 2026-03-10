import Link from "next/link";

import { Panel } from "../components/panel";
import { writing } from "../site-data";

export default function WritingPage() {
  return (
    <main className="min-h-screen bg-[#0b0d10] text-zinc-200 selection:bg-zinc-700 selection:text-white">
      <div className="mx-auto max-w-5xl px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        <header className="mb-14 border-b border-zinc-800 pb-10">
          <Link
            href="/"
            className="mb-8 inline-flex text-[11px] uppercase tracking-[0.25em] text-zinc-500 transition hover:text-white"
          >
            home
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                writing archive
              </p>

              <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
                Notes and Writing
              </h1>
            </div>

            <p className="max-w-md text-[15px] leading-7 text-zinc-400 lg:pt-8">
              A running archive of essays and working notes on AI-native
              engineering, systems, product taste, and how software gets shaped
              in practice.
            </p>
          </div>
        </header>

        <Panel title="all writing">
          <div className="border-t border-zinc-800">
            {writing.map((note) => (
              <article
                id={note.slug}
                key={note.slug}
                className="grid scroll-mt-24 gap-3 border-b border-zinc-800 py-6 sm:grid-cols-[96px_1fr] sm:gap-6"
              >
                <div className="pt-1 text-[11px] uppercase tracking-[0.2em] text-zinc-600">
                  {note.type}
                </div>

                <div className="max-w-3xl">
                  <h2 className="text-xl font-light text-white">{note.title}</h2>
                  <p className="mt-2 text-[15px] leading-7 text-zinc-400">
                    {note.summary}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </Panel>
      </div>
    </main>
  );
}
