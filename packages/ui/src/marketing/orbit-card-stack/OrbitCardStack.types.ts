import type { HTMLAttributes } from "react";

export type OrbitCardStackAccent =
  | "primary"
  | "secondary"
  | "accent"
  | "muted"
  | "warning"
  | "success"
  | "destructive";

export interface OrbitCardStackItem {
  name: string;
  role: string;
  description: string;
  initials?: string;
  stat?: string;
  image?: string;
  imageAlt?: string;
  accent?: OrbitCardStackAccent;
}

export interface OrbitCardStackProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  items?: OrbitCardStackItem[];
  /** Card that sits at the front when the deck is collapsed. */
  defaultActiveIndex?: number;
  /** Horizontal fan distance in pixels while hovered. */
  spread?: number;
  /** Extra upward shift for the hovered card, in pixels. */
  lift?: number;
  onActiveChange?: (item: OrbitCardStackItem, index: number) => void;
  cardClassName?: string;
  /** Names the stack for assistive tech. */
  label?: string;
  showCaption?: boolean;
}
