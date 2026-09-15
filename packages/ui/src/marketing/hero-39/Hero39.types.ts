import type { FormEventHandler, HTMLAttributes, MouseEventHandler } from "react";

export interface Hero39Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Hero39NavItem {
  label: string;
  href: string;
}

export interface Hero39Logo {
  name: string;
  face?: "serif" | "sans";
}

export interface Hero39Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  brand?: string;
  brandHref?: string;
  navItems?: Hero39NavItem[];
  headerAction?: Hero39Action;
  badge?: string;
  titleLead?: string;
  titlePrefix?: string;
  titleEmphasis?: string;
  description?: string;
  searchPlaceholder?: string;
  searchAction?: Hero39Action;
  searchName?: string;
  logosLabel?: string;
  logos?: Hero39Logo[];
  backgroundImage?: string;
  backgroundAlt?: string;
  onSearch?: FormEventHandler<HTMLFormElement>;
}
