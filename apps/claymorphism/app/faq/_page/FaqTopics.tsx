"use client";

import { useCallback, useEffect, useState } from "react";
import { ClaySurface } from "../../_components/ClaySurface";
import { FaqAccordion } from "../../_components/FaqAccordion";
import { faqGroups } from "../../_data/faq";
import styles from "./faq.module.css";

export function FaqTopics() {
  const [activeId, setActiveId] = useState(faqGroups[0]?.id ?? "");
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => setReducedMotion(media.matches);
    update();
    media.addEventListener("change", update);
    return () => media.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const nodes = faqGroups
      .map((group) => document.getElementById(group.id))
      .filter((node): node is HTMLElement => node !== null);
    if (!nodes.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        const next = visible[0]?.target.id;
        if (next) setActiveId(next);
      },
      { rootMargin: "-18% 0px -62% 0px", threshold: [0, 0.15, 0.4] },
    );

    for (const node of nodes) observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const scrollToGroup = useCallback(
    (id: string) => {
      const node = document.getElementById(id);
      if (!node) return;
      setActiveId(id);
      node.scrollIntoView({
        behavior: reducedMotion ? "auto" : "smooth",
        block: "start",
      });
    },
    [reducedMotion],
  );

  return (
    <div className={styles.layout}>
      <nav aria-label="FAQ categories" className={styles.rail}>
        <ul className={styles.railList}>
          {faqGroups.map((group) => (
            <li key={group.id}>
              <a
                aria-current={activeId === group.id ? "true" : undefined}
                className={styles.railLink}
                href={`#${group.id}`}
                onClick={(event) => {
                  event.preventDefault();
                  scrollToGroup(group.id);
                }}
              >
                {group.title}
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className={styles.groups}>
        {faqGroups.map((group) => {
          const headingId = `${group.id}-heading`;
          return (
            <section
              aria-labelledby={headingId}
              className={styles.group}
              id={group.id}
              key={group.id}
            >
              <h2 className="jk-heading" id={headingId}>
                {group.title}
              </h2>
              <ClaySurface className={styles.panel}>
                <FaqAccordion items={group.items} />
              </ClaySurface>
            </section>
          );
        })}
      </div>
    </div>
  );
}
