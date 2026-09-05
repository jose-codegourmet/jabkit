import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "content2",
  displayName: "Content2",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Content-hub explainer with a labeled intro, icon type grid, create and manage how-to panels, and an inline tip alert.",
  tags: [
    "content",
    "marketing",
    "grid",
    "onboarding",
    "cms",
    "docs",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["badge", "separator"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1100 },
} satisfies ComponentMeta;
