export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <div className="ambient-glow ambient-glow-slate left-[-16rem] top-[-10rem] h-[34rem] w-[34rem] sm:h-[42rem] sm:w-[42rem]" />
      <div className="ambient-glow ambient-glow-amber bottom-[-16rem] right-[-12rem] h-[32rem] w-[32rem] sm:h-[40rem] sm:w-[40rem]" />
      <div className="ambient-noise absolute inset-0" />
    </div>
  );
}
