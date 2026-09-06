import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "scanner",
  displayName: "Scanner",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing canvas of interference bands that sweep like an oscilloscope, tinted with semantic tokens and still when motion is reduced.",
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
