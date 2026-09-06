import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "awards6",
  displayName: "Awards6",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Milestones ledger with a display heading, labeled columns, and separator rows for title, type, and year.",
  sectionCategory: "awards",
  purpose:
    "Signals longevity and external recognition in a restrained, scannable record of achievements.",
  bestFor: [
    "agency portfolios",
    "institutional histories",
    "credibility sections",
  ],
  tone: ["editorial", "professional"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "table",
    alignment: "left",
    columns: 3,
  },
  slots: ["headline", "awardName", "awardType", "year"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
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
