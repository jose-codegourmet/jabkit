import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "verify-email1",
  displayName: "VerifyEmail1",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Centered email verification card with a six-digit code, destination address, and a resend link under the panel.",
  sectionCategory: "authentication",
  purpose:
    "Confirms email ownership with a focused code-entry step and a clear resend fallback.",
  bestFor: [
    "account onboarding",
    "secure application access",
    "identity verification flows",
  ],
  tone: ["clean", "trustworthy", "focused"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "centered",
    alignment: "left",
  },
  slots: [
    "brand",
    "headline",
    "destinationEmail",
    "verificationCode",
    "verifyAction",
    "resendAction",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: [
    "auth",
    "dashboard",
    "email",
    "form",
    "otp",
    "verification",
    "verify-email",
  ],
  dependencies: [],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
