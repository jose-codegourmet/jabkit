import type { CSSProperties } from "react";

/** Conic light-ray layer. Place inside a `relative overflow-hidden` section. */
export function Rays({
  x = "50%",
  y = "50%",
  width = "5deg",
  color = "oklch(1 0 0 / 6%)",
}: {
  x?: string;
  y?: string;
  width?: string;
  color?: string;
}) {
  return (
    <div
      aria-hidden="true"
      data-vd-rays=""
      className="vd-rays"
      style={
        {
          "--ray-x": x,
          "--ray-y": y,
          "--ray-width": width,
          "--ray-color": color,
        } as CSSProperties
      }
    />
  );
}
