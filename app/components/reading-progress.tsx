"use client";

import { useEffect, useRef } from "react";

function getScrollProgress() {
  const scrollableDistance =
    document.documentElement.scrollHeight - window.innerHeight;

  if (scrollableDistance <= 0) {
    return 1;
  }

  return Math.min(Math.max(window.scrollY / scrollableDistance, 0), 1);
}

export function ReadingProgress() {
  const progressRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);

  useEffect(() => {
    const updateProgress = () => {
      frameRef.current = null;

      if (!progressRef.current) {
        return;
      }

      progressRef.current.style.transform = `scaleX(${getScrollProgress()})`;
    };

    const scheduleUpdate = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(updateProgress);
    };

    scheduleUpdate();

    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  return (
    <div
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-[70] h-px bg-zinc-950/30 sm:h-[2px]"
    >
      <div
        ref={progressRef}
        className="h-full origin-left bg-zinc-100 shadow-[0_0_18px_rgba(255,255,255,0.35)]"
        style={{ transform: "scaleX(0)" }}
      />
    </div>
  );
}
