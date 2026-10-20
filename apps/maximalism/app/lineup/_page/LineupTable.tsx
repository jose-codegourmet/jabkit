"use client";

import { DayBadge, PlanBadge, StageBadge } from "../../_components/Badges";
import { usePlan } from "../../_components/usePlan";
import { type Artist, artistHref, formatLength } from "../../_data/artists";
import styles from "../../style.module.css";
import { lineupTable } from "./content";
import page from "./lineup.module.css";

/**
 * List view: the stable, semantic fallback for the card wall. Quiet surface,
 * no decoration; scrolls inside its own container on narrow screens.
 */
export function LineupTable({ acts }: { acts: readonly Artist[] }) {
  const { has } = usePlan();
  const { columns } = lineupTable;

  return (
    <section
      aria-label={lineupTable.scrollLabel}
      className={page.tableScroll}
      // biome-ignore lint/a11y/noNoninteractiveTabindex: a horizontally scrollable region must be reachable by keyboard.
      tabIndex={0}
    >
      <table className={page.table}>
        <caption className="sr-only">{lineupTable.caption}</caption>
        <thead>
          <tr>
            <th scope="col">{columns.act}</th>
            <th scope="col">{columns.genre}</th>
            <th scope="col">{columns.day}</th>
            <th scope="col">{columns.stage}</th>
            <th scope="col">{columns.start}</th>
            <th scope="col">{columns.length}</th>
          </tr>
        </thead>
        <tbody>
          {acts.map((artist) => (
            <tr key={artist.slug}>
              <th className={page.actCell} scope="row">
                <a className={styles.textLink} href={artistHref(artist.slug)}>
                  {artist.name}
                </a>
                {has(artist.slug) ? (
                  <PlanBadge className={page.tablePlanBadge} />
                ) : null}
              </th>
              <td>{artist.genre}</td>
              <td>
                <DayBadge day={artist.day} />
              </td>
              <td>
                <StageBadge stageId={artist.stageId} />
              </td>
              <td className={page.numeric}>
                <time>{artist.start}</time>
              </td>
              <td className={page.numeric}>
                {formatLength(artist.lengthMinutes)}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </section>
  );
}
