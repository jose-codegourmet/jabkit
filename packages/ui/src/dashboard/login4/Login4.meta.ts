import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "login4",
  displayName: "Login4",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Centered borderless login with email, password, and full-width Google, Facebook, and GitHub buttons.",
  tags: ["auth", "dashboard", "form", "login", "oauth", "social"],
  dependencies: [],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
