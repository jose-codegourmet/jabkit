"use client";

import type { Route } from "next";
import Link from "next/link";
import {
  type FormEvent,
  type MouseEvent,
  useEffect,
  useId,
  useRef,
  useState,
} from "react";
import { Button } from "@/atoms/button";
import { Checkbox } from "@/atoms/checkbox";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { Textarea } from "@/atoms/textarea";
import { cn } from "@/lib/cn";
import { DemoBadge } from "../../_components/Badges";
import { Placeholder } from "../../_components/Placeholder";
import { StatePanel } from "../../_components/StatePanel";
import { contactTopics, isTopicId, type TopicId } from "../../_data/contact";
import styles from "./contact.module.css";
import {
  demoStateCopy,
  type FieldId,
  fieldCopy,
  fieldOrder,
  formCopy,
  sendError,
  successCopy,
  summaryTitle,
} from "./content";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
/** Local-only pretend network time. Nothing is sent or stored. */
const sendDelayMs = 1200;

type Values = {
  name: string;
  email: string;
  topic: TopicId | "";
  message: string;
};

type Phase = "editing" | "sending" | "error" | "success";
type FocusTarget = "summary" | "sendError" | "success";

const isMissing: Record<FieldId, (values: Values) => boolean> = {
  name: (values) => values.name.trim().length === 0,
  email: (values) => !emailPattern.test(values.email.trim()),
  topic: (values) => values.topic === "",
  message: (values) => values.message.trim().length === 0,
};

function validate(values: Values): FieldId[] {
  return fieldOrder.filter((field) => isMissing[field](values));
}

type FieldTextProps = {
  field: FieldId;
  controlId: string;
  helpId: string;
  errorId: string;
  invalid: boolean;
};

/** Visible label, help text and (when invalid) the linked inline error. */
function FieldText({
  field,
  controlId,
  helpId,
  errorId,
  invalid,
}: FieldTextProps) {
  const copy = fieldCopy[field];
  return (
    <>
      <Label className={styles.label} htmlFor={controlId}>
        {copy.label}
      </Label>
      {copy.help ? (
        <p className={styles.help} id={helpId}>
          {copy.help}
        </p>
      ) : null}
      {invalid ? (
        <p className={styles.error} id={errorId}>
          <span className="sr-only">{formCopy.errorPrefix} </span>
          {copy.error}
        </p>
      ) : null}
    </>
  );
}

export type ContactFormProps = {
  /** Preselected from `?topic=` when it is a known topic id. */
  initialTopic: TopicId | "";
  /** Id of the page heading that names the form. */
  labelledBy: string;
};

