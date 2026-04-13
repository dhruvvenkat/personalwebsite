import Image from "next/image";
import Link from "next/link";

import { AmbientBackground } from "../components/ambient-background";
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

        <div className="space-y-16">
          {pieces.map((piece) => (
            <section key={piece.slug}>
              <div className="mb-6 flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <p className="mb-2 text-[11px] uppercase tracking-[0.22em] text-zinc-600">
                    {piece.date}
                  </p>
                  <h2 className="text-2xl font-light tracking-tight text-white">
                    {piece.title}
                  </h2>
                </div>

                {piece.description && (
                  <p className="max-w-md text-[14px] leading-6 text-zinc-500 sm:text-right">
                    {piece.description}
                  </p>
                )}
              </div>

              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {piece.images.map((image) => (
                  <figure
                    key={`${piece.slug}-${image.src}`}
                    className="group overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/30"
                  >
                    <div className="relative aspect-[4/3]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-contain p-3 transition duration-300 group-hover:scale-[1.01]"
                      />
                    </div>

                    {(image.title || image.alt) && (
                      <figcaption className="border-t border-zinc-800 px-4 py-3 text-[12px] uppercase tracking-[0.18em] text-zinc-600">
                        {image.title || image.alt}
                      </figcaption>
                    )}
                  </figure>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
