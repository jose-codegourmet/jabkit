import type { HTMLAttributes } from "react";

export interface TwoFactor5VerifyPayload {
  code: string;
}

export interface TwoFactor5Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  scanInstruction?: string;
  codeLabel?: string;
  submitLabel?: string;
  otpauthUri?: string;
  qrSrc?: string;
  qrAlt?: string;
  codeLength?: number;
  codeDefaultValue?: string;
  onVerify?: (payload: TwoFactor5VerifyPayload) => void;
}
