import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "pricing28",
  displayName: "Pricing28",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Four-plan pricing section with avatar social proof, monthly/yearly billing tabs, tooltips, and grouped feature lists.",
  sectionCategory: "pricing",
  purpose:
    "Supports plan selection by comparing four subscriptions, billing periods, included features, and adoption proof.",
  bestFor: [
    "comparing subscription tiers",
    "self-serve SaaS sales",
    "transparent product pricing",
  ],
  avoidFor: [
    "single-offer businesses",
    "sales processes where pricing must remain private",
  ],
  tone: ["professional", "structured", "trustworthy"],
  industries: ["SaaS", "technology"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "cards",
    alignment: "left",
    columns: 4,
  },
  slots: [
    "headline",
    "description",
    "billingToggle",
    "pricingPlans",
    "price",
    "planFeatures",
    "planCTA",
    "socialProof",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["features", "comparison", "testimonials"],
  recommendedBefore: ["faq", "cta"],
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
