import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "attachment",
  displayName: "Attachment",
  version: "1.0.0",
  addedAt: "2026-09-17",
  description:
    "Displays a file or image attachment with media, metadata, upload state, and actions.",
  sectionCategory: "content",
  purpose:
    "Shows a file or image in composers, threads, and upload lists with status, metadata, and optional actions.",
  bestFor: [
    "chat composer file chips",
    "message thread attachments",
    "upload queues with progress and retry",
  ],
  avoidFor: [
    "full document previews",
    "file managers with folders and bulk selection",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "left",
  },
  slots: ["media", "title", "description", "actions", "trigger"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  recommendedAfter: ["button"],
  inspoUrl: "https://ui.shadcn.com/docs/components/base/attachment",
  tags: ["attachment", "file", "upload", "media", "atom"],
  dependencies: ["@base-ui/react", "lucide-react"],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
    capture: { viewport: { width: 720, height: 640 } },
  },
} satisfies ComponentMeta;
