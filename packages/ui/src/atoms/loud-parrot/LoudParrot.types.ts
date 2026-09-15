import type { HTMLAttributes, ReactNode } from "react";

export type LoudParrotSize = "sm" | "md" | "lg";
export type LoudParrotTone = "default" | "muted" | "chart";

export interface LoudParrotProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  label?: string;
  size?: LoudParrotSize;
  tone?: LoudParrotTone;
}
