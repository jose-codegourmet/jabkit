import type { HTMLAttributes } from "react";

export type ScannerDirection = "vertical" | "horizontal" | "diagonal";
export type ScannerTone = "primary" | "ring" | "chart";

export interface ScannerProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  direction?: ScannerDirection;
  bandCount?: number;
  speed?: number;
  sweepWidth?: number;
  ripple?: number;
  glow?: number;
  mouseInteraction?: boolean;
  scanline?: boolean;
  tone?: ScannerTone;
}
