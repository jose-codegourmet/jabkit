import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "awards6",
  displayName: "Awards6",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Milestones ledger with a display heading, labeled columns, and separator rows for title, type, and year.",
  tags: [
    "awards",
    "milestones",
    "marketing",
    "timeline",
    "achievements",
    "landing",
    "grid",
  ],
  dependencies: [],
  registryDependencies: ["separator"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 980 },
} satisfies ComponentMeta;
