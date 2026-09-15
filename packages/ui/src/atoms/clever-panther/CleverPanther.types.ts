import type { HTMLAttributes, ReactNode } from "react";

export type CleverPantherSize = "sm" | "md" | "lg";
export type CleverPantherTone = "field" | "raised";

export interface CleverPantherProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  /** Accessible name for the empty neumorphic slab. */
  label?: string;
  size?: CleverPantherSize;
  /** `field` matches the page (inspo). `raised` sits on `--jk-card`. */
  tone?: CleverPantherTone;
}
