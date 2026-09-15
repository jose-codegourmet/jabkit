import type { HTMLAttributes } from "react";

export interface QuickPantherOption {
  value: string;
  title: string;
  description?: string;
  price?: string;
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
  description?: string;
  disabled?: boolean;
}
