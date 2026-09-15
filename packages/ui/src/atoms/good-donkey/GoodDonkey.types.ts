import type { FormHTMLAttributes } from "react";

export type GoodDonkeySize = "sm" | "md" | "lg";

export interface GoodDonkeyProps extends FormHTMLAttributes<HTMLFormElement> {
  size?: GoodDonkeySize;
  placeholder?: string;
  defaultValue?: string;
  disabled?: boolean;
  attachLabel?: string;
  sendLabel?: string;
  accept?: string;
}
