import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-27",
  displayName: "Footer27",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Cinematic landscape footer with a hero CTA, four-column nav, circular socials, and a slammed giant wordmark.",
  sectionCategory: "footer",
  purpose:
    "Closes a marketing page with a photographic hero, pill contact actions, grouped links, and an oversized brand slam.",
  bestFor: [
    "product landings that want a landscape close plus a contact pill",
    "pages that need four-column docs and legal links",
    "dark full-width endings with a giant wordmark",
  ],
  avoidFor: [
    "minimal wordmark-only endings",
    "footers that need a newsletter form instead of a contact pill",
  ],
  tone: ["cinematic", "editorial", "dark"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "split",
    alignment: "left",
    columns: 12,
  },
  slots: [
    "hero",
    "headline",
    "cta",
    "brand",
    "linkColumns",
    "social",
    "copyright",
    "legal",
    "wordmark",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["cta", "contact", "faq", "content"],
  tags: [
    "footer",
    "marketing",
    "landscape",
    "wordmark",
    "landing",
    "dark",
    "social",
    "pill",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 1120 },
} satisfies ComponentMeta;
