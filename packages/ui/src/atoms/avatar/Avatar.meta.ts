import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "avatar",
  displayName: "Avatar",
  version: "1.0.0",
  addedAt: "2026-08-30",
  description: "Accessible Avatar primitive adapted from shadcn/ui.",
  tags: ["avatar", "primitive", "accessible"],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
} satisfies ComponentMeta;
