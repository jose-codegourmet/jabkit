import type { HTMLAttributes } from "react";

export type Projects16Aspect = "landscape" | "portrait";

/** Ordered cells this gallery renders. Extra `images` entries are ignored. */
export const PROJECTS16_IMAGE_LIMIT = 4;

/**
 * One of the four ordered gallery cells. Projects16 is a four-image edit, not
 * a portfolio index: pass exactly four items for home selections; compose
 * longer indexes outside this block.
 */
export interface Projects16Image {
  src: string;
  alt: string;
  aspect?: Projects16Aspect;
  /** Visible caption under the image. */
  title?: string;
  /** Optional destination. Renders as a text link on the caption, not around the figure. */
  href?: string;
}

export interface Projects16Action {
  label: string;
  href: string;
}

export interface Projects16Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  action?: Projects16Action;
  images?: Projects16Image[];
}
