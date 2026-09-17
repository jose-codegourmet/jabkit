import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "bubble",
  displayName: "Bubble",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Displays conversational content in a message bubble with variants, alignment, grouping, and reactions.",
  sectionCategory: "content",
  purpose:
    "Frames chat text, short structured replies, and reactions as a self-contained surface without owning the full message chrome.",
  bestFor: [
    "chat and assistant threads",
    "quoted replies and suggestions",
    "compact reaction rows on a message",
  ],
  avoidFor: [
    "full chat interfaces that need avatars, names, and timestamps",
    "long documents that belong in a page section",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["group", "content", "reactions"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/bubble",
  tags: ["bubble", "chat", "message", "conversation", "atom"],
  dependencies: ["@base-ui/react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 420,
    height: 640,
    capture: { viewport: { width: 480, height: 760 } },
  },
} satisfies ComponentMeta;
