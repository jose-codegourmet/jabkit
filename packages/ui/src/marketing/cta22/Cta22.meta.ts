import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "cta22",
  displayName: "Cta22",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Marketing CTA with a dark app-download panel, store badges, overlapping phone imagery, and a muted newsletter form in a three-column grid.",
  sectionCategory: "cta",
  purpose:
    "Combines app acquisition and newsletter capture in a visually rich closing conversion section.",
  bestFor: [
    "conversion-focused landing pages",
    "campaign closers",
    "product acquisition",
  ],
  tone: ["bold", "premium", "confident"],
  industries: ["mobile applications", "consumer technology"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "grid",
    alignment: "mixed",
    columns: 3,
  },
  slots: ["headline", "appStoreActions", "phoneMedia", "newsletterForm"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["features", "pricing", "testimonials"],
  recommendedBefore: ["footer"],
  tags: [
    "cta",
    "marketing",
    "download",
    "newsletter",
    "app-store",
    "form",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 780 },
} satisfies ComponentMeta;
