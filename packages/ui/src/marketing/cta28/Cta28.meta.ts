import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "cta28",
  displayName: "Cta28",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Dark enterprise CTA with a serif headline, two-column icon capability grid, wide action, and a layered photo collage on extra-wide layouts.",
  tags: ["cta", "marketing", "enterprise", "photography", "landing", "split"],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1600, height: 880 },
} satisfies ComponentMeta;
