import type { HTMLAttributes, ReactNode } from "react";

export type LightEagleCellSize = "sm" | "md" | "lg";

export type LightEagleTone = "frost" | "slate" | "ink";

export interface LightEagleProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** Tile size. `md` is the inspo 200px cell. */
  cellSize?: LightEagleCellSize;
  /** Token pairing for the three isometric cube faces. */
  tone?: LightEagleTone;
  /** Slow tile drift. Off by default to match the static inspo. */
  animated?: boolean;
  /** Accessible name for the decorative field. */
  label?: string;
}
