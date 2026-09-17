import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "alert",
  displayName: "Alert",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Inline callout for user attention with default and destructive variants, title, description, and an optional action.",
  sectionCategory: "feedback",
  purpose:
    "Keeps important success, warning, and error messages on the current page without blocking the rest of the UI.",
  bestFor: [
    "form save confirmation",
    "payment or billing status",
    "inline error recovery with an action",
  ],
  avoidFor: [
    "temporary toasts that dismiss themselves",
    "modal dialogs that require a decision",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["icon", "title", "description", "action"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/alert",
  tags: ["alert", "callout", "feedback", "status", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 560 } },
  },
} satisfies ComponentMeta;
