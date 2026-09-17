import type { HTMLAttributes } from "react";
import type { InfographicNodeGraphProps } from "@/marketing/infographic-node-graph";
import type { TraffoFeaturesSectionProps } from "@/marketing/traffo-features-section";
import type { TraffoFooterProps } from "@/marketing/traffo-footer";
import type { TraffoHeaderProps } from "@/marketing/traffo-header";

export interface TraffoLandingHero {
  titleLines?: string[];
  subtitle?: string;
  ctaLabel?: string;
  ctaHref?: string;
  featuresLabel?: string;
  featuresHref?: string;
  featuresLinkLabel?: string;
}

export interface TraffoLandingStat {
  value: string;
  suffix: string;
  label: string;
}

export interface TraffoLandingTestimonial {
  quote: string;
  attribution: string;
}

export interface TraffoLandingCta {
  title: string;
  emphasis?: string;
  body: string;
  actionLabel: string;
  actionHref: string;
}

export interface TraffoLandingPageProps extends HTMLAttributes<HTMLElement> {
  header?: TraffoHeaderProps;
  hero?: TraffoLandingHero;
  graph?: InfographicNodeGraphProps;
  stats?: TraffoLandingStat[];
  features?: TraffoFeaturesSectionProps;
  testimonial?: TraffoLandingTestimonial;
  cta?: TraffoLandingCta;
  footer?: TraffoFooterProps;
}
