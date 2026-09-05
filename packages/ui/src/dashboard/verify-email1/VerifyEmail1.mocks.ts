import type { VerifyEmail1Props } from "./VerifyEmail1.types";

export const verifyEmail1Mocks = {
  default: {
    logo: { name: "Northline", href: "#home" },
    title: "Verify your email",
    description: "Enter the 6-digit code we sent to",
    email: "you@northline.app",
    codeLabel: "Verification code",
    submitLabel: "Verify email",
    resendPrompt: "Didn't get a code?",
    resendLabel: "Resend",
    resendHref: "#resend",
  },
  alternate: {
    logo: { name: "Harbor", href: "#home" },
    title: "Confirm this address",
    description: "Harbor emailed a one-time code to",
    email: "ops@harbor.studio",
    codeLabel: "Email code",
    defaultCode: "482917",
    submitLabel: "Continue",
    resendPrompt: "Code expired?",
    resendLabel: "Send a new code",
    resendHref: "#resend",
  },
} satisfies Record<string, VerifyEmail1Props>;
