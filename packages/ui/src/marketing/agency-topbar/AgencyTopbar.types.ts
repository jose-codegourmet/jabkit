import type { HTMLAttributes } from "react";

export interface AgencyTopbarLink {
  label: string;
  href: string;
}

export interface AgencyTopbarProps extends HTMLAttributes<HTMLElement> {
  brand?: string;
  brandHref?: string;
  links?: AgencyTopbarLink[];
  locationCode?: string;
  menuLabel?: string;
}
