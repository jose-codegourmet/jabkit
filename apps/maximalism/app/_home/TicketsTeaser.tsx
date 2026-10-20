import type { Route } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { Placeholder } from "../_components/Placeholder";
import { feeNote, passes } from "../_data/tickets";
import shared from "../style.module.css";
import { ticketsCopy } from "./content";
import styles from "./home.module.css";

/** Quiet pricing summary (adapts @/marketing/pricing28): plain rows, nothing over prices. */
export function TicketsTeaser() {
  return (
    <section
      aria-labelledby="home-tickets-title"
      className={cn(shared.section, shared.quietPanel, styles.tickets)}
    >
      <div className={styles.ticketsIntro}>
        <h2 className="jk-heading" id="home-tickets-title">
          {ticketsCopy.title}
        </h2>
        <p className={styles.ticketsNote}>{feeNote}</p>
        <div className={shared.buttonRow}>
          <Button asChild size="lg">
            <Link href={ticketsCopy.button.href as Route}>
              {ticketsCopy.button.label}
            </Link>
          </Button>
        </div>
      </div>

      <ul className={styles.passList}>
        {passes.map((pass) => (
          <li className={styles.passRow} key={pass.id}>
            <h3 className={styles.passName}>{pass.name}</h3>
            <p className={styles.passTeaser}>{pass.teaser}</p>
            <p className={styles.passPrice}>
              <span className="sr-only">Price: </span>
              <Placeholder text={pass.pricePlaceholder} />
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
