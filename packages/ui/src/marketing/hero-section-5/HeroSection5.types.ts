import type { MouseEventHandler } from "react";

export interface HeroSection5Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface HeroSection5NavItem {
  label: string;
  href: string;
}

export interface HeroSection5Brand {
  name: string;
  href?: string;
}

export interface HeroSection5Video {
  src: string;
  poster?: string;
  label?: string;
}

export interface HeroSection5Logo {
  name: string;
  src?: string;
}

export interface HeroSection5Props {
  className?: string;
  brand?: HeroSection5Brand;
  navItems?: HeroSection5NavItem[];
  headerAction?: HeroSection5Action;
  kicker?: string;
  title?: string;
  description?: string;
  primaryAction?: HeroSection5Action;
  secondaryAction?: HeroSection5Action;
  video?: HeroSection5Video;
  logos?: HeroSection5Logo[];
  autoplay?: boolean;
}
