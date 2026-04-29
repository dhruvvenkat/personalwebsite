import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaGithub, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { AmbientBackground } from "./components/ambient-background";
import { HomeMascot } from "./components/home-mascot";
import { Panel } from "./components/panel";
import { ProjectRow } from "./components/project-row";
import { formatNoteDate, getAllNoteSummaries } from "./lib/notes";

type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <div className="grid grid-cols-[80px_1fr] gap-3 border-b border-zinc-800 pb-2 text-[15px]">
      <span className="text-zinc-500">{label}</span>
      <span className="text-zinc-300">{value}</span>
    </div>
  );
}

export default function DhruvSystemsPortfolio() {
  const current = [
    "computer engineering @ uwaterloo",
    "aspiring polymath",
    "exploring ML compilers, computer architecture, and performance engineering",
    "hmu if we can cook!",
  ];

  const projects = [
    {
      name: "Patchwork - an AI enhanced terminal editor",
      link: "https://github.com/dhruvvenkat/patchwork",
      tags: ["ide", "devtools", "experiment"]
    },
    {
      name: "BoilerBrain - automating boilerplate code generation with natural language",
      link: "https://github.com/dhruvvenkat/boilerbrain",
      tags: ["ai", "codegen", "tools"],
    },
    {
      name: "LoadStar - deterministic API load simulator",
      link: "https://github.com/dhruvvenkat/loadstar",
      tags: ["systems", "api", "testing"],
    },
  ];

  const allNotes = getAllNoteSummaries();
  const pinnedNote = allNotes.find((note) => note.pinned);
  const recentNotes = pinnedNote
    ? allNotes.filter((note) => note.slug !== pinnedNote.slug).slice(0, 2)
    : allNotes.slice(0, 3);

  const experience = [
    {
      company: "red lane group (may - aug. 2026)",
      role: "engineering + ai",
      icon: "/icons/redlane-logo.svg",
    },

    {
      company: "scotiabank (sep. - dec. 2025)",
      role: "engineering",
      icon: "/icons/scotiabank.svg",
    },
    {
      company: "tangerine  (jan. - apr. 2025)",
      role: "devops",
      icon: "/icons/tangerine.svg",
    },
  ];

  const links = [
    {
      label: "github",
      href: "https://github.com/dhruvvenkat",
      icon: FaGithub,
    },
    {
      label: "linkedin",
      href: "https://www.linkedin.com/in/dhruv-venkat/",
      icon: FaLinkedinIn,
    },
    {
      label: "x",
      href: "https://x.com/wakeupitsdhruv",
      icon: FaXTwitter,
    },
    { label: "email", href: "mailto:dvenkat@uwaterloo.ca" },
    { label: "résumé", href: "/dhruv-venkat-resume.pdf" },
    { label: "pieces", href: "/pieces" },
    { label: "ssh.dhruvvenkat.com", href: "/terminal" },
  ] satisfies Array<{
    label: string;
    href: string;
    icon?: IconType;
  }>;

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0b0d10] text-zinc-200 selection:bg-zinc-700 selection:text-white">
      <AmbientBackground />
      <HomeMascot />

      <div className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl flex-col justify-center px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">
        {/* HEADER */}
        <header className="mb-4 pb-5">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">
            <div>
              {/* <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                ml compilers · systems · architecture
              </p> */}

              <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
                dhruv venkat
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-zinc-400">
                building software focused on clarity, fast iteration, and tools
                that make engineering work sharper.{" "}
                <em>
                  <b>
                    i&apos;m always open to new opportunities to meet cool
                    people and build awesome stuff.
                  </b>
                </em>
              </p>
            </div>

            <div className="grid content-start gap-4 self-end text-sm">
              <InfoRow
                label="focus"
                value="ml compilers · systems · architecture"
              />
              <InfoRow label="location" value="Waterloo / Toronto / Calgary" />
              <InfoRow
                label="status"
                value="building, experimenting, shipping"
              />
            </div>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* LEFT RAIL */}
          <aside className="space-y-12 lg:sticky lg:top-12 lg:h-fit">
            <Panel title="current">
              <ul className="space-y-3 text-[15px] leading-7 text-zinc-300">
                {current.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </Panel>

            <Panel title="experience">
              <ul className="space-y-3 text-zinc-300">
                {experience.map((exp) => (
                  <li
                    key={exp.company}
                    className="flex justify-between text-[15px]"
                  >
                    <span className="flex items-center gap-2.5">
                      <Image
                        src={exp.icon}
                        alt=""
                        width={14}
                        height={14}
                        aria-hidden="true"
                        className="h-[14px] w-[14px] shrink-0 opacity-100"
                      />
                      <span>{exp.company}</span>
                    </span>
                    <span className="text-zinc-500">{exp.role}</span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel title="links">
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-zinc-400">
                {links.map((link) => {
                  const opensInNewTab =
                    link.href.startsWith("http") || link.href.endsWith(".pdf");

                  return (
                    <a
                      key={link.label}
                      href={link.href}
                      target={opensInNewTab ? "_blank" : undefined}
                      rel={opensInNewTab ? "noreferrer" : undefined}
                      aria-label={link.label}
                      className={
                        link.icon
                          ? "transition hover:text-white"
                          : "animated-underline transition hover:text-white"
                      }
                    >
                      {link.icon ? (
                        <span className="flex h-[18px] w-[18px] items-center justify-center text-[16px]">
                          <link.icon aria-hidden="true" />
                        </span>
                      ) : (
                        link.label
                      )}
                    </a>
                  );
                })}
              </div>
            </Panel>
          </aside>

          {/* RIGHT CONTENT */}
          <section className="space-y-14 lg:space-y-8">
            <Panel title="latest notes">
              <div className="space-y-6">
                {pinnedNote && (
                  <Link
                    href={`/notes/${pinnedNote.slug}`}
                    className="group block rounded-2xl border-2 border-zinc-800 bg-zinc-950/30 px-5 py-4 transition hover:border-zinc-700 hover:bg-zinc-950/50"
                  >
                    <div className="mb-3 flex items-center justify-between gap-4">
                      <span className="text-[11px] uppercase tracking-[0.22em] text-zinc-500 transition group-hover:text-zinc-400">
                        Start here
                      </span>
                      <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-zinc-500">
                        {formatNoteDate(pinnedNote.date)}
                      </span>
                    </div>

                    <span className="animated-underline inline text-[16px] leading-7 text-zinc-200 transition group-hover:text-white">
                      {pinnedNote.title}
                    </span>
                  </Link>
                )}

                <div className="divide-y divide-zinc-800 border-y border-zinc-800">
                  {recentNotes.map((note) => (
                    <Link
                      key={note.slug}
                      href={`/notes/${note.slug}`}
                      className="group grid gap-2 py-4 transition sm:grid-cols-[88px_1fr]"
                    >
                      <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-zinc-500">
                        {formatNoteDate(note.date)}
                      </span>
                      <span className="animated-underline w-fit text-[15px] leading-6 text-zinc-300 transition group-hover:text-white">
                        {note.title}
                      </span>
                    </Link>
                  ))}

                  <Link
                    href="/notes"
                    className="group grid gap-2 py-4 transition sm:grid-cols-[88px_1fr]"
                  >
                    <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-zinc-500">
                      archive
                    </span>
                    <span className="flex items-center justify-between gap-4 text-[15px] leading-6 text-zinc-400 transition group-hover:text-white">
                      <span className="animated-underline">more notes</span>
                      <span className="text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-zinc-500">
                        -&gt;
                      </span>
                    </span>
                  </Link>
                </div>
              </div>
            </Panel>

            <Panel title="selected projects">
              <ul className="space-y-3">
                {projects.map((project) => (
                  <ProjectRow
                    key={project.name}
                    name={project.name}
                    href={project.link}
                    tags={project.tags}
                  />
                ))}
              </ul>
            </Panel>
          </section>
        </div>

        <footer className="mt-7 border-t border-zinc-800 pt-5 text-[12px] uppercase tracking-[0.18em] text-zinc-600">
          &copy; 2026 Dhruv Venkat. All Rights Reserved
        </footer>
      </div>
    </main>
  );
}
