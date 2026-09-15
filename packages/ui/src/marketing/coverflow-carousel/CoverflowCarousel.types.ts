import type { HTMLAttributes } from "react";

export interface CoverflowCarouselMetaRow {
  label: string;
  value: string;
}

export interface CoverflowCarouselItem {
  id: string;
  image: string;
  imageAlt: string;
  title?: string;
  subtitle?: string;
  meta?: CoverflowCarouselMetaRow[];
}

export interface CoverflowCarouselProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  items?: CoverflowCarouselItem[];
  /** Degrees the first neighbour tilts. */
  rotate?: number;
  /** How far the first neighbour recedes, as a fraction of card width. */
  depth?: number;
  /** Viewer distance as a multiple of card width. Smaller is a wider lens. */
  perspective?: number;
  /** Exponent on distance. Below 1 the rake eases as cards travel out. */
  falloff?: number;
  /** Opacity lost per step from the centre. */
  fade?: number;
  /** Any CSS length. Pitch, depth, and perspective derive from it. */
  cardWidth?: string;
  /** Space between cards, as a fraction of card width. */
  gap?: number;
  loop?: boolean;
  showCaption?: boolean;
  showPagination?: boolean;
  showNavigation?: boolean;
  /** Names the carousel for assistive tech. */
  label?: string;
  cardClassName?: string;
}
