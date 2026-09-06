import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "team17",
  displayName: "Team17",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Documentary team block with a 3:4 portrait grid, flowing alumni and collaborator name lists, and a two-column culture band.",
  sectionCategory: "team",
  purpose:
    "Documents the wider community around a team, including current members, alumni, collaborators, and culture.",
  bestFor: ["company about pages", "culture sections", "recruiting pages"],
  tone: ["human", "editorial", "professional"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "mixed",
  },
  slots: [
    "headline",
    "memberPortraits",
    "alumniNames",
    "collaboratorNames",
    "cultureStory",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["about", "stats"],
  recommendedBefore: ["cta", "footer"],
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
