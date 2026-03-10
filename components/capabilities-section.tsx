import {
    Bot,
    Boxes,
    Cpu,
    Server,
    Workflow
} from "lucide-react";
import type { ComponentType } from "react";
import { GlassPill } from "@/components/glass-pill";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import type { Capability, SiteContent } from "@/lib/site-data";

type CapabilitiesSectionProps = {
    capabilities: SiteContent["capabilities"];
};

const iconMap: Record<Capability["icon"], ComponentType<{ className?: string }>> = {
    ai: Bot,
    tooling: Boxes,
    backend: Server,
    product: Cpu,
    automation: Workflow
};

export function CapabilitiesSection({
    capabilities
}: CapabilitiesSectionProps) {
    return (
        <section id="capabilities" className="section-shell section-wide">
            <div className="grid gap-12 xl:grid-cols-12">
                <Reveal className="xl:col-span-4">
                    <div className="xl:sticky xl:top-28 xl:pr-8">
                        <SectionHeading
                            eyebrow={capabilities.eyebrow}
                            title={capabilities.title}
                            description={capabilities.description}
                            titleClassName="max-w-lg text-[clamp(2.8rem,4.7vw,5rem)] text-[var(--color-text)]"
                            descriptionClassName="max-w-md"
                        />
                    </div>
                </Reveal>

                <div className="grid gap-5 md:grid-cols-2 xl:col-span-8">
                    {capabilities.items.map((item, index) => {
                        const Icon = iconMap[item.icon];
                        const isLead = index === 0 || index === 4;

                        return (
                            <Reveal
                                key={item.title}
                                delay={0.08 + index * 0.06}
                                className={isLead ? "md:col-span-2" : index === 2 ? "md:translate-y-8" : ""}
                            >
                                <article className="panel-surface-strong h-full rounded-[2rem] p-6 sm:p-7">
                                    <div className="flex items-start justify-between gap-4">
                                        <div>
                                            <p className="code-label">Capability</p>
                                            <h3 className="display-title mt-4 text-[2rem] leading-tight text-[var(--color-text)] sm:text-[2.5rem]">
                                                {item.title}
                                            </h3>
                                        </div>
                                        <div className="glass-chip-bright flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-cyan)]">
                                            <Icon className="h-5 w-5" />
                                        </div>
                                    </div>

                                    <p className="muted-copy mt-5 text-sm leading-7 sm:text-base sm:leading-8">
                                        {item.summary}
                                    </p>

                                    <ul className="mt-6 space-y-3">
                                        {item.bullets.map((bullet) => (
                                            <li
                                                key={bullet}
                                                className="flex items-start gap-3 text-sm leading-7 text-[var(--color-text)]"
                                            >
                                                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[var(--color-cyan)]" />
                                                <span>{bullet}</span>
                                            </li>
                                        ))}
                                    </ul>

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
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
