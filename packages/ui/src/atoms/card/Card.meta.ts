import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "card",
  displayName: "Card",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description: "Displays a card with header, content, and footer.",
  sectionCategory: "content",
  purpose:
    "Groups a title, supporting copy, body content, and optional actions into one framed surface.",
  bestFor: [
    "login and account forms",
    "feature summaries with a footer action",
    "compact content blocks with a header action",
  ],
  avoidFor: [
    "full-page layouts that should not sit in a framed surface",
    "lists that need a table or data grid",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["header", "title", "description", "action", "content", "footer"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/card",
  tags: ["card", "panel", "content", "container", "atom"],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 520 } },
  },
} satisfies ComponentMeta;
