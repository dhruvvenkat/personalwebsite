import { Github, Linkedin, Mail } from "lucide-react";
import type { ComponentType } from "react";
import { ButtonLink } from "@/components/button-link";
import { Reveal } from "@/components/reveal";
import type { ContactLink, SiteContent } from "@/lib/site-data";

type ContactSectionProps = {
    contact: SiteContent["contact"];
};

const channelIconMap: Record<string, ComponentType<{ className?: string }>> = {
    Email: Mail,
    GitHub: Github,
    LinkedIn: Linkedin
};

function ContactCard({ channel }: { channel: ContactLink }) {
    const Icon = channelIconMap[channel.label] ?? Mail;
    const isExternal = channel.href.startsWith("http");

    return (
        <a
            href={channel.href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className="group flex items-center justify-between gap-4 border-t border-[rgba(255,255,255,0.08)] py-5 transition duration-500 hover:border-[rgba(103,232,249,0.22)]"
        >
            <div className="flex items-center gap-4">
                <div className="glass-chip flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-cyan)]">
                    <Icon className="h-5 w-5" />
                </div>
                <div>
                    <p className="code-label">{channel.label}</p>
                    <p className="mt-2 text-sm text-[var(--color-text)] sm:text-base">
                        {channel.value}
                    </p>
                </div>
            </div>
            <span className="text-sm text-[var(--color-muted)] transition duration-500 group-hover:translate-x-1">
                Visit
            </span>
        </a>
    );
}

export function ContactSection({ contact }: ContactSectionProps) {
    return (
        <section
            id="contact"
            className="section-shell section-full pb-16 sm:pb-20"
        >
            <Reveal>
                <div className="section-full-inner">
                    <div className="panel-surface-strong grain-mask relative overflow-hidden rounded-[2.5rem] px-7 py-8 sm:px-10 sm:py-10 lg:px-14 lg:py-14">
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(110,168,254,0.16),transparent_28%),radial-gradient(circle_at_88%_18%,rgba(155,140,255,0.14),transparent_24%),radial-gradient(circle_at_80%_88%,rgba(103,232,249,0.12),transparent_20%)]" />

                        <div className="relative grid gap-12 xl:grid-cols-[minmax(0,0.62fr)_minmax(320px,0.38fr)] xl:items-end">
                            <div>
                                <span className="accent-label">{contact.eyebrow}</span>
                                <h2 className="section-title text-balance mt-7 max-w-4xl text-[clamp(3rem,6vw,6rem)] text-[var(--color-text)]">
                                    {contact.title}
                                </h2>
                                <p className="muted-copy mt-6 max-w-2xl text-base leading-8 sm:text-lg sm:leading-9">
                                    {contact.description}
                                </p>

                                <div className="mt-9 flex flex-col gap-4 sm:flex-row">
                                    <ButtonLink
                                        href={contact.primaryCta.href}
                                        label={contact.primaryCta.value}
                                    />
                                    <ButtonLink
                                        href={contact.secondaryCta.href}
                                        label={contact.secondaryCta.label}
                                        variant="secondary"
                                    />
                                </div>
                            </div>

                            <div className="panel-surface rounded-[1.9rem] px-6 py-6 sm:px-7">
                                <p className="code-label">Preferred channels</p>
                                <div className="mt-5">
                                    {contact.channels.map((channel, index) => (
                                        <Reveal
                                            key={channel.label}
                                            delay={0.1 + index * 0.05}
                                        >
                                            <ContactCard channel={channel} />
                                        </Reveal>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Reveal>
        </section>
    );
}
