import type { HTMLAttributes, ReactNode } from "react";

export type JollyParrotSize = "sm" | "md" | "lg";
export type JollyParrotTone = "plum" | "primary" | "chart";

export interface JollyParrotProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** Accessible name for the decorative field. */
  label?: string;
  size?: JollyParrotSize;
  tone?: JollyParrotTone;
  /** Optional tile drift. Off by default to match the still inspo. Honors prefers-reduced-motion. */
  animated?: boolean;
}
