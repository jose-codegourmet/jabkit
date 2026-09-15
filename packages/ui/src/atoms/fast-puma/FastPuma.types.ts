import type { HTMLAttributes } from "react";

export type FastPumaSize = "sm" | "md" | "lg";

export interface FastPumaProps extends HTMLAttributes<HTMLDivElement> {
  size?: FastPumaSize;
  plusLabel?: string;
  minusLabel?: string;
  plusAriaLabel?: string;
  minusAriaLabel?: string;
  defaultPlusPressed?: boolean;
  defaultMinusPressed?: boolean;
  plusPressed?: boolean;
  minusPressed?: boolean;
  onPlusPressedChange?: (pressed: boolean) => void;
  onMinusPressedChange?: (pressed: boolean) => void;
  disabled?: boolean;
  name?: string;
}
