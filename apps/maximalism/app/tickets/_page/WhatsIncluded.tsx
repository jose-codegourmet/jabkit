import { cn } from "@/lib/cn";
import { Placeholder } from "../../_components/Placeholder";
import styles from "../../style.module.css";
import { included } from "./content";
import local from "./tickets.module.css";

/** Section 3: plain definition list, the same for every pass. */
export function WhatsIncluded() {
  return (
    <section
      aria-labelledby="included-heading"
      className={cn(styles.quietPanel, local.block)}
    >
      <h2 className={local.blockHeading} id="included-heading">
        {included.heading}
      </h2>
      <dl className={local.included}>
        <div className={local.includedGroup}>
          <dt className={local.includedTerm}>{included.includedLabel}</dt>
          {included.items.map((item) => (
            <dd className={local.includedItem} key={item}>
              <span aria-hidden="true" className={local.includedMark}>
                ✓
              </span>
              <span>
                <Placeholder text={item} />
              </span>
            </dd>
          ))}
        </div>
        <div className={local.includedGroup}>
          <dt className={local.includedTerm}>{included.notIncludedLabel}</dt>
          <dd className={local.includedItem}>
            <span
              aria-hidden="true"
              className={cn(local.includedMark, local.includedMarkNo)}
            >
              ✕
            </span>
            <span>
              <Placeholder text={included.notIncluded} />
            </span>
          </dd>
        </div>
      </dl>
    </section>
  );
}
