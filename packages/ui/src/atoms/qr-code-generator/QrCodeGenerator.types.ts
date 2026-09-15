import type { HTMLAttributes } from "react";

export interface QrCodeGeneratorProps extends HTMLAttributes<HTMLDivElement> {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  title?: string;
  emptyDescription?: string;
  inputLabel?: string;
  placeholder?: string;
  downloadLabel?: string;
  downloadingLabel?: string;
  savedLabel?: string;
  downloadFileName?: string;
  emptyLabel?: string;
  overflowLabel?: string;
  downloadErrorLabel?: string;
  size?: number;
  isLoading?: boolean;
  error?: string | null;
}
