import type { HTMLAttributes } from "react";

export interface CrowdCanvasProps extends HTMLAttributes<HTMLCanvasElement> {
  /** Open Peeps sprite sheet. Each cell is one figure. */
  src: string;
  /** Cells across the sheet. Default 15, matching the hosted sprite. */
  rows?: number;
  /** Cells down the sheet. Default 7, matching the hosted sprite. */
  cols?: number;
}

export interface Skiper39Props extends HTMLAttributes<HTMLElement> {
  /** Centered uppercase label above the crowd. */
  label?: string;
  src?: string;
  rows?: number;
  cols?: number;
}
