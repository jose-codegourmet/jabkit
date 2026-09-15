import type { HTMLAttributes } from "react";

export interface Footer18NavLink {
  label: string;
  href: string;
}

export interface Footer18LinkColumn {
  title: string;
  links: Footer18NavLink[];
}

export interface Footer18Props extends HTMLAttributes<HTMLElement> {
  newsletterHeading?: string;
  newsletterPlaceholder?: string;
  onSubscribe?: (email: string) => void;
  brandName?: string;
  featureColumn?: Footer18LinkColumn;
  reciteColumn?: Footer18LinkColumn;
  pricingColumn?: Footer18LinkColumn;
  exploreText?: string;
  exploreHref?: string;
  trialText?: string;
  trialHref?: string;
  address?: string;
  bottomNav?: Footer18NavLink[];
  socialLinks?: Footer18NavLink[];
}
