import type { HTMLAttributes } from "react";

export interface RandomLetterSwapItem {
  label: string;
  href: string;
}

export interface RandomLetterSwapCta {
  label: string;
  href: string;
}

export interface RandomLetterSwapProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  brand?: string;
  brandHref?: string;
  items?: RandomLetterSwapItem[];
  cta?: RandomLetterSwapCta;
  /** When true, glyphs slide downward on hover. When false, they slide upward. */
  reverse?: boolean;
  /** Delay between each glyph in the shuffled sequence, in milliseconds. */
  staggerMs?: number;
  /** Duration of each glyph swap, in milliseconds. */
  durationMs?: number;
}
