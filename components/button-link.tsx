import { ArrowUpRight } from "lucide-react";

type ButtonLinkProps = {
    href: string;
    label: string;
    variant?: "primary" | "secondary";
    className?: string;
};

const variantStyles = {
    primary:
        "border border-[rgba(110,168,254,0.22)] bg-[linear-gradient(135deg,rgba(110,168,254,0.24),rgba(155,140,255,0.16))] text-[var(--color-text)] shadow-[0_18px_40px_rgba(6,16,40,0.36)] hover:-translate-y-0.5 hover:border-[rgba(103,232,249,0.32)] hover:shadow-[0_20px_48px_rgba(14,39,82,0.42)]",
    secondary:
        "border border-[rgba(255,255,255,0.12)] bg-[rgba(255,255,255,0.05)] text-[var(--color-text)] shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] hover:-translate-y-0.5 hover:border-[rgba(255,255,255,0.18)] hover:bg-[rgba(255,255,255,0.08)]"
} as const;

export function ButtonLink({
    href,
    label,
    variant = "primary",
    className = ""
}: ButtonLinkProps) {
    const isExternal = href.startsWith("http");

    return (
        <a
            href={href}
            target={isExternal ? "_blank" : undefined}
            rel={isExternal ? "noreferrer" : undefined}
            className={`group inline-flex items-center justify-center gap-3 rounded-full px-3 py-3 text-sm font-medium tracking-[0.12em] uppercase backdrop-blur-xl transition duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${variantStyles[variant]} ${className}`}
        >
            <span className="px-2">{label}</span>
            <span
                className={`inline-flex h-9 w-9 items-center justify-center rounded-full border border-[rgba(255,255,255,0.1)] transition duration-500 group-hover:translate-x-0.5 ${variant === "primary" ? "bg-[rgba(255,255,255,0.12)] text-[var(--color-text)]" : "bg-[rgba(255,255,255,0.06)] text-[var(--color-cyan)]"}`}
            >
                <ArrowUpRight className="h-4 w-4" />
            </span>
        </a>
    );
}
