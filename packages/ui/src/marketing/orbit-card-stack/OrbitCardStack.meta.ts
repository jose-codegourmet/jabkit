import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "orbit-card-stack",
  displayName: "OrbitCardStack",
  version: "1.0.0",
  addedAt: "2026-09-16",
  description:
    "Collapsed profile deck that fans into an orbit on hover, then lifts the active card without changing its color or angle.",
  sectionCategory: "team",
  purpose:
    "Lets a landing introduce a small studio or product team as a tactile stacked deck instead of a flat grid.",
  bestFor: [
    "studio about pages",
    "small product-team introductions",
    "campaign landings that need one featured profile at a time",
  ],
  avoidFor: [
    "large directories that need search or filters",
    "dashboards where hover fan-out would fight the task",
    "pages that must show every biography at once",
  ],
  tone: ["editorial", "confident", "modern"],
  industries: ["media", "design", "saas"],
  contentDensity: "low",
  visualWeight: "high",
  layout: {
    type: "stack",
    alignment: "center",
    columns: 5,
  },
  slots: ["caption", "portraits", "roles", "bios"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["hero", "about"],
  recommendedBefore: ["testimonials", "cta"],
  inspoUrl: "https://componentry.dev/docs/components/orbit-card-stack",
  tags: ["team", "cards", "stack", "orbit", "hover", "portraits", "marketing"],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
