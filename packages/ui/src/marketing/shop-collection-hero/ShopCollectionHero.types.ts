import type { HTMLAttributes, MouseEventHandler } from "react";

export interface ShopCollectionHeroImage {
  src: string;
  alt: string;
}

export interface ShopCollectionHeroAvatar {
  src: string;
  alt: string;
}

export interface ShopCollectionHeroCta {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface ShopCollectionHeroProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  brand?: string;
  kicker?: string;
  title?: string;
  description?: string;
  body?: string;
  cta?: ShopCollectionHeroCta;
  shopCta?: ShopCollectionHeroCta;
  rating?: string;
  ratingLabel?: string;
  avatars?: ShopCollectionHeroAvatar[];
  productImage?: ShopCollectionHeroImage;
  previousLabel?: string;
  nextLabel?: string;
  onPrevious?: MouseEventHandler<HTMLButtonElement>;
  onNext?: MouseEventHandler<HTMLButtonElement>;
}
