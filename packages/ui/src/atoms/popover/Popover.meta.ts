import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "popover",
  displayName: "Popover",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Accessible popover that shows rich content in a portal, triggered by a button.",
  sectionCategory: "overlay",
  purpose:
    "Surfaces contextual content next to a trigger without taking over the page like a modal.",
  bestFor: ["quick views", "inline settings", "contextual forms"],
  avoidFor: ["full-page workflows", "toasts", "persistent page content"],
  tone: ["professional", "focused"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "overlay",
    alignment: "center",
  },
  slots: ["trigger", "title", "description", "content"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["button"],
  inspoUrl: "https://ui.shadcn.com/docs/components/base/popover",
  tags: ["popover", "overlay", "primitive", "accessible"],
  dependencies: ["@base-ui/react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
