import {
  type ProvenanceManifest,
  sampleAssetsFromManifest,
} from "../../lib/design-system-assets";
import provenance from "../../public/assets/design-systems/claymorphism/provenance.json";

export const clayAssetIds = [
  "cla-logo-symbol",
  "cla-logo-wordmark",
  "cla-hero",
  "cla-hero-mobile",
  "cla-cta",
  "cla-cta-mobile",
  "cla-background-clay",
  "cla-background-blobs",
  "cla-process-shaping",
  "cla-step-build",
  "cla-step-next",
  "cla-step-celebrate",
  "cla-benefit-owners",
  "cla-benefit-change",
  "cla-benefit-wins",
  "cla-routine-morning",
  "cla-routine-after-school",
  "cla-routine-bedtime",
  "cla-families-hero",
  "cla-families-kids",
  "cla-caregivers",
  "cla-privacy-home",
  "cla-empty-board",
  "cla-404",
] as const;

export type ClayAssetId = (typeof clayAssetIds)[number];

export const assets = sampleAssetsFromManifest(
  provenance as ProvenanceManifest,
);

const placeholderFrame: Record<ClayAssetId, { width: number; height: number }> =
  {
    "cla-logo-symbol": { width: 512, height: 512 },
    "cla-logo-wordmark": { width: 960, height: 320 },
    "cla-hero": { width: 1600, height: 1000 },
    "cla-hero-mobile": { width: 800, height: 1000 },
    "cla-cta": { width: 1600, height: 900 },
    "cla-cta-mobile": { width: 800, height: 1000 },
    "cla-background-clay": { width: 1600, height: 900 },
    "cla-background-blobs": { width: 1600, height: 900 },
    "cla-process-shaping": { width: 1200, height: 1200 },
    "cla-step-build": { width: 1200, height: 1200 },
    "cla-step-next": { width: 1200, height: 1200 },
    "cla-step-celebrate": { width: 1200, height: 1200 },
    "cla-benefit-owners": { width: 1200, height: 900 },
    "cla-benefit-change": { width: 1200, height: 900 },
    "cla-benefit-wins": { width: 1200, height: 900 },
    "cla-routine-morning": { width: 1200, height: 900 },
    "cla-routine-after-school": { width: 1200, height: 900 },
    "cla-routine-bedtime": { width: 1200, height: 900 },
    "cla-families-hero": { width: 1600, height: 900 },
    "cla-families-kids": { width: 1200, height: 1200 },
    "cla-caregivers": { width: 1200, height: 900 },
    "cla-privacy-home": { width: 1200, height: 900 },
    "cla-empty-board": { width: 1200, height: 900 },
    "cla-404": { width: 1200, height: 1200 },
  };

export function isClayAssetId(value: string): value is ClayAssetId {
  return (clayAssetIds as readonly string[]).includes(value);
}

/**
 * Cream clay stand-in used until provenance.json lists a real file.
 * The field matches the claymorphism surface token `--jk-background` (#fff8f0).
 * A data-URI image cannot read CSS variables, so that cream value is inlined.
 */
function creamClayPlaceholder(width: number, height: number): string {
  const svg = [
    `<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">`,
    `<rect width="${width}" height="${height}" fill="#fff8f0"/>`,
    `<ellipse cx="${Math.round(width * 0.42)}" cy="${Math.round(height * 0.58)}" rx="${Math.round(width * 0.28)}" ry="${Math.round(height * 0.22)}" fill="#f6d978"/>`,
    `<ellipse cx="${Math.round(width * 0.64)}" cy="${Math.round(height * 0.46)}" rx="${Math.round(width * 0.18)}" ry="${Math.round(height * 0.16)}" fill="#ff826e"/>`,
    `<ellipse cx="${Math.round(width * 0.36)}" cy="${Math.round(height * 0.4)}" rx="${Math.round(width * 0.16)}" ry="${Math.round(height * 0.14)}" fill="#b7a3ed"/>`,
    `<ellipse cx="${Math.round(width * 0.54)}" cy="${Math.round(height * 0.34)}" rx="${Math.round(width * 0.12)}" ry="${Math.round(height * 0.11)}" fill="#a8dcc4"/>`,
    "</svg>",
  ].join("");
  return `data:image/svg+xml,${encodeURIComponent(svg)}`;
}

export function sampleImage(
  id: string,
  alt: string,
): { src: string; alt: string; width: number; height: number } {
  const asset = assets[id];
  if (asset) {
    return {
      src: asset.src,
      alt,
      width: asset.width,
      height: asset.height,
    };
  }

  const frame = isClayAssetId(id)
    ? placeholderFrame[id]
    : { width: 1200, height: 900 };

  return {
    src: creamClayPlaceholder(frame.width, frame.height),
    alt,
    width: frame.width,
    height: frame.height,
  };
}
