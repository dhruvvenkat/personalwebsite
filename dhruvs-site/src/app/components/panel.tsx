import { ReactNode } from "react";

type PanelProps = {
  title: string;
  children: ReactNode;
};

export function Panel({ title, children }: PanelProps) {
  return (
    <section>
      <div className="mb-5 flex items-center gap-3">
        <span className="text-[11px] uppercase tracking-[0.25em] text-zinc-500">
          {title}
        </span>
        <div className="h-px flex-1 bg-zinc-800" />
      </div>
      {children}
    </section>
  );
}
