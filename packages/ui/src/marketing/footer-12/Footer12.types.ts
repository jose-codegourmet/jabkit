import type { HTMLAttributes, MouseEventHandler, ReactNode } from "react";

export interface Footer12NavLink {
  label: string;
  href: string;
}

export interface Footer12LinkColumn {
  title: string;
  links: Footer12NavLink[];
}

export type Footer12SocialKind = "facebook" | "x" | "instagram" | "linkedin";

export interface Footer12SocialLink {
  label: string;
  href: string;
  kind?: Footer12SocialKind;
  icon?: ReactNode;
}

export type Footer12Appearance = "light" | "dark";

export interface Footer12Props extends HTMLAttributes<HTMLElement> {
  newsletterTitle?: string;
  newsletterPlaceholder?: string;
  subscribeLabel?: string;
  onSubscribe?: (email: string) => void;
  linkColumns?: Footer12LinkColumn[];
  brandName?: string;
  brandLogo?: ReactNode;
  copyright?: string;
  socialLinks?: Footer12SocialLink[];
  languageLabel?: string;
  onLanguageClick?: MouseEventHandler<HTMLButtonElement>;
  appearance?: Footer12Appearance;
  defaultAppearance?: Footer12Appearance;
  onAppearanceChange?: (appearance: Footer12Appearance) => void;
}
