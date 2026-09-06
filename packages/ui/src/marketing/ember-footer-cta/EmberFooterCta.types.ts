import type { FormEventHandler, HTMLAttributes } from "react";

export interface EmberFooterCtaLink {
  label: string;
  href: string;
}

export interface EmberFooterCtaProps
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onSubmit"> {
  eyebrow?: string;
  title?: string;
  description?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  submitLabel?: string;
  onSubscribe?: (email: string) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
  brand?: string;
  links?: EmberFooterCtaLink[];
  footnote?: string;
  showEmber?: boolean;
}
