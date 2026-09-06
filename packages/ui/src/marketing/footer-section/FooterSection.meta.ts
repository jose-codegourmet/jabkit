import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-section",
  displayName: "FooterSection",
  version: "1.0.0",
  addedAt: "2026-09-06",
  description:
    "Site footer with a newsletter field, quick links, contact details, social marks, a light/dark toggle, and a legal row.",
  sectionCategory: "footer",
  purpose:
    "Combines site closure, newsletter capture, theme control, contact information, and secondary navigation.",
  bestFor: [
    "marketing site closure",
    "secondary navigation",
    "contact and legal information",
  ],
  tone: ["professional", "trustworthy"],
  contentDensity: "medium",
  visualWeight: "medium",
  layout: {
    type: "grid",
    alignment: "left",
  },
  slots: [
    "brand",
    "linkGroups",
    "contactDetails",
    "legalLinks",
    "conversionForm",
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
    "marketing",
    "newsletter",
    "links",
    "social",
    "theme",
    "landing",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: ["button", "input", "label"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 820 },
} satisfies ComponentMeta;