export function ContactForm({ initialTopic, labelledBy }: ContactFormProps) {
  const uid = useId();
  const idFor = (field: FieldId | "onBehalf") => `contact-${field}-${uid}`;
  const summaryHeadingId = `contact-summary-title-${uid}`;

  const [values, setValues] = useState<Values>({
    name: "",
    email: "",
    topic: initialTopic,
    message: "",
  });
  const [onBehalf, setOnBehalf] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const [phase, setPhase] = useState<Phase>("editing");
  const [failSends, setFailSends] = useState(false);
  const [sent, setSent] = useState({ name: "", email: "" });
  const [focusRequest, setFocusRequest] = useState<{
    target: FocusTarget;
    tick: number;
  } | null>(null);

  const summaryRef = useRef<HTMLElement>(null);
  const sendErrorRef = useRef<HTMLDivElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const timer = useRef<number | null>(null);

  const invalid = attempted ? validate(values) : [];
  const sending = phase === "sending";

  useEffect(() => {
    if (!focusRequest) return;
    const node = {
      summary: summaryRef.current,
      sendError: sendErrorRef.current,
      success: successRef.current,
    }[focusRequest.target];
    node?.focus();
  }, [focusRequest]);

  useEffect(
    () => () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    },
    [],
  );

  function requestFocus(target: FocusTarget) {
    setFocusRequest((current) => ({
      target,
      tick: (current?.tick ?? 0) + 1,
    }));
  }

  function update<K extends keyof Values>(field: K, value: Values[K]) {
    setValues((current) => ({ ...current, [field]: value }));
  }

  function send(shouldFail: boolean) {
    if (sending) return;
    setAttempted(true);
    if (validate(values).length > 0) {
      setPhase("editing");
      requestFocus("summary");
      return;
    }

    const snapshot = { name: values.name.trim(), email: values.email.trim() };
    setPhase("sending");
    timer.current = window.setTimeout(() => {
      timer.current = null;
      if (shouldFail) {
        setPhase("error");
        requestFocus("sendError");
        return;
      }
      setSent(snapshot);
      setPhase("success");
      requestFocus("success");
    }, sendDelayMs);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    send(failSends);
  }

  function retry() {
    setFailSends(false);
    send(false);
  }

  function toggleFailSends() {
    if (sending) return;
    const next = !failSends;
    setFailSends(next);
    setPhase(next ? "error" : "editing");
  }

  function jumpToField(event: MouseEvent<HTMLAnchorElement>, field: FieldId) {
    event.preventDefault();
    const control = document.getElementById(idFor(field));
    control?.focus({ preventScroll: true });
    control?.scrollIntoView({ block: "center" });
  }

  if (phase === "success") {
    return (
      <div className={cn(styles.panel, styles.success)}>
        <h2 className={styles.successTitle} ref={successRef} tabIndex={-1}>
          {successCopy.title(sent.name)}
        </h2>
        <p className={cn("jk-lead", styles.successBody)}>
          {successCopy.bodyBefore}
          <strong className={styles.successEmail}>{sent.email}</strong>
          {successCopy.bodyMiddle}
          <Placeholder text={successCopy.responseTime} />
          {successCopy.bodyAfter}
        </p>
        <div>
          <Button asChild size="lg">
            <Link href={successCopy.back.href as Route}>
              {successCopy.back.label}
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  const errorId = (field: FieldId) => `${idFor(field)}-error`;
  const helpId = (field: FieldId) => `${idFor(field)}-help`;
  const describedBy = (field: FieldId) =>
    [
      fieldCopy[field].help ? helpId(field) : null,
      invalid.includes(field) ? errorId(field) : null,
    ]
      .filter(Boolean)
      .join(" ") || undefined;

  const fieldText = (field: FieldId) => (
    <FieldText
      controlId={idFor(field)}
      errorId={errorId(field)}
      field={field}
      helpId={helpId(field)}
      invalid={invalid.includes(field)}
    />
  );

  const controlProps = (field: FieldId) => ({
    "aria-describedby": describedBy(field),
    "aria-invalid": invalid.includes(field) || undefined,
    id: idFor(field),
    name: field,
    required: true,
  });

  const fieldClass = (field: FieldId) =>
    cn(styles.field, invalid.includes(field) && styles.fieldInvalid);

  return (
    <form
      aria-labelledby={labelledBy}
      className={cn(styles.panel, styles.form)}
      noValidate
      onSubmit={handleSubmit}
    >
      {invalid.length > 0 ? (
        <section
          aria-labelledby={summaryHeadingId}
          className={styles.summary}
          ref={summaryRef}
          tabIndex={-1}
        >
          <h2 className={styles.summaryTitle} id={summaryHeadingId}>
            {summaryTitle(invalid.length)}
          </h2>
          <ul className={styles.summaryList}>
            {invalid.map((field) => (
              <li key={field}>
                <a
                  className={styles.summaryLink}
                  href={`#${idFor(field)}`}
                  onClick={(event) => jumpToField(event, field)}
                >
                  {fieldCopy[field].error}
                </a>
              </li>
            ))}
          </ul>
        </section>
      ) : null}

      <div className={styles.pair}>
        <div className={fieldClass("name")}>
          {fieldText("name")}
          <Input
            {...controlProps("name")}
            autoComplete="name"
            className={styles.control}
            onChange={(event) => update("name", event.target.value)}
            value={values.name}
          />
        </div>

        <div className={fieldClass("email")}>
          {fieldText("email")}
          <Input
            {...controlProps("email")}
            autoComplete="email"
            className={styles.control}
            inputMode="email"
            onChange={(event) => update("email", event.target.value)}
            spellCheck={false}
            type="email"
            value={values.email}
          />
        </div>
      </div>

      <div className={fieldClass("topic")}>
        {fieldText("topic")}
        <span className={styles.selectWrap}>
          <select
            {...controlProps("topic")}
            className={cn(styles.control, styles.select)}
            onChange={(event) => {
              const next = event.target.value;
              update("topic", isTopicId(next) ? next : "");
            }}
            value={values.topic}
          >
            <option value="">{formCopy.topicPrompt}</option>
            {contactTopics.map((topic) => (
              <option key={topic.id} value={topic.id}>
                {topic.label}
              </option>
            ))}
          </select>
        </span>
      </div>

      <div className={fieldClass("message")}>
        {fieldText("message")}
        <Textarea
          {...controlProps("message")}
          className={cn(styles.control, styles.message)}
          onChange={(event) => update("message", event.target.value)}
          rows={6}
          value={values.message}
        />
      </div>

      <div className={styles.checkRow}>
        <Checkbox
          checked={onBehalf}
          className={styles.checkbox}
          id={idFor("onBehalf")}
          name="onBehalf"
          onCheckedChange={(checked) => setOnBehalf(checked)}
        />
        <Label className={styles.checkLabel} htmlFor={idFor("onBehalf")}>
          {formCopy.onBehalf}
        </Label>
      </div>

      {phase === "error" ? (
        <div className={styles.sendError} ref={sendErrorRef} tabIndex={-1}>
          <StatePanel
            action={{ label: sendError.retry, onClick: retry }}
            kind="error"
            message={sendError.message}
          />
        </div>
      ) : null}

      <div className={styles.actions}>
        <Button
          aria-disabled={sending || undefined}
          className={styles.submit}
          size="lg"
          type="submit"
        >
          {sending ? formCopy.sending : formCopy.submit}
        </Button>
        <p aria-live="polite" className="sr-only">
          {sending ? formCopy.sending : ""}
        </p>
      </div>

      <fieldset className={styles.demoControls}>
        <legend className={styles.demoLegend}>
          <DemoBadge>{demoStateCopy.badge}</DemoBadge>
        </legend>
        <button
          aria-pressed={failSends}
          className={styles.demoToggle}
          onClick={toggleFailSends}
          type="button"
        >
          <span aria-hidden="true" className={styles.demoToggleTrack} />
          {demoStateCopy.toggle}
        </button>
      </fieldset>
    </form>
  );
}
