"use client";

import {
  CheckCircledIcon,
  CrossCircledIcon,
  ExclamationTriangleIcon,
} from "@radix-ui/react-icons";
import Link from "next/link";
import {
  type FormEvent,
  type MouseEvent,
  useEffect,
  useRef,
  useState,
} from "react";
import { Alert, AlertDescription } from "@/atoms/alert";
import { Button } from "@/atoms/button";
import { Checkbox } from "@/atoms/checkbox";
import { Input } from "@/atoms/input";
import { Textarea } from "@/atoms/textarea";
import { FormField, NativeSelect } from "../../_components/FormField";
import { Placeholder } from "../../_components/Placeholder";
import { businessTypes, walkthroughForm as copy, teamSizes } from "./content";
import styles from "./walkthrough.module.css";

type RequiredField = "name" | "email" | "business";
type Status = "idle" | "sending" | "success" | "failure";
type FocusTarget = "summary" | "success" | "failure";

type Values = {
  name: string;
  email: string;
  business: string;
  businessType: string;
  teamSize: string;
  tools: string;
  pricing: boolean;
};

type Errors = Partial<Record<RequiredField, string>>;

const ids = {
  name: "walkthrough-name",
  email: "walkthrough-email",
  business: "walkthrough-business",
  businessType: "walkthrough-business-type",
  teamSize: "walkthrough-team-size",
  tools: "walkthrough-tools",
  pricing: "walkthrough-pricing",
  pricingLabel: "walkthrough-pricing-label",
  summaryTitle: "walkthrough-summary-title",
  successTitle: "walkthrough-success-title",
} as const;

const requiredOrder: readonly RequiredField[] = ["name", "email", "business"];

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

const initialValues: Values = {
  name: "",
  email: "",
  business: "",
  businessType: businessTypes[0],
  teamSize: teamSizes[0],
  tools: "",
  pricing: false,
};

/** Demo delay before the simulated response. */
const SIMULATED_DELAY_MS = 800;

function validate(values: Values): Errors {
  const errors: Errors = {};
  if (!values.name.trim()) errors.name = copy.fields.name.error;
  if (!emailPattern.test(values.email.trim())) {
    errors.email = copy.fields.email.error;
  }
  if (!values.business.trim()) errors.business = copy.fields.business.error;
  return errors;
}

export type WalkthroughFormProps = {
  /** id of the page heading that names the form. */
  labelledBy: string;
  /** Start in the failure state (/walkthrough?state=error). */
  initialFailure?: boolean;
};

/**
 * Walkthrough request form.
 *
 * Demo only: submitting makes NO network request and stores nothing. A valid
 * submit waits 800ms with setTimeout and then shows the success state. The
 * failure state is shown with /walkthrough?state=error.
 */
