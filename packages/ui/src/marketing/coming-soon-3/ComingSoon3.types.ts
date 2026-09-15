import type { FormEventHandler, HTMLAttributes } from "react";

export interface ComingSoon3UnitLabels {
  days: string;
  hours: string;
  minutes: string;
  seconds: string;
}

export interface ComingSoon3Props
  extends Omit<HTMLAttributes<HTMLElement>, "title" | "onSubmit"> {
  badge?: string;
  title?: string;
  description?: string;
  /** ISO-8601 instant used as the countdown target. */
  targetDate?: string;
  unitLabels?: ComingSoon3UnitLabels;
  emailLabel?: string;
  emailPlaceholder?: string;
  submitLabel?: string;
  successTitle?: string;
  successDescription?: string;
  launchedTitle?: string;
  launchedDescription?: string;
  onSubscribe?: (email: string) => void;
  onSubmit?: FormEventHandler<HTMLFormElement>;
}
