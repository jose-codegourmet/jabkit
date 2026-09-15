import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

export interface Footer11NavLink {
  label: string;
  href: string;
}

export interface Footer11Props extends HTMLAttributes<HTMLElement> {
  badgeText?: string;
  heading?: string;
  contactLabel?: string;
  contactEmail?: string;
  contactEmailHref?: string;
  navLinks?: Footer11NavLink[];
  brandName?: string;
  brandLogo?: ReactNode;
  onScrollToTop?: MouseEventHandler<HTMLButtonElement>;
}
