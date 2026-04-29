import Link from "next/link";

import { AmbientBackground } from "../components/ambient-background";
import { TerminalEmbed } from "./terminal-embed";

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

          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
                terminal
              </h1>
            </div>

            <div className="max-w-2xl text-[13px] leading-6 text-zinc-500 lg:justify-self-end lg:pt-8 lg:text-right">
              <p className="text-[15px] leading-7">
                <code className="font-mono text-zinc-300">
                  {terminalCommand}
                </code>
              </p>
              <p className="mt-2">
                browser terminals can feel slow. for the fastest path, run this
                in your terminal.
              </p>
            </div>
          </div>
        </header>

        <TerminalEmbed ttydUrl={ttydUrl} />
      </div>
    </main>
  );
}
