import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { artistHref, formatLength, getArtist } from "../_data/artists";
import { formatTime, scheduleTeaser } from "../_data/schedule";
import { getStage } from "../_data/stages";
import shared from "../style.module.css";
import { scheduleCopy } from "./content";
import styles from "./home.module.css";

/** Read-only preview of the first four Day 1 sets. Transactional register: no decoration. */
export function ScheduleTeaser() {
  return (
    <section
      aria-labelledby="home-schedule-title"
      className={cn(shared.section, styles.split)}
    >
      <div className={styles.splitText}>
        <h2 className="jk-heading" id="home-schedule-title">
          {scheduleCopy.title}
        </h2>
        <p className="jk-body">{scheduleCopy.body}</p>
        <Link
          className={shared.textLink}
          href={scheduleCopy.link.href as Route}
        >
          {scheduleCopy.link.label}
          <span aria-hidden="true"> →</span>
        </Link>
      </div>

      <div className={cn(shared.quietPanel, styles.tablePanel)}>
        <table className={styles.table}>
          <caption className={styles.tableCaption}>
            {scheduleCopy.caption}
          </caption>
          <thead>
            <tr>
              {scheduleCopy.columns.map((column) => (
                <th key={column} scope="col">
                  {column}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {scheduleTeaser.map((set) => {
              const artist = getArtist(set.slug);
              const stage = getStage(set.stageId);
              return (
                <tr key={set.slug}>
                  <td className={styles.tableTime}>
                    <time>{formatTime(set.startMinutes)}</time>
                  </td>
                  <th className={styles.tableAct} scope="row">
                    <a className={styles.tableLink} href={artistHref(set.slug)}>
                      {artist?.name ?? set.slug}
                    </a>
                  </th>
                  <td>{stage.name}</td>
                  <td className={styles.tableLength}>
                    {formatLength(set.endMinutes - set.startMinutes)}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
