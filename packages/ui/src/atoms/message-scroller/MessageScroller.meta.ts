import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "message-scroller",
  displayName: "MessageScroller",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "A chat transcript scroller that anchors turns, follows streamed replies, and preserves the reader's place.",
  sectionCategory: "content",
  purpose:
    "Owns chat scroll behavior — opening position, turn anchors, live-edge follow, history prepend, and jump controls — without owning messages or transport.",
  bestFor: [
    "assistant and support chat transcripts",
    "streamed replies that must not steal the reader's place",
    "long threads that need jump-to-latest and last-anchor restore",
  ],
  avoidFor: [
    "full-page document scrolling",
    "carousels or snap galleries",
    "virtualized lists that already own the scroll element",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["viewport", "content", "item", "jumpControl"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["message", "marker", "button"],
  inspoUrl: "https://ui.shadcn.com/docs/components/base/message-scroller",
  tags: ["message-scroller", "chat", "scroll", "transcript", "atom"],
  dependencies: ["@shadcn/react", "lucide-react"],
  registryDependencies: ["button", "message", "marker"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 420,
    height: 640,
    capture: { viewport: { width: 480, height: 760 } },
  },
} satisfies ComponentMeta;
