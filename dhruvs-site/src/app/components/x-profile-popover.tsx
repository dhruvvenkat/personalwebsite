import { FaXTwitter } from "react-icons/fa6";

import type { XProfileSummary } from "../lib/x-profile";

type XProfilePopoverProps = {
  href: string;
  profile: XProfileSummary | null;
};

function formatMetric(value: number) {
  return new Intl.NumberFormat("en", {
    notation: value >= 10000 ? "compact" : "standard",
    maximumFractionDigits: 1,
  }).format(value);
}

export function XProfilePopover({ href, profile }: XProfilePopoverProps) {
  return (
    <span className="group/x relative inline-flex h-[18px] w-[18px] items-center justify-center">
      <a
        href={href}
        target="_blank"
        rel="noreferrer"
        aria-label="x"
        className="inline-flex h-[18px] w-[18px] items-center justify-center text-[16px] transition hover:text-white focus-visible:text-white focus-visible:outline-none"
      >
        <FaXTwitter aria-hidden="true" />
      </a>

      <span
        data-x-profile-popover
        className="pointer-events-none absolute bottom-full left-0 z-50 mb-3 inline-block translate-y-1 opacity-0 transition duration-200 ease-out group-focus-within/x:translate-y-0 group-focus-within/x:opacity-100 group-hover/x:translate-y-0 group-hover/x:opacity-100"
      >
        <span className="relative block w-[220px] rounded-md border border-zinc-800 bg-[#090b0d]/95 p-3 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur">
          <span className="absolute -bottom-1 left-[9px] h-2 w-2 rotate-45 border-b border-r border-zinc-800 bg-[#090b0d]" />

          {profile ? (
            <span className="grid gap-3">
              <span className="flex items-center gap-3">
                {profile.profileImageUrl ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={profile.profileImageUrl}
                    alt=""
                    className="h-10 w-10 shrink-0 rounded-full bg-zinc-900 object-cover ring-1 ring-white/10"
                  />
                ) : (
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-zinc-900 text-[14px] text-zinc-500 ring-1 ring-white/10">
                    @
                  </span>
                )}

                <span className="min-w-0">
                  <span className="block truncate text-[13px] font-medium text-zinc-100">
                    {profile.name}
                  </span>
                  <span className="block truncate text-[11px] text-zinc-500">
                    @{profile.username}
                  </span>
                </span>
              </span>

              <span className="grid grid-cols-3 gap-2 border-t border-zinc-800 pt-2">
                <span>
                  <span className="block text-[12px] font-medium text-zinc-200">
                    {formatMetric(profile.posts)}
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.14em] text-zinc-600">
                    posts
                  </span>
                </span>
                <span>
                  <span className="block text-[12px] font-medium text-zinc-200">
                    {formatMetric(profile.following)}
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.14em] text-zinc-600">
                    following
                  </span>
                </span>
                <span>
                  <span className="block text-[12px] font-medium text-zinc-200">
                    {formatMetric(profile.followers)}
                  </span>
                  <span className="block text-[9px] uppercase tracking-[0.14em] text-zinc-600">
                    followers
                  </span>
                </span>
              </span>
            </span>
          ) : (
            <span className="block whitespace-nowrap text-[11px] text-zinc-500">
              x profile unavailable
            </span>
          )}
        </span>
      </span>
    </span>
  );
}
