"use client";

import { type ChangeEvent, type RefObject, useId } from "react";
import { cn } from "@/lib/cn";
import { Placeholder } from "../../_components/Placeholder";
import styles from "../../style.module.css";
import { DEMO_MAX_PER_ORDER, quantity } from "./content";
import local from "./tickets.module.css";

export type QuantityStepperProps = {
  text: string;
  invalid: boolean;
  onTextChange: (text: string) => void;
  onStep: (delta: -1 | 1) => void;
  inputRef: RefObject<HTMLInputElement | null>;
};

/**
 * Section 4: local stepper (there is no number-input atom). The field accepts
 * typed values; − / + step within 1…DEMO_MAX_PER_ORDER and show the range
 * error when pushed past either end.
 */
export function QuantityStepper({
  text,
  invalid,
  onTextChange,
  onStep,
  inputRef,
}: QuantityStepperProps) {
  const id = useId();
  const inputId = `${id}-input`;
  const helpId = `${id}-help`;
  const errorId = `${id}-error`;

  return (
    <div className={cn(styles.quietPanel, local.block, local.quantity)}>
      <label className={local.blockHeading} htmlFor={inputId}>
        {quantity.label}
      </label>
      <div className={local.stepper}>
        <button
          aria-controls={inputId}
          className={local.stepButton}
          onClick={() => onStep(-1)}
          type="button"
        >
          <span aria-hidden="true">−</span>
          <span className="sr-only">{quantity.fewer}</span>
        </button>
        <input
          aria-describedby={invalid ? `${errorId} ${helpId}` : helpId}
          aria-invalid={invalid || undefined}
          autoComplete="off"
          className={local.stepInput}
          data-max={DEMO_MAX_PER_ORDER}
          id={inputId}
          inputMode="numeric"
          onChange={(event: ChangeEvent<HTMLInputElement>) =>
            onTextChange(event.target.value)
          }
          pattern="[0-9]*"
          ref={inputRef}
          type="text"
          value={text}
        />
        <button
          aria-controls={inputId}
          className={local.stepButton}
          onClick={() => onStep(1)}
          type="button"
        >
          <span aria-hidden="true">+</span>
          <span className="sr-only">{quantity.more}</span>
        </button>
      </div>
      <p className={local.stepHelp} id={helpId}>
        <Placeholder text={quantity.help} />
      </p>
      <p aria-live="polite" className={local.stepError} id={errorId}>
        {invalid ? (
          <>
            <span aria-hidden="true" className={local.stepErrorMark}>
              !
            </span>
            <span>
              <Placeholder text={quantity.error} />
            </span>
          </>
        ) : null}
      </p>
    </div>
  );
}
