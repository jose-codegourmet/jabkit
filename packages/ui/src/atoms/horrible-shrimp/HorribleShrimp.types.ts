import type { InputHTMLAttributes } from "react";

export type HorribleShrimpSize = "sm" | "md" | "lg";

export interface HorribleShrimpProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  label?: string;
  size?: HorribleShrimpSize;
}
