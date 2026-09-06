import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "faq12",
  displayName: "Faq12",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Documentation-style FAQ with a category sidebar, per-topic accordions, and scroll-synced active highlighting.",
  sectionCategory: "faq",
  purpose:
    "Makes a large support or pre-sales question set easy to scan by grouping topics and tracking reading position.",
  bestFor: [
    "pre-sales objections",
    "support hubs",
    "documentation-heavy products",
  ],
  tone: ["informative", "structured", "professional"],
  contentDensity: "high",
  visualWeight: "medium",
  layout: {
    type: "sidebar",
    alignment: "left",
  },
  slots: ["headline", "categories", "questions", "answers"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["pricing", "features"],
  recommendedBefore: ["cta", "footer"],
  tags: ["faq", "marketing", "accordion", "sidebar", "docs", "help", "landing"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1280 },
} satisfies ComponentMeta;
