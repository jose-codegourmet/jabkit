import type { HTMLAttributes } from "react";

export type FallingTextTrigger = "click" | "hover" | "auto" | "scroll";
export type FallingTextHeading = "h1" | "h2" | "h3" | "p" | "div";
export type FallingTextAlign = "left" | "center" | "right";

export interface FallingTextProps extends HTMLAttributes<HTMLElement> {
  text?: string;
  eyebrow?: string;
  description?: string;
  highlightWords?: string[];
  trigger?: FallingTextTrigger;
  gravity?: number;
  as?: FallingTextHeading;
  align?: FallingTextAlign;
  threshold?: number;
  rootMargin?: string;
}
