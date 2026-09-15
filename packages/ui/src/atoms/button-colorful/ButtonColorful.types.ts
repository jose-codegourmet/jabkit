import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonColorfulProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;
  showIcon?: boolean;
  asChild?: boolean;
}
