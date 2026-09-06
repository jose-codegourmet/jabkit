import type { HTMLAttributes } from "react";

export type CursorGridFalloff = "linear" | "smooth" | "sharp";
export type CursorGridTone = "primary" | "foreground" | "ring";

export interface CursorGridProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  cellSize?: number;
  radius?: number;
  falloff?: CursorGridFalloff;
  holdTime?: number;
  fadeDuration?: number;
  lineWidth?: number;
  maxOpacity?: number;
  fillOpacity?: number;
  gridOpacity?: number;
  cellRadius?: number;
  clickPulse?: boolean;
  pulseSpeed?: number;
  tone?: CursorGridTone;
}
