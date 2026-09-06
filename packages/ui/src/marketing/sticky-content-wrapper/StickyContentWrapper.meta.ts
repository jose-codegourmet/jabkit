import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "sticky-content-wrapper",
  displayName: "StickyContentWrapper",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Split-screen marketing tour that pins a viewport while copy steps through headings, lists, and a CTA and the paired image scales and swaps.",
  sectionCategory: "features",
  purpose:
    "Keeps one product claim on screen while proof, rooms, or steps change beside it, without leaving semantic tokens.",
  bestFor: [
    "product tours on landing pages",
    "lookbook or residence stories",
    "feature walkthroughs with a still per beat",
  ],
  avoidFor: [
    "short pages with a single image",
    "forms or dense docs where pinning would hide the next section",
  ],
  tone: ["editorial", "premium", "confident"],
  industries: ["ecommerce", "real-estate", "media"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "split",
    alignment: "left",
    columns: 2,
  },
  slots: ["headline", "bodyContent", "list", "cta", "featureVisuals"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["gallery", "testimonials", "cta"],
  tags: [
    "sticky",
    "scroll",
    "split",
    "marketing",
    "features",
    "image",
    "cta",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
