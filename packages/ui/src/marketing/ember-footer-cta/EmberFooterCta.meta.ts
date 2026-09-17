import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "ember-footer-cta",
  displayName: "EmberFooterCta",
  version: "1.1.0",
  addedAt: "2026-09-06",
  description:
    "Animated ember footer with a waitlist form, dark radial canvas bed, slim link row, and success transition.",
  sectionCategory: "footer",
  purpose:
    "Ends a page with atmospheric brand expression, a focused waitlist conversion, and essential links.",
  bestFor: [
    "marketing site closure",
    "secondary navigation",
    "contact and legal information",
  ],
  tone: ["professional", "trustworthy"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: [
    "headline",
    "waitlistForm",
    "footerLinks",
    "legalText",
    "decorativeEmbers",
  ],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: true,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["cta", "contact", "faq", "content"],
  inspoUrl: "https://21st.dev/@serafimcloud/components/ember-footer-cta",
  tags: [
    "footer",
    "cta",
    "marketing",
    "waitlist",
    "newsletter",
    "form",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "fit",
    width: 1440,
    height: 780,
    capture: { waitMs: 500 },
  },
} satisfies ComponentMeta;
