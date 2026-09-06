import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "two-factor5",
  displayName: "TwoFactor5",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Two-column authenticator pairing card with a scannable QR plate and a six-digit verification form.",
  sectionCategory: "authentication",
  purpose:
    "Guides initial authenticator pairing by keeping QR setup and code verification visible together.",
  bestFor: [
    "account onboarding",
    "secure application access",
    "identity verification flows",
  ],
  tone: ["clean", "trustworthy", "focused"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "split",
    alignment: "left",
    columns: 2,
  },
  slots: [
    "headline",
    "instructions",
    "qrCode",
    "secretKey",
    "verificationCode",
    "verifyAction",
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
    "authenticator",
    "dashboard",
    "form",
    "otp",
    "qr",
    "two-factor",
  ],
  dependencies: [],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
