"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";

import type { Piece, PieceImage } from "../lib/pieces";

const GALLERY_GAP = 16;
const FALLBACK_ASPECT_RATIO = 4 / 3;

type FocusedImage = {
  piece: Piece;
  image: PieceImage;
  index: number;
};

type GalleryImage = FocusedImage & {
  aspectRatio: number;
  key: string;
};

type JustifiedGalleryItem = GalleryImage & {
  width: number;
};

type JustifiedGalleryRow = {
  key: string;
  height: number;
  items: JustifiedGalleryItem[];
};

type MetadataRowProps = {
  label: string;
  value?: string;
};

function getImageLabel(image: PieceImage, index: number) {
  return image.title || image.alt || `image ${index + 1}`;
}

function getAspectRatio(image: PieceImage) {
  if (image.width && image.height && image.height > 0) {
    return image.width / image.height;
  }

  return FALLBACK_ASPECT_RATIO;
}

function getTargetRowHeight(containerWidth: number) {
  if (containerWidth < 640) {
    return 230;
  }

  if (containerWidth < 1024) {
    return 240;
  }

  return 260;
}

function buildJustifiedRow(
  rowImages: GalleryImage[],
  containerWidth: number,
  maxHeight?: number,
): JustifiedGalleryRow {
  const gapWidth = GALLERY_GAP * Math.max(rowImages.length - 1, 0);
  const availableWidth = containerWidth - gapWidth;
  const aspectRatioTotal = rowImages.reduce(
    (total, item) => total + item.aspectRatio,
    0,
  );
  const naturalHeight = availableWidth / aspectRatioTotal;
  const height = maxHeight ? Math.min(naturalHeight, maxHeight) : naturalHeight;
  let assignedWidth = 0;

  const items = rowImages.map((item, index) => {
    const isLastItem = index === rowImages.length - 1;
    const width = isLastItem
      ? availableWidth - assignedWidth
      : availableWidth * (item.aspectRatio / aspectRatioTotal);

    assignedWidth += width;

    return {
      ...item,
      width,
    };
  });

  return {
    key: rowImages.map((item) => item.key).join("|"),
    height,
    items,
  };
}

function buildJustifiedRows(
  galleryImages: GalleryImage[],
  containerWidth: number,
) {
  if (containerWidth <= 0) {
    return [];
  }

  const targetRowHeight = getTargetRowHeight(containerWidth);

  if (containerWidth < 520) {
    return galleryImages.map((image) =>
      buildJustifiedRow([image], containerWidth, targetRowHeight * 1.55),
    );
  }

  const rows: JustifiedGalleryRow[] = [];
  let currentRow: GalleryImage[] = [];
  let currentAspectRatioTotal = 0;

  for (const image of galleryImages) {
    currentRow.push(image);
    currentAspectRatioTotal += image.aspectRatio;

    const gapWidth = GALLERY_GAP * Math.max(currentRow.length - 1, 0);
    const projectedHeight =
      (containerWidth - gapWidth) / currentAspectRatioTotal;

    if (projectedHeight <= targetRowHeight) {
      rows.push(buildJustifiedRow(currentRow, containerWidth));
      currentRow = [];
      currentAspectRatioTotal = 0;
    }
  }

  if (currentRow.length > 0) {
    rows.push(
      buildJustifiedRow(currentRow, containerWidth, targetRowHeight * 1.45),
    );
  }

  return rows;
}

function MetadataRow({ label, value }: MetadataRowProps) {
  if (!value) {
    return null;
  }

  return (
    <div className="border-t border-zinc-800 py-3 text-[13px] leading-6">
      <span className="text-zinc-600">{label}</span>
      <span className="mt-1 block text-zinc-300">{value}</span>
    </div>
  );
}

