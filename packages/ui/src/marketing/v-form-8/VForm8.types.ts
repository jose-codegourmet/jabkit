import type { FormEventHandler, HTMLAttributes } from "react";

export type VForm8Step = "account" | "plan" | "review" | "success";

export interface VForm8Plan {
  id: string;
  name: string;
  price: string;
  description: string;
}

export interface VForm8CompleteDetails {
  name: string;
  email: string;
  planId: string;
  newsletter: boolean;
}

export interface VForm8Props
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onSubmit"> {
  title?: string;
  description?: string;
  accountStepLabel?: string;
  planStepLabel?: string;
  reviewStepLabel?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  defaultName?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  defaultEmail?: string;
  passwordLabel?: string;
  passwordPlaceholder?: string;
  defaultPassword?: string;
  plans?: readonly VForm8Plan[];
  defaultPlanId?: string;
  newsletterLabel?: string;
  defaultNewsletter?: boolean;
  continueLabel?: string;
  backLabel?: string;
  submitLabel?: string;
  successTitle?: string;
  successDescription?: string;
  passwordSetLabel?: string;
  newsletterYesLabel?: string;
  newsletterNoLabel?: string;
  defaultStep?: VForm8Step;
  onComplete?: (details: VForm8CompleteDetails) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
