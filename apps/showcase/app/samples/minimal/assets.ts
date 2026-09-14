import type { SampleAssetMap } from "../../../lib/design-system-assets";

/** Filled by MIN-03 (#260). Empty until Higgsfield series production. */
export const assets = {} as const satisfies SampleAssetMap;

/**
 * Temporary local stills until MIN-03 lands. These are existing showcase
 * vendor files, not Higgsfield outputs, and are not listed in provenance.json.
 */
const stubs: Record<string, { src: string; width: number; height: number }> = {
  "min-hero": {
    src: "/assets/862cb37aa54e557e.webp",
    width: 1920,
    height: 900,
  },
  "min-p01-a": {
    src: "/assets/d3f9bde61c9a29e7.webp",
    width: 1600,
    height: 1200,
  },
  "min-p01-b": {
    src: "/assets/97c532d558fa4fbc.webp",
    width: 1200,
    height: 1500,
  },
  "min-p02-a": {
    src: "/assets/6ab18a652c6b3562.webp",
    width: 1800,
    height: 900,
  },
  "min-p02-b": {
    src: "/assets/c7ce9d3164d2988a.webp",
    width: 720,
    height: 900,
  },
  "min-p03-a": {
    src: "/assets/8b10f8ca8e999989.webp",
    width: 1600,
    height: 1000,
  },
  "min-p03-b": {
    src: "/assets/462c849dc9a41e59.webp",
    width: 900,
    height: 1200,
  },
  "min-p04-a": {
    src: "/assets/0d5b296cb8b10e6a.webp",
    width: 1400,
    height: 1000,
  },
  "min-p04-b": {
    src: "/assets/6cc11e462a9aaded.webp",
    width: 900,
    height: 1200,
  },
  "min-p05-a": {
    src: "/assets/e8b49d7b4617a825.webp",
    width: 1200,
    height: 900,
  },
  "min-p05-b": {
    src: "/assets/1a2d35c6581e840f.webp",
    width: 1400,
    height: 1800,
  },
  "min-p06-a": {
    src: "/assets/6746a1f6081b08db.webp",
    width: 1600,
    height: 2000,
  },
  "min-p06-b": {
    src: "/assets/e9d88fab9e45c86f.webp",
    width: 1600,
    height: 2000,
  },
  "min-studio": {
    src: "/assets/1cb3a6dc0974b11f.webp",
    width: 1600,
    height: 2000,
  },
  "min-profile": {
    src: "/assets/bd48582e630a15fa.webp",
    width: 160,
    height: 160,
  },
};

const fallback = {
  src: "/assets/862cb37aa54e557e.webp",
  width: 1920,
  height: 900,
} as const;

export function sampleImage(
  id: string,
  alt: string,
): { src: string; alt: string; width: number; height: number } {
  const stub = stubs[id] ?? fallback;
  return { src: stub.src, alt, width: stub.width, height: stub.height };
}
