import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "tubelight-navbar",
  displayName: "TubelightNavbar",
  version: "1.0.0",
  addedAt: "2026-09-05",
  description:
    "Floating pill navigation with a sliding active highlight and a primary-token tubelight glow on the current item.",
  sectionCategory: "navbar",
  purpose:
    "Provides compact primary navigation with a conspicuous animated indicator for the active destination.",
  bestFor: [
    "primary site navigation",
    "responsive marketing sites",
    "commerce discovery",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "centered",
    alignment: "center",
  },
  slots: ["navigationItems", "activeItem"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedBefore: ["hero", "content"],
  tags: [
    "navbar",
    "marketing",
    "navigation",
    "header",
    "pill",
    "tabs",
    "mobile",
  ],
  dependencies: ["lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 420 },
} satisfies ComponentMeta;
