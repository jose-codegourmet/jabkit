import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "serious-stingray",
  displayName: "SeriousStingray",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "A text CTA whose accent rails grow from opposite edges on hover and focus.",
  sectionCategory: "action",
  purpose:
    "Marks a quiet text action when a filled button would be too heavy but the control still needs a clear hover cue.",
  bestFor: [
    "inline navigation or continue links styled as buttons",
    "editorial or marketing text actions",
    "secondary CTAs next to a solid primary",
  ],
  avoidFor: [
    "primary form submit actions that need a filled hit target",
    "destructive confirms that need a solid warning surface",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
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
  tags: ["button", "cta", "action", "underline", "atom"],
  dependencies: ["@radix-ui/react-slot"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
