import type { HTMLAttributes } from "react";

export interface CaseStudies13Image {
  src: string;
  alt: string;
}

export interface CaseStudies13Link {
  label: string;
  href: string;
}

export interface CaseStudies13Study {
  href?: string;
  image: CaseStudies13Image;
  metric: string;
  category: string;
  client: string;
  title: string;
  description: string;
}

export interface CaseStudies13Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  allWork?: CaseStudies13Link | null;
  studies?: CaseStudies13Study[];
}
