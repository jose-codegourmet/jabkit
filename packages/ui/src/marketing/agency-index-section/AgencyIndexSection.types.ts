import type { HTMLAttributes } from "react";

export interface AgencyIndexWork {
  title: string;
  href: string;
  image: {
    src: string;
    alt: string;
  };
}

export interface AgencyIndexSectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  number?: string;
  label?: string;
  meta?: string;
  kicker?: string;
  availability?: string;
  title?: string;
  emphasis?: string;
  body?: string;
  ctaLabel?: string;
  ctaHref?: string;
  categories?: string[];
  worksHeading?: string;
  works?: AgencyIndexWork[];
}