export function WalkthroughForm({
  labelledBy,
  initialFailure = false,
}: WalkthroughFormProps) {
  const [values, setValues] = useState<Values>(initialValues);
  const [errors, setErrors] = useState<Errors>({});
  const [status, setStatus] = useState<Status>(
    initialFailure ? "failure" : "idle",
  );
  const [focusRequest, setFocusRequest] = useState<{
    target: FocusTarget;
    count: number;
  } | null>(null);

  const summaryRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const failureRef = useRef<HTMLDivElement>(null);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(
    () => () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    },
    [],
  );

  useEffect(() => {
    if (!focusRequest) return;
    const targets = {
      summary: summaryRef,
      success: successRef,
      failure: failureRef,
    } as const;
    targets[focusRequest.target].current?.focus();
  }, [focusRequest]);

  const sending = status === "sending";
  const errorFields = requiredOrder.filter((field) => errors[field]);

  function requestFocus(target: FocusTarget) {
    setFocusRequest((previous) => ({
      target,
      count: (previous?.count ?? 0) + 1,
    }));
  }

  function update<K extends keyof Values>(key: K, value: Values[K]) {
    setValues((previous) => ({ ...previous, [key]: value }));
  }

  function send() {
    if (sending) return;
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      requestFocus("summary");
      return;
    }

    setStatus("sending");
    // Demo only: no fetch or other network call happens here. The timeout
    // simulates the request so the loading state is visible.
    timerRef.current = setTimeout(() => {
      timerRef.current = null;
      setStatus("success");
      requestFocus("success");
    }, SIMULATED_DELAY_MS);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    send();
  }

  function focusField(event: MouseEvent<HTMLAnchorElement>, id: string) {
    const field = document.getElementById(id);
    if (!field) return;
    event.preventDefault();
    field.focus();
    field.scrollIntoView({ block: "center" });
  }

  if (status === "success") {
    const firstName = values.name.trim().split(/\s+/)[0] ?? values.name;
    return (
      <div className={styles.success}>
        <CheckCircledIcon aria-hidden="true" className={styles.successIcon} />
        <h2
          className="jk-heading"
          id={ids.successTitle}
          ref={successRef}
          tabIndex={-1}
        >
          {copy.success.title}
        </h2>
        <p className="jk-lead">
          {copy.success.body(firstName, values.email.trim())}
        </p>
        <div>
          <Button asChild size="lg">
            <Link href={copy.success.action.href}>
              {copy.success.action.label}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form
      aria-labelledby={labelledBy}
      className={styles.form}
      noValidate
      onSubmit={handleSubmit}
    >
      {status === "failure" ? (
        <div className={styles.focusBox} ref={failureRef} tabIndex={-1}>
          <Alert className={styles.failure} variant="destructive">
            <CrossCircledIcon aria-hidden="true" />
            <AlertDescription className={styles.failureText}>
              {copy.failure.text}
            </AlertDescription>
            <div className={styles.failureAction}>
              <Button onClick={send} type="button" variant="secondary">
                {copy.failure.retry}
              </Button>
            </div>
          </Alert>
        </div>
      ) : null}

      {errorFields.length > 0 ? (
        <div className={styles.summary} ref={summaryRef} tabIndex={-1}>
          <p className={styles.summaryTitle} id={ids.summaryTitle}>
            <ExclamationTriangleIcon aria-hidden="true" />
            {copy.summaryTitle(errorFields.length)}
          </p>
          <ul className={styles.summaryList}>
            {errorFields.map((field) => (
              <li key={field}>
                <a
                  href={`#${ids[field]}`}
                  onClick={(event) => focusField(event, ids[field])}
                >
                  {errors[field]}
                </a>
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      <FormField
        error={errors.name}
        id={ids.name}
        label={copy.fields.name.label}
        required
      >
        {(control) => (
          <Input
            {...control}
            autoComplete="name"
            name="name"
            onChange={(event) => update("name", event.target.value)}
            type="text"
            value={values.name}
          />
        )}
      </FormField>
      <FormField
        error={errors.email}
        help={copy.fields.email.help}
        id={ids.email}
        label={copy.fields.email.label}
        required
      >
        {(control) => (
          <Input
            {...control}
            autoComplete="email"
            inputMode="email"
            name="email"
            onChange={(event) => update("email", event.target.value)}
            spellCheck={false}
            type="email"
            value={values.email}
          />
        )}
      </FormField>

      <FormField
        error={errors.business}
        id={ids.business}
        label={copy.fields.business.label}
        required
      >
        {(control) => (
          <Input
            {...control}
            autoComplete="organization"
            name="business"
            onChange={(event) => update("business", event.target.value)}
            type="text"
            value={values.business}
          />
        )}
      </FormField>

      <FormField id={ids.businessType} label={copy.fields.businessType.label}>
        {(control) => (
          <NativeSelect
            {...control}
            name="businessType"
            onChange={(event) => update("businessType", event.target.value)}
            value={values.businessType}
          >
            {businessTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </NativeSelect>
        )}
      </FormField>
      <FormField id={ids.teamSize} label={copy.fields.teamSize.label}>
        {(control) => (
          <NativeSelect
            {...control}
            name="teamSize"
            onChange={(event) => update("teamSize", event.target.value)}
            value={values.teamSize}
          >
            {teamSizes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </NativeSelect>
        )}
      </FormField>

      <FormField
        help={copy.fields.tools.help}
        id={ids.tools}
        label={copy.fields.tools.label}
        optional
      >
        {(control) => (
          <Textarea
            {...control}
            className={styles.textarea}
            name="tools"
            onChange={(event) => update("tools", event.target.value)}
            rows={4}
            value={values.tools}
          />
        )}
      </FormField>

      <div className={styles.check}>
        <Checkbox
          aria-labelledby={ids.pricingLabel}
          checked={values.pricing}
          id={ids.pricing}
          name="pricing"
          onCheckedChange={(checked) => update("pricing", checked === true)}
        />
        <label
          className={styles.checkLabel}
          htmlFor={ids.pricing}
          id={ids.pricingLabel}
        >
          {copy.fields.pricing.label}
        </label>
      </div>

      <div className={styles.submitRow}>
        <Button
          aria-busy={sending || undefined}
          className={styles.submit}
          disabled={sending}
          size="lg"
          type="submit"
        >
          {sending ? copy.submitting : copy.submit}
        </Button>
        <p className={styles.privacy}>
          <Placeholder>{copy.privacyNotice}</Placeholder>{" "}
          <Link href={copy.privacyLink.href}>{copy.privacyLink.label}</Link>
        </p>
      </div>
    </form>
  );
}
