import type { HTMLAttributes } from "react";

export interface MenuVerticalItem {
  label: string;
  href: string;
}

export interface MenuVerticalProps extends HTMLAttributes<HTMLElement> {
  items?: MenuVerticalItem[];
  /** Horizontal skew applied to labels on hover, in degrees. */
  skew?: number;
}
