import type { HTMLAttributes, ReactNode } from "react";

export type LightEagleSize = "sm" | "md" | "lg";
export type LightEagleTone = "dawn" | "sky" | "chart";

export interface LightEagleProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  label?: string;
  size?: LightEagleSize;
  tone?: LightEagleTone;
  animate?: boolean;
}
