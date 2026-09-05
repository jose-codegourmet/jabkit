import type { FormEventHandler, HTMLAttributes } from "react";

export interface EcommerceNavbar2Link {
  label: string;
  href: string;
}

export interface EcommerceNavbar2NestedItem extends EcommerceNavbar2Link {
  children?: EcommerceNavbar2Link[];
}

export interface EcommerceNavbar2MegaColumn {
  title: string;
  links: EcommerceNavbar2Link[];
}

export interface EcommerceNavbar2Featured {
  href: string;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
}

export type EcommerceNavbar2NavItem =
  | {
      kind: "link";
      label: string;
      href: string;
      badge?: string;
    }
  | {
      kind: "menu";
      label: string;
      href?: string;
      badge?: string;
      items: EcommerceNavbar2NestedItem[];
    }
  | {
      kind: "mega";
      label: string;
      href?: string;
      badge?: string;
      columns: EcommerceNavbar2MegaColumn[];
      featured?: EcommerceNavbar2Featured;
    };

export interface EcommerceNavbar2Brand {
  name: string;
  href: string;
}

export interface EcommerceNavbar2Props
  extends Omit<HTMLAttributes<HTMLElement>, "onSubmit"> {
  brand?: EcommerceNavbar2Brand;
  navItems?: EcommerceNavbar2NavItem[];
  searchPlaceholder?: string;
  wishlistHref?: string;
  wishlistLabel?: string;
  wishlistCount?: number;
  cartHref?: string;
  cartLabel?: string;
  cartCount?: number;
  accountLabel?: string;
  accountLinks?: EcommerceNavbar2Link[];
  helpTitle?: string;
  helpLinks?: EcommerceNavbar2Link[];
  onSearch?: (query: string) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
