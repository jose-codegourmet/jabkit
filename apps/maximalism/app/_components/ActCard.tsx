"use client";

import { cn } from "@/lib/cn";
import {
  type Artist,
  artistHref,
  dayLabel,
  formatLength,
} from "../_data/artists";
import { getStage } from "../_data/stages";
import styles from "../style.module.css";
import { DayBadge, PlanBadge, StageBadge } from "./Badges";
import { MaxImage } from "./MaxImage";
import { usePlan } from "./usePlan";

export type ActCardProps = {
  artist: Artist;
  /** "sm" for related sets and dense rails. */
  size?: "md" | "sm";
  headingLevel?: "h2" | "h3" | "h4";
  /** Card tilt direction, for a hand-placed poster wall. Only applies while motion plays. */
  tilt?: -1 | 1;
  priority?: boolean;
  className?: string;
};

/**
 * Poster-style act card (adapts @/marketing/tilted-card). The act name is always
 * visible text; tilt only happens on hover/focus while motion is playing.
 */
export function ActCard({
  artist,
  size = "md",
  headingLevel: Heading = "h3",
  tilt = 1,
  priority = false,
  className,
}: ActCardProps) {
  const { has } = usePlan();
  const inPlan = has(artist.slug);
  const stage = getStage(artist.stageId);

  return (
    <article
      className={cn(
        styles.actCard,
        size === "sm" && styles.actCardSm,
        className,
      )}
      data-in-plan={inPlan ? "true" : undefined}
      data-tilt={tilt}
    >
      <div className={styles.actArt}>
        <MaxImage
          alt=""
          decorative
          id={artist.imageId}
          priority={priority}
          ratio={size === "sm" ? "1:1" : "4:5"}
          sizes={
            size === "sm"
              ? "(max-width: 767px) 40vw, 12rem"
              : "(max-width: 639px) 90vw, (max-width: 1023px) 45vw, 22rem"
          }
        />
        {inPlan ? <PlanBadge className={styles.actPlanBadge} /> : null}
      </div>
      <div className={styles.actBody}>
        <Heading className={styles.actName}>{artist.name}</Heading>
        <p className={styles.actGenre}>{artist.genre}</p>
        <div className={styles.actBadges}>
          <DayBadge day={artist.day} />
          <StageBadge stageId={artist.stageId} />
        </div>
        <p className={styles.actTime}>
          <span className="sr-only">Starts </span>
          <time>{artist.start}</time>
          <span aria-hidden="true"> · </span>
          <span>{formatLength(artist.lengthMinutes)}</span>
        </p>
        <a className={styles.actLink} href={artistHref(artist.slug)}>
          See set details
          <span className="sr-only">
            {" "}
            for {artist.name}, {dayLabel(artist.day)}, {stage.name}
          </span>
          <span aria-hidden="true"> →</span>
        </a>
      </div>
    </article>
  );
}
