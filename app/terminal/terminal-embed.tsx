"use client";

import { useEffect, useState } from "react";

type TerminalEmbedProps = {
  ttydUrl: string;
};

type MobileTerminalNoticeProps = {
  className?: string;
};

function MobileTerminalNotice({ className = "" }: MobileTerminalNoticeProps) {
  return (
    <section
      className={`flex min-h-[55vh] flex-1 flex-col justify-center border border-zinc-800 bg-black p-6 sm:p-8 ${className}`}
    >
      <div className="max-w-md">
        <p className="text-[11px] uppercase tracking-[0.25em] text-zinc-600">
          terminal unavailable
        </p>
        <h2 className="mt-4 text-3xl font-light tracking-tight text-white">
          this can&apos;t be displayed on mobile yet.
        </h2>
        <p className="mt-5 text-[15px] leading-7 text-zinc-400">
          i&apos;m working on a touch-friendly version. for now, open this page
          on a computer.
        </p>
      </div>
    </section>
  );
}

function DesktopTerminalFrame({ ttydUrl }: TerminalEmbedProps) {
  return (
    <>
      <section className="hidden min-h-[65vh] flex-1 flex-col overflow-hidden border border-zinc-800 bg-black md:flex">
        <iframe
          title="terminal projects"
          src={ttydUrl}
          className="min-h-[65vh] flex-1 bg-black"
          allow="clipboard-read; clipboard-write"
          referrerPolicy="no-referrer"
        />
      </section>

      <a
        href={ttydUrl}
        target="_blank"
        rel="noreferrer"
        className="animated-underline mt-4 w-fit text-[13px] text-zinc-500 transition hover:text-white"
      >
        open terminal in a new tab
      </a>
    </>
  );
}

export function TerminalEmbed({ ttydUrl }: TerminalEmbedProps) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 767px), (pointer: coarse)");
    const updateDeviceType = () => setIsMobile(mediaQuery.matches);

    updateDeviceType();
    mediaQuery.addEventListener("change", updateDeviceType);

    return () => mediaQuery.removeEventListener("change", updateDeviceType);
  }, []);

  if (isMobile === null) {
    return (
      <>
        <MobileTerminalNotice className="md:hidden" />
        <section className="hidden min-h-[65vh] flex-1 flex-col justify-center border border-zinc-800 bg-black p-8 text-[13px] text-zinc-500 md:flex">
          loading terminal...
        </section>
      </>
    );
  }

  return isMobile ? (
    <MobileTerminalNotice />
  ) : (
    <DesktopTerminalFrame ttydUrl={ttydUrl} />
  );
}
