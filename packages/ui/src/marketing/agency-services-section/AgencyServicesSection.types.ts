import type { HTMLAttributes } from "react";

export interface AgencyServiceItem {
  number: string;
  title: string;
  body: string;
}

export interface AgencyServicesSectionProps
  extends HTMLAttributes<HTMLElement> {
  id?: string;
  number?: string;
  label?: string;
  meta?: string;
  title?: string;
  items?: AgencyServiceItem[];
}
