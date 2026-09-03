import type { HTMLAttributes } from "react";

export interface CaseStudies11Study {
  company: string;
  title: string;
  image: string;
  imageAlt: string;
  href?: string;
  logoSrc?: string;
  logoAlt?: string;
}

export interface CaseStudies11Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  studies?: CaseStudies11Study[];
}
