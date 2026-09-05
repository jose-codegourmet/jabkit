import type { TwoFactor2Props } from "./TwoFactor2.types";

export const twoFactor2Mocks = {
  default: {
    logo: { name: "Northline", href: "#home" },
    title: "Check your authenticator",
    description:
      "Enter the 6-digit code from your authenticator app to finish signing in.",
    codeLabel: "Verification code",
    submitLabel: "Continue",
    resendPrompt: "Lost your device?",
    resendLabel: "Use a backup code",
    resendHref: "#backup",
    imageSrc: "/assets/6746a1f6081b08db.webp",
    imageAlt: "Open-plan studio with long desks and pendant lights",
  },
  alternate: {
    logo: { name: "Harbor", href: "#home" },
    title: "Enter the code we sent",
    description:
      "Harbor emailed a 6-digit code to ops@harbor.studio. It expires in 10 minutes.",
    codeLabel: "Email code",
    defaultCode: "482917",
    submitLabel: "Verify and continue",
    resendPrompt: "Didn't get it?",
    resendLabel: "Resend code",
    resendHref: "#resend",
    imageSrc: "/assets/1cb3a6dc0974b11f.webp",
    imageAlt: "Sunlit office interior with wood desks and plants",
  },
} satisfies Record<string, TwoFactor2Props>;
