import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "drawer",
  displayName: "Drawer",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Accessible swipeable drawer with trigger, overlay, header, description, and footer composed on Base UI.",
  sectionCategory: "overlay",
  purpose:
    "Slides a focused task or detail sheet from an edge of the viewport while the page stays in place.",
  bestFor: [
    "mobile sheets",
    "side filters",
    "confirmations that should feel lighter than a dialog",
    "nested or snap-point sheets",
  ],
  avoidFor: ["toasts", "inline help", "centered desktop dialogs"],
  tone: ["professional", "focused"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "overlay",
    alignment: "center",
  },
  slots: ["trigger", "title", "description", "content", "actions"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["button"],
  inspoUrl: "https://ui.shadcn.com/docs/components/base/drawer",
  tags: ["drawer", "sheet", "overlay", "primitive", "accessible"],
  dependencies: ["@base-ui/react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 800, height: 520 } },
  },
} satisfies ComponentMeta;
