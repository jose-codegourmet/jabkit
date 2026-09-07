import type { HTMLAttributes, ReactNode } from "react";

export interface SterlingGateKineticNavigationLink {
  label: string;
  href: string;
  index?: string;
  kicker?: string;
}

export interface SterlingGateKineticNavigationCta {
  label: string;
  href: string;
}

export interface SterlingGateKineticNavigationProps
  extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  brand?: string;
  brandHref?: string;
  menuLabel?: string;
  closeLabel?: string;
  links?: SterlingGateKineticNavigationLink[];
  cta?: SterlingGateKineticNavigationCta;
  footnote?: string;
  tagline?: string;
  children?: ReactNode;
  open?: boolean;
  defaultOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
}
