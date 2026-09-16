import type { HTMLAttributes } from "react";

export interface FisheyeInfiniteGridItem {
  image: string;
  alt: string;
  title?: string;
  meta?: string;
}

export type FisheyeInfiniteGridTheme = "dark" | "light" | "system";

export interface FisheyeInfiniteGridProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "children"> {
  items?: FisheyeInfiniteGridItem[];
  tileWidth?: number;
  tileHeight?: number;
  gap?: number;
  lensStrength?: number;
  theme?: FisheyeInfiniteGridTheme;
  hoverNudge?: number;
  inertia?: number;
  wheelSensitivity?: number;
}
