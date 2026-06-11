import Image from "next/image";
import Link from "next/link";
import type { IconType } from "react-icons";
import { FaEnvelope, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";

import { AmbientBackground } from "./components/ambient-background";
import { ExperienceList } from "./components/experience-list";
import { GitHubContributionPopover } from "./components/github-contribution-popover";
import { HomeMascot } from "./components/home-mascot";
import { Panel } from "./components/panel";
import { ProjectRow } from "./components/project-row";
import { XProfilePopover } from "./components/x-profile-popover";
import { getGitHubContributionSummary } from "./lib/github-contributions";
import { formatNoteDate, getAllNoteSummaries } from "./lib/notes";

export const revalidate = 21600;

export default async function DhruvSystemsPortfolio() {
  const githubContributionSummary =
    await getGitHubContributionSummary("dhruvvenkat");

  const current = [
    "computer engineering @ uwaterloo",
    "aspiring polymath",
    "exploring ML inference, computer architecture, and performance engineering",
    "seeking winter 2027 internships in firmware/inference!",
  ];

  const projects = [
    {
      name: "UW Orbital design team - making firmware for mini satellites",
      link: "https://github.com/UWOrbital",
      tags: ["firmware", "embedded", "performance"]
    },
    {
      name: "linkdrop - send links between your phone and your PC over LAN",
      link: "https://github.com/dhruvvenkat/linkdrop",
      tags: ["networking", "systems", "linux"],
    },
    {
      name: "flowstate - an AI enhanced terminal editor",
      link: "https://github.com/dhruvvenkat/flowstate",
      tags: ["ide", "devtools", "experiment"]
    },
    {
      name: "BoilerBrain - automating boilerplate code generation with natural language",
      link: "https://github.com/dhruvvenkat/boilerbrain",
      tags: ["ai", "codegen", "tools"],
    },

  ];

  const allNotes = getAllNoteSummaries();
  const recentNotes = allNotes.filter((note) => !note.pinned).slice(0, 4);

  const experience = [
    {
      company: "red lane group (may - aug. 2026)",
      role: "engineering + ai",
      icon: "/icons/redlane-logo.svg",
      blurb:
        "built an end-to-end pipeline to automate basic triage and investigation for support agents. working on a transcription system to capture audio of internal + external calls and summarize them with AI",
    },

    {
      company: "scotiabank (sep. - dec. 2025)",
      role: "engineering",
      icon: "/icons/scotiabank.svg",
      blurb:
        "worked on client-facing banking onboarding solutions. developed an ai-assistant to help business analysts convert customer notes into detailed project requirements.",
    },
    {
      company: "tangerine  (jan. - apr. 2025)",
      role: "devops",
      icon: "/icons/tangerine.svg",
      blurb:
        "helped maintain several critical Jenkins pipelines. engineered a pipeline to monitor GitHub Copilot license usage and revoke licenses as necessary ($1000+ saved).",
    },
  ];

  const links = [
    {
      label: "github",
      href: "https://github.com/dhruvvenkat",
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
    { label: "email", href: "mailto:dvenkat@uwaterloo.ca", icon: FaEnvelope },
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
          <div className="max-w-3xl">
            {/* <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
              ml compilers · systems · architecture
            </p> */}

            <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
              dhruv venkat
            </h1>
          </div>
        </header>

        {/* MAIN GRID */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          {/* LEFT RAIL */}
          <aside className="space-y-7 lg:sticky lg:top-12 lg:h-fit">
            <Panel title="current">
              <ul className="space-y-3 text-[15px] leading-7 text-zinc-300">
                {current.map((item) => (
                  <li key={item}>
                    {item === current[0] ? (
                      <span className="inline-flex items-center gap-2">
                        <span>computer engineering @</span>
                        <Image
                          src="/icons/uwaterloo-logo.svg"
                          alt=""
                          width={14}
                          height={14}
                          aria-hidden="true"
                          className="h-[14px] w-[14px] shrink-0 translate-y-px"
                        />
                        <span>uwaterloo</span>
                      </span>
                    ) : item === current[current.length - 1] ? (
                      <strong>{item}</strong>
                    ) : (
                      item
                    )}
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel title="experience">
              <ExperienceList items={experience} />
            </Panel>

            <Panel title="links">
              <div className="flex flex-wrap gap-x-4 gap-y-2 text-[15px] text-zinc-400">
                {links.map((link) => {
                  const opensInNewTab =
                    link.href.startsWith("http") || link.href.endsWith(".pdf");

                  if (link.label === "github") {
                    return (
                      <GitHubContributionPopover
                        key={link.label}
                        href={link.href}
                        summary={githubContributionSummary}
                      />
                    );
                  }

                  if (link.label === "x") {
                    return (
                      <XProfilePopover key={link.label} href={link.href} />
                    );
                  }

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
          <section className="space-y-7 lg:space-y-6">
            <Panel title="latest notes">
              <div className="space-y-3 lg:pb-2">
                {recentNotes.map((note) => (
                  <Link
                    key={note.slug}
                    href={`/notes/${note.slug}`}
                    className="group grid grid-cols-[88px_minmax(0,1fr)] items-baseline gap-3 transition sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-5"
                  >
                    <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-zinc-500">
                      {formatNoteDate(note.date)}
                    </span>
                    <span className="flex min-w-0 flex-wrap items-baseline gap-x-3 gap-y-1">
                      <span className="animated-underline w-fit text-[15px] leading-6 text-zinc-300 transition group-hover:text-white">
                        {note.title}
                      </span>
                    </span>
                  </Link>
                ))}

                <Link
                  href="/notes"
                  className="group grid grid-cols-[88px_minmax(0,1fr)] items-baseline gap-3 pt-1 transition sm:grid-cols-[112px_minmax(0,1fr)] sm:gap-5"
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-zinc-500">
                    archive
                  </span>
                  <span className="flex items-center justify-between gap-4 text-[15px] leading-6 text-zinc-400 transition group-hover:text-white">
                    <span className="animated-underline">all notes</span>
                    <span className="text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-zinc-500">
                      -&gt;
                    </span>
                  </span>
                </Link>
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
