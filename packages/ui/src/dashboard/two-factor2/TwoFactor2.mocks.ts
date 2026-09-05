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
    imageSrc:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1600&h=2000&q=80",
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
    imageSrc:
      "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=1600&h=2000&q=80",
    imageAlt: "Sunlit office interior with wood desks and plants",
  },
} satisfies Record<string, TwoFactor2Props>;
