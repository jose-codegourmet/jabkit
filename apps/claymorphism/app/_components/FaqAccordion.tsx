import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atoms/accordion";
import type { FaqItem } from "../_data/types";
import styles from "../style.module.css";
import { PlaceholderText } from "./PlaceholderText";

export type FaqAccordionProps = {
  items: readonly FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <Accordion
      className={className ? `${styles.faq} ${className}` : styles.faq}
    >
      {items.map((item) => (
        <AccordionItem key={item.question} value={item.question}>
          <AccordionTrigger>
            {item.question}
            {item.draft ? <span className={styles.draft}> (draft)</span> : null}
          </AccordionTrigger>
          <AccordionContent>
            <PlaceholderText text={item.answer} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
