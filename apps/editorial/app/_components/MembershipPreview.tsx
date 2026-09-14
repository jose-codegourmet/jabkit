"use client";

import { type FormEvent, useId, useMemo, useState } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { Pricing28 } from "@/marketing/pricing28";
import {
  type DemoFormStatus,
  type DemoFormValues,
  DemoNotice,
  demoStatusCopy,
  emptyDemoFormValues,
  validateDemoFormValues,
} from "../../components/samples";
import { firstInvalidControl } from "../../components/samples/demo-state";
import {
  displayedAmount,
  getPlan,
  isBillingInterval,
  isPlanId,
  membershipHref,
  membershipPlans,
} from "../content";
import styles from "../style.module.css";
import type { BillingInterval, PlanId } from "../types";
import { toPricing28Plans } from "./adapters";

export function MembershipPreview({
  initialPlan,
  initialInterval,
  ignoredUnknownPlan,
}: {
  initialPlan?: string;
  initialInterval?: string;
  ignoredUnknownPlan: boolean;
}) {
  const formId = useId();
  const statusId = `${formId}-status`;
  const [interval, setInterval] = useState<BillingInterval>(
    isBillingInterval(initialInterval) ? initialInterval : "yearly",
  );
  const [planId, setPlanId] = useState<PlanId | "">(
    isPlanId(initialPlan) ? initialPlan : "",
  );
  const [values, setValues] = useState<DemoFormValues>(emptyDemoFormValues);
  const [errors, setErrors] = useState<Partial<DemoFormValues>>({});
  const [status, setStatus] = useState<DemoFormStatus>("draft");

  const selected = getPlan(planId);
  const amount = selected ? displayedAmount(selected, interval) : null;
  const intervalFallback =
    initialInterval !== undefined && !isBillingInterval(initialInterval);

  const plans = useMemo(
    () => toPricing28Plans(membershipPlans, interval),
    [interval],
  );

  function update<K extends keyof DemoFormValues>(
    key: K,
    value: DemoFormValues[K],
  ) {
    setValues((current) => ({ ...current, [key]: value }));
    if (status === "reset" || status === "invalid") setStatus("draft");
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const nextErrors = validateDemoFormValues(values);
    if (!selected) {
      setErrors(nextErrors);
      setStatus("invalid");
      document.getElementById(`${formId}-plan`)?.focus();
      return;
    }
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus("invalid");
      const invalid =
        firstInvalidControl(form) ??
        form.querySelector<HTMLElement>(
          nextErrors.name
            ? `#${CSS.escape(`${formId}-name`)}`
            : `#${CSS.escape(`${formId}-email`)}`,
        );
      invalid?.focus();
      return;
    }
    setErrors({});
    setStatus("preview");
  }

  function handleReset() {
    setValues(emptyDemoFormValues);
    setErrors({});
    setPlanId("");
    setStatus("reset");
  }

  if (status === "preview" && selected && amount) {
    return (
      <div className={styles.review} id="signup">
        <DemoNotice>
          Preview prepared. Demo only. Nothing was sent, billed, or subscribed.
        </DemoNotice>
        <p id={statusId} role="status" aria-live="polite" className="sr-only">
          {demoStatusCopy.preview}
        </p>
        <dl className={styles.listPlain}>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Plan</dt>
            <dd className="jk-body">{selected.name}</dd>
          </div>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Billing</dt>
            <dd className="jk-body">
              {interval === "yearly" ? "Yearly" : "Monthly"} · {amount.price}{" "}
              {amount.period}
            </dd>
          </div>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Name</dt>
            <dd className="jk-body">{values.name}</dd>
          </div>
          <div>
            <dt className={`jk-caption ${styles.meta}`}>Email</dt>
            <dd className="jk-body">{values.email}</dd>
          </div>
        </dl>
        <div className="mt-6 flex flex-wrap gap-2">
          <Button type="button" onClick={() => setStatus("draft")}>
            Edit
          </Button>
          <Button type="button" variant="secondary" onClick={handleReset}>
            Reset
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Pricing28
        title="Two ways to keep reading"
        people={[]}
        extraCount=""
        trustItems={[]}
        yearlyBadge=""
        secureLabel=""
        interval={interval}
        onIntervalChange={setInterval}
        plans={plans}
      />
      <div className={`${styles.frame} ${styles.signup}`} id="signup">
        <h2 className="jk-heading">Preview a membership</h2>
        <p className="jk-body mt-4">
          Choose a plan on the cards, or use a direct link. Then enter a name
          and email. The preview stays in this tab.
        </p>
        {ignoredUnknownPlan ? (
          <p className={`jk-caption ${styles.meta} mt-4`} role="status">
            That plan is not in this sample. Choose Reader or Patron. The
            unknown value was not used as a label.
          </p>
        ) : null}
        {intervalFallback ? (
          <p className={`jk-caption ${styles.meta} mt-2`} role="status">
            The interval in the link was not monthly or yearly, so yearly is
            shown.
          </p>
        ) : null}
        <form className="mt-8 grid gap-4" onSubmit={handleSubmit} noValidate>
          <div className={styles.field}>
            <Label htmlFor={`${formId}-plan`}>Plan</Label>
            <select
              id={`${formId}-plan`}
              className={styles.select}
              value={planId}
              onChange={(event) => {
                const next = event.currentTarget.value;
                setPlanId(isPlanId(next) ? next : "");
                if (status === "reset" || status === "invalid") {
                  setStatus("draft");
                }
              }}
            >
              <option value="">Choose a plan</option>
              {membershipPlans.map((plan) => (
                <option key={plan.id} value={plan.id}>
                  {plan.name}
                </option>
              ))}
            </select>
            {!selected && status === "invalid" ? (
              <p className={`jk-caption ${styles.error}`}>Choose a plan.</p>
            ) : null}
            {selected && amount ? (
              <p className={`jk-caption ${styles.meta}`}>
                {selected.name}: {amount.price} {amount.period}.{" "}
                <a href={membershipHref({ plan: selected.id, interval })}>
                  Link to this selection
                </a>
              </p>
            ) : null}
          </div>
          <div className={styles.field}>
            <Label htmlFor={`${formId}-name`}>Name</Label>
            <Input
              id={`${formId}-name`}
              name="name"
              required
              autoComplete="name"
              value={values.name}
              aria-invalid={errors.name ? true : undefined}
              onChange={(event) => update("name", event.currentTarget.value)}
            />
            {errors.name ? (
              <p className={`jk-caption ${styles.error}`}>{errors.name}</p>
            ) : null}
          </div>
          <div className={styles.field}>
            <Label htmlFor={`${formId}-email`}>Email</Label>
            <Input
              id={`${formId}-email`}
              name="email"
              type="email"
              required
              autoComplete="email"
              value={values.email}
              aria-invalid={errors.email ? true : undefined}
              onChange={(event) => update("email", event.currentTarget.value)}
            />
            {errors.email ? (
              <p className={`jk-caption ${styles.error}`}>{errors.email}</p>
            ) : null}
          </div>
          <DemoNotice>
            Preview stays in this tab. Reload clears it. No email, account, or
            payment is created. Amounts are demo-only.
          </DemoNotice>
          <p
            id={statusId}
            role="status"
            aria-live="polite"
            className={`jk-caption ${styles.meta}`}
          >
            {demoStatusCopy[status]}
          </p>
          <div className="flex flex-wrap gap-2">
            <Button type="submit">Preview signup</Button>
            <Button type="button" variant="secondary" onClick={handleReset}>
              Reset
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
