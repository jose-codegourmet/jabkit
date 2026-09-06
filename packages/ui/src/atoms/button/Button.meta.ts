import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "button",
  displayName: "Button",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description:
    "A semantic, accessible action button with primary, secondary, ghost, and destructive treatments.",
  sectionCategory: "action",
  purpose:
    "Provides a consistent hierarchy for primary, secondary, quiet, and destructive actions.",
  bestFor: [
    "form submission",
    "primary and secondary actions",
    "destructive confirmations",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["actionLabel", "leadingIcon", "trailingIcon"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: ["button", "cta", "action", "submit", "form", "link"],
  dependencies: ["@radix-ui/react-slot"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { themes: ["light", "dark"] },
  },
} satisfies ComponentMeta;
