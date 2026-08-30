import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "badge",
  displayName: "Badge",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Badge primitive adapted from shadcn/ui.",
  tags: ["badge", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
