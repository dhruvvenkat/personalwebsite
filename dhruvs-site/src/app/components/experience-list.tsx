"use client";

import Image from "next/image";
import { useState } from "react";

type ExperienceItem = {
  company: string;
  role: string;
  icon: string;
  blurb: string;
};

type ExperienceListProps = {
  items: ExperienceItem[];
};

function getBubbleId(company: string) {
  return `experience-blurb-${company.toLowerCase().replace(/[^a-z0-9]+/g, "-")}`;
}

export function ExperienceList({ items }: ExperienceListProps) {
  const [activeCompany, setActiveCompany] = useState<string | null>(null);

  return (
    <ul className="space-y-3 text-zinc-300">
      {items.map((exp) => {
        const isActive = activeCompany === exp.company;
        const bubbleId = getBubbleId(exp.company);

        return (
          <li
            key={exp.company}
            className="transition"
            onMouseLeave={() => {
              setActiveCompany((current) =>
                current === exp.company ? null : current,
              );
            }}
            onBlur={(event) => {
              const nextFocusTarget = event.relatedTarget;

              if (
                !(nextFocusTarget instanceof Node) ||
                !event.currentTarget.contains(nextFocusTarget)
              ) {
                setActiveCompany((current) =>
                  current === exp.company ? null : current,
                );
              }
            }}
          >
            <button
              type="button"
              aria-controls={bubbleId}
              aria-expanded={isActive}
              className="flex w-full items-center justify-between gap-4 py-1.5 text-left text-[15px] transition focus-visible:outline-none"
              onClick={() => {
                setActiveCompany((current) =>
                  current === exp.company ? null : exp.company,
                );
              }}
              onFocus={() => {
                setActiveCompany(exp.company);
              }}
              onMouseEnter={() => {
                setActiveCompany(exp.company);
              }}
            >
              <span className="flex items-center gap-2.5">
                <Image
                  src={exp.icon}
                  alt=""
                  width={14}
                  height={14}
                  aria-hidden="true"
                  className="h-[14px] w-[14px] shrink-0 opacity-100"
                />
                <span className={isActive ? "text-white" : undefined}>
                  {exp.company}
                </span>
              </span>
              <span
                className={`transition ${
                  isActive ? "text-zinc-300" : "text-zinc-500"
                }`}
              >
                {exp.role}
              </span>
            </button>

            <div
              className={`grid overflow-hidden transition-[grid-template-rows,opacity,margin] duration-200 ease-out ${
                isActive
                  ? "mb-2 mt-1 grid-rows-[1fr] opacity-100"
                  : "mb-0 grid-rows-[0fr] opacity-0"
              }`}
            >
              <div className="overflow-hidden">
                <div
                  id={bubbleId}
                  className="pl-[1.55rem] text-[13px] leading-6 text-white"
                >
                  {exp.blurb}
                </div>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}
