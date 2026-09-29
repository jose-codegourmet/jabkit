import { ClaySurface } from "../../_components/ClaySurface";
import { CtaBand } from "../../_components/CtaBand";
import { FaqAccordion } from "../../_components/FaqAccordion";
import { PageIntro } from "../../_components/PageIntro";
import { PlanCard } from "../../_components/PlanCard";
import { plans } from "../../_data/plans";
import { goodToKnow, pricingIntro } from "./content";
import styles from "./pricing.module.css";

export function PricingPage() {
  return (
    <div className={styles.page}>
      <PageIntro
        body={pricingIntro.body}
        className={styles.intro}
        title={pricingIntro.title}
      />

      <section aria-label="Free and Plus" className={styles.section}>
        <ul className={styles.plans}>
          {plans.map((plan) => (
            <li key={plan.id}>
              <PlanCard className={styles.plan} plan={plan} />
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="good-to-know-heading"
        className={styles.section}
      >
        <ClaySurface className={styles.details}>
          <h2 className="jk-heading" id="good-to-know-heading">
            {goodToKnow.title}
          </h2>
          <FaqAccordion items={goodToKnow.items} />
        </ClaySurface>
      </section>

      <CtaBand className={styles.cta} />
    </div>
  );
}
