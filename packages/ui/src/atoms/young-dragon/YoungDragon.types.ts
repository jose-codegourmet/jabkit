import type { HTMLAttributes } from "react";

export type YoungDragonSize = "sm" | "md" | "lg";

export interface YoungDragonProps extends HTMLAttributes<HTMLDivElement> {
  label?: string;
  size?: YoungDragonSize;
  showLabel?: boolean;
}
