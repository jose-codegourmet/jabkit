import {
  type ProvenanceManifest,
  sampleAssetsFromManifest,
} from "../lib/design-system-assets";
import provenance from "../public/assets/design-systems/neo-brutalism/provenance.json";

export const assets = sampleAssetsFromManifest(
  provenance as ProvenanceManifest,
);

export function sampleImage(
  id: string,
  alt: string,
): { src: string; alt: string; width: number; height: number } {
  const asset = assets[id];
  if (!asset) throw new Error(`Missing neo-brutalism image: ${id}`);
  return {
    src: asset.src,
    alt,
    width: asset.width,
    height: asset.height,
  };
}
