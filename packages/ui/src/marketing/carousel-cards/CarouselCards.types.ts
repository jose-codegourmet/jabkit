import type { HTMLAttributes } from "react";

export interface CarouselCardsItem {
  id: string;
  title: string;
  image: string;
  imageAlt: string;
  location: string;
  price: number;
  currency?: string;
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
}
