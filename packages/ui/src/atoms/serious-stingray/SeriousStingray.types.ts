import type { ButtonHTMLAttributes, ReactNode } from "react";

export type SeriousStingraySize = "sm" | "md" | "lg";

export type SeriousStingrayAccent = "primary" | "destructive";

export interface SeriousStingrayProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  label?: string;
  size?: SeriousStingraySize;
  accent?: SeriousStingrayAccent;
  asChild?: boolean;
}
