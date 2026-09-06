import type { ButtonHTMLAttributes, HTMLAttributes } from "react";

export type LiquidMetalViewMode = "text" | "icon";

export interface LiquidMetalAction {
  id: string;
  label: string;
  viewMode?: LiquidMetalViewMode;
}

export interface LiquidMetalButtonProps
  extends Omit<HTMLAttributes<HTMLElement>, "onClick"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  label?: string;
  viewMode?: LiquidMetalViewMode;
  actions?: LiquidMetalAction[];
  speed?: number;
  onAction?: (action: LiquidMetalAction) => void;
}

export interface LiquidMetalCtaProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "children"> {
  label: string;
  viewMode?: LiquidMetalViewMode;
  speed?: number;
}
