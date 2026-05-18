import Image from "next/image";
import { FaXTwitter } from "react-icons/fa6";

type XProfilePopoverProps = {
  href: string;
};

export function XProfilePopover({ href }: XProfilePopoverProps) {
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
        className="pointer-events-none absolute bottom-full left-1/2 z-50 mb-3 inline-block -translate-x-1/2 translate-y-1 opacity-0 transition duration-200 ease-out group-focus-within/x:translate-y-0 group-focus-within/x:opacity-100 group-hover/x:translate-y-0 group-hover/x:opacity-100"
      >
        <span className="relative block w-[230px] rounded-md border border-zinc-800 bg-[#090b0d]/95 p-3 shadow-2xl shadow-black/40 ring-1 ring-white/5 backdrop-blur">
          <span className="absolute -bottom-1 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b border-r border-zinc-800 bg-[#090b0d]" />

          <span className="grid gap-3">
            <span className="flex items-center gap-3">
              <Image
                src="/x-pfp.jpg"
                alt=""
                width={40}
                height={40}
                className="h-10 w-10 shrink-0 rounded-full bg-zinc-900 object-cover ring-1 ring-white/10"
              />

              <span className="min-w-0">
                <span className="block truncate text-[13px] font-medium text-zinc-100">
                  dhruv
                </span>
                <span className="block truncate text-[11px] text-zinc-500">
                  @wakeupitsdhruv
                </span>
              </span>
            </span>

            <span className="grid grid-cols-2 gap-3">
              <span className="min-w-0 whitespace-nowrap">
                <span className="text-[12px] font-medium text-zinc-200">
                  602
                </span>
                <span className="ml-1.5 text-[10px] uppercase tracking-[0.14em] text-zinc-600">
                  following
                </span>
              </span>

              <span className="min-w-0 whitespace-nowrap">
                <span className="text-[12px] font-medium text-zinc-200">
                  96
                </span>
                <span className="ml-1.5 text-[10px] uppercase tracking-[0.14em] text-zinc-600">
                  followers
                </span>
              </span>
            </span>
          </span>
        </span>
      </span>
    </span>
  );
}
