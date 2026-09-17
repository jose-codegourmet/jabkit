import type { HTMLAttributes } from "react";
import type { ShopCollectionHeroProps } from "@/marketing/shop-collection-hero";
import type { ShopProductGridItem } from "@/marketing/shop-product-grid";
import type { ShopTopNavProps } from "@/marketing/shop-top-nav";

export interface ShoppingLayoutPageFooterLink {
  label: string;
  href: string;
}

export interface ShoppingLayoutPageSocialLink {
  label: string;
  href: string;
  network: "facebook" | "instagram" | "x" | "github" | "youtube";
}

export interface ShoppingLayoutPageProps extends HTMLAttributes<HTMLElement> {
  nav?: ShopTopNavProps;
  hero?: ShopCollectionHeroProps;
  products?: ShopProductGridItem[];
  footerLinks?: ShoppingLayoutPageFooterLink[];
  footerCopyright?: string;
  socialLinks?: ShoppingLayoutPageSocialLink[];
}
