import type { HTMLAttributes } from "react";
import type { AgencyContactSectionProps } from "@/marketing/agency-contact-section";
import type { AgencyIndexSectionProps } from "@/marketing/agency-index-section";
import type { AgencyServicesSectionProps } from "@/marketing/agency-services-section";
import type { AgencyTopbarProps } from "@/marketing/agency-topbar";

export interface AgencyLayoutFooterLink {
  label: string;
  href: string;
}

export interface AgencyLayoutFooterColumn {
  title: string;
  links: AgencyLayoutFooterLink[];
}

export interface AgencyLayoutPageProps extends HTMLAttributes<HTMLElement> {
  nav?: AgencyTopbarProps;
  index?: AgencyIndexSectionProps;
  services?: AgencyServicesSectionProps;
  contact?: AgencyContactSectionProps;
  footerBrand?: string;
  footerColumns?: AgencyLayoutFooterColumn[];
}
