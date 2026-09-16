import type { ButtonHTMLAttributes, ReactNode } from "react";

export interface ButtonColorfulProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;
  showIcon?: boolean;
  /** Style a single child element (for example an anchor) as the button. */
  asChild?: boolean;
}
