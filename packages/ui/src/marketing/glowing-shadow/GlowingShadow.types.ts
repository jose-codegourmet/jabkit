import type { HTMLAttributes, ReactNode } from "react";

export interface GlowingShadowTile {
  id: string;
  label: string;
  caption?: string;
}

export interface GlowingShadowProps extends HTMLAttributes<HTMLElement> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  label?: string;
  caption?: string;
  tiles?: GlowingShadowTile[];
  duration?: number;
  children?: ReactNode;
}
