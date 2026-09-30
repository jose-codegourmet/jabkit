import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atoms/accordion";
import { WithPlaceholders } from "../../_components/Placeholder";
import type { FaqItem } from "./content";
import styles from "./faq.module.css";

/**
 * One FAQ group. Several answers can be open at once; closed answers stay
 * findable with the browser's find-in-page (hiddenUntilFound).
 */
export function FaqGroupAccordion({
  groupId,
  items,
  openFirst = false,
}: {
  groupId: string;
  items: readonly FaqItem[];
  openFirst?: boolean;
}) {
  const values = items.map((_, index) => `${groupId}-${index + 1}`);
  return (
    <Accordion
      className={styles.accordion}
      defaultValue={openFirst ? values.slice(0, 1) : []}
      hiddenUntilFound
      multiple
    >
      {items.map((item, index) => (
        <AccordionItem
          className={styles.item}
          key={item.question}
          value={values[index]}
        >
          <AccordionTrigger className={styles.trigger}>
            {item.question}
          </AccordionTrigger>
          <AccordionContent className={styles.answer}>
            <p>
              <WithPlaceholders text={item.answer} />
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
