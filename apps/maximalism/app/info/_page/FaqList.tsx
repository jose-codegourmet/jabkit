"use client";

import { ChevronDownIcon } from "@radix-ui/react-icons";
import type { Route } from "next";
import Link from "next/link";
import { useId, useState } from "react";
import { Placeholder } from "../../_components/Placeholder";
import type { FaqEntry } from "./content";
import styles from "./info.module.css";

/** Answer copy with an optional inline link on the first match of `link.text`. */
function Answer({ entry }: { entry: FaqEntry }) {
  const { answer, link } = entry;
  const at = link ? answer.indexOf(link.text) : -1;
  if (!link || at === -1) return <Placeholder text={answer} />;
  return (
    <>
      <Placeholder text={answer.slice(0, at)} />
      <Link className={styles.answerLink} href={link.href as Route}>
        {link.text}
      </Link>
      <Placeholder text={answer.slice(at + link.text.length)} />
    </>
  );
}

/**
 * FAQ disclosure list adapted from the faq12 pattern: each question is an h3
 * wrapping a button that controls its answer panel. All start closed.
 */
export function FaqList({ items }: { items: FaqEntry[] }) {
  const baseId = useId();
  const [open, setOpen] = useState<ReadonlySet<number>>(() => new Set());

  function toggle(index: number) {
    setOpen((current) => {
      const next = new Set(current);
      if (next.has(index)) next.delete(index);
      else next.add(index);
      return next;
    });
  }

  return (
    <div className={styles.faqList}>
      {items.map((item, index) => {
        const isOpen = open.has(index);
        const panelId = `${baseId}-a${index}`;
        return (
          <div className={styles.faqRow} key={item.question}>
            <h3 className={styles.faqQuestion}>
              <button
                aria-controls={panelId}
                aria-expanded={isOpen}
                className={styles.faqTrigger}
                onClick={() => toggle(index)}
                type="button"
              >
                <span>{item.question}</span>
                <ChevronDownIcon
                  aria-hidden="true"
                  className={styles.faqChevron}
                />
              </button>
            </h3>
            <div className={styles.faqPanel} data-open={isOpen} id={panelId}>
              <p>
                <Answer entry={item} />
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
