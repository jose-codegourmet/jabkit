import { cn } from "@/lib/cn";
import { DemoNotice } from "../../_components/DemoNotice";
import { Sticker } from "../../_components/Sticker";
import { header } from "./content";
import styles from "./tickets.module.css";

/** Solid cream ticket-stub header. The only sticker on the page sits in the stub margin. */
export function TicketsHeader() {
  return (
    <section aria-labelledby="tickets-title" className={styles.hero}>
      <div className={styles.heroTicket}>
        <div className={styles.heroCopy}>
          <h1 className={cn("jk-display", styles.heroTitle)} id="tickets-title">
            {header.title}
          </h1>
          <p className={cn("jk-lead", styles.heroBody)}>{header.body}</p>
          <DemoNotice
            className={styles.heroNotice}
            text={header.demoNotice}
            variant="inline"
          />
        </div>
        <div aria-hidden="true" className={styles.heroStub}>
          <Sticker
            className={styles.heroSticker}
            rotate={-10}
            shape="knob"
            size="clamp(3.25rem, 7vw, 5.5rem)"
            tone="lime"
          />
        </div>
      </div>
    </section>
  );
}
