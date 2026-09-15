import type { InputHTMLAttributes } from "react";

export type StrongSquidSize = "sm" | "md";

export interface StrongSquidProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, "size" | "type"> {
  size?: StrongSquidSize;
  label?: string;
}
