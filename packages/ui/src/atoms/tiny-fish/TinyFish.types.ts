import type { LabelHTMLAttributes, ReactNode } from "react";

export type TinyFishSize = "sm" | "md" | "lg";

export interface TinyFishProps
  extends Omit<LabelHTMLAttributes<HTMLLabelElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: TinyFishSize;
  animate?: boolean;
  disabled?: boolean;
  name?: string;
  label?: string;
  children?: ReactNode;
}
