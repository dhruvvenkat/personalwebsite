import Link from "next/link";

import { AmbientBackground } from "../components/ambient-background";
import { PieceGallery } from "../components/piece-gallery";
import { getAllPieces } from "../lib/pieces";

export const metadata = {
  title: "Pieces | dhruv venkat",
  description: "A small gallery of visual artifacts.",
};

export default function PiecesPage() {
  const pieces = getAllPieces();

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0b0d10] text-zinc-200 selection:bg-zinc-700 selection:text-white">
      <AmbientBackground />

      <div className="relative z-10 mx-auto max-w-6xl px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        <header className="mb-12 border-b border-zinc-800 pb-10">
          <Link
            href="/"
            className="animated-underline mb-8 inline-flex text-[11px] uppercase tracking-[0.25em] text-zinc-500 transition hover:text-white"
          >
            dhruv venkat
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              {/* <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                pieces
              </p> */}

              <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
                pieces
              </h1>
            </div>

            <p className="max-w-md text-[15px] leading-7 text-zinc-400 lg:justify-self-end lg:pt-8 lg:text-right">
              some visuals i like.
            </p>
          </div>
        </header>

        <PieceGallery pieces={pieces} />
      </div>
    </main>
  );
}
