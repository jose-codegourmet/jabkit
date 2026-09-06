import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "team14",
  displayName: "Team14",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Split hiring section with a bordered statement panel, ghost CTA, and a row of tall member portraits that becomes a looping carousel on small screens.",
  sectionCategory: "team",
  purpose:
    "Pairs team visibility with a hiring message so culture and recruitment reinforce each other.",
  bestFor: ["company about pages", "culture sections", "recruiting pages"],
  tone: ["human", "editorial", "professional"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "split",
    alignment: "left",
    columns: 2,
  },
  slots: [
    "hiringStatement",
    "careersCTA",
    "memberPortraits",
    "memberNames",
    "memberRoles",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["about", "stats"],
  recommendedBefore: ["cta", "footer"],
  tags: [
    "team",
    "marketing",
    "hiring",
    "portraits",
    "carousel",
    "cta",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
