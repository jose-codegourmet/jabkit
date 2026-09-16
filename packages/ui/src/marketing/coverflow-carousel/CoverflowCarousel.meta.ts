import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "coverflow-carousel",
  displayName: "CoverflowCarousel",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "Edge-to-edge rack of square covers with inverse 3D perspective: the centre sits square while neighbours swing their outer edges forward. Drag, flick, or arrow through; the caption follows.",
  sectionCategory: "gallery",
  purpose:
    "Lets a landing show a catalogue of sleeves, portraits, or stills as a tactile inverse coverflow instead of a flat strip.",
  bestFor: [
    "album or edition launches",
    "studio portfolio landings",
    "campaign galleries with a short stack of hero stills",
  ],
  avoidFor: [
    "long catalogues that need search and filters",
    "product grids that must show every item at once",
    "dashboards where 3D motion would fight the task",
  ],
  tone: ["editorial", "modern", "confident"],
  industries: ["media", "ecommerce", "entertainment"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "carousel",
    alignment: "center",
    columns: 5,
  },
  slots: ["covers", "caption", "controls"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "logos"],
  recommendedBefore: ["testimonials", "pricing", "cta"],
  inspoUrl: "https://21st.dev/@ruixen.ui/components/coverflow-carousel",
  tags: [
    "coverflow",
    "carousel",
    "gallery",
    "covers",
    "3d",
    "marketing",
    "drag",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
