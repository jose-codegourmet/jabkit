import type { HTMLAttributes } from "react";
import type { ShopProductCardProps } from "@/marketing/shop-product-card";

export type ShopProductGridItem = ShopProductCardProps;

export interface ShopProductGridProps extends HTMLAttributes<HTMLElement> {
  products?: ShopProductGridItem[];
}
