"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { ReactNode } from "react";

type RevealProps = {
    children: ReactNode;
    className?: string;
    delay?: number;
    y?: number;
    x?: number;
    amount?: number;
    duration?: number;
};

const easing = [0.22, 1, 0.36, 1] as const;

export function Reveal({
    children,
    className = "",
    delay = 0,
    y = 28,
    x = 0,
    amount = 0.24,
    duration = 1
}: RevealProps) {
    const prefersReducedMotion = useReducedMotion();

    return (
        <motion.div
            className={className}
            initial={
                prefersReducedMotion
                    ? { opacity: 1 }
                    : { opacity: 0, y, x, scale: 0.985, filter: "blur(8px)" }
            }
            whileInView={{
                opacity: 1,
                y: 0,
                x: 0,
                scale: 1,
                filter: "blur(0px)"
            }}
            viewport={{ once: true, amount }}
            transition={{ duration, ease: easing, delay }}
        >
            {children}
        </motion.div>
    );
}
