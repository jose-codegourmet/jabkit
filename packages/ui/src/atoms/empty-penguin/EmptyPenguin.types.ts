import type { ButtonHTMLAttributes } from "react";

export type EmptyPenguinSize = "sm" | "md";

export interface EmptyPenguinProps
  extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  size?: EmptyPenguinSize;
}
