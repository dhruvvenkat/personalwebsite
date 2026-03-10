"use client";

import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
    Activity,
    Bot,
    GitBranchPlus,
    ShieldCheck,
    Sparkles,
    TerminalSquare
} from "lucide-react";
import { useRef } from "react";
import { ButtonLink } from "@/components/button-link";
import { GlassPill } from "@/components/glass-pill";
import type { SiteContent } from "@/lib/site-data";

type HeroSectionProps = {
    hero: SiteContent["hero"];
};

const easing = [0.22, 1, 0.36, 1] as const;

function SystemGraph() {
    return (
        <svg
            viewBox="0 0 320 220"
            className="h-[15rem] w-full text-[rgba(255,255,255,0.42)] sm:h-[17rem]"
            aria-hidden="true"
        >
            <defs>
                <linearGradient id="hero-system-gradient" x1="0%" x2="100%" y1="0%" y2="0%">
                    <stop offset="0%" stopColor="rgba(103,232,249,0.96)" />
                    <stop offset="52%" stopColor="rgba(110,168,254,0.9)" />
                    <stop offset="100%" stopColor="rgba(155,140,255,0.82)" />
                </linearGradient>
                <radialGradient id="hero-system-node" cx="50%" cy="50%" r="50%">
                    <stop offset="0%" stopColor="rgba(255,255,255,0.95)" />
                    <stop offset="100%" stopColor="rgba(110,168,254,0.08)" />
                </radialGradient>
            </defs>

            <g opacity="0.32">
                <path
                    d="M42 56 C96 52 108 104 158 108 C208 112 220 74 278 76"
                    fill="none"
                    stroke="url(#hero-system-gradient)"
                    strokeWidth="2"
                />
                <path
                    d="M42 164 C96 160 120 134 158 108 C208 74 236 150 278 144"
                    fill="none"
                    stroke="rgba(255,255,255,0.22)"
                    strokeWidth="1.6"
                />
                <path
                    d="M42 56 L42 164 M158 108 L158 182 M278 76 L278 144"
                    fill="none"
                    stroke="rgba(255,255,255,0.12)"
                    strokeDasharray="4 8"
                    strokeWidth="1"
                />
            </g>

            {[
                { x: 42, y: 56, label: "Signals" },
                { x: 158, y: 108, label: "Policies" },
                { x: 278, y: 76, label: "Agents" },
                { x: 42, y: 164, label: "Logs" },
                { x: 278, y: 144, label: "Review" },
                { x: 158, y: 182, label: "Runtime" }
            ].map((node) => (
                <g key={node.label}>
                    <circle
                        cx={node.x}
                        cy={node.y}
                        r="15"
                        fill="url(#hero-system-node)"
                        opacity="0.36"
                    />
                    <circle
                        cx={node.x}
                        cy={node.y}
                        r="7.5"
                        fill="rgba(11,16,32,0.92)"
                        stroke="rgba(255,255,255,0.36)"
                        strokeWidth="1.4"
                    />
                    <circle
                        cx={node.x}
                        cy={node.y}
                        r="3"
                        fill="rgba(103,232,249,0.9)"
                    />
                </g>
            ))}
        </svg>
    );
}

