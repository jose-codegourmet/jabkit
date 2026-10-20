"use client";

import { type RefObject, useId, useState } from "react";
import { Alert, AlertDescription } from "@/atoms/alert";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { Placeholder } from "../../_components/Placeholder";
import type { Pass } from "../../_data/tickets";
import { checkout, summary } from "./content";
import styles from "./tickets.module.css";

export type CheckoutStatus =
  | "idle"
  | "checking"
  | "error"
  | "sold-out"
  | "open";

export type OrderSummaryProps = {
  pass: Pass | null;
  quantity: number;
  status: CheckoutStatus;
  onContinue: () => void;
  onRetry: () => void;
  continueRef: RefObject<HTMLButtonElement | null>;
  sheetRef: RefObject<HTMLElement | null>;
};

/**
 * Section 5 + 6: sticky beside the options on desktop, a bottom sheet on
 * mobile. The builder keeps the focused control clear of the sheet.
 */
export function OrderSummary({
  pass,
  quantity,
  status,
  onContinue,
  onRetry,
  continueRef,
  sheetRef,
}: OrderSummaryProps) {
  const id = useId();
  const rowsId = `${id}-rows`;
  const emptyId = `${id}-empty`;
  const [detailsOpen, setDetailsOpen] = useState(false);
  const checking = status === "checking";
  const unavailable = !pass || checking;
  const ticketWord = quantity === 1 ? "ticket" : "tickets";

  return (
    <section
      aria-labelledby={`${id}-heading`}
      className={styles.summary}
      data-details={detailsOpen ? "open" : "closed"}
      ref={sheetRef}
    >
      <div className={styles.summaryHead}>
        <h2 className={styles.summaryHeading} id={`${id}-heading`}>
          {summary.heading}
        </h2>
        {pass ? (
          <button
            aria-controls={rowsId}
            aria-expanded={detailsOpen}
            className={styles.summaryToggle}
            onClick={() => setDetailsOpen((open) => !open)}
            type="button"
          >
            {detailsOpen ? summary.hideDetails : summary.showDetails}
          </button>
        ) : null}
      </div>

      {pass ? (
        <>
          <p className={styles.summaryLine}>
            {pass.name} · {quantity} {ticketWord}
          </p>
          <dl className={styles.summaryRows} id={rowsId}>
            <div className={styles.summaryRow}>
              <dt>{summary.rows.ticket}</dt>
              <dd>{pass.name}</dd>
            </div>
            <div className={styles.summaryRow}>
              <dt>{summary.rows.quantity}</dt>
              <dd>{quantity}</dd>
            </div>
            <div className={styles.summaryRow}>
              <dt>{summary.rows.priceEach}</dt>
              <dd>
                <Placeholder text={pass.pricePlaceholder} />
              </dd>
            </div>
            <div className={styles.summaryRow}>
              <dt>{summary.rows.bookingFee}</dt>
              <dd>
                <Placeholder text={summary.bookingFee} />
              </dd>
            </div>
            <div className={cn(styles.summaryRow, styles.summaryTotal)}>
              <dt>{summary.rows.total}</dt>
              <dd>
                <Placeholder text={summary.total} />
              </dd>
            </div>
          </dl>
        </>
      ) : (
        <p className={styles.summaryEmpty} id={emptyId}>
          {summary.empty}
        </p>
      )}

      <Button asChild className={styles.summaryButton} size="lg">
        <button
          aria-describedby={pass ? undefined : emptyId}
          aria-disabled={unavailable || undefined}
          onClick={() => {
            if (!unavailable) onContinue();
          }}
          ref={continueRef}
          type="button"
        >
          {summary.continue}
        </button>
      </Button>

      <p className={styles.checking} role="status">
        {checking ? (
          <>
            <span aria-hidden="true" className={styles.checkingDots}>
              <span />
              <span />
              <span />
            </span>
            {checkout.loading}
          </>
        ) : null}
      </p>

      {status === "error" ? (
        <Alert className={styles.summaryAlert}>
          <AlertDescription>{checkout.error}</AlertDescription>
          <div>
            <Button onClick={onRetry} size="sm" variant="secondary">
              {checkout.tryAgain}
            </Button>
          </div>
        </Alert>
      ) : null}

      {status === "sold-out" ? (
        <Alert className={styles.summaryAlert}>
          <AlertDescription>{checkout.soldOut}</AlertDescription>
        </Alert>
      ) : null}
    </section>
  );
}
