import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "button",
  displayName: "Button",
  version: "1.0.1",
  addedAt: "2026-08-30",
  description:
    "A semantic, accessible action button with primary, secondary, ghost, and destructive treatments.",
  sectionCategory: "action",
  purpose:
    "Provides a consistent hierarchy for primary, secondary, quiet, and destructive actions.",
  bestFor: [
    "form submission",
    "primary and secondary actions",
    "destructive confirmations",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["actionLabel", "leadingIcon", "trailingIcon"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  usedIn: [
    {
      site: "minimal",
      role: "Hero and page CTAs, inquiry submit, work-filter chips via asChild links, and case prev/next.",
    },
    {
      site: "neo-brutalism",
      role: "Page CTAs, brief submit, work-search reset, and case prev/next.",
    },
    {
      site: "editorial",
      role: "Page CTAs, archive filters, membership preview, and story/contributor not-found actions.",
    },
    {
      site: "luxury",
      role: "Page CTAs and stay-inquiry submit.",
    },
    {
      site: "retro",
      role: "Page CTAs, collection filters, and plan-preview actions.",
    },
  ],
  tags: ["button", "cta", "action", "submit", "form", "link"],
  dependencies: ["@radix-ui/react-slot"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { themes: ["light", "dark"] },
  },
} satisfies ComponentMeta;
