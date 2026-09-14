import type { SampleAssetMap } from "../../../lib/design-system-assets";

/** Filled by EDT-03 (#260). Empty until Higgsfield series production. */
export const assets = {} as const satisfies SampleAssetMap;

/**
 * Temporary local stills until EDT-03 lands. These are existing showcase
 * vendor files, not Higgsfield outputs, and are not listed in provenance.json.
 */
const stubs: Record<string, { src: string; width: number; height: number }> = {
  "edt-st01": {
    src: "/assets/862cb37aa54e557e.webp",
    width: 1920,
    height: 900,
  },
  "edt-st02": {
    src: "/assets/d3f9bde61c9a29e7.webp",
    width: 1600,
    height: 1200,
  },
  "edt-st03": {
    src: "/assets/8b10f8ca8e999989.webp",
    width: 1600,
    height: 1000,
  },
  "edt-st04": {
    src: "/assets/1543ba72d246c0c3.webp",
    width: 1600,
    height: 1000,
  },
  "edt-st05": {
    src: "/assets/3a3bdafcc198e463.webp",
    width: 1600,
    height: 1067,
  },
  "edt-st06": {
    src: "/assets/6ab18a652c6b3562.webp",
    width: 1800,
    height: 900,
  },
  "edt-st07": {
    src: "/assets/0d5b296cb8b10e6a.webp",
    width: 1400,
    height: 1000,
  },
  "edt-st08": {
    src: "/assets/e8b49d7b4617a825.webp",
    width: 1200,
    height: 900,
  },
  "edt-st09": {
    src: "/assets/97c532d558fa4fbc.webp",
    width: 1200,
    height: 1500,
  },
  "edt-detail01": {
    src: "/assets/c7ce9d3164d2988a.webp",
    width: 720,
    height: 900,
  },
  "edt-detail02": {
    src: "/assets/462c849dc9a41e59.webp",
    width: 900,
    height: 1200,
  },
  "edt-detail03": {
    src: "/assets/1a2d35c6581e840f.webp",
    width: 1400,
    height: 1800,
  },
  "edt-author01": {
    src: "/assets/4132445424a19cc6.webp",
    width: 160,
    height: 160,
  },
  "edt-author02": {
    src: "/assets/8e9489842d5e2cdf.webp",
    width: 160,
    height: 160,
  },
  "edt-author03": {
    src: "/assets/60599cf2ed9c77bc.webp",
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
