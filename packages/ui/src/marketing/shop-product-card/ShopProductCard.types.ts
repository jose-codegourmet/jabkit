import type { HTMLAttributes, MouseEventHandler } from "react";

export interface ShopProductCardImage {
  src: string;
  alt: string;
}

export interface ShopProductCardProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  name: string;
  price: string;
  compareAtPrice?: string;
  image: ShopProductCardImage;
  href?: string;
  cartLabel?: string;
  favoriteLabel?: string;
  onAddToCart?: MouseEventHandler<HTMLButtonElement>;
  onFavorite?: MouseEventHandler<HTMLButtonElement>;
}
