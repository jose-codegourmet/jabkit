import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "two-factor2",
  displayName: "TwoFactor2",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Split two-factor screen with a compact six-digit code form and a full-height photograph on large screens.",
  tags: [
    "auth",
    "dashboard",
    "form",
    "login",
    "otp",
    "split",
    "two-factor",
    "verification",
  ],
  dependencies: [],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
