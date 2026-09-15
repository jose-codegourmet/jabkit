import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "newsletter-5",
  displayName: "Newsletter5",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Newsletter capture on a large-radius muted plate with a radial grid, square email field, and a sharp subscribe action.",
  sectionCategory: "cta",
  purpose:
    "Closes a marketing page with a focused email capture that keeps the grid and type as the visual, not a pill form.",
  bestFor: [
    "product landings that need a mid-page or closing newsletter",
    "editorial product letters",
    "pages that want a square form on a soft plate",
  ],
  avoidFor: [
    "footers that already own the email field",
    "dense multi-field subscribe flows",
  ],
  tone: ["editorial", "confident", "clean"],
  contentDensity: "low",
  visualWeight: "medium",
  layout: {
    type: "split",
    alignment: "left",
    columns: 5,
  },
  slots: [
    "eyebrow",
    "headline",
    "description",
    "newsletterForm",
    "reassurance",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["features", "blog", "testimonials"],
  recommendedBefore: ["footer"],
  tags: [
    "newsletter",
    "marketing",
    "subscribe",
    "form",
    "cta",
    "landing",
    "grid",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 720 },
} satisfies ComponentMeta;
