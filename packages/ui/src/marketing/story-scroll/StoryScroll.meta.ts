import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "story-scroll",
  displayName: "StoryScroll",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Full-viewport marketing chapters that pin and stack on scroll, with huge type, hairlines, and semantic tone surfaces.",
  sectionCategory: "content",
  purpose:
    "Turns a landing narrative into a sequence of full-bleed sheets so each claim holds the viewport before the next one covers it.",
  bestFor: [
    "manifesto or brand-story landings",
    "studio and press about pages",
    "launch stories that need one idea per scroll beat",
  ],
  avoidFor: [
    "short heroes with a single claim",
    "forms, pricing tables, or dense docs where pinning hides the next block",
  ],
  tone: ["editorial", "bold", "confident"],
  industries: ["media", "creative", "nonprofit"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "left",
    columns: 1,
  },
  slots: ["headline", "bodyContent", "list"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["features", "cta", "footer"],
  tags: [
    "story",
    "scroll",
    "sticky",
    "chapters",
    "manifesto",
    "marketing",
    "landing",
    "editorial",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
