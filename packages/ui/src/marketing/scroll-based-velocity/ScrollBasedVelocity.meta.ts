import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "scroll-based-velocity",
  displayName: "ScrollBasedVelocity",
  version: "1.0.0",
  addedAt: "2026-09-16",
  description:
    "Two opposing display-type rows that crawl sideways and surge when the page is scrolled.",
  sectionCategory: "content",
  purpose:
    "Turns a short campaign phrase into a kinetic band whose speed tracks scroll so a landing page feels physically tied to the reader.",
  bestFor: [
    "launch and manifesto landings",
    "section breaks between hero and features",
    "studio sites that want a kinetic type strip",
  ],
  avoidFor: [
    "dense documentation",
    "forms or task UI where moving type would compete with controls",
  ],
  tone: ["experimental", "confident", "modern"],
  industries: ["technology", "media", "ecommerce"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["headline"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "navbar"],
  recommendedBefore: ["features", "cta", "footer"],
  tags: [
    "marketing",
    "text",
    "animation",
    "marquee",
    "scroll",
    "velocity",
    "headline",
    "kinetic",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 420 },
} satisfies ComponentMeta;
