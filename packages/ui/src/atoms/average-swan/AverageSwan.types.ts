import type { HTMLAttributes } from "react";

export type AverageSwanSize = "sm" | "md" | "lg";

export interface AverageSwanProps extends HTMLAttributes<HTMLFieldSetElement> {
  size?: AverageSwanSize;
  caption?: string;
  minusLabel?: string;
  plusLabel?: string;
  recordLabel?: string;
  playLabel?: string;
  onMinus?: () => void;
  onPlus?: () => void;
  onRecord?: () => void;
  onPlay?: () => void;
  disabled?: boolean;
}
