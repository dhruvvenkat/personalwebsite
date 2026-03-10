import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { SiteContent } from "@/lib/site-data";

type TestimonialsSectionProps = {
    testimonials: SiteContent["testimonials"];
};

export function TestimonialsSection({
    testimonials
}: TestimonialsSectionProps) {
    const [leadQuote, ...supportQuotes] = testimonials.items;

    return (
        <section id="testimonials" className="section-shell section-medium section-wash">
            <div className="grid gap-12 xl:grid-cols-[minmax(280px,0.34fr)_minmax(0,0.66fr)]">
                <Reveal>
                    <SectionHeading
                        eyebrow={testimonials.eyebrow}
                        title={testimonials.title}
                        description={testimonials.description}
                        titleClassName="max-w-md text-[clamp(2.8rem,4.6vw,4.8rem)] text-[var(--color-text)]"
                        descriptionClassName="max-w-md"
                    />
                </Reveal>

                <div className="space-y-6">
                    <Reveal>
                        <article className="panel-surface-strong rounded-[2.2rem] px-7 py-8 sm:px-9 sm:py-10">
                            <span className="display-title text-[5rem] leading-none text-[rgba(110,168,254,0.84)]">
                                &ldquo;
                            </span>
                            <p className="display-title mt-4 max-w-4xl text-[clamp(2.2rem,4.2vw,3.9rem)] leading-[1.02] text-[var(--color-text)]">
                                {leadQuote.quote}
                            </p>

                            <div className="mt-10 flex flex-col gap-3 border-t border-[rgba(255,255,255,0.08)] pt-5 sm:flex-row sm:items-center sm:justify-between">
                                <p className="text-base font-medium text-[var(--color-text)]">
                                    {leadQuote.name}
                                </p>
                                <p className="text-sm text-[var(--color-muted)]">
                                    {leadQuote.role}
                                </p>
                            </div>
                        </article>
                    </Reveal>

                    <div className="grid gap-5 md:grid-cols-2">
                        {supportQuotes.map((item, index) => (
                            <Reveal
                                key={item.name}
                                delay={index * 0.08}
                                className={index === 1 ? "md:translate-y-8" : ""}
                            >
                                <article className="panel-surface rounded-[1.9rem] p-6 sm:p-7">
                                    <span className="display-title text-[3.2rem] leading-none text-[rgba(103,232,249,0.76)]">
                                        &ldquo;
                                    </span>
                                    <p className="mt-4 text-base leading-8 text-[var(--color-text)]">
                                        {item.quote}
                                    </p>

                                    <div className="editorial-rule mt-8 w-16" />
                                    <p className="mt-5 font-medium text-[var(--color-text)]">
                                        {item.name}
                                    </p>
                                    <p className="mt-2 text-sm text-[var(--color-muted)]">
                                        {item.role}
                                    </p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
