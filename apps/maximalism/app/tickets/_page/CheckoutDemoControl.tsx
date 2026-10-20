"use client";

import { useId } from "react";
import { DemoBadge } from "../../_components/Badges";
import { type CheckoutOutcome, checkoutDemo } from "./content";
import styles from "./tickets.module.css";

export type CheckoutDemoControlProps = {
  value: CheckoutOutcome;
  onChange: (value: CheckoutOutcome) => void;
  /** Shown once a pass has been sold out by the demo, to restore it. */
  onReset?: () => void;
};

/** Labelled demo control: makes every checkout state from the brief reachable. */
export function CheckoutDemoControl({
  value,
  onChange,
  onReset,
}: CheckoutDemoControlProps) {
  const name = useId();
  return (
    <fieldset className={styles.demoControl}>
      <legend className={styles.demoLegend}>
        <DemoBadge>{checkoutDemo.badge}</DemoBadge>
        <span>{checkoutDemo.legend}</span>
      </legend>
      <div className={styles.demoOptions}>
        {checkoutDemo.outcomes.map((outcome) => (
          <label className={styles.demoOption} key={outcome.value}>
            <input
              checked={value === outcome.value}
              name={name}
              onChange={() => onChange(outcome.value)}
              type="radio"
              value={outcome.value}
            />
            <span>{outcome.label}</span>
          </label>
        ))}
      </div>
      {onReset ? (
        <button className={styles.demoReset} onClick={onReset} type="button">
          {checkoutDemo.reset}
        </button>
      ) : null}
    </fieldset>
  );
}
