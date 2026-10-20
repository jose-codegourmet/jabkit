import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { DemoBadge } from "../../../_components/Badges";
import { DemoNotice } from "../../../_components/DemoNotice";
import { MaxImage } from "../../../_components/MaxImage";
import { PlanButton } from "../../../_components/PlanButton";
import { Sticker } from "../../../_components/Sticker";
import { type Artist, dayLabel, formatLength } from "../../../_data/artists";
import { getStage } from "../../../_data/stages";
import styles from "./artist.module.css";
import { artistCopy, stageStickerTones } from "./content";

/**
 * Act header: a loud stage-coloured poster band. Copy and the solid cream facts
 * card come first in the DOM (and on mobile); the 4:5 artwork sits left on wide
 * screens with stickers on its edges, never over the copy or controls.
 */
export function ArtistHeader({ artist }: { artist: Artist }) {
  const stage = getStage(artist.stageId);
  const tones = stageStickerTones[artist.stageId];
  const facts = [
    { term: artistCopy.facts.day, value: dayLabel(artist.day) },
    { term: artistCopy.facts.stage, value: stage.name },
    {
      term: artistCopy.facts.starts,
      value: <time>{artist.start}</time>,
    },
    {
      term: artistCopy.facts.length,
      value: formatLength(artist.lengthMinutes),
    },
  ];

  return (
    <section
      aria-labelledby="artist-heading"
      className={styles.header}
      data-stage={artist.stageId}
    >
      <div className={styles.headerCopy}>
        <div className={styles.titleBlock}>
          <h1 className={styles.title} id="artist-heading">
            {artist.name}
          </h1>
          <p className={styles.genre}>{artist.genre}</p>
        </div>

        <div className={styles.factsCard}>
          <DemoBadge className={styles.demoBadge}>
            {artistCopy.demoLabel}
          </DemoBadge>
          <dl className={styles.facts}>
            {facts.map((fact) => (
              <div className={styles.fact} key={fact.term}>
                <dt className={styles.factTerm}>{fact.term}</dt>
                <dd className={styles.factValue}>{fact.value}</dd>
              </div>
            ))}
          </dl>
          <div className={styles.actions}>
            <PlanButton
              actName={artist.name}
              slug={artist.slug}
              variant="large"
            />
            <Button asChild size="lg" variant="secondary">
              <Link href="/tickets">{artistCopy.secondary.label}</Link>
            </Button>
          </div>
        </div>

        <DemoNotice className={styles.demoNotice} variant="inline" />
      </div>

      <div className={styles.art}>
        <div aria-hidden="true" className={styles.artBacking} />
        <div aria-hidden="true" className={styles.artBackingHalftone} />
        <div className={styles.artFrame}>
          <MaxImage
            id={artist.imageId}
            priority
            ratio="4:5"
            sizes="(max-width: 899px) 92vw, 36rem"
          />
        </div>
        <Sticker
          className={cn(styles.artSticker, styles.artStickerStar)}
          motion="spin"
          rotate={14}
          shape="star"
          size="clamp(3.75rem, 9vw, 6.5rem)"
          tone={tones.star}
        />
        <Sticker
          className={cn(styles.artSticker, styles.artStickerKnob)}
          motion="drift"
          rotate={-10}
          shape="knob"
          size="clamp(3.5rem, 8vw, 5.5rem)"
          tone={tones.knob}
        />
        <Sticker
          className={cn(styles.artSticker, styles.artStickerArrow)}
          motion="drift"
          rotate={-24}
          shape="arrow"
          size="clamp(3.5rem, 7vw, 5rem)"
          tone="cream"
        />
      </div>
    </section>
  );
}
