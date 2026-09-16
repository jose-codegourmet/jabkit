import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "fisheye-infinite-grid",
  displayName: "FisheyeInfiniteGrid",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Two-axis editorial image wall that wraps seamlessly and bends as one fisheye surface, with weighted drag, wheel, and arrow navigation.",
  sectionCategory: "gallery",
  purpose:
    "Lets a landing present a dense catalogue as a continuous warped field instead of a paged grid or single-axis carousel.",
  bestFor: [
    "studio portfolios",
    "editorial lookbooks",
    "campaign galleries that reward exploration",
  ],
  avoidFor: [
    "catalogues that need search, filters, or precise item targeting",
    "task-heavy product screens where drag would fight scrolling",
    "pages that cannot ship image assets",
  ],
  tone: ["editorial", "experimental", "confident"],
  industries: ["media", "fashion", "entertainment"],
  contentDensity: "high",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "center",
    columns: 4,
  },
  slots: ["tiles", "labels", "vignette"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero"],
  recommendedBefore: ["testimonials", "cta"],
  tags: [
    "gallery",
    "fisheye",
    "infinite",
    "grid",
    "drag",
    "marketing",
    "webgl",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 720 },
} satisfies ComponentMeta;
