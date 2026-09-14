"use client";

import { useMemo, useState } from "react";
import { Button } from "@/atoms/button";
import { Pricing28 } from "@/marketing/pricing28";
import {
  displayedAmount,
  getPlan,
  isBillingInterval,
  isPlanId,
  plans,
  pricingHref,
  studioHref,
} from "../content";
import styles from "../style.module.css";
import type { BillingInterval, PlanId } from "../types";
import { toPricing28Plans } from "./adapters";

export function PlanPreview({
  initialPlan,
  initialInterval,
  ignoredUnknownPlan,
}: {
  initialPlan?: string;
  initialInterval?: string;
  ignoredUnknownPlan: boolean;
}) {
  const [interval, setInterval] = useState<BillingInterval>(
    isBillingInterval(initialInterval) ? initialInterval : "monthly",
  );
  const [planId, setPlanId] = useState<PlanId | "">(
    isPlanId(initialPlan) ? initialPlan : "",
  );

  const selected = getPlan(planId);
  const amount = selected ? displayedAmount(selected, interval) : null;
  const intervalFallback =
    initialInterval !== undefined && !isBillingInterval(initialInterval);
  const pricingPlans = useMemo(
    () => toPricing28Plans(plans, interval),
    [interval],
  );

  return (
    <div>
      <Pricing28
        extraCount=""
        interval={interval}
        onIntervalChange={setInterval}
        people={[]}
        plans={pricingPlans}
        secureLabel=""
        title="Two plan concepts"
        trustItems={[]}
        yearlyBadge=""
      />
      <div className={styles.frame} id="summary">
        {ignoredUnknownPlan ? (
          <p className={`jk-caption ${styles.meta}`} role="status">
            That plan is not in this sample. Choose Sleeve or Cabinet. The
            unknown value was not used as a label.
          </p>
        ) : null}
        {intervalFallback ? (
          <p className={`jk-caption ${styles.meta} mt-2`} role="status">
            The interval in the link was not monthly or yearly, so monthly is
            shown.
          </p>
        ) : null}
        {selected && amount ? (
          <div className={styles.review}>
            <h2 className="jk-heading">Plan summary</h2>
            <p className={`jk-caption ${styles.meta}`}>
              Illustrative only. No payment was collected and no account was
              created.
            </p>
            <dl className={styles.listPlain}>
              <div>
                <dt className={`jk-caption ${styles.meta}`}>Plan</dt>
                <dd className="jk-body">{selected.name}</dd>
              </div>
              <div>
                <dt className={`jk-caption ${styles.meta}`}>Interval</dt>
                <dd className="jk-body">
                  {interval === "yearly" ? "Yearly" : "Monthly"} ·{" "}
                  {amount.price} {amount.period}
                </dd>
              </div>
              <div>
                <dt className={`jk-caption ${styles.meta}`}>Works now</dt>
                <dd className="jk-body">{selected.features.join(" ")}</dd>
              </div>
              <div>
                <dt className={`jk-caption ${styles.meta}`}>Concept only</dt>
                <dd className="jk-body">{selected.conceptOnly.join(" ")}</dd>
              </div>
            </dl>
            <div className={`${styles.actions} mt-6`}>
              <Button type="button" onClick={() => setPlanId("")}>
                Change plan
              </Button>
              <Button asChild variant="secondary">
                <a href={studioHref({ asset: "postcard-pier", aspect: "4:3" })}>
                  Open free demo
                </a>
              </Button>
            </div>
          </div>
        ) : (
          <p className={`jk-caption ${styles.meta} mt-4`}>
            Review Sleeve or Cabinet to open a local summary. Direct links such
            as{" "}
            <a href={pricingHref({ plan: "sleeve", interval: "monthly" })}>
              Sleeve monthly
            </a>{" "}
            also work. No checkout runs.
          </p>
        )}
      </div>
    </div>
  );
}
