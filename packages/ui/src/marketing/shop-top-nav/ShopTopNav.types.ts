import type { HTMLAttributes } from "react";

export interface ShopTopNavLink {
  label: string;
  href: string;
}

export interface ShopTopNavCta {
  label: string;
  href: string;
}

export interface ShopTopNavProps extends HTMLAttributes<HTMLElement> {
  brand?: string;
  links?: ShopTopNavLink[];
  cta?: ShopTopNavCta;
  menuLabel?: string;
}
