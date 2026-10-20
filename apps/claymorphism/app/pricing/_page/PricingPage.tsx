import {
  ArrowRightIcon,
  CheckIcon,
  HeartIcon,
  MixerHorizontalIcon,
  PersonIcon,
} from "@radix-ui/react-icons";
import { Button } from "@/atoms/button";
import { ClaySurface } from "../../_components/ClaySurface";
import { CtaBand } from "../../_components/CtaBand";
import { FaqAccordion } from "../../_components/FaqAccordion";
import { PageIntro } from "../../_components/PageIntro";
import { PlaceholderText } from "../../_components/PlaceholderText";
import { PlanCard } from "../../_components/PlanCard";
import { plans } from "../../_data/plans";
import sharedStyles from "../../style.module.css";
import {
  type ComparisonValue,
  comparison,
  everyPlan,
  goodToKnow,
  pricingIntro,
} from "./content";
import styles from "./pricing.module.css";

const everyPlanIcons: Record<
  (typeof everyPlan.items)[number]["id"],
  typeof ArrowRightIcon
> = {
  "next-step": ArrowRightIcon,
  owners: PersonIcon,
  change: MixerHorizontalIcon,
  "no-pressure": HeartIcon,
};

const toneClass: Record<(typeof everyPlan.items)[number]["tone"], string> = {
  mint: sharedStyles.toneMint,
  butter: sharedStyles.toneButter,
  lavender: sharedStyles.toneLavender,
  coral: sharedStyles.toneCoral,
};

function ComparisonCell({ value }: { value: ComparisonValue }) {
  if (value === true) {
    return (
      <span className={styles.included}>
        <CheckIcon aria-hidden="true" />
        <span className="sr-only">Included</span>
      </span>
    );
  }

  if (value === false) {
    return (
      <span className={styles.excluded}>
        <span aria-hidden="true">—</span>
        <span className="sr-only">Not included</span>
      </span>
    );
  }

  return <PlaceholderText text={value} />;
}

export function PricingPage() {
  return (
    <div className={styles.page}>
      <PageIntro
        backgroundId={pricingIntro.backgroundId}
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

      <section aria-labelledby="every-plan-heading" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className="jk-heading" id="every-plan-heading">
            {everyPlan.title}
          </h2>
          <p className="jk-body">{everyPlan.body}</p>
        </div>
        <ul className={styles.everyGrid}>
          {everyPlan.items.map((item) => {
            const Icon = everyPlanIcons[item.id];
            return (
              <li
                className={`${styles.everyItem} ${toneClass[item.tone]}`}
                key={item.id}
              >
                <span aria-hidden="true" className={styles.everyIcon}>
                  <Icon />
                </span>
                <h3 className={styles.everyTitle}>{item.title}</h3>
                <p className={styles.everyBody}>{item.body}</p>
              </li>
            );
          })}
        </ul>
      </section>

      <section aria-labelledby="compare-heading" className={styles.section}>
        <div className={styles.sectionHead}>
          <h2 className="jk-heading" id="compare-heading">
            {comparison.title}
          </h2>
          <p className="jk-body">{comparison.body}</p>
        </div>
        <ClaySurface className={styles.compare}>
          <table className={styles.table}>
            <caption className="sr-only">
              What the Free and Plus plans include
            </caption>
            <thead>
              <tr>
                <th scope="col">
                  <span className="sr-only">Feature</span>
                </th>
                {plans.map((plan) => (
                  <th
                    data-featured={plan.featured ? "true" : undefined}
                    key={plan.id}
                    scope="col"
                  >
                    <span className={styles.columnName}>{plan.name}</span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {comparison.rows.map((row) => (
                <tr key={row.feature}>
                  <th scope="row">{row.feature}</th>
                  <td>
                    <ComparisonCell value={row.free} />
                  </td>
                  <td data-featured="true">
                    <ComparisonCell value={row.plus} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </ClaySurface>
      </section>

      <section
        aria-labelledby="good-to-know-heading"
        className={styles.section}
      >
        <div className={styles.faqLayout}>
          <div className={styles.faqAside}>
            <h2 className="jk-heading" id="good-to-know-heading">
              {goodToKnow.title}
            </h2>
            <p className="jk-body">{goodToKnow.body}</p>
            <div className={styles.faqActions}>
              <Button asChild variant="secondary">
                <a href={goodToKnow.faqLink.href}>{goodToKnow.faqLink.label}</a>
              </Button>
              <a
                className={sharedStyles.textLink}
                href={goodToKnow.contactLink.href}
              >
                {goodToKnow.contactLink.label}
              </a>
            </div>
          </div>
          <ClaySurface className={styles.details}>
            <FaqAccordion items={goodToKnow.items} />
          </ClaySurface>
        </div>
      </section>

      <CtaBand className={styles.cta} />
    </div>
  );
}
