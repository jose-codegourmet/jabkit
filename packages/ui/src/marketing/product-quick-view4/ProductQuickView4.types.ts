import type { HTMLAttributes, MouseEventHandler } from "react";

export type ProductQuickView4Swatch =
  | "primary"
  | "secondary"
  | "foreground"
  | "muted"
  | "accent"
  | "chart-1"
  | "chart-2"
  | "chart-3"
  | "chart-4"
  | "chart-5";

export type ProductQuickView4Presentation = "dialog" | "inline";

export interface ProductQuickView4Image {
  src: string;
  alt: string;
}

export interface ProductQuickView4Color {
  id: string;
  label: string;
  swatch: ProductQuickView4Swatch;
  available?: boolean;
}

export interface ProductQuickView4Size {
  id: string;
  label: string;
  available?: boolean;
}

export interface ProductQuickView4Selection {
  colorId: string;
  sizeId: string;
}

export interface ProductQuickView4Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  triggerLabel?: string;
  title?: string;
  description?: string;
  price?: string;
  compareAtPrice?: string;
  images?: ProductQuickView4Image[];
  colors?: ProductQuickView4Color[];
  sizes?: ProductQuickView4Size[];
  colorLegend?: string;
  sizeLegend?: string;
  addToCartLabel?: string;
  detailsLabel?: string;
  detailsHref?: string;
  defaultColorId?: string;
  defaultSizeId?: string;
  defaultOpen?: boolean;
  presentation?: ProductQuickView4Presentation;
  onAddToCart?: (selection: ProductQuickView4Selection) => void;
  onViewDetails?: MouseEventHandler<HTMLAnchorElement>;
}
