import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { MaxImage } from "../_components/MaxImage";
import { Sticker } from "../_components/Sticker";
import { stageScheduleHref, stages } from "../_data/stages";
import shared from "../style.module.css";
import { stagesCopy } from "./content";
import styles from "./home.module.css";

/** Four stage cards on a halftone band: 1-up mobile, 2-up tablet, 4-up desktop. */
export function StagesGrid() {
  return (
    <section
      aria-labelledby="home-stages-title"
      className={cn(shared.section, styles.stages)}
    >
      <div aria-hidden="true" className={styles.stagesTexture}>
        <MaxImage
          className={styles.stagesTextureImage}
          decorative
          id="max-background-halftone"
          ratio="1:1"
          sizes="100vw"
        />
      </div>
      <Sticker
        className={styles.stagesSticker}
        motion="spin"
        shape="knob"
        size="clamp(3rem, 6vw, 4.5rem)"
        tone="cobalt"
      />

      <div className={styles.stagesHead}>
        <h2 className="jk-heading" id="home-stages-title">
          {stagesCopy.title}
        </h2>
      </div>

      <ul className={styles.stageGrid}>
        {stages.map((stage) => (
          <li key={stage.id}>
            <article className={styles.stageCard} data-stage={stage.id}>
              <MaxImage
                className={styles.stageArt}
                id={stage.imageId}
                ratio="3:2"
                sizes="(max-width: 639px) 90vw, (max-width: 1099px) 45vw, 20rem"
              />
              <div className={styles.stageBody}>
                <h3 className={styles.stageName}>{stage.name}</h3>
                <p className={styles.stageText}>{stage.description}</p>
                <Link
                  className={shared.textLink}
                  href={stageScheduleHref(stage.id) as Route}
                >
                  {stagesCopy.link}
                  <span className="sr-only">: {stage.name}</span>
                  <span aria-hidden="true"> →</span>
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
