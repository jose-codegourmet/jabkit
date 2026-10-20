import type { StickerTone } from "../../../_components/Sticker";
import { type Artist, dayLabel, formatLength } from "../../../_data/artists";
import { getStage, type StageId } from "../../../_data/stages";

/** Artist page copy (brief: Artist — /lineup/[slug]). Keep it verbatim. */
export const artistCopy = {
  breadcrumb: {
    label: "Breadcrumb",
    root: { label: "Lineup", href: "/lineup" },
  },
  facts: {
    day: "Day:",
    stage: "Stage:",
    starts: "Starts:",
    length: "Set length:",
  },
  demoLabel: "Demo act",
  secondary: { label: "Choose your ticket", href: "/tickets" },
  about: {
    heading: (name: string) => `About ${name}`,
    listeningLinks: "[Listening links — artist to supply]",
  },
  related: {
    heading: (stage: string) => `Also on ${stage} this day`,
    empty: "No other demo sets on this stage today.",
    emptyLink: { label: "Browse the full schedule.", href: "/schedule" },
  },
  stageStrip: {
    link: "See all sets on this stage",
  },
} as const;

export const artistNotFoundCopy = {
  heading: "That act isn't on this lineup.",
  body: "It may have been a typo, or it was never booked. Here's everyone who is.",
  button: { label: "See the full lineup", href: "/lineup" },
  listLabel: "Everyone on the demo lineup",
  imageId: "max-404",
} as const;

export function artistSeo(artist: Artist) {
  const stage = getStage(artist.stageId).name;
  const day = dayLabel(artist.day);
  return {
    title: `${artist.name} — ${day}, ${stage} — FULL VOLUME (demo)`,
    description: `${artist.name} plays ${stage} on ${day} at ${artist.start} for ${formatLength(artist.lengthMinutes)}. Demo act at FULL VOLUME, a two-day music and visual arts festival.`,
  };
}

/** Sticker colours that stay loud against each stage's band colour. */
export const stageStickerTones: Record<
  StageId,
  { star: StickerTone; knob: StickerTone; bolt: StickerTone }
> = {
  "loud-stage": { star: "lime", knob: "cobalt", bolt: "lime" },
  "glow-tent": { star: "lime", knob: "pink", bolt: "pink" },
  "low-end-room": { star: "lime", knob: "tangerine", bolt: "tangerine" },
  "open-air-deck": { star: "pink", knob: "cobalt", bolt: "lime" },
};
