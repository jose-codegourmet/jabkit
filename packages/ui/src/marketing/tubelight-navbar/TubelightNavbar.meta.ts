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
    "Provides compact primary navigation with a conspicuous animated indicator for the active destination. A bottom-dock composition needs reserved page space and matching document scroll padding so the last content is not covered.",
  bestFor: [
    "primary site navigation",
    "floating bottom docks",
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
  usedIn: [
    {
      site: "retro",
      role: "Floating paper tab dock at the foot of the page; activeName from usePathname, restyled through navigation.module.css.",
    },
  ],
  inspoUrl: "https://21st.dev/community/components?preview=%2F%40ayushmxxn%2Fcomponents%2Ftubelight-navbar",
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
