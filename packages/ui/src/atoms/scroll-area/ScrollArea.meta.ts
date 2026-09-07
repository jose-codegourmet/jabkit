import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "scroll-area",
  displayName: "ScrollArea",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "A focusable overflow region with token-styled scrollbars for clipped lists and panels.",
  sectionCategory: "content",
  purpose:
    "Keeps long or wide content inside a bounded frame while preserving keyboard access and theme-aware scrollbars.",
  bestFor: [
    "file and document lists",
    "sidebar panels",
    "tag rows that overflow",
  ],
  avoidFor: ["full-page document scrolling", "carousels with snap points"],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["content"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: ["scroll", "overflow", "scrollbar", "list", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 560 } },
  },
} satisfies ComponentMeta;
