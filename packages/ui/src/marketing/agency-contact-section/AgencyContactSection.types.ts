import type { HTMLAttributes } from "react";
import type { AgencyContactFormProps } from "@/marketing/agency-contact-form";

export interface AgencyContactSectionProps extends HTMLAttributes<HTMLElement> {
  id?: string;
  number?: string;
  label?: string;
  title?: string;
  emphasis?: string;
  body?: string;
  studioName?: string;
  address?: string;
  hours?: string;
  appointment?: string;
  form?: AgencyContactFormProps;
}
