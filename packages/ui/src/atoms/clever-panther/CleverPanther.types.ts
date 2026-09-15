import type { HTMLAttributes, ReactNode } from "react";

export type CleverPantherSize = "sm" | "md" | "lg";
export type CleverPantherTone = "ink" | "muted";

export interface CleverPantherProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
  actionLabel?: string;
  size?: CleverPantherSize;
  tone?: CleverPantherTone;
  /** Soft sheen on hover. Honors prefers-reduced-motion. */
  animate?: boolean;
}
