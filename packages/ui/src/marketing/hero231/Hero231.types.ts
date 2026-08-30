import type { MouseEventHandler } from "react";

export interface Hero231Action {
  label: string;
  href?: string;
  onClick?: MouseEventHandler<HTMLButtonElement>;
}

export interface Hero231Portrait {
  src: string;
  alt: string;
  name?: string;
  role?: string;
}

export interface Hero231Logo {
  name: string;
  src?: string;
}

export interface Hero231Props {
  className?: string;
  kicker?: string;
  title?: string;
  description?: string;
  primaryAction?: Hero231Action;
  secondaryAction?: Hero231Action;
  portraits?: Hero231Portrait[];
  logos?: Hero231Logo[];
  autoplay?: boolean;
  autoplayMs?: number;
}
