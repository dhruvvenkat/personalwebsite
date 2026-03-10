type SectionHeadingProps = {
    eyebrow: string;
    title: string;
    description?: string;
    className?: string;
    titleClassName?: string;
    descriptionClassName?: string;
    ruleClassName?: string;
};

export function SectionHeading({
    eyebrow,
    title,
    description,
    className = "",
    titleClassName = "",
    descriptionClassName = "",
    ruleClassName = ""
}: SectionHeadingProps) {
    return (
        <div className={`max-w-3xl ${className}`}>
            <span className="accent-label">{eyebrow}</span>
            <div className={`editorial-rule mt-4 w-24 ${ruleClassName}`} />
            <h2
                className={`section-title text-balance mt-6 text-[clamp(2.6rem,5vw,5.2rem)] text-[var(--color-text)] ${titleClassName}`}
            >
                {title}
            </h2>
            {description ? (
                <p
                    className={`muted-copy mt-5 max-w-2xl text-base leading-7 sm:text-lg sm:leading-8 ${descriptionClassName}`}
                >
                    {description}
                </p>
            ) : null}
        </div>
    );
}
