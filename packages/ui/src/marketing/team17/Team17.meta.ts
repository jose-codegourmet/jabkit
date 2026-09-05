import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "team17",
  displayName: "Team17",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Documentary team block with a 3:4 portrait grid, flowing alumni and collaborator name lists, and a two-column culture band.",
  tags: [
    "team",
    "marketing",
    "portraits",
    "alumni",
    "collaborators",
    "culture",
    "landing",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1800 },
} satisfies ComponentMeta;
