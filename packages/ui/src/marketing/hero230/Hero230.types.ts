import type { HTMLAttributes, MouseEventHandler } from "react";

export interface Hero230Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Hero230Logo {
  name: string;
  src?: string;
}

export interface Hero230Slide {
  src: string;
  alt: string;
  caption?: string;
}

export interface Hero230Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  kicker?: string;
  title?: string;
  description?: string;
  primaryAction?: Hero230Action;
  secondaryAction?: Hero230Action;
  logos?: Hero230Logo[];
  slides?: Hero230Slide[];
  autoplay?: boolean;
  autoplayMs?: number;
}
