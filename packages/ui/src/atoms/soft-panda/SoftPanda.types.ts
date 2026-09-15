import type { HTMLAttributes, ReactNode } from "react";

export type SoftPandaSize = "sm" | "md" | "lg";
export type SoftPandaTone = "default" | "muted" | "chart";

export interface SoftPandaProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  label?: string;
  size?: SoftPandaSize;
  tone?: SoftPandaTone;
  animate?: boolean;
}
