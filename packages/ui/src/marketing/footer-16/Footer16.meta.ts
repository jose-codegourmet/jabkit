import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "footer-16",
  displayName: "Footer16",
  version: "1.0.0",
  addedAt: "2026-09-15",
  description:
    "Cinematic landscape footer with a faded giant wordmark, three link columns, socials, and legal links over a photographic close.",
  sectionCategory: "footer",
  purpose:
    "Closes a marketing page with a wide landscape band, an oversized brand ghost, grouped navigation, and a legal strip.",
  bestFor: [
    "growth and studio landings that want a photographic close",
    "pages that need three-column links without a newsletter form",
    "dark full-width endings with a giant wordmark",
  ],
  avoidFor: [
    "minimal wordmark-only endings",
    "product shells that need a subscribe form in the footer",
  ],
  tone: ["cinematic", "editorial", "dark"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: {
    type: "split",
    alignment: "left",
    columns: 4,
  },
  slots: [
    "background",
    "wordmark",
    "brand",
    "tagline",
    "linkColumns",
    "copyright",
    "social",
    "legal",
  ],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["cta", "contact", "faq", "content"],
  inspoUrl: "https://ui.watermelon.sh/block/footer-16",
  tags: [
    "footer",
    "marketing",
    "landscape",
    "wordmark",
    "landing",
    "dark",
    "social",
  ],
  dependencies: [],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 980 },
} satisfies ComponentMeta;
