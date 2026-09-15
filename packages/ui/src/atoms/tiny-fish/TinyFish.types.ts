import type { ButtonHTMLAttributes, ReactNode } from "react";

export type TinyFishSize = "sm" | "md" | "lg";

export interface TinyFishProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  size?: TinyFishSize;
  animate?: boolean;
  label?: string;
  children?: ReactNode;
}
