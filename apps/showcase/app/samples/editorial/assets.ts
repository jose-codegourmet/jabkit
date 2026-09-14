import {
  type ProvenanceManifest,
  sampleAssetsFromManifest,
} from "../../../lib/design-system-assets";
import provenance from "../../../public/assets/design-systems/editorial/provenance.json";

// EDT-01 can map these locked subjects: st01–03 Places, st04–06 People, st07–09 Rituals.

export const assets = sampleAssetsFromManifest(
  provenance as ProvenanceManifest,
);
