import type { HTMLAttributes } from "react";

export interface Footer10NavLink {
  label: string;
  href: string;
}

export interface Footer10LinkColumn {
  title: string;
  links: Footer10NavLink[];
}

export interface Footer10Props extends HTMLAttributes<HTMLElement> {
  bannerTagline?: string;
  bannerHeading?: string;
  bannerCtaLabel?: string;
  bannerCtaHref?: string;
  bannerBackgroundImage?: string;
  contactLabel?: string;
  contactEmail?: string;
  contactEmailHref?: string;
  description?: string;
  newsletterPlaceholder?: string;
  onSubscribe?: (email: string) => void;
  linkColumns?: Footer10LinkColumn[];
  brandName?: string;
  copyright?: string;
}
