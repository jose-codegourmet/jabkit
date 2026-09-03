import type { ComponentMeta } from "@jabkit/build-registry";

export default {
  name: "code-example14",
  displayName: "CodeExample14",
  version: "1.0.0",
  addedAt: "2026-09-03",
  description:
    "File-ops marketing section with a dotted radial wash, dual CTAs, accordion rows for create/update/delete, and a synced TypeScript snippet with copy.",
  tags: [
    "code",
    "example",
    "marketing",
    "accordion",
    "docs",
    "sdk",
    "cta",
    "files",
    "landing",
  ],
  dependencies: [],
  registryDependencies: ["button"],
  a11y: { keyboardNav: true, reducedMotion: true },
  preview: { layout: "fit", width: 1440, height: 900 },
} satisfies ComponentMeta;
