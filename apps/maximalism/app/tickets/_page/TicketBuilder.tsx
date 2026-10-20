"use client";

import { type ReactNode, useEffect, useRef, useState } from "react";
import { getPass, type PassId } from "../../_data/tickets";
import { CheckoutDemoControl } from "./CheckoutDemoControl";
import { CheckoutDialog } from "./CheckoutDialog";
import {
  type CheckoutOutcome,
  DEMO_CHECK_DELAY,
  DEMO_MAX_PER_ORDER,
} from "./content";
import { type CheckoutStatus, OrderSummary } from "./OrderSummary";
import { PassOptions } from "./PassOptions";
import { QuantityStepper } from "./QuantityStepper";
import styles from "./tickets.module.css";

const MOBILE_QUERY = "(max-width: 899.98px)";

function parseQuantity(text: string): number | null {
  if (!/^\d+$/.test(text.trim())) return null;
  const value = Number.parseInt(text, 10);
  return value >= 1 && value <= DEMO_MAX_PER_ORDER ? value : null;
}

/**
 * Sections 2–6. Everything is local: the availability check is a timer and
 * the outcome comes from the labelled demo control. Nothing is submitted.
 */
export function TicketBuilder({ included }: { included: ReactNode }) {
  const [selected, setSelected] = useState<PassId | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [quantityText, setQuantityText] = useState("1");
  const [quantityInvalid, setQuantityInvalid] = useState(false);
  const [outcome, setOutcome] = useState<CheckoutOutcome>("opens");
  const [status, setStatus] = useState<CheckoutStatus>("idle");
  const [soldDuringCheckout, setSoldDuringCheckout] = useState<PassId[]>([]);

  const continueRef = useRef<HTMLButtonElement>(null);
  const quantityRef = useRef<HTMLInputElement>(null);
  const sheetRef = useRef<HTMLElement>(null);
  const timerRef = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timerRef.current), []);

  // Mobile bottom sheet: never let it cover the control that has focus.
  useEffect(() => {
    const media = window.matchMedia(MOBILE_QUERY);
    let frame = 0;
    function onFocusIn(event: FocusEvent) {
      const sheet = sheetRef.current;
      const target = event.target;
      if (!media.matches || !sheet || !(target instanceof HTMLElement)) return;
      if (sheet.contains(target) || target.closest("[role='dialog']")) return;
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const control = target.getBoundingClientRect();
        const cover = sheet.getBoundingClientRect();
        const overlaps =
          control.bottom > cover.top && control.top < cover.bottom;
        if (overlaps) {
          window.scrollBy({ top: control.bottom - cover.top + 16 });
        }
      });
    }
    document.addEventListener("focusin", onFocusIn);
    return () => {
      document.removeEventListener("focusin", onFocusIn);
      cancelAnimationFrame(frame);
    };
  }, []);

  const pass = selected ? getPass(selected) : null;

  function selectPass(id: PassId) {
    setSelected(id);
    if (status === "sold-out") setStatus("idle");
  }

  function changeQuantityText(text: string) {
    setQuantityText(text);
    const value = parseQuantity(text);
    if (value === null) {
      setQuantityInvalid(true);
    } else {
      setQuantity(value);
      setQuantityInvalid(false);
    }
  }

  function stepQuantity(delta: -1 | 1) {
    const base = parseQuantity(quantityText) ?? quantity;
    const next = base + delta;
    if (next < 1 || next > DEMO_MAX_PER_ORDER) {
      setQuantity(base);
      setQuantityText(String(base));
      setQuantityInvalid(true);
      return;
    }
    setQuantity(next);
    setQuantityText(String(next));
    setQuantityInvalid(false);
  }

  function startCheckout() {
    if (!selected || status === "checking") return;
    if (quantityInvalid) {
      quantityRef.current?.focus();
      return;
    }
    const passId = selected;
    const result = outcome;
    setStatus("checking");
    window.clearTimeout(timerRef.current);
    timerRef.current = window.setTimeout(() => {
      if (result === "opens") {
        setStatus("open");
      } else if (result === "error") {
        setStatus("error");
      } else {
        setSoldDuringCheckout((list) =>
          list.includes(passId) ? list : [...list, passId],
        );
        setSelected((current) => (current === passId ? null : current));
        setStatus("sold-out");
      }
    }, DEMO_CHECK_DELAY);
  }

  function retry() {
    // The alert (and its button) unmounts; keep focus on the flow.
    continueRef.current?.focus();
    startCheckout();
  }

  function resetDemo() {
    setSoldDuringCheckout([]);
    if (status === "sold-out") setStatus("idle");
  }

  return (
    <div className={styles.builder}>
      <div className={styles.builderMain}>
        <PassOptions
          onSelect={selectPass}
          selected={selected}
          soldDuringCheckout={soldDuringCheckout}
        />
        {included}
        <QuantityStepper
          inputRef={quantityRef}
          invalid={quantityInvalid}
          onStep={stepQuantity}
          onTextChange={changeQuantityText}
          text={quantityText}
        />
        <CheckoutDemoControl
          onChange={setOutcome}
          onReset={soldDuringCheckout.length > 0 ? resetDemo : undefined}
          value={outcome}
        />
      </div>
      <OrderSummary
        continueRef={continueRef}
        onContinue={startCheckout}
        onRetry={retry}
        pass={pass}
        quantity={quantity}
        sheetRef={sheetRef}
        status={status}
      />
      <CheckoutDialog
        onClose={() => setStatus("idle")}
        open={status === "open"}
        returnFocusRef={continueRef}
      />
    </div>
  );
}
