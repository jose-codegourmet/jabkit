import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "marker",
  displayName: "Marker",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Displays an inline status, system note, bordered row, or labeled separator in a conversation.",
  sectionCategory: "content",
  purpose:
    "Marks status updates, tool activity, and labeled breaks in a thread without owning the full message chrome.",
  bestFor: [
    "streaming or in-progress chat status",
    "system notes and tool activity",
    "date and section breaks in a conversation",
  ],
  avoidFor: [
    "primary navigation",
    "full chat bubbles that need avatars and timestamps",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["icon", "content"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/marker",
  tags: ["marker", "chat", "status", "separator", "atom"],
  dependencies: ["@base-ui/react", "lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    width: 420,
    height: 360,
    capture: { viewport: { width: 480, height: 420 } },
  },
} satisfies ComponentMeta;
