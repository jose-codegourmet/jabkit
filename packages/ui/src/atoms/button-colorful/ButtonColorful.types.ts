import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonColorfulSize = "sm" | "md" | "lg";

export interface ButtonColorfulProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;
  size?: ButtonColorfulSize;
  showIcon?: boolean;
  asChild?: boolean;
}
