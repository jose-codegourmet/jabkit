import type { HTMLAttributes } from "react";

export type BrightLizardSize = "sm" | "md" | "lg";

export interface BrightLizardProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  size?: BrightLizardSize;
}
