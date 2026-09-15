import type { HTMLAttributes, ReactNode } from "react";

export type StupidInsectCellSize = "sm" | "md" | "lg";

export type StupidInsectTone = "primary" | "chart";

export interface StupidInsectProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  cellSize?: StupidInsectCellSize;
  tone?: StupidInsectTone;
  animated?: boolean;
}
