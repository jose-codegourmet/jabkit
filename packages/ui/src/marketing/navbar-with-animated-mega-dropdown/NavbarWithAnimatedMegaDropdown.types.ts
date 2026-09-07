import type { HTMLAttributes } from "react";
import type { NavigationMenuLinkItem } from "@/atoms/navigation-menu";

export type NavbarWithAnimatedMegaDropdownLinkItem = NavigationMenuLinkItem;

export interface NavbarWithAnimatedMegaDropdownBrand {
  name: string;
  href: string;
}

export interface NavbarWithAnimatedMegaDropdownCta {
  label: string;
  href: string;
}

export interface NavbarWithAnimatedMegaDropdownColumn {
  title: string;
  links: NavbarWithAnimatedMegaDropdownLinkItem[];
}

export type NavbarWithAnimatedMegaDropdownNavItem =
  | {
      kind: "link";
      label: string;
      href: string;
    }
  | {
      kind: "mega";
      label: string;
      value: string;
      columns: NavbarWithAnimatedMegaDropdownColumn[];
      featured?: NavbarWithAnimatedMegaDropdownLinkItem;
    };

export interface NavbarWithAnimatedMegaDropdownProps
  extends Omit<HTMLAttributes<HTMLElement>, "defaultValue"> {
  brand?: NavbarWithAnimatedMegaDropdownBrand;
  navItems?: NavbarWithAnimatedMegaDropdownNavItem[];
  cta?: NavbarWithAnimatedMegaDropdownCta;
  secondaryCta?: NavbarWithAnimatedMegaDropdownCta;
  defaultValue?: string | null;
}
