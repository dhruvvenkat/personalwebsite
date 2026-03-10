import { ArrowUpRight, FlaskConical, Radar } from "lucide-react";
import { GlassPill } from "@/components/glass-pill";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { SiteContent } from "@/lib/site-data";

type SystemsLabSectionProps = {
    lab: SiteContent["lab"];
};

const statusToneMap = {
    Prototype: "default",
    "In Progress": "accent",
    Deployed: "accent",
    Research: "soft"
} as const;

const cardLayoutClasses = [
    "xl:col-span-4",
    "xl:col-span-4 xl:translate-y-10",
    "xl:col-span-4",
    "xl:col-span-8 xl:-translate-y-4"
] as const;

export function SystemsLabSection({ lab }: SystemsLabSectionProps) {
    return (
        <section id="lab" className="section-shell section-wide section-wash">
            <div className="relative grid gap-5 xl:grid-cols-12 xl:items-start">
                <div className="pointer-events-none absolute left-[-3rem] top-12 hidden h-44 w-44 rounded-full bg-[radial-gradient(circle,rgba(103,232,249,0.1),transparent_72%)] blur-3xl 2xl:block" />

                <Reveal className="xl:col-span-4">
                    <div className="xl:pr-6">
                        <SectionHeading
                            eyebrow={lab.eyebrow}
                            title={lab.title}
                            description={lab.description}
                            titleClassName="max-w-md text-[clamp(2.8rem,4.6vw,4.9rem)] text-[var(--color-text)]"
                            descriptionClassName="max-w-sm"
                        />

                        <div className="panel-surface mt-10 rounded-[1.9rem] p-6">
                            <div className="flex items-center gap-3">
                                <FlaskConical className="h-4 w-4 text-[var(--color-cyan)]" />
                                <span className="code-label">Active track</span>
                            </div>
                            <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                                Experiments around agent evaluation, workflow runtime design,
                                developer ergonomics, and operational visibility.
                            </p>
                        </div>
                    </div>
                </Reveal>

                {lab.items.map((item, index) => (
                    <Reveal
                        key={item.title}
                        delay={0.08 + index * 0.06}
                        className={cardLayoutClasses[index]}
                        x={index % 2 === 0 ? -18 : 18}
                    >
                        <article className="panel-surface-strong group h-full rounded-[1.95rem] p-5 transition duration-500 hover:-translate-y-1 sm:p-6">
                            <div className="flex flex-wrap items-center gap-2">
                                <GlassPill
                                    label={item.status}
                                    tone={statusToneMap[item.status]}
                                />
                                <GlassPill label={item.category} tone="soft" />
                            </div>

                            <div className="mt-5 flex items-start justify-between gap-4">
                                <h3 className="display-title max-w-sm text-[2rem] leading-tight text-[var(--color-text)] sm:text-[2.35rem]">
                                    {item.title}
                                </h3>
                                <div className="glass-chip flex h-10 w-10 items-center justify-center rounded-full text-[var(--color-cyan)]">
                                    {index % 2 === 0 ? (
                                        <Radar className="h-4 w-4" />
                                    ) : (
                                        <ArrowUpRight className="h-4 w-4" />
                                    )}
                                </div>
                            </div>

                            <p className="muted-copy mt-4 text-sm leading-7 sm:text-base sm:leading-8">
                                {item.description}
                            </p>

                            <div className="mt-6 flex flex-wrap gap-2">
                                {item.technologies.map((technology) => (
                                    <GlassPill
                                        key={technology}
                                        label={technology}
                                        tone="soft"
                                    />
                                ))}
                            </div>
                        </article>
                    </Reveal>
                ))}
            </div>
        </section>
    );
}
