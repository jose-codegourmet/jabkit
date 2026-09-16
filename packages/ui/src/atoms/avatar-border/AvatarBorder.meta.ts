import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "avatar-border",
  displayName: "AvatarBorder",
  version: "1.1.0",
  addedAt: "2026-09-07",
  description:
    "Circular identity avatar with a static offset outline and a verification check badge.",
  sectionCategory: "identity",
  purpose:
    "Highlights a verified person or brand with a theme-aware outline and a compact check badge in lists and headers.",
  bestFor: [
    "profile photos in headers",
    "author bylines that need extra emphasis",
    "online presence and member cards",
  ],
  avoidFor: [
    "large galleries of faces",
    "decorative images that are not identity",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["image", "fallback", "ring", "verification badge"],
  capabilities: {
    supportsImage: true,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: false,
    supportsDarkMode: true,
  },
  recommendedAfter: ["avatar"],
  inspoUrl: "https://21st.dev/@shadcnspace/components/avatar-border",
  tags: ["avatar", "border", "identity", "ring", "atom"],
  dependencies: ["lucide-react"],
  registryDependencies: ["avatar"],
  a11y: { keyboardNav: false, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
