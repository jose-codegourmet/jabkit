import type { HTMLAttributes, ReactNode } from "react";

export type HardSwanScale = "fine" | "regular" | "coarse";

export type HardSwanPalette = "field" | "dusk";

export interface HardSwanProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** Tile grain of the hatch. */
  scale?: HardSwanScale;
  /** Token pairing for the two bands. */
  palette?: HardSwanPalette;
  /** Slow hatch drift. Disabled when the user prefers reduced motion. */
  animated?: boolean;
  /** Accessible name for the decorative field. */
  label?: string;
}
