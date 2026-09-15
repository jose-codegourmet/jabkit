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
  usedIn: [
    {
      site: "minimal",
      role: "Services FAQs from faqCategories.",
    },
    {
      site: "neo-brutalism",
      role: "Engagement FAQs on the services page.",
    },
    {
      site: "editorial",
      role: "Membership FAQs below the plan preview.",
    },
    {
      site: "luxury",
      role: "House and stay FAQs on the house page.",
    },
    {
      site: "retro",
      role: "Home, guide, and pricing FAQs; the home instance is restyled through home.module.css.",
    },
  ],
  tags: ["faq", "marketing", "accordion", "sidebar", "docs", "help", "landing"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1280 },
} satisfies ComponentMeta;
