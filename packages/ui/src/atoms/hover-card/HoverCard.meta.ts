import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "hover-card",
  displayName: "HoverCard",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Sighted preview of content behind a trigger, composed on Base UI Preview Card.",
  sectionCategory: "overlay",
  purpose:
    "Lets a reader inspect a compact preview of a link or identity without leaving the page.",
  bestFor: [
    "profile previews",
    "link previews",
    "progressive disclosure for sighted users",
  ],
  avoidFor: [
    "required actions that must work without hover",
    "toasts",
    "primary navigation",
  ],
  tone: ["subtle", "clean"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "overlay",
    alignment: "center",
  },
  slots: ["trigger", "previewContent"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["button", "avatar"],
  inspoUrl: "https://ui.shadcn.com/docs/components/base/hover-card",
  tags: ["hover-card", "overlay", "primitive", "accessible", "atom"],
  dependencies: ["@base-ui/react"],
  registryDependencies: ["avatar", "button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 480 } },
  },
} satisfies ComponentMeta;
