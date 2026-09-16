import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "skiper-39",
  displayName: "Skiper39",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Full-bleed crowd canvas with a centered uppercase label and walking Open Peeps figures along the lower stage.",
  sectionCategory: "hero",
  purpose:
    "Fills a landing viewport with a living sidewalk so the page feels occupied before the next section.",
  bestFor: [
    "creative studio heroes",
    "event and community landings",
    "campaign pages that want a populated street without photography",
  ],
  avoidFor: [
    "dense documentation",
    "task UI where a moving crowd would compete with controls",
  ],
  tone: ["playful", "experimental", "confident"],
  industries: ["media", "events", "technology"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "center",
  },
  slots: ["label", "crowd"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["features", "cta", "footer"],
  inspoUrl: "https://skiper-ui.com/v1/skiper39",
  tags: [
    "marketing",
    "hero",
    "canvas",
    "crowd",
    "animation",
    "open-peeps",
    "skiper",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 900,
  },
} satisfies ComponentMeta;
