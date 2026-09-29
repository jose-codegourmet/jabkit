"use client";

import { type FormEvent, useEffect, useId, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { Textarea } from "@/atoms/textarea";
import { ClaySurface } from "../../_components/ClaySurface";
import styles from "./contact.module.css";
import {
  contactSuccess,
  contactTopics,
  contactFormCopy as copy,
} from "./content";

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type FieldKey = "name" | "email" | "message";
type Phase = "editing" | "loading" | "error" | "success";
type FocusTarget =
  | "name"
  | "email"
  | "message"
  | "error"
  | "success"
  | "toggle";

const fieldOrder: FieldKey[] = ["name", "email", "message"];

function invalidFields(values: {
  name: string;
  email: string;
  message: string;
}): FieldKey[] {
  return fieldOrder.filter((field) => {
    if (field === "name") return values.name.trim().length === 0;
    if (field === "email") return !emailPattern.test(values.email.trim());
    return values.message.trim().length === 0;
  });
}

export function ContactForm() {
  const baseId = useId().replace(/:/g, "");
  const nameId = `${baseId}-name`;
  const emailId = `${baseId}-email`;
  const topicId = `${baseId}-topic`;
  const messageId = `${baseId}-message`;
  const messageHelpId = `${messageId}-help`;
  const nameErrorId = `${nameId}-error`;
  const emailErrorId = `${emailId}-error`;
  const messageErrorId = `${messageId}-error`;
  const errorId = `${baseId}-send-error`;
  const successId = `${baseId}-success`;
  const toggleId = `${baseId}-show-error`;

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [topic, setTopic] = useState<(typeof contactTopics)[number]>(
    contactTopics[0],
  );
  const [message, setMessage] = useState("");
  const [touched, setTouched] = useState<Partial<Record<FieldKey, boolean>>>(
    {},
  );
  const [submitted, setSubmitted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [phase, setPhase] = useState<Phase>("editing");
  const [savedName, setSavedName] = useState("");

  const errorRef = useRef<HTMLParagraphElement>(null);
  const successRef = useRef<HTMLParagraphElement>(null);
  const timer = useRef<number | null>(null);
  const pendingFocus = useRef<FocusTarget | null>(null);

  const values = { name, email, message };
  const errors = invalidFields(values);
  const loading = phase === "loading";
  const sendErrorVisible = showError || phase === "error";

  useEffect(() => {
    const target = pendingFocus.current;
    if (!target) return;
    pendingFocus.current = null;
    if (target === "error") errorRef.current?.focus();
    if (target === "success") successRef.current?.focus();
    if (target === "toggle") document.getElementById(toggleId)?.focus();
    if (target === "name" || target === "email" || target === "message") {
      document.getElementById(`${baseId}-${target}`)?.focus();
    }
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

  function toggleError() {
    if (loading) return;
    const next = !showError;
    setShowError(next);
    if (next) {
      pendingFocus.current = "error";
      return;
    }
    if (phase === "error") setPhase("editing");
    pendingFocus.current = "toggle";
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (loading) return;
    setSubmitted(true);
    const invalid = invalidFields(values);
    if (invalid.length > 0) {
      pendingFocus.current = invalid[0];
      if (phase === "error" && !showError) setPhase("editing");
      return;
    }
    if (timer.current !== null) window.clearTimeout(timer.current);
    const forceError = showError;
    setPhase("loading");
    timer.current = window.setTimeout(() => {
      timer.current = null;
      if (forceError) {
        pendingFocus.current = "error";
        setPhase("error");
        return;
      }
      setSavedName(name.trim());
      pendingFocus.current = "success";
      setPhase("success");
    }, 900);
  }

  if (phase === "success") {
    return (
      <ClaySurface className={styles.successPanel}>
        <p
          className={`jk-body ${styles.success}`}
          id={successId}
          ref={successRef}
          role="status"
          tabIndex={-1}
        >
          {contactSuccess(savedName)}
        </p>
      </ClaySurface>
    );
  }

  return (
    <ClaySurface>
      <form
        aria-busy={loading ? true : undefined}
        className={styles.form}
        noValidate
        onSubmit={handleSubmit}
      >
        <p aria-live="polite" className={styles.srOnly}>
          {loading ? copy.loading : ""}
        </p>

        <div className={styles.field}>
          <Label htmlFor={nameId}>{copy.nameLabel}</Label>
          <Input
            aria-describedby={showInline("name") ? nameErrorId : undefined}
            aria-invalid={showInline("name") || undefined}
            autoComplete="name"
            className={styles.control}
            disabled={loading}
            id={nameId}
            name="name"
            onBlur={() => touch("name")}
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
          {showInline("name") ? (
            <p className={`jk-caption ${styles.error}`} id={nameErrorId}>
              {copy.nameError}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <Label htmlFor={emailId}>{copy.emailLabel}</Label>
          <Input
            aria-describedby={showInline("email") ? emailErrorId : undefined}
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
          {showInline("email") ? (
            <p className={`jk-caption ${styles.error}`} id={emailErrorId}>
              {copy.emailError}
            </p>
          ) : null}
        </div>

        <div className={styles.field}>
          <Label htmlFor={topicId}>{copy.topicLabel}</Label>
          <select
            className={styles.select}
            disabled={loading}
            id={topicId}
            name="topic"
            onChange={(event) => {
              const next = contactTopics.find(
                (option) => option === event.target.value,
              );
              if (next) setTopic(next);
            }}
            value={topic}
          >
            {contactTopics.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.field}>
          <Label htmlFor={messageId}>{copy.messageLabel}</Label>
          <Textarea
            aria-describedby={
              showInline("message")
                ? `${messageHelpId} ${messageErrorId}`
                : messageHelpId
            }
            aria-invalid={showInline("message") || undefined}
            className={styles.message}
            disabled={loading}
            id={messageId}
            name="message"
            onBlur={() => touch("message")}
            onChange={(event) => setMessage(event.target.value)}
            rows={5}
            value={message}
          />
          <p className={`jk-caption ${styles.help}`} id={messageHelpId}>
            {copy.messageHelp}
          </p>
          {showInline("message") ? (
            <p className={`jk-caption ${styles.error}`} id={messageErrorId}>
              {copy.messageError}
            </p>
          ) : null}
        </div>

        {sendErrorVisible ? (
          <div className={styles.errorPanel}>
            <p
              className={`jk-body ${styles.errorCopy}`}
              id={errorId}
              ref={errorRef}
              role="alert"
              tabIndex={-1}
            >
              {copy.sendError}
            </p>
          </div>
        ) : null}

        <div className={styles.actions}>
          <Button
            aria-busy={loading ? true : undefined}
            disabled={loading}
            type="submit"
          >
            {loading ? copy.loading : copy.submit}
          </Button>
        </div>

        <div className={styles.demoControls}>
          <button
            aria-pressed={showError}
            className={styles.demoToggle}
            disabled={loading}
            id={toggleId}
            onClick={toggleError}
            type="button"
          >
            {copy.showError}
          </button>
        </div>
      </form>
    </ClaySurface>
  );
}
