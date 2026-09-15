import type {
  HTMLAttributes,
  MouseEventHandler,
  ReactNode,
} from "react";

export interface Hero31Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Hero31NavItem {
  label: string;
  href: string;
}

export type Hero31LogoIcon =
  | "command"
  | "workflow"
  | "blocks"
  | "sparkles"
  | "zap";

export type Hero31LogoWeight = "tight" | "medium" | "bold";

export interface Hero31Logo {
  name: string;
  href?: string;
  icon?: Hero31LogoIcon;
  weight?: Hero31LogoWeight;
}

export interface Hero31Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  brand?: string;
  brandHref?: string;
  brandMark?: ReactNode;
  navItems?: Hero31NavItem[];
  signUp?: Hero31Action;
  title?: string;
  subtitle?: string;
  cta?: Hero31Action;
  trustedByText?: string;
  logos?: Hero31Logo[];
  backgroundImage?: string;
  backgroundAlt?: string;
}
