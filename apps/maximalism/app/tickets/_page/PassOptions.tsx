"use client";

import { useId } from "react";
import { cn } from "@/lib/cn";
import { DemoBadge } from "../../_components/Badges";
import { Placeholder } from "../../_components/Placeholder";
import {
  availabilityLabels,
  type Pass,
  type PassId,
  passes,
} from "../../_data/tickets";
import { options } from "./content";
import styles from "./tickets.module.css";

export type PassOptionsProps = {
  selected: PassId | null;
  onSelect: (id: PassId) => void;
  /** Passes a demo checkout marked as sold out on top of the data. */
  soldDuringCheckout: readonly PassId[];
};

/**
 * Section 2: the three passes as a native radio group inside role="radiogroup".
 * Arrow keys move between available passes; sold-out passes are disabled.
 */
export function PassOptions({
  selected,
  onSelect,
  soldDuringCheckout,
}: PassOptionsProps) {
  return (
    <section aria-labelledby="ticket-options-heading" className={styles.block}>
      <h2 className={styles.blockHeading} id="ticket-options-heading">
        {options.heading}
      </h2>
      <div
        aria-labelledby="ticket-options-heading"
        className={styles.passGrid}
        role="radiogroup"
      >
        {passes.map((pass) => {
          const soldLive = soldDuringCheckout.includes(pass.id);
          return (
            <PassCard
              demoState={Boolean(pass.demoState) || soldLive}
              key={pass.id}
              onSelect={onSelect}
              pass={pass}
              selected={selected === pass.id}
              soldOut={pass.availability === "sold-out" || soldLive}
            />
          );
        })}
      </div>
    </section>
  );
}

function PassCard({
  pass,
  selected,
  soldOut,
  demoState,
  onSelect,
}: {
  pass: Pass;
  selected: boolean;
  soldOut: boolean;
  demoState: boolean;
  onSelect: (id: PassId) => void;
}) {
  const id = useId();
  const nameId = `${id}-name`;
  const descId = `${id}-desc`;
  const factsId = `${id}-facts`;
  const helperId = `${id}-helper`;
  const helper = soldOut ? pass.soldOutHelper : undefined;
  const describedBy = [descId, factsId, helper ? helperId : null]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={cn(
        styles.pass,
        selected && styles.passSelected,
        soldOut && styles.passSoldOut,
      )}
    >
      <div className={styles.passHead}>
        <h3 className={styles.passName} id={nameId}>
          {pass.name}
        </h3>
        {selected ? (
          <span aria-hidden="true" className={styles.passCheck}>
            <svg aria-hidden="true" focusable="false" viewBox="0 0 24 24">
              <path d="M5 12.5l4.5 4.5L19 7.5" />
            </svg>
          </span>
        ) : null}
      </div>
      <p className={styles.passDesc} id={descId}>
        {pass.description}
      </p>
      <dl className={styles.passFacts} id={factsId}>
        <div className={styles.passFact}>
          <dt>{options.priceLabel}</dt>
          <dd className={styles.passPrice}>
            <Placeholder text={pass.pricePlaceholder} />
          </dd>
        </div>
        <div className={styles.passFact}>
          <dt>{options.availabilityLabel}</dt>
          <dd className={styles.passAvailability}>
            <span aria-hidden="true" className={styles.passAvailabilityMark}>
              {soldOut ? "✕" : "●"}
            </span>
            {availabilityLabels[soldOut ? "sold-out" : "available"]}
          </dd>
        </div>
      </dl>
      {demoState && soldOut ? (
        <DemoBadge className={styles.passDemo}>{options.demoState}</DemoBadge>
      ) : null}
      {helper ? (
        <p className={styles.passHelper} id={helperId}>
          {helper}
        </p>
      ) : null}
      <label className={styles.passAction}>
        <input
          aria-describedby={describedBy}
          aria-labelledby={nameId}
          checked={selected}
          className={styles.passInput}
          disabled={soldOut}
          name="ticket-pass"
          onChange={() => onSelect(pass.id)}
          type="radio"
          value={pass.id}
        />
        {selected ? (
          <span aria-hidden="true" className={styles.passActionMark}>
            ✓
          </span>
        ) : null}
        <span>
          {soldOut
            ? options.soldOut
            : selected
              ? options.selected
              : options.select}
        </span>
      </label>
    </div>
  );
}
