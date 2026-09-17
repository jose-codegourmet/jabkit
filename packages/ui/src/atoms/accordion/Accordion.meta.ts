import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "accordion",
  displayName: "Accordion",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Vertically stacked headings that reveal and hide related content, with single or multiple open items.",
  sectionCategory: "content",
  purpose:
    "Lets people scan a list of questions or sections and open only the answers they need without leaving the page.",
  bestFor: [
    "FAQ lists",
    "settings groups",
    "progressive disclosure of long copy",
  ],
  avoidFor: [
    "primary navigation",
    "content that must stay visible at all times",
  ],
  tone: ["clean", "professional"],
  contentDensity: "medium",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["trigger", "content"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/accordion",
  tags: ["accordion", "disclosure", "faq", "collapse", "atom"],
  dependencies: ["@base-ui/react", "lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 560 } },
  },
} satisfies ComponentMeta;
