import { DemoBadge } from "../../_components/Badges";
import site from "../../style.module.css";
import { venue } from "./content";
import { InfoBlock } from "./InfoBlock";
import styles from "./info.module.css";
import { LegendSymbol } from "./MapSymbols";
import { mapFeatures } from "./mapData";
import { VenueMap } from "./VenueMap";

const listId = "venue-list";

export function VenueSection() {
  return (
    <InfoBlock id="venue" title={venue.heading} wide>
      <p className={styles.skipToList}>
        <a className={site.textLink} href={`#${listId}`}>
          {venue.listLink}
        </a>
      </p>

      <div className={styles.venueGrid}>
        <div className={styles.venueMapColumn}>
          <VenueMap />

          <div className={styles.legend}>
            <div className={styles.legendHead}>
              <h3 className={styles.subheading}>{venue.legendHeading}</h3>
              <DemoBadge>{venue.legendNote}</DemoBadge>
            </div>
            <ul className={styles.legendList}>
              {mapFeatures.map((feature) => (
                <li className={styles.legendItem} key={feature.key}>
                  <LegendSymbol kind={feature.key} />
                  <span>{feature.label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <section
          aria-labelledby={`${listId}-heading`}
          className={styles.mapList}
          id={listId}
        >
          <h3 className={styles.subheading} id={`${listId}-heading`}>
            {venue.listHeading}
          </h3>
          <p className={styles.mapListNote}>{venue.listNote}</p>
          <dl className={styles.mapListItems}>
            {mapFeatures.map((feature) => (
              <div className={styles.mapListRow} key={feature.key}>
                <dt className={styles.mapListTerm}>
                  <LegendSymbol kind={feature.key} />
                  {feature.label}
                </dt>
                <dd className={styles.mapListDetail}>{feature.location}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>
    </InfoBlock>
  );
}
