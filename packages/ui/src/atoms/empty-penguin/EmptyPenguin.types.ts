import type { HTMLAttributes } from "react";

export type EmptyPenguinSize = "sm" | "md";

export interface EmptyPenguinProps
  extends Omit<HTMLAttributes<HTMLLabelElement>, "onChange"> {
  checked?: boolean;
  defaultChecked?: boolean;
  onCheckedChange?: (checked: boolean) => void;
  label?: string;
  size?: EmptyPenguinSize;
  disabled?: boolean;
  name?: string;
  offText?: string;
  onText?: string;
}
