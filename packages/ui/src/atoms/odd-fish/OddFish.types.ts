import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export type OddFishSize = "sm" | "md" | "lg";
export type OddFishTone = "default" | "muted" | "accent";

export interface OddFishStat {
  value: string;
  label: string;
}

export interface OddFishProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  /** Small uppercase handle above the name. */
  handle?: string;
  name?: string;
  bio?: string;
  /** Two-letter mark in the header. Derived from `name` when omitted. */
  initials?: string;
  badge?: string;
  stats?: readonly OddFishStat[];
  action?: string;
  onAction?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
  size?: OddFishSize;
  tone?: OddFishTone;
}
