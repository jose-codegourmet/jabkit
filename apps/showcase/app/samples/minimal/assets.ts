import {
  type ProvenanceManifest,
  sampleAssetsFromManifest,
} from "../../../lib/design-system-assets";
import provenance from "../../../public/assets/design-systems/minimal/provenance.json";

export const assets = sampleAssetsFromManifest(
  provenance as ProvenanceManifest,
);
