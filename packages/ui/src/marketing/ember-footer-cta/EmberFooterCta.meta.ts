import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "ember-footer-cta",
  displayName: "EmberFooterCta",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Closing marketing footer with a waitlist form, serif headline, slim link row, and a token-based ember bed along the baseline.",
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
  preview: { layout: "fit", width: 1440, height: 780 },
} satisfies ComponentMeta;
