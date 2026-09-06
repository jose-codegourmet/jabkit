import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "shape-grid",
  displayName: "ShapeGrid",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing canvas of drifting outlined tiles — square, hexagon, circle, or triangle — that fill on hover and rest when motion is reduced.",
  sectionCategory: "background",
  purpose:
    "Provides a playful geometric backdrop that reacts to the pointer while leaving foreground messaging in control.",
  bestFor: ["experimental heroes", "creative portfolios", "campaign backdrops"],
  avoidFor: [
    "content-heavy pages",
    "interfaces where pointer effects would distract from tasks",
  ],
  tone: ["experimental", "technical", "energetic"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "full-width",
    alignment: "center",
  },
  slots: ["backgroundSurface"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  tags: [
    "marketing",
    "animation",
    "canvas",
    "grid",
    "shapes",
    "background",
    "hero",
    "interactive",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 720 },
} satisfies ComponentMeta;
