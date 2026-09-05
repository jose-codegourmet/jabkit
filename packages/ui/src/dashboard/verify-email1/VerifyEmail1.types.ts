import type { HTMLAttributes, ReactNode } from "react";

export interface VerifyEmail1Logo {
  name: string;
  href?: string;
  src?: string;
  alt?: string;
}

export interface VerifyEmail1Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  logo?: VerifyEmail1Logo;
  logoMark?: ReactNode;
  title?: string;
  description?: string;
  email?: string;
  codeLabel?: string;
  codeLength?: number;
  defaultCode?: string;
  submitLabel?: string;
  resendPrompt?: string;
  resendLabel?: string;
  resendHref?: string;
  onVerify?: (code: string) => void;
  onResend?: () => void;
}
