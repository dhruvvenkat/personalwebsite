import { PointerTrail } from "./pointer-trail";

export function AmbientBackground() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden"
    >
      <PointerTrail />
    </div>
  );
}
