import type { HTMLAttributes } from "react";

export interface CoverflowCarouselItem {
  id: string;
  image: string;
  imageAlt: string;
  title: string;
  subtitle?: string;
}

export interface CoverflowCarouselProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  items?: CoverflowCarouselItem[];
  /**
   * Advance the rack on an interval. Off by default. Honors reduced motion.
   */
  autoplay?: boolean;
  autoplayMs?: number;
}
