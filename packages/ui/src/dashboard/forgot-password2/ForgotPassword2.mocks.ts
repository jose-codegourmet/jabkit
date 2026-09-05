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
    imageSrc: "/assets/2c2fae7d2bbfbdb2.webp",
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
    imageSrc: "/assets/e9d88fab9e45c86f.webp",
    imageAlt: "Glass office tower photographed from street level",
  },
} satisfies Record<string, ForgotPassword2Props>;
