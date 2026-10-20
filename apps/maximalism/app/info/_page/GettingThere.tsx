import { Placeholder } from "../../_components/Placeholder";
import { gettingThere } from "./content";
import { InfoBlock } from "./InfoBlock";
import styles from "./info.module.css";

export function GettingThere() {
  return (
    <InfoBlock id="getting-there" title={gettingThere.heading}>
      <dl className={styles.factList}>
        {gettingThere.items.map((item) => (
          <div className={styles.factRow} key={item.term}>
            <dt className={styles.factTerm}>{item.term}</dt>
            <dd className={styles.factDetail}>
              <Placeholder text={item.detail} />
            </dd>
          </div>
        ))}
      </dl>
    </InfoBlock>
  );
}
