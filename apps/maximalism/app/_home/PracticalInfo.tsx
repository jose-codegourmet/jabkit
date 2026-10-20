import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { homeInfoLinks, infoHref } from "../_data/info";
import shared from "../style.module.css";
import { infoCopy } from "./content";
import styles from "./home.module.css";

/** Plain, high-contrast link list on ink. No imagery. */
export function PracticalInfo() {
  return (
    <section
      aria-labelledby="home-info-title"
      className={cn(shared.section, shared.inkPanel, styles.info)}
    >
      <h2 className={cn("jk-heading", styles.infoTitle)} id="home-info-title">
        {infoCopy.title}
      </h2>
      <ul className={styles.infoList}>
        {homeInfoLinks.map((section) => (
          <li key={section.id}>
            <Link
              className={styles.infoLink}
              href={infoHref(section.id) as Route}
            >
              <span className={styles.infoLabel}>
                {section.label}
                <span aria-hidden="true"> →</span>
              </span>
              <span className={styles.infoBlurb}>{section.homeBlurb}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
