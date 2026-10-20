import { cn } from "@/lib/cn";
import { DemoNotice } from "../../_components/DemoNotice";
import { Placeholder } from "../../_components/Placeholder";
import { Sticker } from "../../_components/Sticker";
import type { TopicId } from "../../_data/contact";
import { ContactForm } from "./ContactForm";
import styles from "./contact.module.css";
import { contactHeader, directContact } from "./content";

const titleId = "contact-title";

/** Seven chunky level bars: a still volume meter that only pulses while motion plays. */
const meterBars = [
  "pink",
  "lime",
  "cobalt",
  "tangerine",
  "pink",
  "lime",
  "cobalt",
] as const;

export function ContactPage({ initialTopic }: { initialTopic: TopicId | "" }) {
  return (
    <div className={styles.page}>
      <section aria-labelledby={titleId} className={styles.header}>
        <div className={styles.headerCopy}>
          <h1 className={cn("jk-display", styles.title)} id={titleId}>
            {contactHeader.title}
          </h1>
          <p className={cn("jk-lead", styles.lead)}>{contactHeader.body}</p>
          <DemoNotice
            className={styles.notice}
            text={contactHeader.notice}
            variant="inline"
          />
        </div>
        <div aria-hidden="true" className={styles.meter}>
          {meterBars.map((tone, index) => (
            <span
              className={styles.meterBar}
              data-tone={tone}
              key={`${tone}-${index.toString()}`}
            />
          ))}
        </div>
        <Sticker
          className={styles.arrow}
          motion="drift"
          rotate={100}
          shape="arrow"
          size="clamp(4rem, 7vw, 6rem)"
          tone="pink"
        />
      </section>

      <div className={styles.layout}>
        <div className={styles.formColumn}>
          <ContactForm
            initialTopic={initialTopic}
            key={initialTopic}
            labelledBy={titleId}
          />
        </div>

        <aside aria-label="Direct contact" className={styles.direct}>
          <p className={styles.directCopy}>
            <span className={styles.directLead}>{directContact.lead}</span>{" "}
            <span className={styles.directLine}>
              <Placeholder text={directContact.line} />
            </span>
          </p>
        </aside>
      </div>
    </div>
  );
}
