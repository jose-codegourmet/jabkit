import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "serious-stingray",
  displayName: "SeriousStingray",
  version: "1.1.0",
  addedAt: "2026-09-15",
  description:
    "A 6px-rounded outline CTA whose circular fill sweeps in from the far corner on hover.",
  sectionCategory: "action",
  purpose:
    "Recreates a compact outlined action whose hover fill arrives as a circle from the opposite corner, without flattening the 6px radius through the shared Button atom.",
  bestFor: [
    "compact secondary actions that still need a clear hover fill",
    "toolbar or card CTAs that should stay outlined at rest",
    "pairs of outline actions next to a solid primary",
  ],
  avoidFor: [
    "full-width form submits that need a filled hit target at rest",
    "icon-only controls that cannot use the 6em by 2.6em frame",
  ],
  tone: ["clean", "professional"],
  contentDensity: "low",
  visualWeight: "low",
  layout: {
    type: "stack",
    alignment: "center",
  },
  slots: ["actionLabel"],
  capabilities: {
    supportsImage: false,
    supportsVideo: false,
    supportsForm: false,
    supportsCTA: true,
    supportsDarkMode: true,
  },
  tags: ["button", "cta", "action", "outline", "wipe", "atom"],
  dependencies: ["@radix-ui/react-slot"],
  registryDependencies: [],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: {
    layout: "center",
  },
} satisfies ComponentMeta;
