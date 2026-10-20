import { Placeholder } from "../../_components/Placeholder";
import { safety } from "./content";
import { InfoBlock } from "./InfoBlock";
import styles from "./info.module.css";
import { LegendSymbol } from "./MapSymbols";

export function SafetySection() {
  return (
    <InfoBlock id="safety" title={safety.heading}>
      <ul className={styles.plainList}>
        {safety.items.map((item) => (
          <li
            className={styles.plainItem}
            data-marker={item.welfareMarker ? "welfare" : undefined}
            key={item.text}
          >
            {item.welfareMarker ? <LegendSymbol kind="welfare" /> : null}
            <span>
              {item.lead ? (
                <>
                  <strong className={styles.itemLead}>{item.lead}</strong>{" "}
                </>
              ) : null}
              <Placeholder text={item.text} />
            </span>
          </li>
        ))}
      </ul>
    </InfoBlock>
  );
}
