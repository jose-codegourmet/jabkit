import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "pricing28",
  displayName: "Pricing28",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Four-plan pricing section with avatar social proof, monthly/yearly billing tabs, tooltips, and grouped feature lists.",
  tags: [
    "pricing",
    "marketing",
    "plans",
    "billing",
    "tabs",
    "avatars",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["avatar", "badge", "button", "tooltip"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
