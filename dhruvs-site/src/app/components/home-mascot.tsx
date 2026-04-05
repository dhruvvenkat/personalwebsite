"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

type Quote = {
  content: string;
  author: string;
};

type QuoteErrorResponse = {
  error?: string;
};

export function HomeMascot() {
  const [isBubbleOpen, setIsBubbleOpen] = useState(false);
  const [quote, setQuote] = useState<Quote | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!isBubbleOpen) {
      return;
    }

    function handlePointerDown(event: PointerEvent) {
      if (!containerRef.current?.contains(event.target as Node)) {
        setIsBubbleOpen(false);
      }
    }

    document.addEventListener("pointerdown", handlePointerDown);

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
    };
  }, [isBubbleOpen]);

  async function handleMascotClick() {
    setIsBubbleOpen(true);
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch("/api/quote", {
        cache: "no-store",
      });
      const data = (await response.json()) as Quote | QuoteErrorResponse;

      if (
        !response.ok ||
        !("content" in data) ||
        !("author" in data)
      ) {
        const errorMessage =
          "error" in data && typeof data.error === "string"
            ? data.error
            : "Unable to fetch quote right now.";

        throw new Error(errorMessage);
      }

      setQuote({
        content: data.content,
        author: data.author,
      });
    } catch (fetchError) {
      setQuote(null);
      setError(
        fetchError instanceof Error
          ? fetchError.message
          : "Unable to fetch quote right now.",
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div className="pointer-events-none fixed right-4 bottom-4 z-30 sm:right-6 sm:bottom-6">
      <div
        ref={containerRef}
        className="pointer-events-auto flex flex-col items-end"
      >
        {isBubbleOpen && (
          <div className="relative mb-4 w-[15rem] rounded-[1.75rem] bg-white px-5 py-4 text-left text-zinc-900 shadow-[0_18px_60px_rgba(255,255,255,0.18)] sm:w-[18rem]">
            {isLoading ? (
              <p className="min-h-[5.5rem] text-[15px] leading-6 text-zinc-500">
                Loading...
              </p>
            ) : error ? (
              <p className="min-h-[5.5rem] text-[15px] leading-6 text-zinc-500">
                {error}
              </p>
            ) : quote ? (
              <div className="space-y-3">
                <p className="text-[15px] leading-6">&ldquo;{quote.content}&rdquo;</p>
                <p className="text-[13px] font-medium uppercase tracking-[0.14em] text-zinc-500">
                  {quote.author}
                </p>
              </div>
            ) : (
              <div className="min-h-[5.5rem]" />
            )}
            <div className="absolute right-8 -bottom-3 h-6 w-6 rotate-45 rounded-[0.35rem] bg-white" />
          </div>
        )}

        <button
          type="button"
          onClick={handleMascotClick}
          aria-label="Show a new quote"
          className="group cursor-pointer rounded-full transition hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-white/70 focus:ring-offset-2 focus:ring-offset-[#0b0d10]"
        >
          <Image
            src="/icons/SP-Studio (1).png"
            alt="Caricature of Dhruv"
            width={144}
            height={144}
            priority
            className="h-24 w-24 drop-shadow-[0_10px_30px_rgba(0,0,0,0.45)] transition duration-200 group-hover:scale-[1.02] sm:h-32 sm:w-32"
          />
        </button>
      </div>
    </div>
  );
}
