"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import type { NavItem } from "@/lib/site-data";

type TopNavProps = {
    brandName: string;
    descriptor: string;
    items: NavItem[];
};

export function TopNav({ brandName, descriptor, items }: TopNavProps) {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = open ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [open]);

    return (
        <header className="sticky top-0 z-50 px-4 pt-4 sm:px-6">
            <div className="mx-auto max-w-[1360px]">
                <div className="panel-surface rounded-[999px] border-[rgba(255,255,255,0.14)] px-4 py-3 shadow-[0_12px_44px_rgba(3,8,24,0.34)] sm:px-6">
                    <div className="flex items-center justify-between gap-4">
                        <a
                            href="#home"
                            className="flex min-w-0 flex-col justify-center"
                            onClick={() => setOpen(false)}
                        >
                            <span className="truncate font-mono text-[0.66rem] font-medium uppercase tracking-[0.22em] text-[var(--color-muted)]">
                                {descriptor}
                            </span>
                            <span className="display-title truncate text-[1.3rem] leading-none text-[var(--color-text)] sm:text-[1.55rem]">
                                {brandName}
                            </span>
                        </a>

                        <nav className="hidden items-center gap-8 text-[0.92rem] text-[var(--color-muted)] lg:flex">
                            {items.map((item) => (
                                <a key={item.href} href={item.href} className="nav-link transition-colors duration-300 hover:text-[var(--color-text)]">
                                    {item.label}
                                </a>
                            ))}
                        </nav>

                        <div className="hidden lg:block">
                            <a
                                href="#contact"
                                className="glass-chip-bright inline-flex items-center rounded-full px-4 py-2 text-[0.72rem] font-medium uppercase tracking-[0.18em] text-[var(--color-text)] transition duration-500 hover:-translate-y-0.5"
                            >
                                Connect
                            </a>
                        </div>

                        <button
                            type="button"
                            aria-label={open ? "Close menu" : "Open menu"}
                            aria-expanded={open}
                            onClick={() => setOpen((current) => !current)}
                            className="glass-chip inline-flex h-11 w-11 items-center justify-center rounded-full text-[var(--color-text)] transition duration-300 hover:border-[rgba(255,255,255,0.18)] lg:hidden"
                        >
                            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                        </button>
                    </div>
                </div>
            </div>

            <AnimatePresence>
                {open ? (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-40 bg-[rgba(5,10,24,0.72)] px-4 pb-8 pt-24 backdrop-blur-xl lg:hidden"
                    >
                        <motion.div
                            initial={{ y: -24, opacity: 0, scale: 0.98 }}
                            animate={{ y: 0, opacity: 1, scale: 1 }}
                            exit={{ y: -18, opacity: 0, scale: 0.985 }}
                            transition={{ duration: 0.55, ease: [0.22, 1, 0.36, 1] }}
                            className="panel-surface-strong mx-auto flex h-full max-w-[760px] flex-col rounded-[2rem] px-6 py-8"
                        >
                            <div>
                                <span className="accent-label">Navigation</span>
                                <h2 className="section-title mt-6 max-w-md text-[clamp(2.4rem,7vw,4rem)] text-[var(--color-text)]">
                                    Navigate the system like a product surface.
                                </h2>
                            </div>

                            <nav className="mt-10 flex flex-1 flex-col gap-5 text-[1.8rem] text-[var(--color-text)]">
                                {items.map((item, index) => (
                                    <motion.a
                                        key={item.href}
                                        href={item.href}
                                        onClick={() => setOpen(false)}
                                        initial={{ opacity: 0, y: 18 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: 18 }}
                                        transition={{
                                            duration: 0.55,
                                            delay: 0.08 + index * 0.04,
                                            ease: [0.22, 1, 0.36, 1]
                                        }}
                                        className="border-b border-[rgba(255,255,255,0.08)] pb-4 font-medium tracking-[-0.03em]"
                                    >
                                        {item.label}
                                    </motion.a>
                                ))}
                            </nav>

                            <div className="panel-surface mt-8 rounded-[1.75rem] p-5 text-sm leading-7 text-[var(--color-muted)]">
                                Software engineer focused on AI systems, developer tooling,
                                automation, and infrastructure presented through a premium
                                liquid-glass interface.
                            </div>
                        </motion.div>
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </header>
    );
}
