import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "shop-animated-button",
  displayName: "ShopAnimatedButton",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Pill Explore/CTA control whose label and arrow slide on hover, matching the Mugsys Mugs shopping layout.",
  sectionCategory: "action",
  purpose:
    "Gives storefront heroes and collection headers a motion-forward primary action without leaving semantic tokens.",
  bestFor: [
    "collection explore CTAs",
    "shop hero actions",
    "commerce landing buttons",
  ],
  avoidFor: ["destructive actions", "dense application toolbars"],
  tone: ["playful", "bold"],
  industries: ["retail", "ecommerce"],
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
  inspoUrl: "https://codepen.io/jakebogan01/pen/pvNWZWr",
  tags: ["button", "cta", "shop", "motion", "atom"],
  dependencies: ["@radix-ui/react-slot", "lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
