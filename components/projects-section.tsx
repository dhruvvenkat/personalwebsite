import { ArrowUpRight } from "lucide-react";
import { GlassPill } from "@/components/glass-pill";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { SiteContent } from "@/lib/site-data";

type ProjectsSectionProps = {
    work: SiteContent["work"];
};

const cardLayoutClasses = [
    "xl:col-span-8",
    "xl:col-span-4 xl:self-end",
    "xl:col-span-4 xl:-translate-y-10",
    "xl:col-span-4 xl:translate-y-8"
] as const;

export function ProjectsSection({ work }: ProjectsSectionProps) {
    return (
        <section id="work" className="section-shell section-wide">
            <div className="relative grid gap-5 xl:grid-cols-12 xl:items-start">
                <div className="pointer-events-none absolute right-[-3rem] top-8 hidden h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(110,168,254,0.12),transparent_72%)] blur-3xl 2xl:block" />

                <Reveal className="xl:col-span-4">
                    <div className="xl:pr-6">
                        <SectionHeading
                            eyebrow={work.eyebrow}
                            title={work.title}
                            description={work.description}
                            titleClassName="max-w-md text-[clamp(3rem,4.8vw,5.2rem)] text-[var(--color-text)]"
                            descriptionClassName="max-w-sm"
                        />

                        <div className="panel-surface mt-10 rounded-[1.9rem] p-6">
                            <p className="code-label">Project framing</p>
                            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                                Technical systems presented as product modules rather than a
                                uniform gallery, so hierarchy and breadth are visible at a
                                glance.
                            </p>
                        </div>
                    </div>
                </Reveal>

                {work.items.map((project, index) => {
                    const isLead = index === 0;
                    const visualHeight =
                        isLead ? "h-[18rem] sm:h-[22rem]" : "h-44 sm:h-48";

                    return (
                        <Reveal
                            key={project.title}
                            className={cardLayoutClasses[index]}
                            delay={index * 0.08}
                            x={index % 2 === 0 ? -18 : 18}
                        >
                            <article className="panel-surface-strong group flex h-full flex-col rounded-[2rem] transition duration-500 hover:-translate-y-1">
                                <div className="p-5 sm:p-6">
                                    <div
                                        style={{ backgroundImage: project.gradient }}
                                        className={`grain-mask relative overflow-hidden rounded-[1.55rem] ${visualHeight}`}
                                    >
                                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(3,8,24,0.06),rgba(3,8,24,0.26)_62%,rgba(3,8,24,0.62))]" />
                                        <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                                            <GlassPill
                                                label={project.category}
                                                tone="accent"
                                                className="bg-[rgba(255,255,255,0.08)]"
                                            />
                                            <GlassPill label={project.year} />
                                        </div>
                                        <div className="absolute bottom-4 left-4 right-4">
                                            <div className="soft-divider mb-4 opacity-60" />
                                            <p className="code-label text-[rgba(245,247,251,0.76)]">
                                                Focus
                                            </p>
                                            <p className="mt-2 max-w-lg text-sm leading-6 text-[rgba(245,247,251,0.9)]">
                                                {project.focus}
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                <div className="flex flex-1 flex-col px-5 pb-5 pt-1 sm:px-6 sm:pb-6">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="code-label">{`0${index + 1}`}</p>
                                            <h3
                                                className={`display-title mt-4 leading-[0.94] text-[var(--color-text)] ${isLead ? "max-w-lg text-[clamp(2.6rem,4.6vw,4.2rem)]" : "text-[2.05rem] sm:text-[2.55rem]"}`}
                                            >
                                                {project.title}
                                            </h3>
                                        </div>
                                        <div className="glass-chip hidden rounded-full px-3 py-1.5 text-[0.72rem] text-[var(--color-text)] sm:inline-flex">
                                            {project.metric}
                                        </div>
                                    </div>

                                    <p className="muted-copy mt-4 max-w-2xl text-sm leading-7 sm:text-base sm:leading-8">
                                        {project.summary}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {project.tags.map((tag) => (
                                            <GlassPill key={tag} label={tag} tone="soft" />
                                        ))}
                                    </div>

                                    <div className="mt-6 overflow-hidden rounded-[1.35rem] border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-4 py-0 transition-all duration-500 group-hover:py-4">
                                        <div className="max-h-0 opacity-0 transition-all duration-500 group-hover:max-h-28 group-hover:opacity-100">
                                            <p className="code-label">Technical focus</p>
                                            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                                                {project.focus}
                                            </p>
                                        </div>
                                    </div>

                                    <div className="mt-6 flex items-center gap-4">
                                        <a
                                            href={project.href}
                                            className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition duration-500 group-hover:translate-x-1"
                                        >
                                            <span>Open case study</span>
                                            <ArrowUpRight className="h-4 w-4" />
                                        </a>
                                        <div className="soft-divider hidden flex-1 sm:block" />
                                    </div>
                                </div>
                            </article>
                        </Reveal>
                    );
                })}
            </div>
        </section>
    );
}
