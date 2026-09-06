import type { HTMLAttributes } from "react";

export interface StickyContentLink {
  href: string;
  label: string;
}

export interface StickyContentItem {
  id: string;
  heading: string;
  body: string;
  points?: string[];
  cta?: StickyContentLink;
  imageSrc: string;
  imageAlt: string;
}

export interface StickyContentWrapperProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  items?: StickyContentItem[];
  mediaSide?: "start" | "end";
  scaleMedia?: boolean;
  snap?: boolean;
}
