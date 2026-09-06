import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "cursor-grid",
  displayName: "CursorGrid",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Marketing canvas lattice that lights cells around the cursor with configurable falloff and click pulses, honoring prefers-reduced-motion.",
  tags: [
    "marketing",
    "animation",
    "canvas",
    "cursor",
    "grid",
    "hero",
    "interactive",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 720 },
} satisfies ComponentMeta;
