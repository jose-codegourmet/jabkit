import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "testimonial",
  displayName: "Testimonial",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing social-proof block with stacked quote cards, star ratings, avatars, and a grid layout that shows every review at once.",
  sectionCategory: "testimonials",
  purpose:
    "Puts named customer voices on a landing page so visitors can scan quotes, ratings, and attribution without leaving the page.",
  bestFor: [
    "landing-page social proof",
    "launch pages that need named customer quotes",
    "studio and SaaS marketing sites",
  ],
  avoidFor: [
    "anonymous reviews without attribution",
    "dense documentation where quotes would interrupt reading",
  ],
  tone: ["professional", "confident", "editorial"],
  industries: ["technology", "media", "professional services"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
    columns: 1,
  },
  slots: ["headline", "quotes", "ratings", "avatars", "navigation"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["features", "pricing", "case-studies"],
  recommendedBefore: ["cta", "faq", "footer"],
  tags: [
    "testimonial",
    "reviews",
    "quotes",
    "social-proof",
    "marketing",
    "carousel",
    "stack",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["avatar", "badge", "button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
