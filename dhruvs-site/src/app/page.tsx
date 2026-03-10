import Link from "next/link";

import { Panel } from "./components/panel";
import { writing } from "./site-data";

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
    "building new stuff every week",
    "exploring AI-native engineering workflows and developer tooling",
    "hmu if we can cook!",
  ];

  const projects = [
    { name: "BoilerBrain - automating boilerplate code generation with natural language", link: "https://github.com/dhruvvenkat/boilerbrain" },
    { name: "AgentBench - agent evolution framework for the future", link: "https://github.com/dhruvvenkat/agentbench" },
    { name: "LoadStar - deterministic API load simulator", link: "https://github.com/dhruvvenkat/loadstar" },
  ];

  const recentWriting = writing.slice(0, 3);

  const experience = [
    { company: "scotiabank", role: "engineering" },
    { company: "tangerine", role: "devops" },
  ];

  const links = [
    { label: "github", href: "https://github.com/dhruvvenkat" },
    { label: "linkedin", href: "https://www.linkedin.com/in/dhruv-venkat/" },
    { label: "x", href: "https://x.com/wakeupitsdhruv" },
    { label: "email", href: "mailto:dvenkat@uwaterloo.ca" },
    { label: "resume", href: "/dhruv-venkat-resume.pdf" },
  ];

  return (
    <main className="relative isolate min-h-screen overflow-hidden bg-[#0b0d10] text-zinc-200 selection:bg-zinc-700 selection:text-white">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="ambient-glow ambient-glow-slate left-[-16rem] top-[-10rem] h-[34rem] w-[34rem] sm:h-[42rem] sm:w-[42rem]" />
        <div className="ambient-glow ambient-glow-amber bottom-[-16rem] right-[-12rem] h-[32rem] w-[32rem] sm:h-[40rem] sm:w-[40rem]" />
        <div className="ambient-noise absolute inset-0" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-10 sm:px-10 sm:py-14 lg:px-16 lg:py-20">

        {/* HEADER */}
        <header className="mb-14 border-b border-zinc-800 pb-10">
          <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:gap-20">

            <div>
              <p className="mb-3 text-[11px] uppercase tracking-[0.25em] text-zinc-500">
                systems · software · ai tooling
              </p>

              <h1 className="text-4xl font-light tracking-tight text-white sm:text-6xl">
                dhruv venkat
              </h1>

              <p className="mt-6 max-w-xl text-[15px] leading-7 text-zinc-400">
                building software focused on clarity, fast iteration, and tools that
                make engineering work sharper. <em><b>i'm always open to new opportunities
                to meet cool people and build awesome stuff.</b></em>
              </p>
            </div>

            <div className="grid content-start gap-4 self-end text-sm">
              <InfoRow label="focus" value="AI devtools · systems · product engineering" />
              <InfoRow label="location" value="Waterloo / Toronto / Calgary" />
              <InfoRow label="status" value="building, experimenting, shipping" />
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
                  <li key={exp.company} className="flex justify-between text-[15px]">
                    <span>{exp.company}</span>
                    <span className="text-zinc-500">{exp.role}</span>
                  </li>
                ))}
              </ul>
            </Panel>

            <Panel title="links">
              <div className="flex flex-wrap gap-x-5 gap-y-2 text-[15px] text-zinc-400">
                {links.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="transition hover:text-white"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </Panel>

          </aside>

          {/* RIGHT CONTENT */}
          <section className="space-y-14 lg:space-y-8">

            <Panel title="latest notes / writing">

              <div className="divide-y divide-zinc-800 border-y border-zinc-800">

                {recentWriting.map((note) => (

                  <Link
                    key={note.slug}
                    href={`/writing#${note.slug}`}
                    className="group grid gap-2 py-4 transition sm:grid-cols-[88px_1fr]"
                  >
                    <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-zinc-500">
                      {note.type}
                    </span>
                    <span className="text-[15px] leading-6 text-zinc-300 transition group-hover:text-white">
                      {note.title}
                    </span>
                  </Link>

                ))}

                <Link
                  href="/writing"
                  className="group grid gap-2 py-4 transition sm:grid-cols-[88px_1fr]"
                >
                  <span className="text-[11px] uppercase tracking-[0.2em] text-zinc-600 transition group-hover:text-zinc-500">
                    archive
                  </span>
                  <span className="flex items-center justify-between gap-4 text-[15px] leading-6 text-zinc-400 transition group-hover:text-white">
                    <span>more notes</span>
                    <span className="text-zinc-600 transition group-hover:translate-x-0.5 group-hover:text-zinc-500">
                      -&gt;
                    </span>
                  </span>
                </Link>

              </div>

            </Panel>

            <Panel title="projects">
              <ul className="space-y-3 text-[15px] leading-7 text-zinc-300">
                {projects.map((project) => (
                  <li key={project.name}>
                    <a
                      href={project.link}
                      className="transition hover:text-white"
                    >
                      {project.name}
                    </a>
                  </li>
                ))}
              </ul>
            </Panel>

          </section>

        </div>

      </div>
    </main>
  );
}
