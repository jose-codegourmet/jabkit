import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "dialog",
  displayName: "Dialog",
  version: "1.1.1",
  addedAt: "2026-08-30",
  description:
    "Accessible modal dialog with trigger, overlay, header, description, and footer composed on Base UI.",
  sectionCategory: "overlay",
  purpose:
    "Moves a focused task or decision into a modal layer while preserving the surrounding page context.",
  bestFor: [
    "focused workflows",
    "confirmations",
    "quick views",
    "full-screen navigation overlays",
  ],
  avoidFor: ["toasts", "inline help", "persistent page content"],
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
  usedIn: [
    {
      site: "minimal",
      role: "Full-screen project index; showCloseButton is false and local CSS overrides the centered-dialog translate utilities.",
    },
    {
      site: "luxury",
      role: "Full-screen photographic room menu; showCloseButton is false and local CSS overrides the centered-dialog translate utilities.",
    },
  ],
  tags: ["dialog", "modal", "overlay", "primitive", "accessible"],
  dependencies: ["@base-ui/react", "lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 800, height: 520 } },
  },
} satisfies ComponentMeta;
