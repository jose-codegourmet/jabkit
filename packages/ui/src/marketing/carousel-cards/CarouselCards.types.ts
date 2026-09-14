import type { HTMLAttributes } from "react";

export interface CarouselCardsItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  location: string;
  price: number;
  currency?: string;
  /**
   * Unit after the formatted price. Defaults to `person` so existing
   * listings still read "/ person". Pass `night` for a stay rate.
   */
  priceUnit?: string;
  rating?: number;
  reviewCount?: number;
  badge?: string;
  date?: string;
  href?: string;
  favorited?: boolean;
}

export interface CarouselCardsProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  viewAllHref?: string;
  viewAllLabel?: string;
  items?: CarouselCardsItem[];
  onFavoriteChange?: (id: string, favorited: boolean) => void;
  /**
   * Fallback unit when an item omits `priceUnit`. Defaults to `person`.
   */
  priceUnit?: string;
  /**
   * Heart control on each card. Defaults to true. Pass false when there
   * is no local saved-item behavior to describe.
   */
  showFavorite?: boolean;
}
