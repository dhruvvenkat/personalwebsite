import { GlassPill } from "@/components/glass-pill";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { SiteContent } from "@/lib/site-data";

type ExperienceSectionProps = {
    experience: SiteContent["experience"];
};

export function ExperienceSection({ experience }: ExperienceSectionProps) {
    return (
        <section id="experience" className="section-shell section-wide section-wash">
            <div className="grid gap-12 xl:grid-cols-12">
                <Reveal className="xl:col-span-4">
                    <div className="xl:sticky xl:top-28 xl:pr-8">
                        <SectionHeading
                            eyebrow={experience.eyebrow}
                            title={experience.title}
                            description={experience.description}
                            titleClassName="max-w-lg text-[clamp(2.8rem,4.8vw,5rem)] text-[var(--color-text)]"
                            descriptionClassName="max-w-md"
                        />
                    </div>
                </Reveal>

                <div className="relative space-y-6 pl-4 sm:pl-6 xl:col-span-8 xl:pl-10">
                    <div className="absolute bottom-0 left-1 top-2 w-px bg-gradient-to-b from-[rgba(103,232,249,0.4)] via-[rgba(255,255,255,0.08)] to-transparent sm:left-2" />

                    {experience.items.map((item, index) => (
                        <Reveal
                            key={`${item.company}-${item.period}`}
                            delay={index * 0.08}
                            className={index % 2 === 1 ? "lg:ml-14" : "lg:mr-14"}
                            x={index % 2 === 0 ? -18 : 18}
                        >
                            <div className="relative">
                                <span className="absolute left-1 top-10 z-10 h-3.5 w-3.5 -translate-x-1/2 rounded-full border border-[rgba(255,255,255,0.26)] bg-[var(--color-cyan)] shadow-[0_0_0_10px_rgba(11,16,32,0.92)] sm:left-2" />

                                <article className="panel-surface-strong ml-6 rounded-[1.95rem] px-6 py-6 sm:ml-10 sm:px-8 sm:py-7">
                                    <div className="grid gap-6 lg:grid-cols-[170px_minmax(0,1fr)] lg:gap-8">
                                        <div>
                                            <p className="code-label">{item.period}</p>
                                            <p className="mt-3 text-sm leading-6 text-[var(--color-muted)]">
                                                {item.location}
                                            </p>
                                        </div>

                                        <div>
                                            <h3 className="display-title text-[2rem] leading-tight text-[var(--color-text)] sm:text-[2.6rem]">
                                                {item.role}
                                            </h3>
                                            <p className="mt-2 text-base font-medium text-[var(--color-blue)]">
                                                {item.company}
                                            </p>
                                            <p className="muted-copy mt-4 text-sm leading-7 sm:text-base sm:leading-8">
                                                {item.description}
                                            </p>

                                            <div className="mt-5 flex flex-wrap gap-2">
                                                {item.technologies.map((technology) => (
                                                    <GlassPill
                                                        key={technology}
                                                        label={technology}
                                                        tone="soft"
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </article>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
