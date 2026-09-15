import type { ButtonHTMLAttributes, ReactNode } from "react";

export type FastPumaSize = "sm" | "md" | "lg";

export type FastPumaTone = "solid" | "outline";

export interface FastPumaProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;
  size?: FastPumaSize;
  tone?: FastPumaTone;
  asChild?: boolean;
}
