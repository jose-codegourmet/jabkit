import type { InputHTMLAttributes } from "react";

export type CurvyEarwigSize = "sm" | "md" | "lg";

export interface CurvyEarwigProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: CurvyEarwigSize;
  expanded?: boolean;
  animate?: boolean;
  label?: string;
  toggleLabel?: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}
