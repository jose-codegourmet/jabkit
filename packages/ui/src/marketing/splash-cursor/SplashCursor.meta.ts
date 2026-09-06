import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "splash-cursor",
  displayName: "SplashCursor",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing canvas that trails ink splashes behind the pointer, mixing semantic token colors and staying still when motion is reduced.",
  sectionCategory: "background",
  purpose:
    "Adds expressive pointer-driven fluid motion for a dramatic campaign or creative portfolio surface.",
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
    "cursor",
    "splash",
    "hero",
    "interactive",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 720 },
} satisfies ComponentMeta;
