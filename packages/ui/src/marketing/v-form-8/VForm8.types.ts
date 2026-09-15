import type { FormEventHandler, HTMLAttributes } from "react";

export type VForm8Step = "account" | "plan" | "confirm" | "success";

export interface VForm8Plan {
  id: string;
  label: string;
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
  accountStepLabel?: string;
  planStepLabel?: string;
  confirmStepLabel?: string;
  nameLabel?: string;
  namePlaceholder?: string;
  defaultName?: string;
  emailLabel?: string;
  emailPlaceholder?: string;
  defaultEmail?: string;
  planFieldLabel?: string;
  plans?: readonly VForm8Plan[];
  defaultPlanId?: string;
  newsletterLabel?: string;
  defaultNewsletter?: boolean;
  continueLabel?: string;
  backLabel?: string;
  submitLabel?: string;
  reviewNameLabel?: string;
  reviewEmailLabel?: string;
  reviewPlanLabel?: string;
  reviewUpdatesLabel?: string;
  updatesYesLabel?: string;
  updatesNoLabel?: string;
  successTitle?: string;
  successDescription?: string;
  defaultStep?: VForm8Step;
  onComplete?: (details: VForm8CompleteDetails) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
