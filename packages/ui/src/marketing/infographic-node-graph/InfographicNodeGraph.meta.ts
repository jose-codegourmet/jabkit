import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "infographic-node-graph",
  displayName: "InfographicNodeGraph",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Content-driven node constellation with SVG connectors and a scroll-scrubbed GSAP reveal.",
  sectionCategory: "hero",
  purpose:
    "Lights analytics nodes and draws their links as the visitor scrolls through the Traffo hero.",
  bestFor: [
    "data landing heroes",
    "scroll-linked infographics",
    "product architecture diagrams",
  ],
  tone: ["professional", "bold"],
  industries: ["saas", "analytics"],
  contentDensity: "medium",
  visualWeight: "high",
  layout: { type: "full-width", alignment: "center" },
  slots: ["nodes", "edges", "revealOrder"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://codepen.io/dermalhealth/pen/myORdJX",
  tags: ["infographic", "gsap", "scroll", "graph", "marketing"],
  dependencies: ["gsap", "lucide-react"],
  registryDependencies: ["infographic-node"],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: { layout: "fit", width: 900, height: 900 },
} satisfies ComponentMeta;
