import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "verify-email1",
  displayName: "VerifyEmail1",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Centered email verification card with a six-digit code, destination address, and a resend link under the panel.",
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
