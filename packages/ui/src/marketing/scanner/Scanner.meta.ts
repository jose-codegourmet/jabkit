import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "scanner",
  displayName: "Scanner",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing canvas of interference bands that sweep like an oscilloscope, tinted with semantic tokens and still when motion is reduced.",
  sectionCategory: "background",
  purpose:
    "Creates a technical, signal-processing atmosphere for a backdrop or experimental campaign moment.",
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
    "scanner",
    "background",
    "hero",
    "interactive",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 720 },
} satisfies ComponentMeta;
