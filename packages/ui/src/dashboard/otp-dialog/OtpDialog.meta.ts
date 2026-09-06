import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "otp-dialog",
  displayName: "OtpDialog",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Compact OTP verification dialog with four digit slots, resend countdown, and success or error feedback.",
  sectionCategory: "authentication",
  purpose:
    "Confirms a one-time code from email or SMS in a focused overlay so a signed-in product can finish a sensitive step without leaving the page.",
  bestFor: [
    "email or SMS sign-in confirmation",
    "step-up verification before a sensitive action",
    "account recovery code entry",
  ],
  avoidFor: [
    "authenticator app pairing with a QR code",
    "full-page login that should stay on a dedicated route",
  ],
  tone: ["clean", "trustworthy", "focused"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "overlay",
    alignment: "center",
    columns: 1,
  },
  slots: [
    "headline",
    "instructions",
    "destination",
    "verificationCode",
    "statusMessage",
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
    "dialog",
    "form",
    "otp",
    "verification",
    "two-factor",
  ],
  dependencies: [],
  registryDependencies: ["button", "dialog", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
