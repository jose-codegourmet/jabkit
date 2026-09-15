import type { InputHTMLAttributes } from "react";

export type JollyChickenSize = "sm" | "md" | "lg";

export interface JollyChickenProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: JollyChickenSize;
  label?: string;
}
