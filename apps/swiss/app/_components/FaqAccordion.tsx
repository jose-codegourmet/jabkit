"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/atoms/accordion";
import { type FaqItem, faqGroups, getFaqItems } from "../_data/faq";
import styles from "../style.module.css";

export function FaqAccordion({
  groups,
  itemIds,
}: {
  groups?: Array<(typeof faqGroups)[number]>;
  itemIds?: string[];
}) {
  const items: FaqItem[] = itemIds
    ? getFaqItems(itemIds)
    : (groups ?? faqGroups).flatMap((group) => group.items);
  return (
    <Accordion className={styles.faq}>
      {items.map((item) => (
        <AccordionItem className={styles.faqItem} key={item.id} value={item.id}>
          <AccordionTrigger className={styles.faqTrigger}>
            {item.question}
          </AccordionTrigger>
          <AccordionContent className={styles.faqContent}>
            <p>{item.answer}</p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
