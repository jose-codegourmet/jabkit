import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "button",
  displayName: "Button",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description:
    "A semantic, accessible action button with primary, secondary, ghost, and destructive treatments.",
  tags: ["button", "cta", "action", "submit", "form", "link"],
  dependencies: ["@radix-ui/react-slot"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { themes: ["light", "dark"] },
  },
} satisfies ComponentMeta;