export function PieceGallery({ pieces }: { pieces: Piece[] }) {
  const galleryRef = useRef<HTMLDivElement | null>(null);
  const [focusedImage, setFocusedImage] = useState<FocusedImage | null>(null);
  const [galleryWidth, setGalleryWidth] = useState(0);
  const galleryImages = useMemo(
    () =>
      pieces.flatMap((piece) =>
        piece.images.map((image, index) => ({
          piece,
          image,
          index,
          aspectRatio: getAspectRatio(image),
          key: `${piece.slug}-${image.src}-${index}`,
        })),
      ),
    [pieces],
  );
  const justifiedRows = useMemo(
    () => buildJustifiedRows(galleryImages, galleryWidth),
    [galleryImages, galleryWidth],
  );

  useEffect(() => {
    const element = galleryRef.current;

    if (!element) {
      return;
    }

    function updateGalleryWidth() {
      setGalleryWidth(element?.clientWidth ?? 0);
    }

    updateGalleryWidth();

    const resizeObserver = new ResizeObserver((entries) => {
      const entry = entries[0];

      if (entry) {
        setGalleryWidth(entry.contentRect.width);
      }
    });

    resizeObserver.observe(element);

    return () => {
      resizeObserver.disconnect();
    };
  }, []);

  useEffect(() => {
    if (!focusedImage) {
      return;
    }

    const originalOverflow = document.body.style.overflow;

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setFocusedImage(null);
      }
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [focusedImage]);

  return (
    <>
      <div ref={galleryRef}>
        {justifiedRows.length > 0 ? (
          <div className="space-y-4">
            {justifiedRows.map((row) => (
              <div key={row.key} className="flex gap-4">
                {row.items.map(({ piece, image, index, key, width }) => {
                  const label = getImageLabel(image, index);

                  return (
                    <button
                      key={key}
                      type="button"
                      aria-label={`Open ${label}`}
                      onClick={() => setFocusedImage({ piece, image, index })}
                      style={{ width, height: row.height }}
                      className="group relative block shrink-0 overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/30 text-left transition hover:border-zinc-700 hover:bg-zinc-950/50 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                    >
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                        className="object-cover transition duration-300 group-hover:scale-[1.015]"
                      />
                    </button>
                  );
                })}
              </div>
            ))}
          </div>
        ) : (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map(({ piece, image, index, key }) => {
              const label = getImageLabel(image, index);

              return (
                <button
                  key={key}
                  type="button"
                  aria-label={`Open ${label}`}
                  onClick={() => setFocusedImage({ piece, image, index })}
                  className="group block w-full overflow-hidden rounded-lg border border-zinc-800 bg-zinc-950/30 text-left transition hover:border-zinc-700 hover:bg-zinc-950/50 focus:outline-none focus:ring-1 focus:ring-zinc-500"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={image.width ?? 1200}
                    height={image.height ?? 900}
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="h-auto w-full object-cover transition duration-300 group-hover:scale-[1.015]"
                  />
                </button>
              );
            })}
          </div>
        )}
      </div>

      {focusedImage && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={getImageLabel(focusedImage.image, focusedImage.index)}
          className="piece-focus-backdrop fixed inset-0 z-[90] flex items-center justify-center bg-black/80 px-4 py-6 backdrop-blur-md"
        >
          <button
            type="button"
            aria-label="Close focused image"
            onClick={() => setFocusedImage(null)}
            className="absolute inset-0 cursor-default"
          />

          <div className="piece-focus-card relative z-10 flex max-h-[calc(100vh-3rem)] w-[min(86rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-lg border border-zinc-800 bg-[#0b0d10]/95 shadow-2xl">
            <button
              type="button"
              aria-label="Close focused image"
              onClick={() => setFocusedImage(null)}
              className="absolute right-3 top-3 z-20 flex h-8 w-8 items-center justify-center rounded bg-black/60 text-zinc-300 transition hover:bg-black/80 hover:text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
            >
              <svg
                aria-hidden="true"
                viewBox="0 0 16 16"
                className="h-4 w-4"
              >
                <path
                  d="M4 4l8 8M12 4l-8 8"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="1.6"
                />
              </svg>
            </button>

            <div className="relative min-h-[52vh] flex-1 bg-black/30 md:min-h-[min(68vh,42rem)]">
              <Image
                src={focusedImage.image.src}
                alt={focusedImage.image.alt}
                fill
                priority
                sizes="(min-width: 1024px) 70vw, 100vw"
                className="object-contain p-4 sm:p-6"
              />
            </div>

            <aside className="border-t border-zinc-800 p-5">
              <div className="mb-4 flex items-start justify-between gap-6">
                <div>
                  <h2 className="text-2xl font-light tracking-tight text-white">
                    {getImageLabel(focusedImage.image, focusedImage.index)}
                  </h2>
                </div>

                {focusedImage.piece.sourceUrl && (
                  <a
                    href={focusedImage.piece.sourceUrl}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open source for ${getImageLabel(
                      focusedImage.image,
                      focusedImage.index,
                    )}`}
                    className="flex h-8 w-8 shrink-0 items-center justify-center rounded text-zinc-500 transition hover:bg-zinc-900 hover:text-white focus:outline-none focus:ring-1 focus:ring-zinc-500"
                  >
                    <svg
                      aria-hidden="true"
                      viewBox="0 0 16 16"
                      className="h-4 w-4"
                    >
                      <path
                        d="M6 4H4.5A2.5 2.5 0 0 0 2 6.5v5A2.5 2.5 0 0 0 4.5 14h5a2.5 2.5 0 0 0 2.5-2.5V10M9 2h5v5M8 8l5.5-5.5"
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.4"
                      />
                    </svg>
                  </a>
                )}
              </div>

              <div className="grid gap-x-6 sm:grid-cols-3">
                <MetadataRow label="collection" value={focusedImage.piece.title} />
                <MetadataRow label="date" value={focusedImage.piece.date} />
                <MetadataRow
                  label="description"
                  value={focusedImage.piece.description}
                />
              </div>
            </aside>
          </div>
        </div>
      )}
    </>
  );
}
