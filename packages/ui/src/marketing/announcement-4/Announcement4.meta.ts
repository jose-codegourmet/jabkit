import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "announcement-4",
  displayName: "Announcement4",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Slim launch bar with clipped primary blooms, a small-radius glass CTA, and a dismiss control.",
  sectionCategory: "content",
  purpose:
    "Surfaces a temporary product update above the page without stealing the hero, using a tinted strip and a glass action.",
  bestFor: [
    "version launches and changelog teasers",
    "thin site-wide notices above a hero",
    "pages that need a dismissible update without a modal",
  ],
  avoidFor: [
    "legal consent banners",
    "multi-step upgrade flows",
    "full-width campaign heroes",
  ],
  tone: ["confident", "clean", "product"],
  contentDensity: "low",
  visualWeight: "low",
  layout: { type: "stack", alignment: "center" },
  slots: ["message", "cta", "dismiss"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["hero", "features"],
  tags: [
    "announcement",
    "banner",
    "marketing",
    "cta",
    "dismiss",
    "launch",
    "changelog",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 240 },
} satisfies ComponentMeta;
