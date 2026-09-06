import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "cta28",
  displayName: "Cta28",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Dark enterprise CTA with a serif headline, two-column icon capability grid, wide action, and a layered photo collage on extra-wide layouts.",
  sectionCategory: "cta",
  purpose:
    "Closes an enterprise narrative with capability reassurance, a prominent action, and premium editorial imagery.",
  bestFor: [
    "conversion-focused landing pages",
    "campaign closers",
    "product acquisition",
  ],
  tone: ["bold", "premium", "confident"],
  industries: ["enterprise technology", "professional services"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "split",
    alignment: "mixed",
    columns: 2,
  },
  slots: ["headline", "capabilities", "primaryCTA", "imageCollage"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["features", "pricing", "testimonials"],
  recommendedBefore: ["footer"],
  tags: ["cta", "marketing", "enterprise", "photography", "landing", "split"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1600, height: 880 },
} satisfies ComponentMeta;
