import type { HTMLAttributes } from "react";

export interface QuickPantherOption {
  value: string;
  title: string;
  disabled?: boolean;
}

export interface QuickPantherProps
  extends Omit<HTMLAttributes<HTMLFieldSetElement>, "defaultValue" | "onChange"> {
  options?: readonly QuickPantherOption[];
  value?: string;
  defaultValue?: string;
  name?: string;
  onValueChange?: (value: string) => void;
  legend?: string;
  disabled?: boolean;
}