export function HeroSection({ hero }: HeroSectionProps) {
    const containerRef = useRef<HTMLElement | null>(null);
    const prefersReducedMotion = useReducedMotion();

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const bloomDrift = useTransform(scrollYProgress, [0, 1], [0, 140]);
    const gridLift = useTransform(scrollYProgress, [0, 1], [0, -72]);
    const compositionLift = useTransform(scrollYProgress, [0, 1], [0, -48]);
    const supportShift = useTransform(scrollYProgress, [0, 1], [0, 28]);

    const [leadCard, firstSupportCard, secondSupportCard] = hero.cards;

    const textStackVariants = {
        hidden: { opacity: 1 },
        show: prefersReducedMotion
            ? {}
            : {
                  transition: {
                      staggerChildren: 0.09,
                      delayChildren: 0.08
                  }
              }
    };

    const itemVariants = {
        hidden: prefersReducedMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 26, filter: "blur(10px)" },
        show: {
            opacity: 1,
            y: 0,
            filter: "blur(0px)",
            transition: {
                duration: 1.02,
                ease: easing
            }
        }
    };

    const panelVariants = {
        hidden: prefersReducedMotion
            ? { opacity: 1 }
            : { opacity: 0, y: 40, scale: 0.985, filter: "blur(14px)" },
        show: {
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
            transition: {
                duration: 1.15,
                ease: easing,
                delay: 0.18
            }
        }
    };

    return (
        <section
            id="home"
            ref={containerRef}
            aria-labelledby="hero-title"
            className="section-shell section-full relative overflow-hidden pt-28 sm:pt-32 lg:pt-36 xl:pt-40"
        >
            <div className="pointer-events-none absolute inset-0">
                <motion.div
                    style={{ y: bloomDrift }}
                    animate={prefersReducedMotion ? undefined : { x: [0, 22, 0] }}
                    transition={{
                        duration: 16,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }}
                    className="absolute left-[-10rem] top-4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(110,168,254,0.28),transparent_68%)] blur-3xl"
                />
                <motion.div
                    style={{ y: gridLift }}
                    animate={prefersReducedMotion ? undefined : { x: [0, -16, 0] }}
                    transition={{
                        duration: 18,
                        repeat: Number.POSITIVE_INFINITY,
                        ease: "easeInOut"
                    }}
                    className="absolute right-[-8rem] top-[-2rem] h-[34rem] w-[34rem] rounded-full bg-[radial-gradient(circle,rgba(155,140,255,0.22),transparent_68%)] blur-3xl"
                />
                <div className="absolute inset-x-0 top-0 h-[38rem] bg-[linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:76px_76px] opacity-45 [mask-image:linear-gradient(180deg,rgba(0,0,0,0.78),transparent_84%)]" />
                <div className="absolute inset-y-0 right-[-6%] hidden w-[48%] bg-[radial-gradient(circle_at_top,rgba(103,232,249,0.08),transparent_38%),radial-gradient(circle_at_60%_48%,rgba(255,255,255,0.05),transparent_18%),radial-gradient(circle_at_bottom,rgba(110,168,254,0.08),transparent_32%)] xl:block" />

                <svg
                    viewBox="0 0 1600 760"
                    className="absolute right-[-10%] top-4 hidden h-[44rem] w-[62rem] opacity-55 xl:block"
                    aria-hidden="true"
                >
                    <defs>
                        <linearGradient id="hero-field-line" x1="0%" x2="100%" y1="0%" y2="0%">
                            <stop offset="0%" stopColor="rgba(103,232,249,0)" />
                            <stop offset="48%" stopColor="rgba(110,168,254,0.38)" />
                            <stop offset="100%" stopColor="rgba(155,140,255,0.14)" />
                        </linearGradient>
                    </defs>
                    <path
                        d="M98 184 C312 120 432 156 612 244 C758 316 892 308 1144 206 C1278 152 1408 150 1516 198"
                        fill="none"
                        stroke="url(#hero-field-line)"
                        strokeWidth="1.8"
                    />
                    <path
                        d="M188 544 C344 470 512 426 668 444 C816 462 924 552 1102 524 C1268 498 1368 406 1518 334"
                        fill="none"
                        stroke="rgba(255,255,255,0.14)"
                        strokeWidth="1.4"
                        strokeDasharray="5 10"
                    />
                    {[220, 468, 756, 980, 1282].map((x, index) => (
                        <g key={x}>
                            <circle
                                cx={x}
                                cy={index % 2 === 0 ? 218 : 506}
                                r="7"
                                fill="rgba(11,16,32,0.88)"
                                stroke={index < 3 ? "rgba(103,232,249,0.64)" : "rgba(155,140,255,0.52)"}
                                strokeWidth="1.6"
                            />
                            <circle
                                cx={x}
                                cy={index % 2 === 0 ? 218 : 506}
                                r="15"
                                fill="rgba(255,255,255,0.04)"
                            />
                        </g>
                    ))}
                </svg>
            </div>

            <div className="section-full-inner">
                <div className="relative grid gap-14 xl:min-h-[48rem] xl:grid-cols-12 xl:items-center xl:gap-10 2xl:min-h-[52rem]">
                    <motion.div
                        variants={textStackVariants}
                        initial="hidden"
                        animate="show"
                        className="relative z-10 xl:col-span-5 2xl:col-span-4"
                    >
                        <motion.div
                            variants={itemVariants}
                            className="glass-chip inline-flex items-center gap-3 rounded-full px-4 py-2.5"
                        >
                            <span className="h-2 w-2 rounded-full bg-[var(--color-cyan)] shadow-[0_0_18px_rgba(103,232,249,0.72)]" />
                            <span className="code-label text-[0.66rem] tracking-[0.2em] text-[rgba(245,247,251,0.86)]">
                                {hero.eyebrow}
                            </span>
                        </motion.div>

                        <motion.h1
                            id="hero-title"
                            variants={itemVariants}
                            className="display-title text-balance mt-8 max-w-[7.5ch] text-[clamp(4rem,8vw,8rem)] leading-[0.82] text-[var(--color-text)]"
                        >
                            {hero.title}
                        </motion.h1>

                        <motion.p
                            variants={itemVariants}
                            className="mt-6 max-w-2xl text-lg font-medium leading-8 text-[rgba(245,247,251,0.9)] sm:text-[1.22rem] sm:leading-9"
                        >
                            {hero.subheadline}
                        </motion.p>

                        <motion.p
                            variants={itemVariants}
                            className="muted-copy mt-6 max-w-[36rem] text-base leading-8 sm:text-[1.02rem]"
                        >
                            {hero.description}
                        </motion.p>

                        <motion.div
                            variants={itemVariants}
                            className="mt-8 flex max-w-[40rem] flex-wrap gap-3"
                        >
                            {hero.capabilityPills.map((pill, index) => (
                                <motion.div
                                    key={pill}
                                    whileHover={
                                        prefersReducedMotion
                                            ? undefined
                                            : { y: -4, scale: 1.01 }
                                    }
                                    transition={{ duration: 0.35, ease: easing }}
                                >
                                    <GlassPill
                                        label={pill}
                                        tone={index === 0 ? "accent" : "default"}
                                        className="px-4 py-2 text-[0.72rem] tracking-[0.08em]"
                                    />
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            variants={itemVariants}
                            className="mt-10 flex flex-col gap-4 sm:flex-row"
                        >
                            <ButtonLink
                                href={hero.primaryCta.href}
                                label={hero.primaryCta.label}
                                className="sm:min-w-[13rem]"
                            />
                            <ButtonLink
                                href={hero.secondaryCta.href}
                                label={hero.secondaryCta.label}
                                variant="secondary"
                                className="sm:min-w-[13rem]"
                            />
                        </motion.div>

                        <motion.div variants={itemVariants} className="mt-12 max-w-[42rem]">
                            <div className="panel-surface rounded-[1.8rem] p-3 sm:p-4">
                                <div className="grid gap-3 sm:grid-cols-3">
                                    {hero.metrics.map((metric, index) => (
                                        <article
                                            key={metric.label}
                                            className={`rounded-[1.35rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.07),rgba(255,255,255,0.03))] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] ${index === 1 ? "sm:-translate-y-2" : index === 2 ? "sm:translate-y-3" : ""}`}
                                        >
                                            <p className="code-label">{metric.label}</p>
                                            <p className="mt-3 text-sm leading-7 text-[var(--color-text)]">
                                                {metric.value}
                                            </p>
                                        </article>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        style={{ y: compositionLift }}
                        initial="hidden"
                        animate="show"
                        variants={panelVariants}
                        className="relative xl:col-span-7 xl:pl-6 2xl:col-span-8 2xl:pl-16"
                        aria-hidden="true"
                    >
                        <div className="relative min-h-[34rem] sm:min-h-[40rem] lg:min-h-[46rem] xl:min-h-[49rem]">
                            <motion.div
                                animate={
                                    prefersReducedMotion ? undefined : { y: [0, -10, 0] }
                                }
                                transition={{
                                    duration: 11,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut"
                                }}
                                className="panel-surface-strong grain-mask absolute inset-x-[4%] top-[7%] z-20 rounded-[2.6rem] p-[1px] sm:inset-x-[8%] xl:left-[16%] xl:right-[3%] xl:top-[4%]"
                            >
                                <div className="relative overflow-hidden rounded-[calc(2.6rem-1px)] bg-[linear-gradient(180deg,rgba(9,13,29,0.44),rgba(9,13,29,0.72))] px-5 py-5 sm:px-6 sm:py-6 lg:px-8 lg:py-8">
                                    <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-[rgba(255,255,255,0.42)] to-transparent" />
                                    <div className="absolute inset-y-0 right-0 w-[44%] bg-[radial-gradient(circle_at_top,rgba(110,168,254,0.14),transparent_44%),radial-gradient(circle_at_70%_65%,rgba(155,140,255,0.14),transparent_36%)]" />

                                    <div className="relative flex flex-wrap items-center justify-between gap-4">
                                        <div className="glass-chip inline-flex items-center gap-2 rounded-full px-3.5 py-2">
                                            <Sparkles className="h-4 w-4 text-[var(--color-cyan)]" />
                                            <span className="code-label text-[0.66rem] text-[rgba(245,247,251,0.86)]">
                                                operating surface
                                            </span>
                                        </div>
                                        <div className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.1)] bg-[rgba(255,255,255,0.04)] px-3.5 py-2">
                                            <span className="h-2 w-2 rounded-full bg-[var(--color-cyan)]" />
                                            <span className="code-label text-[0.66rem] text-[rgba(245,247,251,0.82)]">
                                                stable runtime
                                            </span>
                                        </div>
                                    </div>

                                    <div className="relative mt-7 max-w-[34rem]">
                                        <p className="code-label">{leadCard.eyebrow}</p>
                                        <h2 className="display-title mt-4 text-[2.1rem] leading-[0.94] text-[var(--color-text)] sm:text-[3rem] lg:text-[3.35rem]">
                                            {leadCard.title}
                                        </h2>
                                        <p className="muted-copy mt-4 max-w-[31rem] text-sm leading-7 sm:text-base sm:leading-8">
                                            {leadCard.copy}
                                        </p>
                                    </div>

                                    <div className="relative mt-8 grid gap-4 lg:grid-cols-[1.08fr_0.92fr]">
                                        <div className="space-y-4">
                                            <article className="panel-surface rounded-[1.7rem] p-4 sm:p-5">
                                                <div className="flex items-center gap-3">
                                                    <GitBranchPlus className="h-4 w-4 text-[var(--color-blue)]" />
                                                    <span className="code-label">orchestration path</span>
                                                </div>
                                                <div className="mt-5 space-y-3">
                                                    {[
                                                        "Signal intake and context retrieval",
                                                        "Policy checks and model evaluation",
                                                        "Operator review before execution"
                                                    ].map((step, index) => (
                                                        <div
                                                            key={step}
                                                            className="flex items-start gap-3 rounded-[1.15rem] border border-[rgba(255,255,255,0.06)] bg-[rgba(255,255,255,0.03)] px-3.5 py-3"
                                                        >
                                                            <span className="glass-chip-bright flex h-7 w-7 items-center justify-center rounded-full text-[0.66rem] font-medium">
                                                                0{index + 1}
                                                            </span>
                                                            <p className="text-sm leading-6 text-[var(--color-text)]">
                                                                {step}
                                                            </p>
                                                        </div>
                                                    ))}
                                                </div>
                                            </article>

                                            <article className="rounded-[1.7rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.06),rgba(255,255,255,0.025))] px-4 py-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)]">
                                                <div className="flex items-center justify-between gap-4">
                                                    <span className="code-label">interface priorities</span>
                                                    <span className="glass-chip rounded-full px-3 py-1.5 text-[0.66rem] uppercase tracking-[0.18em]">
                                                        product grade
                                                    </span>
                                                </div>
                                                <div className="mt-4 flex flex-wrap gap-2.5">
                                                    {["Readable state", "Human controls", "Failure clarity"].map(
                                                        (item) => (
                                                            <span
                                                                key={item}
                                                                className="rounded-full border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] px-3 py-1.5 text-xs text-[rgba(245,247,251,0.84)]"
                                                            >
                                                                {item}
                                                            </span>
                                                        )
                                                    )}
                                                </div>
                                            </article>
                                        </div>

                                        <article className="panel-surface rounded-[1.85rem] p-4 sm:p-5">
                                            <div className="flex items-center justify-between gap-4">
                                                <div className="flex items-center gap-3">
                                                    <Activity className="h-4 w-4 text-[var(--color-cyan)]" />
                                                    <span className="code-label">systems map</span>
                                                </div>
                                                <span className="text-xs text-[rgba(167,176,192,0.88)]">
                                                    live orchestration
                                                </span>
                                            </div>

                                            <div className="mt-4 overflow-hidden rounded-[1.5rem] border border-[rgba(255,255,255,0.07)] bg-[linear-gradient(180deg,rgba(8,12,28,0.68),rgba(8,12,28,0.48))] px-4 py-4">
                                                <SystemGraph />
                                            </div>

                                            <div className="mt-4 grid grid-cols-3 gap-3">
                                                {[
                                                    "Trace capture",
                                                    "Review states",
                                                    "Policy gates"
                                                ].map((item, index) => (
                                                    <div
                                                        key={item}
                                                        className={`rounded-[1.2rem] border border-[rgba(255,255,255,0.06)] px-3 py-3 text-xs text-[rgba(245,247,251,0.86)] shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] ${index === 1 ? "bg-[rgba(255,255,255,0.06)]" : "bg-[rgba(255,255,255,0.035)]"}`}
                                                    >
                                                        {item}
                                                    </div>
                                                ))}
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </motion.div>

                            <motion.div
                                style={{ y: supportShift }}
                                className="absolute right-[2%] top-[2%] z-30 hidden w-[16rem] md:block lg:w-[18rem] xl:right-[-1%] xl:top-[6%]"
                            >
                                <motion.div
                                    animate={
                                        prefersReducedMotion ? undefined : { y: [0, -8, 0] }
                                    }
                                    transition={{
                                        duration: 9.5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut"
                                    }}
                                    whileHover={
                                        prefersReducedMotion
                                            ? undefined
                                            : { y: -6, scale: 1.01 }
                                    }
                                    className="panel-surface rounded-[1.7rem] p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <Bot className="h-4 w-4 text-[var(--color-blue)]" />
                                        <span className="code-label">{firstSupportCard.eyebrow}</span>
                                    </div>
                                    <h3 className="display-title mt-4 text-[1.4rem] leading-tight text-[var(--color-text)]">
                                        {firstSupportCard.title}
                                    </h3>
                                    <p className="muted-copy mt-3 text-sm leading-7">
                                        {firstSupportCard.copy}
                                    </p>
                                    <div className="mt-4 flex flex-wrap gap-2">
                                        {["AI workflows", "Builder tools", "DX clarity"].map((item) => (
                                            <span
                                                key={item}
                                                className="glass-chip rounded-full px-2.5 py-1 text-[0.63rem] uppercase tracking-[0.16em]"
                                            >
                                                {item}
                                            </span>
                                        ))}
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                style={{ y: supportShift }}
                                className="absolute bottom-[4%] left-[0%] z-30 w-[15.5rem] sm:left-[4%] sm:w-[17rem] lg:bottom-[8%] lg:left-[2%] xl:left-[0%]"
                            >
                                <motion.div
                                    animate={
                                        prefersReducedMotion ? undefined : { y: [0, 10, 0] }
                                    }
                                    transition={{
                                        duration: 10.5,
                                        repeat: Number.POSITIVE_INFINITY,
                                        ease: "easeInOut"
                                    }}
                                    whileHover={
                                        prefersReducedMotion
                                            ? undefined
                                            : { y: -4, scale: 1.01 }
                                    }
                                    className="panel-surface rounded-[1.7rem] p-4"
                                >
                                    <div className="flex items-center gap-3">
                                        <TerminalSquare className="h-4 w-4 text-[var(--color-cyan)]" />
                                        <span className="code-label">{secondSupportCard.eyebrow}</span>
                                    </div>
                                    <h3 className="display-title mt-4 text-[1.3rem] leading-tight text-[var(--color-text)]">
                                        {secondSupportCard.title}
                                    </h3>
                                    <p className="muted-copy mt-3 text-sm leading-7">
                                        {secondSupportCard.copy}
                                    </p>
                                    <div className="mt-5 overflow-hidden rounded-[1.3rem] border border-[rgba(255,255,255,0.07)] bg-[rgba(7,11,25,0.5)] p-3">
                                        <div className="flex items-center justify-between gap-3">
                                            <span className="code-label">runtime.log</span>
                                            <span className="h-2 w-2 rounded-full bg-[var(--color-cyan)]" />
                                        </div>
                                        <div className="mt-3 space-y-2 font-mono text-[0.72rem] leading-6 text-[rgba(245,247,251,0.82)]">
                                            <p>$ evaluate --workflow operator-grid</p>
                                            <p className="text-[var(--color-muted)]">
                                                confidence gates + audit traces loaded
                                            </p>
                                            <p className="text-[var(--color-cyan)]">
                                                approval path ready for execution
                                            </p>
                                        </div>
                                    </div>
                                </motion.div>
                            </motion.div>

                            <motion.div
                                animate={
                                    prefersReducedMotion ? undefined : { y: [0, -6, 0] }
                                }
                                transition={{
                                    duration: 8.5,
                                    repeat: Number.POSITIVE_INFINITY,
                                    ease: "easeInOut"
                                }}
                                className="absolute bottom-[12%] right-[8%] z-10 hidden rounded-[1.5rem] border border-[rgba(255,255,255,0.08)] bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(255,255,255,0.02))] px-4 py-3 shadow-[0_18px_48px_rgba(4,8,22,0.28)] backdrop-blur-xl lg:block"
                            >
                                <div className="flex items-center gap-3">
                                    <ShieldCheck className="h-4 w-4 text-[var(--color-violet)]" />
                                    <div>
                                        <p className="code-label">quality signal</p>
                                        <p className="mt-1 text-sm text-[var(--color-text)]">
                                            Clear systems. Useful products.
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
