import type { HTMLAttributes } from "react";

export interface CrowdCanvasProps extends HTMLAttributes<HTMLCanvasElement> {
  /** Optional walk-cycle sprite sheet. Each row is a character, each column a frame. */
  src?: string;
  /** Sprite-sheet rows when `src` is set. Default 15. */
  rows?: number;
  /** Sprite-sheet columns when `src` is set. Default 7. */
  cols?: number;
  /** How many walkers to place. Scales with canvas width when omitted. */
  walkerCount?: number;
}

export interface Skiper39Props extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  src?: string;
  rows?: number;
  cols?: number;
  walkerCount?: number;
}
