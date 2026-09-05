import type { ForgotPassword2Props } from "./ForgotPassword2.types";

export const forgotPassword2Mocks = {
  default: {
    logo: { name: "Northline", href: "#home" },
    title: "Forgot your password?",
    description:
      "Enter the email on your account. We will send a reset link if it matches a workspace.",
    emailLabel: "Email",
    emailPlaceholder: "you@northline.app",
    submitLabel: "Send reset link",
    imageSrc:
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1600&h=2000&q=80",
    imageAlt: "Sunlit studio desks beside a tall window",
  },
  alternate: {
    logo: { name: "Harbor", href: "#home" },
    title: "Reset your access",
    description:
      "Tell us the email you use to sign in. Harbor will send a one-time link to set a new password.",
    emailLabel: "Work email",
    emailPlaceholder: "ops@harbor.studio",
    emailDefaultValue: "ops@harbor.studio",
    submitLabel: "Email me a link",
    sentTitle: "Link on the way",
    sentDescription:
      "Open the message from Harbor and follow the link before it expires.",
    imageSrc:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1600&h=2000&q=80",
    imageAlt: "Glass office tower photographed from street level",
  },
} satisfies Record<string, ForgotPassword2Props>;
