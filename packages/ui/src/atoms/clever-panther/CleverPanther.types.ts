import type { HTMLAttributes, ReactNode } from "react";

export type CleverPantherSize = "sm" | "md" | "lg";
export type CleverPantherTone = "field" | "raised";

export interface CleverPantherProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  title?: string;
  subtitle?: string;
  revenue?: string;
  revenueChange?: string;
  costs?: string;
  costsChange?: string;
  actionLabel?: string;
  onAction?: () => void;
  size?: CleverPantherSize;
  /** Selects the semantic surface token used by the card. */
  tone?: CleverPantherTone;
}
