import type { HTMLAttributes, ReactNode } from "react";

export interface Footer27NavLink {
  label: string;
  href: string;
}

export interface Footer27LinkColumn {
  title: string;
  links: Footer27NavLink[];
}

export type Footer27SocialKind = "facebook" | "x" | "instagram" | "linkedin";

export interface Footer27SocialLink {
  label: string;
  href: string;
  kind?: Footer27SocialKind;
  icon?: ReactNode;
}

export interface Footer27LegalLink {
  label: string;
  href: string;
}

export interface Footer27Props extends HTMLAttributes<HTMLElement> {
  heroSrc?: string;
  heroAlt?: string;
  headline?: string;
  description?: string;
  primaryCta?: Footer27NavLink;
  brandName?: string;
  brandHref?: string;
  brandLogo?: ReactNode;
  tagline?: string;
  connectCta?: Footer27NavLink;
  linkColumns?: Footer27LinkColumn[];
  socialTitle?: string;
  socialDescription?: string;
  socialLinks?: Footer27SocialLink[];
  legalLinks?: Footer27LegalLink[];
  copyright?: string;
  wordmark?: string;
}
