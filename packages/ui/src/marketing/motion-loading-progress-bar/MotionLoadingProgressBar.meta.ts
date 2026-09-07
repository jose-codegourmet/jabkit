import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "motion-loading-progress-bar",
  displayName: "MotionLoadingProgressBar",
  version: "1.0.0",
  addedAt: "2026-09-07",
  description:
    "Marketing loading capsule whose fill springs toward discrete progress jumps, still when motion is reduced.",
  sectionCategory: "content",
  purpose:
    "Shows a waiting or sync beat on a landing page as a spring-smoothed bar instead of a spinner or a stepped width snap.",
  bestFor: [
    "launch wait states",
    "asset or catalogue sync moments",
    "onboarding progress on a marketing page",
  ],
  avoidFor: [
    "task consoles that need a native progress control",
    "pages that cannot show indeterminate looping motion",
  ],
  tone: ["minimal", "kinetic", "confident"],
  industries: ["technology", "ecommerce", "media"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["headline", "status", "progress"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["features", "cta"],
  tags: [
    "loading",
    "progress",
    "bar",
    "spring",
    "motion",
    "marketing",
    "wait",
    "landing",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 720,
    capture: {
      format: "gif",
      gifStories: ["Default"],
      gifFrames: 6,
      gifIntervalMs: 420,
      gifDelayMs: 180,
    },
  },
} satisfies ComponentMeta;
