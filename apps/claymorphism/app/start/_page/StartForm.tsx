"use client";

import { type FormEvent, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { Checkbox } from "@/atoms/checkbox";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { ChildTile } from "../../_components/ChildTile";
import { ClayImage } from "../../_components/ClayImage";
import { ClaySurface } from "../../_components/ClaySurface";
import {
  getRoutine,
  isRoutineSlug,
  startRoutineOptions,
} from "../../_data/routines";
import { exampleBadgeLabel } from "../../_data/site";
import type { RoutineSlug, StartRoutineValue } from "../../_data/types";
import {
  startFormCopy as copy,
  errorSummary,
  startIntro,
  stepCountMessage,
  successBody,
} from "./content";
import styles from "./start.module.css";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldKey = "firstName" | "email" | "boardName" | "terms";
type Phase = "editing" | "loading" | "error" | "success";
type FocusTarget = "summary" | "error" | "success" | "submit";

const fieldOrder: FieldKey[] = ["firstName", "email", "boardName", "terms"];

const fieldError: Record<FieldKey, string> = {
  firstName: copy.firstNameError,
  email: copy.emailError,
  boardName: copy.boardNameError,
  terms: copy.termsError,
};

type FormValues = {
  firstName: string;
  email: string;
  boardName: string;
  terms: boolean;
};

type BoardStep = {
  id: number;
  label: string;
};

function invalidFields(values: FormValues): FieldKey[] {
  return fieldOrder.filter((field) => {
    if (field === "firstName") return values.firstName.trim().length === 0;
    if (field === "email") return !emailPattern.test(values.email.trim());
    if (field === "boardName") return values.boardName.trim().length === 0;
    return !values.terms;
  });
}

function isStartRoutine(value: string): value is StartRoutineValue {
  return value === "blank" || isRoutineSlug(value);
}

export function StartForm({ routine }: { routine?: RoutineSlug }) {
  const preset = routine ? getRoutine(routine) : undefined;
  const baseId = useId().replace(/:/g, "");
  const firstNameId = `${baseId}-first-name`;
  const emailId = `${baseId}-email`;
  const boardNameId = `${baseId}-board-name`;
  const routineId = `${baseId}-routine`;
  const termsId = `${baseId}-terms`;
  const stepNameId = `${baseId}-step-name`;
  const summaryId = `${baseId}-summary`;
  const helperId = `${baseId}-helper`;
  const submitId = `${baseId}-submit`;
  const errorId = "start-error";
  const successId = `${baseId}-success`;

  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [boardName, setBoardName] = useState(preset?.name ?? "");
  const [starting, setStarting] = useState<StartRoutineValue>(
    routine ?? "blank",
  );
  const [terms, setTerms] = useState(false);
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);
  const [phase, setPhase] = useState<Phase>("editing");
  const [savedFirst, setSavedFirst] = useState("");
  const [savedBoard, setSavedBoard] = useState("");
  const [steps, setSteps] = useState<BoardStep[]>([]);
  const stepId = useRef(0);
  const [stepDraft, setStepDraft] = useState("");
  const [childOpen, setChildOpen] = useState(false);

  const summaryRef = useRef<HTMLDivElement>(null);
  const errorRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLHeadingElement>(null);
  const timer = useRef<number | null>(null);
  const pendingFocus = useRef<FocusTarget | null>(null);

  const values: FormValues = { firstName, email, boardName, terms };
  const errors = invalidFields(values);
  const ready = errors.length === 0;
  const showSummary = submitted && errors.length > 0 && phase !== "success";

  useEffect(() => {
    const target = pendingFocus.current;
    if (!target) return;
    pendingFocus.current = null;
    if (target === "summary") summaryRef.current?.focus();
    if (target === "error") errorRef.current?.focus();
    if (target === "success") successRef.current?.focus();
    if (target === "submit") document.getElementById(submitId)?.focus();
  });

  useEffect(() => {
    return () => {
      if (timer.current !== null) window.clearTimeout(timer.current);
    };
  }, []);

  function touch(field: FieldKey) {
    setTouched((current) => ({ ...current, [field]: true }));
  }

  function showInline(field: FieldKey) {
    return (touched[field] || submitted) && errors.includes(field);
  }

  function describedBy(helpId: string, field: FieldKey, messageId: string) {
    return showInline(field) ? `${helpId} ${messageId}` : helpId;
  }

  function beginCreate(forceError: boolean) {
    if (timer.current !== null) window.clearTimeout(timer.current);
    setPhase("loading");
    timer.current = window.setTimeout(() => {
      timer.current = null;
      if (forceError) {
        pendingFocus.current = "error";
        setPhase("error");
        return;
      }
      const picked = starting === "blank" ? undefined : getRoutine(starting);
      const labels = picked ? picked.steps.map((step) => step.label) : [];
      setSavedFirst(firstName.trim());
      setSavedBoard(boardName.trim());
      setSteps(
        labels.map((label) => {
          stepId.current += 1;
          return { id: stepId.current, label };
        }),
      );
      setStepDraft("");
      setChildOpen(false);
      pendingFocus.current = "success";
      setPhase("success");
    }, 900);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (phase === "loading") return;
    setSubmitted(true);
    if (invalidFields(values).length > 0) {
      pendingFocus.current = "summary";
      setPhase("editing");
      return;
    }
    beginCreate(false);
  }

  function showError(event: { preventDefault: () => void }) {
    event.preventDefault();
    if (timer.current !== null) {
      window.clearTimeout(timer.current);
      timer.current = null;
    }
    pendingFocus.current = "error";
    setPhase("error");
  }

  function tryAgain() {
    pendingFocus.current = "submit";
    setPhase("editing");
  }

  function addStep(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const name = stepDraft.trim();
    if (!name) {
      document.getElementById(stepNameId)?.focus();
      return;
    }
    stepId.current += 1;
    const id = stepId.current;
    setSteps((current) => [...current, { id, label: name }]);
    setStepDraft("");
  }

  if (phase === "success") {
    const nextStep = steps[0]?.label;
    return (
      <div className={styles.success}>
        <h2
          className="jk-heading"
          id={successId}
          ref={successRef}
          tabIndex={-1}
        >
          {copy.successTitle}
        </h2>
        <p className={`jk-body ${styles.successBody}`}>
          {successBody(savedFirst)}
        </p>
        <ClaySurface className={styles.board}>
          <div className={styles.boardHeader}>
            <h3 className={styles.boardTitle}>{savedBoard}</h3>
            <span className={styles.badge}>{exampleBadgeLabel}</span>
          </div>
          {steps.length === 0 ? (
            <div className={styles.empty}>
              <ClayImage
                alt=""
                className={styles.emptyImage}
                decorative
                fluid
                id={startIntro.imageId}
                sizes="104px"
              />
              <p className={`jk-body ${styles.emptyCopy}`}>{copy.empty}</p>
            </div>
          ) : (
            <>
              <ol className={styles.steps}>
                {steps.map((step) => (
                  <li key={step.id}>{step.label}</li>
                ))}
              </ol>
              <p className={styles.stepStatus}>
                {stepCountMessage(steps.length)}
              </p>
            </>
          )}
          <form className={styles.stepForm} noValidate onSubmit={addStep}>
            <div className={styles.field}>
              <Label htmlFor={stepNameId}>{copy.stepNameLabel}</Label>
              <Input
                className={styles.control}
                id={stepNameId}
                name="stepName"
                onChange={(event) => setStepDraft(event.target.value)}
                value={stepDraft}
              />
            </div>
            <Button className={styles.addStep} type="submit">
              {copy.addStep}
            </Button>
          </form>
          <Button
            aria-pressed={childOpen}
            onClick={() => setChildOpen((open) => !open)}
            type="button"
          >
            {copy.childToggle}
          </Button>
          {childOpen && nextStep ? (
            <ChildTile
              className={styles.child}
              step={nextStep}
              thenStep={steps[1]?.label}
            />
          ) : null}
        </ClaySurface>
      </div>
    );
  }

  const firstHelpId = `${firstNameId}-help`;
  const firstErrorId = `${firstNameId}-error`;
  const emailHelpId = `${emailId}-help`;
  const emailErrorId = `${emailId}-error`;
  const boardHelpId = `${boardNameId}-help`;
  const boardErrorId = `${boardNameId}-error`;
  const termsErrorId = `${termsId}-error`;
  const fieldIds: Record<FieldKey, string> = {
    firstName: firstNameId,
    email: emailId,
    boardName: boardNameId,
    terms: termsId,
  };
  const loading = phase === "loading";

  return (
    <ClaySurface>
      <form
        aria-busy={loading ? true : undefined}
        className={styles.form}
        noValidate
        onSubmit={handleSubmit}
      >
        <p className={styles.srOnly} aria-live="polite">
          {loading ? copy.loading : ""}
        </p>
        {showSummary ? (
          <div
            className={styles.summary}
            id={summaryId}
            ref={summaryRef}
            role="alert"
            tabIndex={-1}
          >
            <p>{errorSummary(errors.length)}</p>
            <ul>
              {errors.map((field) => (
                <li key={field}>
                  <a href={`#${fieldIds[field]}`}>{fieldError[field]}</a>
                </li>
              ))}
            </ul>
          </div>
        ) : null}

        <div className={styles.field}>
          <Label htmlFor={firstNameId}>{copy.firstNameLabel}</Label>
          <Input
            aria-describedby={describedBy(
              firstHelpId,
              "firstName",
              firstErrorId,
            )}
            aria-invalid={showInline("firstName") || undefined}
            autoComplete="given-name"
            className={styles.control}
            disabled={loading}
            id={firstNameId}
            name="firstName"
            onBlur={() => touch("firstName")}
            onChange={(event) => setFirstName(event.target.value)}
            value={firstName}
          />
          <p className={`jk-caption ${styles.help}`} id={firstHelpId}>
            {copy.firstNameHelp}
          </p>
          {showInline("firstName") ? (
            <p className={`jk-caption ${styles.error}`} id={firstErrorId}>
              {copy.firstNameError}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <Label htmlFor={emailId}>{copy.emailLabel}</Label>
          <Input
            aria-describedby={describedBy(emailHelpId, "email", emailErrorId)}
            aria-invalid={showInline("email") || undefined}
            autoComplete="email"
            className={styles.control}
            disabled={loading}
            id={emailId}
            name="email"
            onBlur={() => touch("email")}
            onChange={(event) => setEmail(event.target.value)}
            type="email"
            value={email}
          />
          <p className={`jk-caption ${styles.help}`} id={emailHelpId}>
            {copy.emailHelp}
          </p>
          {showInline("email") ? (
            <p className={`jk-caption ${styles.error}`} id={emailErrorId}>
              {copy.emailError}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <Label htmlFor={boardNameId}>{copy.boardNameLabel}</Label>
          <Input
            aria-describedby={describedBy(
              boardHelpId,
              "boardName",
              boardErrorId,
            )}
            aria-invalid={showInline("boardName") || undefined}
            className={styles.control}
            disabled={loading}
            id={boardNameId}
            name="boardName"
            onBlur={() => touch("boardName")}
            onChange={(event) => setBoardName(event.target.value)}
            placeholder={copy.boardNamePlaceholder}
            value={boardName}
          />
          {showInline("boardName") ? (
            <p className={`jk-caption ${styles.error}`} id={boardErrorId}>
              {copy.boardNameError}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <Label htmlFor={routineId}>{copy.routineLabel}</Label>
          <select
            className={styles.select}
            disabled={loading}
            id={routineId}
            name="startingRoutine"
            onChange={(event) => {
              const next = event.target.value;
              if (isStartRoutine(next)) setStarting(next);
            }}
            value={starting}
          >
            {startRoutineOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <div className={styles.terms}>
            <Checkbox
              aria-describedby={showInline("terms") ? termsErrorId : undefined}
              aria-invalid={showInline("terms") || undefined}
              checked={terms}
              disabled={loading}
              id={termsId}
              name="terms"
              onBlur={() => touch("terms")}
              onCheckedChange={(checked) => {
                setTerms(checked === true);
              }}
            />
            <label className={styles.termsText} htmlFor={termsId}>
              {copy.termsBefore} <a href="/terms">{copy.termsLink}</a>{" "}
              {copy.termsBetween} <a href="/privacy">{copy.privacyLink}</a>
            </label>
          </div>
          {showInline("terms") ? (
            <p className={`jk-caption ${styles.error}`} id={termsErrorId}>
              {copy.termsError}
            </p>
          ) : null}
        </div>

        {phase === "error" ? (
          <div className={styles.errorPanel}>
            <p
              className={`jk-body ${styles.errorCopy}`}
              id={errorId}
              ref={errorRef}
              role="alert"
              tabIndex={-1}
            >
              {copy.error}
            </p>
            <Button onClick={tryAgain} type="button">
              {copy.tryAgain}
            </Button>
          </div>
        ) : (
          <div className={styles.actions}>
            <Button
              aria-busy={loading ? true : undefined}
              aria-describedby={ready || loading ? undefined : helperId}
              aria-disabled={ready ? undefined : true}
              id={submitId}
              type="submit"
            >
              {loading ? copy.loading : copy.submit}
            </Button>
            {ready || loading ? null : (
              <p className={`jk-caption ${styles.helper}`} id={helperId}>
                {copy.disabledHelp}
              </p>
            )}
          </div>
        )}

        <div className={styles.demoControls}>
          <a
            className={styles.demoLink}
            href={`#${errorId}`}
            onClick={showError}
          >
            {copy.showError}
          </a>
        </div>
      </form>
    </ClaySurface>
  );
}
