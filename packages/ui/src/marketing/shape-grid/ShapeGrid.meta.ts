import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "shape-grid",
  displayName: "ShapeGrid",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing canvas of drifting outlined tiles — square, hexagon, circle, or triangle — that fill on hover and rest when motion is reduced.",
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
