import { ArrowRight, Cpu } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { SiteContent } from "@/lib/site-data";

type AboutSectionProps = {
    about: SiteContent["about"];
};

export function AboutSection({ about }: AboutSectionProps) {
    return (
        <section id="philosophy" className="section-shell section-medium">
            <div className="grid gap-12 xl:grid-cols-[minmax(0,0.62fr)_minmax(340px,0.38fr)] xl:items-start">
                <div>
                    <Reveal>
                        <SectionHeading
                            eyebrow={about.eyebrow}
                            title={about.title}
                            description={about.body}
                            titleClassName="max-w-4xl text-[clamp(2.9rem,5vw,5.4rem)] text-[var(--color-text)]"
                            descriptionClassName="max-w-3xl"
                        />
                    </Reveal>

                    <Reveal delay={0.12}>
                        <div className="mt-12 space-y-5">
                            {about.principles.map((principle, index) => (
                                <article
                                    key={principle.title}
                                    className="panel-surface grid gap-5 rounded-[1.8rem] p-5 sm:grid-cols-[72px_minmax(0,1fr)] sm:p-6"
                                >
                                    <div className="flex items-center gap-3">
                                        <span className="display-title text-[2.1rem] leading-none text-[rgba(110,168,254,0.9)]">
                                            {`0${index + 1}`}
                                        </span>
                                        <div className="soft-divider hidden flex-1 sm:block" />
                                    </div>
                                    <div>
                                        <h3 className="display-title text-[1.8rem] leading-tight text-[var(--color-text)] sm:text-[2.2rem]">
                                            {principle.title}
                                        </h3>
                                        <p className="muted-copy mt-3 text-sm leading-7 sm:text-base sm:leading-8">
                                            {principle.description}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </Reveal>
                </div>

                <Reveal className="xl:translate-y-10" delay={0.16}>
                    <aside className="panel-surface-strong relative rounded-[2.1rem] p-7 sm:p-9">
                        <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.38)] to-transparent" />
                        <div className="relative">
                            <div className="flex items-center gap-3">
                                <Cpu className="h-4 w-4 text-[var(--color-cyan)]" />
                                <span className="code-label">Core principle</span>
                            </div>
                            <span className="display-title mt-6 block text-6xl leading-none text-[rgba(110,168,254,0.78)]">
                                &ldquo;
                            </span>
                            <p className="display-title mt-4 text-[2.45rem] leading-[1] text-[var(--color-text)] sm:text-[3.1rem]">
                                {about.quote}
                            </p>
                            <div className="editorial-rule mt-8 w-24" />
                            <p className="mt-6 text-sm leading-7 text-[var(--color-muted)] sm:text-base sm:leading-8">
                                I prefer tools and systems that give people leverage without
                                making the underlying machinery opaque. Architecture and
                                interface should work together to reduce uncertainty.
                            </p>
                            <div className="mt-8 flex items-center gap-3 text-sm text-[var(--color-muted)]">
                                <ArrowRight className="h-4 w-4 text-[var(--color-blue)]" />
                                <span>
                                    Building tools for builders, with operational clarity as a
                                    product feature.
                                </span>
                            </div>
                        </div>
                    </aside>
                </Reveal>
            </div>
        </section>
    );
}
