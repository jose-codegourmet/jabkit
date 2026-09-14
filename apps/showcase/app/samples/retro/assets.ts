import type { SampleAssetMap } from "../../../lib/design-system-assets";

/** Filled by RET-03 (#260). Empty until Higgsfield series production. */
export const assets = {} as const satisfies SampleAssetMap;

/**
 * Temporary local stills until RET-03 lands. These are existing showcase
 * vendor files, not Higgsfield outputs, and are not listed in provenance.json.
 */
const stubs: Record<string, { src: string; width: number; height: number }> = {
  "ret-hero": {
    src: "/assets/862cb37aa54e557e.webp",
    width: 1920,
    height: 900,
  },
  "ret-c01-a": {
    src: "/assets/d3f9bde61c9a29e7.webp",
    width: 1600,
    height: 1200,
  },
  "ret-c01-b": {
    src: "/assets/c7ce9d3164d2988a.webp",
    width: 720,
    height: 900,
  },
  "ret-c02-a": {
    src: "/assets/8b10f8ca8e999989.webp",
    width: 1600,
    height: 1000,
  },
  "ret-c02-b": {
    src: "/assets/1543ba72d246c0c3.webp",
    width: 1600,
    height: 1000,
  },
  "ret-c03-a": {
    src: "/assets/3a3bdafcc198e463.webp",
    width: 1600,
    height: 1067,
  },
  "ret-c03-b": {
    src: "/assets/6ab18a652c6b3562.webp",
    width: 1800,
    height: 900,
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
