import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { Faq12 } from "@/marketing/faq12";
import {
  comparisonRows,
  engagements,
  faqCategories,
  startHref,
} from "../content";
import styles from "../style.module.css";
import type { EngagementId } from "../types";
import { engagementIds } from "../types";

export const metadata: Metadata = {
  title: "Services - Good Noise",
  description:
    "Identity Sprint, Full Brand, and Launch Campaign. One-time scopes, comparison, and practical questions.",
};

export default function ServicesPage() {
  return (
    <main id="top">
      <section className={styles.section}>
        <div className={styles.frame}>
          <h1 className="jk-heading">Services</h1>
          <p className="jk-lead mt-4">
            Three one-time engagements. No monthly plan, no checkout, no
            invented price.
          </p>
          <div className={`${styles.scopeGrid} mt-12`}>
            {engagements.map((engagement) => (
              <section
                className={styles.scopeCard}
                key={engagement.id}
                id={engagement.id}
                aria-labelledby={`${engagement.id}-title`}
              >
                <h2 className="jk-heading" id={`${engagement.id}-title`}>
                  {engagement.title}
                </h2>
                <p className="jk-body mt-4">{engagement.suitable}</p>
                <h3 className="jk-label mt-8">Outputs</h3>
                <ul className="jk-body mt-3 list-disc pl-5">
                  {engagement.outputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3 className="jk-label mt-8">Not included</h3>
                <ul className="jk-body mt-3 list-disc pl-5">
                  {engagement.exclusions.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <h3 className="jk-label mt-8">Stages</h3>
                <ol className="jk-body mt-3 list-decimal pl-5">
                  {engagement.stages.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ol>
                <h3 className="jk-label mt-8">What we need from you</h3>
                <ul className="jk-body mt-3 list-disc pl-5">
                  {engagement.clientInputs.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="mt-8">
                  <Button asChild>
                    <a href={startHref({ plan: engagement.id })}>
                      Start {engagement.title}
                    </a>
                  </Button>
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="compare">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="compare">
            Compare
          </h2>
          <p className="jk-body mt-4">
            The same fields for each scope. Color is not the only difference.
          </p>
          <div className={`${styles.tableWrap} mt-8`}>
            <table className={styles.compareTable}>
              <caption className="sr-only">
                Engagement comparison across Identity Sprint, Full Brand, and
                Launch Campaign
              </caption>
              <thead>
                <tr>
                  <th scope="col">Field</th>
                  {engagements.map((engagement) => (
                    <th key={engagement.id} scope="col">
                      {engagement.title}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {comparisonRows.map((row) => (
                  <tr key={row.label}>
                    <th scope="row">{row.label}</th>
                    {engagementIds.map((id) => (
                      <td key={id}>{row.values[id]}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className={`${styles.compareStacks} mt-8`}>
            {engagements.map((engagement) => (
              <article className={styles.scopeCard} key={engagement.id}>
                <h3 className="jk-heading">{engagement.title}</h3>
                <dl className={`${styles.listPlain} mt-4`}>
                  {comparisonRows.map((row) => (
                    <div key={row.label}>
                      <dt className="jk-label">{row.label}</dt>
                      <dd className="jk-body">
                        {row.values[engagement.id as EngagementId]}
                      </dd>
                    </div>
                  ))}
                </dl>
              </article>
            ))}
          </div>
        </div>
      </section>

      <Faq12
        kicker=""
        title="Practical questions"
        description="Scope, revisions, and what this fictional studio will not pretend to sell."
        categories={faqCategories}
      />
    </main>
  );
}
