import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export type LovelyYakSize = "sm" | "md" | "lg";

export interface LovelyYakStat {
  label: string;
  value: string;
  delta?: string;
}

export interface LovelyYakBar {
  track: number;
  fill: number;
}

export interface LovelyYakProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  title?: string;
  liveLabel?: string | null;
  stats?: readonly LovelyYakStat[];
  bars?: readonly LovelyYakBar[];
  periodLabel?: string;
  actionLabel?: string;
  size?: LovelyYakSize;
  animate?: boolean;
  onAction?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}
