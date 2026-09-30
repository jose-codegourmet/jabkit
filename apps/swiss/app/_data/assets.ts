import {
  type ProvenanceManifest,
  sampleAssetsFromManifest,
} from "../../lib/design-system-assets";
import provenance from "../../public/assets/design-systems/swiss/provenance.json";

export const swissImageIds = [
  "swi-logo-symbol",
  "swi-logo-wordmark",
  "swi-hero",
  "swi-film-quiet-current-a",
  "swi-film-quiet-current-b",
  "swi-film-between-stations-a",
  "swi-film-between-stations-b",
  "swi-film-small-suns-a",
  "swi-film-small-suns-b",
  "swi-venue-cinema-one",
  "swi-venue-hall-b",
  "swi-cta",
  "swi-cta-mobile",
  "swi-background-paper",
  "swi-process-projection",
  "swi-material-print",
  "swi-about-talk",
  "swi-404-frame",
] as const;

export type SwissImageId = (typeof swissImageIds)[number];

export const imageAlt: Record<SwissImageId, string> = {
  "swi-logo-symbol": "FRAME/01 slash-index symbol",
  "swi-logo-wordmark": "FRAME/01",
  "swi-hero": "City facade at dusk arranged as a grid of lit windows",
  "swi-film-quiet-current-a":
    "Person standing beside a slow river through an industrial town",
  "swi-film-quiet-current-b":
    "Hands lowering a glass sample jar into a gray-green river",
  "swi-film-between-stations-a":
    "Two strangers waiting apart on a regional railway platform at night",
  "swi-film-between-stations-b":
    "Passenger reflected in a dark train window at night",
  "swi-film-small-suns-a":
    "Late sunlight crossing a kitchen table with an orange in the light",
  "swi-film-small-suns-b":
    "White sheets drying on a rooftop in low sunset light",
  "swi-venue-cinema-one":
    "Independent cinema auditorium with gray seats and red aisle lights",
  "swi-venue-hall-b":
    "Converted civic hall arranged with chairs for a film screening",
  "swi-cta": "Festival audience settling into a cinema as the lights dim",
  "swi-cta-mobile": "Audience members seen from behind in a darkening cinema",
  "swi-background-paper": "",
  "swi-process-projection":
    "Projectionist preparing a cinema projector before a screening",
  "swi-material-print":
    "Festival program sheets aligned on an uncoated paper stack",
  "swi-about-talk": "Filmmaker conversation in front of a blank cinema screen",
  "swi-404-frame": "",
};

export const assets = sampleAssetsFromManifest(
  provenance as ProvenanceManifest,
);

export function sampleImage(id: SwissImageId, alt = imageAlt[id]) {
  const asset = assets[id];
  if (!asset) throw new Error(`Missing Swiss image: ${id}`);
  return {
    src: asset.src,
    alt,
    width: asset.width,
    height: asset.height,
  };
}
