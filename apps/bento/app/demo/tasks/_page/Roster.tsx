import { BentoGrid, Tile } from "../../../_components/Bento";
import { offTodayLine, onShiftToday, rosterLines } from "../../../_data/staff";
import { rosterCopy } from "./content";
import styles from "./tasks.module.css";

/** Static roster cards (no hover): the dashboard's Team tile links here. */
export function Roster() {
  const headingId = `${rosterCopy.id}-heading`;
  return (
    <section
      aria-labelledby={headingId}
      className={styles.roster}
      id={rosterCopy.id}
    >
      <h2 className={styles.sectionTitle} id={headingId}>
        {rosterCopy.title}
      </h2>
      <BentoGrid as="ul">
        {onShiftToday.map((person, index) => {
          const [name, ...rest] = rosterLines[index].split(" — ");
          return (
            <Tile
              as="li"
              key={person.id}
              kind="static"
              span={3}
              surfaceClassName={styles.rosterCard}
            >
              <span aria-hidden="true" className={styles.initial}>
                {person.name.charAt(0)}
              </span>
              <p className={styles.rosterLine}>
                <span className={styles.rosterName}>{name}</span>
                {` — ${rest.join(" — ")}`}
              </p>
            </Tile>
          );
        })}
      </BentoGrid>
      <p className={styles.offToday}>{offTodayLine}</p>
    </section>
  );
}
