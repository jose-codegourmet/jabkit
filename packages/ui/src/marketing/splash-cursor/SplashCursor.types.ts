import type { HTMLAttributes } from "react";

export type SplashCursorPalette = "primary" | "chart" | "mixed";

export interface SplashCursorProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  splatRadius?: number;
  splatForce?: number;
  fadeRate?: number;
  trailDensity?: number;
  clickBurst?: boolean;
  palette?: SplashCursorPalette;
  intensity?: number;
}
