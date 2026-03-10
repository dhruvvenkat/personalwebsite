import { ArrowUpRight } from "lucide-react";
import { GlassPill } from "@/components/glass-pill";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { SiteContent } from "@/lib/site-data";

type WritingSectionProps = {
    writing: SiteContent["writing"];
};

export function WritingSection({ writing }: WritingSectionProps) {
    const [featured, ...secondaryItems] = writing.items;

    return (
        <section id="writing" className="section-shell section-medium">
            <div className="grid gap-12 xl:grid-cols-[minmax(280px,0.34fr)_minmax(0,0.66fr)]">
                <Reveal>
                    <div className="xl:sticky xl:top-28">
                        <SectionHeading
                            eyebrow={writing.eyebrow}
                            title={writing.title}
                            description={writing.description}
                            titleClassName="max-w-lg text-[clamp(2.8rem,4.7vw,5rem)] text-[var(--color-text)]"
                            descriptionClassName="max-w-md"
                        />
                    </div>
                </Reveal>

                <div className="space-y-6">
                    <Reveal>
                        <article className="panel-surface-strong group rounded-[2.2rem] p-6 sm:p-8">
                            <div className="grid gap-8 lg:grid-cols-[minmax(0,0.72fr)_minmax(220px,0.28fr)] lg:items-end">
                                <div>
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
                                        <GlassPill label={featured.format} tone="accent" />
                                        <span>{featured.readTime}</span>
                                    </div>

                                    <h3 className="display-title mt-8 max-w-3xl text-[clamp(2.8rem,5.4vw,5.3rem)] leading-[0.92] text-[var(--color-text)]">
                                        {featured.title}
                                    </h3>
                                    <p className="muted-copy mt-5 max-w-2xl text-base leading-8">
                                        {featured.summary}
                                    </p>

                                    <div className="mt-6 flex flex-wrap gap-2">
                                        {featured.tags.map((tag) => (
                                            <GlassPill
                                                key={tag}
                                                label={tag}
                                                tone="soft"
                                            />
                                        ))}
                                    </div>
                                </div>

                                <div className="panel-surface rounded-[1.5rem] p-5">
                                    <p className="code-label">Writing lens</p>
                                    <p className="mt-4 text-sm leading-7 text-[var(--color-muted)]">
                                        Technical notes on agent design, system visibility, and
                                        tools that make builders faster.
                                    </p>
                                </div>
                            </div>

                            <div className="mt-8 flex items-center gap-4 border-t border-[rgba(255,255,255,0.08)] pt-5">
                                <a
                                    href={featured.href}
                                    className="inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition duration-500 group-hover:translate-x-1"
                                >
                                    <span>Read the note</span>
                                    <ArrowUpRight className="h-4 w-4" />
                                </a>
                                <div className="soft-divider hidden flex-1 sm:block" />
                            </div>
                        </article>
                    </Reveal>

                    <div className="grid gap-5 md:grid-cols-2">
                        {secondaryItems.map((item, index) => (
                            <Reveal
                                key={item.title}
                                delay={0.08 + index * 0.06}
                                className={index === 1 ? "md:translate-y-10" : ""}
                            >
                                <article className="panel-surface group h-full rounded-[1.85rem] p-6">
                                    <div className="flex flex-wrap items-center gap-3 text-sm text-[var(--color-muted)]">
                                        <GlassPill label={item.format} tone="default" />
                                        <span>{item.readTime}</span>
                                    </div>

                                    <h3 className="display-title mt-6 text-[2rem] leading-tight text-[var(--color-text)] sm:text-[2.5rem]">
                                        {item.title}
                                    </h3>
                                    <p className="muted-copy mt-4 text-sm leading-7 sm:text-base sm:leading-8">
                                        {item.summary}
                                    </p>

                                    <div className="mt-5 flex flex-wrap gap-2">
                                        {item.tags.map((tag) => (
                                            <GlassPill
                                                key={tag}
                                                label={tag}
                                                tone="soft"
                                            />
                                        ))}
                                    </div>

                                    <a
                                        href={item.href}
                                        className="mt-8 inline-flex items-center gap-2 text-sm font-medium text-[var(--color-text)] transition duration-500 group-hover:translate-x-1"
                                    >
                                        <span>Open article</span>
                                        <ArrowUpRight className="h-4 w-4" />
                                    </a>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
