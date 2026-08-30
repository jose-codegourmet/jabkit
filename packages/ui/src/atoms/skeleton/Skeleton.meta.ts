import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "skeleton",
  displayName: "Skeleton",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Skeleton primitive adapted from shadcn/ui.",
  tags: ["skeleton", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
