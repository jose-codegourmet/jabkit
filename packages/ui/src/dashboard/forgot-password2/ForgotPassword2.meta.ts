import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "forgot-password2",
  displayName: "ForgotPassword2",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Split password-recovery screen with a left-aligned email form and a full-height photograph on large screens.",
  tags: [
    "auth",
    "dashboard",
    "forgot-password",
    "form",
    "login",
    "recovery",
    "split",
  ],
  dependencies: [],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
