import {
  type ProvenanceManifest,
  sampleAssetsFromManifest,
} from "../../../lib/design-system-assets";
import provenance from "../../../public/assets/design-systems/retro/provenance.json";

export const assets = sampleAssetsFromManifest(
  provenance as ProvenanceManifest,
);

export function sampleImage(
  id: string,
  alt: string,
): { src: string; alt: string; width: number; height: number } {
  const asset = assets[id] ?? assets["ret-hero"];
  return {
    src: asset.src,
    alt,
    width: asset.width,
    height: asset.height,
  };
}
