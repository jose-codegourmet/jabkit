import type { OtpDialogProps } from "./OtpDialog.types";

export const otpDialogMocks = {
  default: {
    triggerLabel: "Enter verification code",
    title: "Check your inbox",
    description: "Enter the 4-digit code we sent to confirm this sign-in.",
    destination: "you@northline.app",
    codeLabel: "One-time code",
    verifyLabel: "Verify code",
    resendLabel: "Resend code",
    defaultOpen: true,
    presentation: "dialog",
  },
  alternate: {
    triggerLabel: "Confirm your number",
    title: "Confirm your number",
    description:
      "We sent a 4-digit code by SMS. Enter it to finish signing in.",
    destination: "+1 (415) 555-0142",
    codeLabel: "SMS code",
    verifyLabel: "Confirm",
    resendLabel: "Send a new code",
    defaultCode: "2041",
    expectedCode: "9183",
    status: "error",
    defaultRemainingSeconds: 0,
    defaultOpen: true,
    presentation: "dialog",
  },
} satisfies Record<string, OtpDialogProps>;
