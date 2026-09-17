import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "message",
  displayName: "Message",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Lays out a conversation row with optional avatar, header, footer, and start or end alignment.",
  sectionCategory: "content",
  purpose:
    "Owns chat-row chrome around a bubble so sender, alignment, status, and actions stay consistent in a thread.",
  bestFor: [
    "chat and assistant threads",
    "grouped consecutive messages from one sender",
    "rows with names, delivery status, or actions",
  ],
  avoidFor: [
    "standalone alerts that do not sit in a conversation",
    "full scroll containers; pair with a scroller at the page level",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["avatar", "header", "content", "footer", "group"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["bubble", "avatar", "marker"],
  inspoUrl: "https://ui.shadcn.com/docs/components/base/message",
  tags: ["message", "chat", "conversation", "avatar", "atom"],
  dependencies: [],
  registryDependencies: ["avatar", "bubble", "marker"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 420,
    height: 640,
    capture: { viewport: { width: 480, height: 760 } },
  },
} satisfies ComponentMeta;
