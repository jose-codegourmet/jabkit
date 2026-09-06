import type { HTMLAttributes } from "react";

export type OtpDialogPresentation = "dialog" | "inline";

export type OtpDialogStatus = "idle" | "error" | "success";

export interface OtpDialogVerifyPayload {
  code: string;
}

export interface OtpDialogProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  triggerLabel?: string;
  title?: string;
  description?: string;
  destination?: string;
  codeLabel?: string;
  verifyLabel?: string;
  resendLabel?: string;
  resendWaitingLabel?: string;
  successMessage?: string;
  errorMessage?: string;
  codeLength?: number;
  defaultCode?: string;
  expectedCode?: string;
  resendCountdownSeconds?: number;
  defaultRemainingSeconds?: number;
  defaultOpen?: boolean;
  presentation?: OtpDialogPresentation;
  status?: OtpDialogStatus;
  onVerify?: (payload: OtpDialogVerifyPayload) => void;
  onResend?: () => void;
}
