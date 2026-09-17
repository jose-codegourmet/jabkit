import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "aspect-ratio",
  displayName: "AspectRatio",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description: "Displays content within a desired ratio.",
  sectionCategory: "content",
  purpose:
    "Locks media or framed content to a fixed width-to-height ratio so layouts stay stable as the container resizes.",
  bestFor: [
    "video embeds",
    "hero and card images",
    "thumbnails that must stay 16:9, 1:1, or 9:16",
  ],
  avoidFor: ["fluid text blocks", "content that should grow with its height"],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["media"],
  capabilities: {
    supportsImage: true,
    supportsVideo: true,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/aspect-ratio",
  tags: ["aspect-ratio", "media", "image", "video", "atom"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 560 } },
  },
} satisfies ComponentMeta;
