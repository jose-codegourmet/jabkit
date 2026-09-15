import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "button-colorful",
  displayName: "ButtonColorful",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A compact CTA with a chart-token gradient wash that brightens on hover and a sliding arrow.",
  sectionCategory: "action",
  purpose:
    "Marks a primary explore or continue action when a standard solid button needs more color without leaving the token set.",
  bestFor: [
    "hero or section explore CTAs",
    "catalogue and demo entry points",
    "marketing actions that still live in an atom",
  ],
  avoidFor: [
    "destructive or irreversible actions",
    "dense toolbars that need a quiet control",
  ],
  tone: ["playful", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["actionLabel", "trailingIcon"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: ["button", "cta", "action", "gradient", "atom"],
  dependencies: ["@radix-ui/react-slot", "lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
