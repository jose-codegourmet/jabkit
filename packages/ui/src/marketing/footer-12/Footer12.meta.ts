import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-12",
  displayName: "Footer12",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Dark editorial footer with newsletter capture, compact link columns, oversized brand lockup, socials, theme pills, and a language control.",
  sectionCategory: "footer",
  purpose:
    "Closes a marketing page with a subscribe path, grouped links, a large brand lockup, and site chrome for theme and language.",
  bestFor: [
    "product and mail-platform landings",
    "pages that need a newsletter close plus multi-column links",
    "dark full-width endings with a wordmark lockup",
  ],
  avoidFor: [
    "minimal contact-only endings",
    "product shells that should not collect email",
  ],
  tone: ["editorial", "confident", "dark"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "split",
    alignment: "left",
    columns: 2,
  },
  slots: [
    "newsletter",
    "linkColumns",
    "brandMark",
    "wordmark",
    "copyright",
    "social",
    "theme",
    "language",
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
    "wordmark",
    "landing",
    "dark",
    "social",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
