import type { HTMLAttributes } from "react";

export interface TraffoFooterLink {
  label: string;
  href: string;
}

export interface TraffoFooterColumn {
  title: string;
  links: TraffoFooterLink[];
}

export interface TraffoFooterProps extends HTMLAttributes<HTMLElement> {
  brand?: string;
  blurb?: string;
  columns?: TraffoFooterColumn[];
  copyright?: string;
  credit?: string;
}
