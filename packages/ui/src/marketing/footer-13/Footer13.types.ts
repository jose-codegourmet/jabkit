import type { HTMLAttributes, ReactNode } from "react";

export interface Footer13NavLink {
  label: string;
  href: string;
}

export interface Footer13LinkColumn {
  title: string;
  links: Footer13NavLink[];
}

export type Footer13SocialKind = "facebook" | "x" | "instagram" | "linkedin";

export interface Footer13SocialLink {
  label: string;
  href: string;
  kind?: Footer13SocialKind;
  icon?: ReactNode;
}

export interface Footer13BottomLink {
  label: string;
  href: string;
}

export interface Footer13Props extends HTMLAttributes<HTMLElement> {
  heroSrc?: string;
  heroAlt?: string;
  brandName?: string;
  brandLogo?: ReactNode;
  linkColumns?: Footer13LinkColumn[];
  contactTitle?: string;
  emailPlaceholder?: string;
  subscribeLabel?: string;
  subscribeTagline?: string;
  onSubscribe?: (email: string) => void;
  copyright?: string;
  socialLinks?: Footer13SocialLink[];
  bottomLinks?: Footer13BottomLink[];
}
