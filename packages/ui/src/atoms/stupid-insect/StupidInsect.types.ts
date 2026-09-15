import type { HTMLAttributes, ReactNode } from "react";

export type StupidInsectCellSize = "sm" | "md" | "lg";

export type StupidInsectTone = "sand" | "dusk";

export interface StupidInsectProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** Tile size. `md` is the inspo 150px cell. */
  cellSize?: StupidInsectCellSize;
  /** Token pairing for the sand/navy ring inks. */
  tone?: StupidInsectTone;
  /** Slow tile drift. Off by default to match the static inspo. */
  animated?: boolean;
  /** Accessible name for the decorative field. */
  label?: string;
}
