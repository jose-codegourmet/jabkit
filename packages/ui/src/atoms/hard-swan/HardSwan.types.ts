import type { HTMLAttributes, ReactNode } from "react";

export type HardSwanScale = "fine" | "regular" | "coarse";

export type HardSwanPalette = "field" | "dusk";

export interface HardSwanProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** Tile grain. `regular` is the inspo 95px × 15px / 135px offset. */
  scale?: HardSwanScale;
  /** Token pairing for the two hatch inks. */
  palette?: HardSwanPalette;
  /** Slow hatch drift. Disabled when the user prefers reduced motion. */
  animated?: boolean;
  /** Accessible name for the decorative field. */
  label?: string;
}
