type GlassPillProps = {
    label: string;
    tone?: "default" | "accent" | "soft";
    className?: string;
};

const toneStyles = {
    default: "glass-chip",
    accent: "glass-chip-bright text-[var(--color-text)]",
    soft: "border border-[rgba(255,255,255,0.08)] bg-[rgba(255,255,255,0.03)] text-[var(--color-muted)]"
} as const;

export function GlassPill({
    label,
    tone = "default",
    className = ""
}: GlassPillProps) {
    return (
        <span
            className={`inline-flex items-center rounded-full px-3 py-1.5 text-[0.72rem] font-medium tracking-[0.02em] backdrop-blur-xl ${toneStyles[tone]} ${className}`}
        >
            {label}
        </span>
    );
}
