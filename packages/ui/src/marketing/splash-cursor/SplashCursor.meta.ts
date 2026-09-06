import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "splash-cursor",
  displayName: "SplashCursor",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing canvas that trails ink splashes behind the pointer, mixing semantic token colors and staying still when motion is reduced.",
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
