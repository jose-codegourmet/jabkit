import type { ButtonHTMLAttributes, ReactNode } from "react";

export type AverageSwanSize = "sm" | "md" | "lg";

export interface AverageSwanProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;
  size?: AverageSwanSize;
  asChild?: boolean;
}
