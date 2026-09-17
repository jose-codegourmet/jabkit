import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "alert-dialog",
  displayName: "AlertDialog",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "A modal that interrupts the page to confirm a destructive or high-impact action before it proceeds.",
  sectionCategory: "overlay",
  purpose:
    "Stops the current flow and asks for an explicit cancel or confirm decision when the next step cannot be undone.",
  bestFor: [
    "delete confirmations",
    "irreversible account actions",
    "permission prompts",
  ],
  avoidFor: [
    "toasts",
    "non-blocking status",
    "forms that should stay on the page",
  ],
  tone: ["professional", "focused"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "overlay",
    alignment: "center",
  },
  slots: ["trigger", "media", "title", "description", "actions"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["button"],
  inspoUrl: "https://ui.shadcn.com/docs/components/base/alert-dialog",
  tags: ["alert-dialog", "modal", "confirm", "overlay", "atom"],
  dependencies: ["@base-ui/react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 800, height: 520 } },
  },
} satisfies ComponentMeta;
