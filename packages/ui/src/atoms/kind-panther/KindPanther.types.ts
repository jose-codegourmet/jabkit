import type { HTMLAttributes, ReactNode } from "react";

export type KindPantherSize = "sm" | "md" | "lg";
export type KindPantherTone = "retro" | "primary" | "muted";

export interface KindPantherProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** Accessible name for the decorative wave field. */
  label?: string;
  size?: KindPantherSize;
  tone?: KindPantherTone;
  /** Optional tile drift. Off by default to match the still inspo. Honors prefers-reduced-motion. */
  animated?: boolean;
}
