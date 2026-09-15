import type { HTMLAttributes, ReactNode } from "react";

export interface ShyRattlesnakeDetail {
  label: string;
  value: string;
}

export interface ShyRattlesnakeProps extends HTMLAttributes<HTMLElement> {
  brand?: string;
  badge?: string;
  title?: ReactNode;
  subtitle?: string;
  details?: readonly ShyRattlesnakeDetail[];
  barcode?: string;
  seatLabel?: string;
  seat?: string;
  animate?: boolean;
}
