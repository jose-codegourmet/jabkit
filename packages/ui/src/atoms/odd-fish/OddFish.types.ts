import type { HTMLAttributes, ReactNode } from "react";

export type OddFishSize = "sm" | "md" | "lg";
export type OddFishTone = "default" | "muted" | "accent";

export interface OddFishProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  eyebrow?: string;
  title?: string;
  description?: string;
  action?: string;
  size?: OddFishSize;
  tone?: OddFishTone;
}
