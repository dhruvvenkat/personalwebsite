import Link from "next/link";

import { AmbientBackground } from "../components/ambient-background";

const ttydUrl =
  process.env.NEXT_PUBLIC_TTYD_URL ??
  (process.env.NODE_ENV === "development"
    ? "http://143.198.35.46:7681/"
    : "https://ssh.dhruvvenkat.com/");
const terminalCommand = "ssh visitor@ssh.dhruvvenkat.com";

export const metadata = {
  title: "Terminal | dhruv venkat",
  description: "Terminal projects by Dhruv Venkat.",
};

export default function TerminalPage() {
  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0b0d10] text-zinc-200 selection:bg-zinc-700 selection:text-white">
      <AmbientBackground />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        <header className="mb-8 border-b border-zinc-800 pb-8">
          <Link
            href="/"
            className="animated-underline mb-8 inline-flex text-[11px] uppercase tracking-[0.25em] text-zinc-500 transition hover:text-white"
          >
            dhruv venkat
          </Link>

          <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
            <div>
              <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
                terminal
              </h1>
            </div>

            <p className="max-w-md text-[15px] leading-7 text-zinc-400 lg:justify-self-end lg:pt-8 lg:text-right">
              <code className="font-mono text-zinc-300">{terminalCommand}</code>
            </p>
          </div>
        </header>

        <section className="flex min-h-[65vh] flex-1 flex-col overflow-hidden border border-zinc-800 bg-black">
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
      </div>
    </main>
  );
}
