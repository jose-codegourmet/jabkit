import type { SampleAssetMap } from "../../../lib/design-system-assets";

/** Filled by LUX-03 (#260). Empty until Higgsfield series production. */
export const assets = {} as const satisfies SampleAssetMap;

/**
 * Temporary local stills until LUX-03 lands. These are existing showcase
 * vendor files, not Higgsfield outputs, and are not listed in provenance.json.
 */
const stubs: Record<string, { src: string; width: number; height: number }> = {
  "lux-hero": {
    src: "/assets/862cb37aa54e557e.webp",
    width: 1920,
    height: 900,
  },
  "lux-room01-a": {
    src: "/assets/d3f9bde61c9a29e7.webp",
    width: 1600,
    height: 1200,
  },
  "lux-room01-b": {
    src: "/assets/c7ce9d3164d2988a.webp",
    width: 720,
    height: 900,
  },
  "lux-room02-a": {
    src: "/assets/462c849dc9a41e59.webp",
    width: 900,
    height: 1200,
  },
  "lux-room02-b": {
    src: "/assets/7cb36691e11ed9af.webp",
    width: 1400,
    height: 1000,
  },
  "lux-room03-a": {
    src: "/assets/97c532d558fa4fbc.webp",
    width: 1200,
    height: 1500,
  },
  "lux-room03-b": {
    src: "/assets/6cc11e462a9aaded.webp",
    width: 1400,
    height: 1800,
  },
  "lux-exp01": {
    src: "/assets/8b10f8ca8e999989.webp",
    width: 1600,
    height: 1000,
  },
  "lux-exp02": {
    src: "/assets/1543ba72d246c0c3.webp",
    width: 1600,
    height: 1000,
  },
  "lux-exp03": {
    src: "/assets/3a3bdafcc198e463.webp",
    width: 1600,
    height: 1067,
  },
  "lux-house": {
    src: "/assets/6ab18a652c6b3562.webp",
    width: 1800,
    height: 900,
  },
  "lux-host": {
    src: "/assets/4132445424a19cc6.webp",
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
