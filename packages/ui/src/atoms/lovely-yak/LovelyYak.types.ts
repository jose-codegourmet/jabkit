import type { ButtonHTMLAttributes, HTMLAttributes, ReactNode } from "react";

export type LovelyYakSize = "sm" | "md" | "lg";

export interface LovelyYakProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  title?: string;
  description?: string;
  kicker?: string;
  actionLabel?: string;
  size?: LovelyYakSize;
  animate?: boolean;
  onAction?: ButtonHTMLAttributes<HTMLButtonElement>["onClick"];
}
