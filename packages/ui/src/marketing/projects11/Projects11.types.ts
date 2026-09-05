import type { HTMLAttributes } from "react";

export type Projects11Aspect = "landscape" | "portrait" | "square" | "tall";

export interface Projects11Image {
  src: string;
  alt: string;
  aspect?: Projects11Aspect;
  href?: string;
}

export interface Projects11Props extends HTMLAttributes<HTMLElement> {
  label?: string;
  images?: Projects11Image[];
}
