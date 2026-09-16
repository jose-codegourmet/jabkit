import type { InputHTMLAttributes } from "react";

export type CurvyEarwigSize = "sm" | "md" | "lg";

export interface CurvyEarwigProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: CurvyEarwigSize;
  /** @deprecated The reference field is always visible. */
  expanded?: boolean;
  animate?: boolean;
  label?: string;
  /** @deprecated Retained for source compatibility; the reference has no collapse toggle. */
  toggleLabel?: string;
  type?: InputHTMLAttributes<HTMLInputElement>["type"];
}
