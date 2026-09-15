import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "average-swan",
  displayName: "AverageSwan",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A soft neumorphic action button that sits raised at rest and presses into the surface on activate.",
  sectionCategory: "action",
  purpose:
    "Gives a tactile, inset-press control for quiet confirmations without leaving the semantic token set.",
  bestFor: [
    "soft confirm and continue actions",
    "settings and preference panels",
    "playful product UI that still needs a native button",
  ],
  avoidFor: [
    "destructive or irreversible actions",
    "dense toolbars that cannot spare the raised shadow",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["actionLabel"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: ["button", "cta", "action", "neumorphic", "atom"],
  dependencies: ["@radix-ui/react-slot"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
