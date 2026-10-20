import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { MaxImage } from "../../../_components/MaxImage";
import { Sticker } from "../../../_components/Sticker";
import { type Stage, stageScheduleHref } from "../../../_data/stages";
import shared from "../../../style.module.css";
import styles from "./artist.module.css";
import { artistCopy, stageStickerTones } from "./content";

/** Horizontal stage band: stage artwork beside a solid ink panel. */
export function StageStrip({ stage }: { stage: Stage }) {
  return (
    <section
      aria-labelledby="artist-stage-heading"
      className={cn(shared.section, styles.stageStrip)}
      data-stage={stage.id}
    >
      <div className={styles.stageArt}>
        <MaxImage
          decorative
          id={stage.imageId}
          ratio="16:9"
          sizes="(max-width: 899px) 100vw, 40vw"
        />
        <Sticker
          className={styles.stageSticker}
          motion="drift"
          rotate={12}
          shape="bolt"
          size="clamp(3rem, 6vw, 4.75rem)"
          tone={stageStickerTones[stage.id].bolt}
        />
      </div>
      <div className={styles.stagePanel}>
        <span aria-hidden="true" className={styles.stageSwatch} />
        <h2
          className={cn("jk-heading", styles.stageHeading)}
          id="artist-stage-heading"
        >
          {stage.name}
        </h2>
        <p className={styles.stageDescription}>{stage.description}</p>
        <Link
          className={cn(shared.textLinkOnDark, styles.stageLink)}
          href={stageScheduleHref(stage.id) as Route}
        >
          {artistCopy.stageStrip.link}
          <span aria-hidden="true"> →</span>
        </Link>
      </div>
    </section>
  );
}
