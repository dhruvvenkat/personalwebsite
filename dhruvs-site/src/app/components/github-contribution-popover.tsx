import { FaGithub } from "react-icons/fa6";

import type {
  GitHubContributionDay,
  GitHubContributionSummary,
} from "../lib/github-contributions";

type GitHubContributionPopoverProps = {
  href: string;
  summary: GitHubContributionSummary | null;
};

const DAYS_PER_COLUMN = 5;
const COLUMN_COUNT = 12;
const DISPLAYED_DAY_COUNT = DAYS_PER_COLUMN * COLUMN_COUNT;

function formatDayLabel(day: GitHubContributionDay) {
  const formatter = new Intl.DateTimeFormat("en", {
    month: "short",
    day: "numeric",
  });

  const contributionLabel =
    day.count === 1 ? "1 contribution" : `${day.count} contributions`;

  return `${contributionLabel} on ${formatter.format(new Date(day.date))}`;
}

export function GitHubContributionPopover({
  href,
  summary,
}: GitHubContributionPopoverProps) {
  const recentDays =
    summary?.weeks
      .flatMap((week) => week.days)
      .filter((day): day is GitHubContributionDay => Boolean(day))
      .slice(-DISPLAYED_DAY_COUNT) ?? [];
  const displayedContributions = recentDays.reduce(
    (sum, day) => sum + day.count,
    0,
  );

  return (
    <span className="group/github relative inline-flex h-[18px] w-[18px] items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="github"
        className="inline-flex h-[18px] w-[18px] items-center justify-center text-[16px] transition hover:text-white focus-visible:text-white focus-visible:outline-none"
      >
        <FaGithub aria-hidden="true" />
      </a>

      <span
        data-github-contribution-popover
        className="pointer-events-none absolute bottom-full left-0 z-50 mb-3 inline-block translate-y-1 opacity-0 transition duration-200 ease-out group-focus-within/github:translate-y-0 group-focus-within/github:opacity-100 group-hover/github:translate-y-0 group-hover/github:opacity-100"
      >
        <span className="relative block rounded-md border border-zinc-800 bg-[#090b0d]/95 px-3 py-2.5 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur">
          <span className="absolute -bottom-1 left-[9px] h-2 w-2 rotate-45 border-b border-r border-zinc-800 bg-[#090b0d]" />

          {summary ? (
            <>
              <span className="mb-2 flex items-center justify-between gap-5 whitespace-nowrap text-[10px] uppercase tracking-[0.16em] text-zinc-500">
                <span>last 60 days</span>
                <span>{displayedContributions}</span>
              </span>

              <span
                className="grid grid-flow-col grid-rows-5 gap-1"
                aria-hidden="true"
              >
                {recentDays.map((day) => (
                  <span
                    key={day.date}
                    title={formatDayLabel(day)}
                    className="h-2.5 w-2.5 rounded-[2px] bg-zinc-900 ring-1 ring-white/5"
                    style={{
                      backgroundColor: day.count > 0 ? day.color : "#18181b",
                    }}
                  />
                ))}
              </span>

              <span className="sr-only">
                GitHub contributions for the last 60 days:{" "}
                {displayedContributions}
              </span>
            </>
          ) : (
            <span className="block whitespace-nowrap text-[11px] text-zinc-500">
              github activity unavailable
            </span>
          )}
        </span>
      </span>
    </span>
  );
}
