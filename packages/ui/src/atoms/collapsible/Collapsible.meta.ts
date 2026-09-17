import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "collapsible",
  displayName: "Collapsible",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "An interactive panel that expands and collapses additional content on demand.",
  sectionCategory: "content",
  purpose:
    "Hides secondary details until someone asks for them, so a row or card can stay compact without losing the extra information.",
  bestFor: [
    "order or shipment details",
    "optional settings fields",
    "nested file or folder lists",
  ],
  avoidFor: [
    "exclusive FAQ groups; use Accordion",
    "content that must stay visible at all times",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["trigger", "content"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/collapsible",
  tags: ["collapsible", "disclosure", "expand", "collapse", "atom"],
  dependencies: ["@base-ui/react"],
  registryDependencies: ["button", "card", "input"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 640 } },
  },
} satisfies ComponentMeta;
