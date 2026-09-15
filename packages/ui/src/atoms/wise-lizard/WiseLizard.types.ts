import type { InputHTMLAttributes } from "react";

export type WiseLizardSize = "sm" | "md" | "lg";

export interface WiseLizardProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  size?: WiseLizardSize;
  badge?: string;
}
