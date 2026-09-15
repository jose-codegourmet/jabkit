import type { HTMLAttributes, ReactNode } from "react";

export interface Footer19NavLink {
  label: string;
  href: string;
}

export interface Footer19LinkColumn {
  title: string;
  links: Footer19NavLink[];
}

export interface Footer19Props extends HTMLAttributes<HTMLElement> {
  badgeText?: string;
  newsletterHeading?: string;
  newsletterPlaceholder?: string;
  newsletterButtonText?: string;
  onSubscribe?: (email: string) => void;
  brandName?: string;
  brandLogo?: ReactNode;
  navColumns?: Footer19LinkColumn[];
  copyright?: string;
  location?: string;
  time?: string;
  socialLinks?: Footer19NavLink[];
}
