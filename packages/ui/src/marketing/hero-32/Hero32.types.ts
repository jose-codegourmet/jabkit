import type {
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

export interface Hero32Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Hero32NavItem {
  label: string;
  href: string;
}

export interface Hero32Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  brand?: string;
  brandHref?: string;
  navItems?: Hero32NavItem[];
  login?: Hero32Action;
  title?: ReactNode;
  subtitle?: ReactNode;
  primaryAction?: Hero32Action;
  playAction?: Hero32Action;
  backgroundImage?: string;
  backgroundAlt?: string;
}
