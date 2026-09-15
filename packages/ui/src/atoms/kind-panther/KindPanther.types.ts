import type { HTMLAttributes, ReactNode } from "react";

export type KindPantherSize = "sm" | "md" | "lg";
export type KindPantherDensity = "regular" | "dense";

export interface KindPantherProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  label?: string;
  size?: KindPantherSize;
  density?: KindPantherDensity;
  animate?: boolean;
}
