import type { CSSProperties } from "react";

type ProjectRowProps = {
  name: string;
  href: string;
  tags: string[];
};

export function ProjectRow({ name, href, tags }: ProjectRowProps) {
  return (
    <li>
      <a
        href={href}
        className="project-row group block py-1.5 text-[15px] text-zinc-300 transition hover:text-white"
      >
        <span className="animated-underline inline">{name}</span>

        {/* Desktop tags are overlaid so hover does not reflow the project list. */}
        <span className="project-tags-slot" aria-label={`Tags for ${name}`}>
          <span className="project-tags-drawer">
            {tags.map((tag, index) => (
              <span
                key={tag}
                className="project-tag"
                style={{ "--project-tag-index": index } as CSSProperties}
              >
                {tag}
              </span>
            ))}
          </span>
        </span>
      </a>
    </li>
  );
}
