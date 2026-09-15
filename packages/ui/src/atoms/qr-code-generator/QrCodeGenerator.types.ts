import type { HTMLAttributes } from "react";

export interface QrCodeGeneratorProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  title?: string;
  description?: string;
  inputLabel?: string;
  placeholder?: string;
  downloadLabel?: string;
  downloadFileName?: string;
  copyLabel?: string;
  copiedLabel?: string;
  emptyLabel?: string;
  overflowLabel?: string;
  size?: number;
}
