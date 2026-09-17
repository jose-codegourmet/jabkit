import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "breadcrumb",
  displayName: "Breadcrumb",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Displays the path to the current resource using a hierarchy of links.",
  sectionCategory: "navigation",
  purpose:
    "Shows where a page sits in the site hierarchy so people can step back to a parent section without the main nav.",
  bestFor: [
    "docs and settings nested pages",
    "product or category paths",
    "admin screens with a parent list",
  ],
  avoidFor: [
    "primary site navigation",
    "single-level pages with no parent trail",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "inline",
    alignment: "left",
  },
  slots: ["list", "item", "link", "page", "separator", "ellipsis"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  inspoUrl: "https://ui.shadcn.com/docs/components/base/breadcrumb",
  tags: ["breadcrumb", "navigation", "path", "hierarchy", "atom"],
  dependencies: ["@base-ui/react", "lucide-react"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 360 } },
  },
} satisfies ComponentMeta;
