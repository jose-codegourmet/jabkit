import type { HTMLAttributes, ReactNode } from "react";

export interface HoloCardFace {
  id: string;
  brand?: string;
  badge?: string;
  title: string;
  subtitle?: string;
  serial?: string;
  mark?: string;
}

export interface HoloCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  brand?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  serial?: string;
  mark?: string;
  cards?: HoloCardFace[];
  maxTilt?: number;
  aspect?: number;
  children?: ReactNode;
}
