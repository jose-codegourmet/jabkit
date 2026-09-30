import Link from "next/link";
import { Badge } from "@/atoms/badge";
import type { Film } from "../_data/films";
import { filmHref } from "../_data/films";
import type { Screening } from "../_data/screenings";
import styles from "../style.module.css";
import { StatusLabel } from "./StatusLabel";
import { SwissImage } from "./SwissImage";

export function FilmCard({
  film,
  screening,
}: {
  film: Film;
  screening?: Screening;
}) {
  return (
    <article className={styles.filmCard}>
      <Link
        href={filmHref(film.slug)}
        className={styles.filmLink}
        aria-label={`View ${film.title}`}
      >
        <SwissImage
          id={film.stills.lead}
          ratio="16:9"
          sizes="(max-width: 767px) 100vw, 33vw"
        />
      </Link>
      <div className={styles.filmCardHeader}>
        <span className={styles.filmIndex}>{film.index}</span>
        <div>
          <h3 className={styles.filmTitle}>
            <Link href={filmHref(film.slug)}>{film.title}</Link>
          </h3>
          <div className={styles.filmMeta}>
            <Badge variant="secondary">{film.category}</Badge>
            <span>{film.runtime} min</span>
            <span>
              {film.year} · {film.country}
            </span>
          </div>
        </div>
      </div>
      {screening ? (
        <div className={styles.filmScreening}>
          <span>
            {screening.dayLabel} · {screening.time}
          </span>
          <StatusLabel status={screening.status} />
        </div>
      ) : null}
      <Link href={filmHref(film.slug)} className={styles.filmAction}>
        View film ↗
      </Link>
    </article>
  );
}
