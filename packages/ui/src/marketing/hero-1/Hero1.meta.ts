import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hero-1",
  displayName: "Hero1",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Full-bleed dark energy hero with a bottom-left lattice plate, left-aligned headline, rounded-lg CTA with inset arrow, and a footer of copy, scroll cue, and social links.",
  sectionCategory: "hero",
  purpose:
    "Opens an industrial or energy landing page with a dark photographic field, a two-line claim, and a single conversion path.",
  bestFor: [
    "energy and infrastructure landings",
    "industrial product launches",
    "dark full-viewport homepage openers",
  ],
  avoidFor: [
    "dense application screens",
    "light editorial openers that need a photographic sky",
  ],
  tone: ["premium", "industrial", "confident"],
  industries: ["energy", "infrastructure", "manufacturing"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "overlay",
    alignment: "left",
  },
  slots: [
    "brand",
    "navigation",
    "headline",
    "cta",
    "description",
    "scrollCue",
    "social",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["navbar"],
  recommendedBefore: ["features", "stats", "cta"],
  inspoUrl: "https://ui.watermelon.sh/block/hero-1",
  tags: ["hero", "marketing", "cta", "landing", "dark", "photo", "energy"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
