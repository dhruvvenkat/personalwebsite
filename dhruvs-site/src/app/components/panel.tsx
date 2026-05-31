import { ReactNode } from "react";

type PanelProps = {
  title: string;
  children: ReactNode;
};

export function Panel({ title, children }: PanelProps) {
  return (
    <section>
      <div className="mb-3">
        <span className="text-[11px] font-bold uppercase tracking-[0.25em] text-zinc-500">
          {title}
        </span>
      </div>
      {children}
    </section>
  );
}
