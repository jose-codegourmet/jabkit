"use client";

import { type FormEvent, useId, useState } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { Textarea } from "@/atoms/textarea";
import { DemoNotice } from "./DemoNotice";
import {
  type DemoFormStatus,
  type DemoFormValues,
  demoStatusCopy,
  emptyDemoFormValues,
  firstInvalidControl,
  validateDemoFormValues,
} from "./demo-state";

export type DemoFormContext =
  | { title: string; kind: string }
  | { missing: true };

export function DemoPreviewForm({
  context,
  submitLabel = "Preview inquiry",
}: {
  context?: DemoFormContext;
  submitLabel?: string;
}) {
  const formId = useId();
  const statusId = `${formId}-status`;
  const contextId = `${formId}-context`;
  const nameErrorId = `${formId}-name-error`;
  const emailErrorId = `${formId}-email-error`;
  const [status, setStatus] = useState<DemoFormStatus>("draft");
  const [values, setValues] = useState<DemoFormValues>(emptyDemoFormValues);
  const [errors, setErrors] = useState<Partial<DemoFormValues>>({});

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
    setStatus("reset");
  }

  if (status === "preview") {
    return (
      <div className="grid gap-4">
        <DemoNotice>
          Preview prepared. Demo only. Nothing was sent, reserved, or
          subscribed.
        </DemoNotice>
        <p id={statusId} role="status" aria-live="polite" className="sr-only">
          {demoStatusCopy.preview}
        </p>
        <dl className="grid gap-3 text-sm">
          {context && "title" in context ? (
            <div>
              <dt className="text-muted-foreground">Context</dt>
              <dd className="font-medium">
                {context.title} ({context.kind})
              </dd>
            </div>
          ) : null}
          <div>
            <dt className="text-muted-foreground">Name</dt>
            <dd>{values.name}</dd>
          </div>
          <div>
            <dt className="text-muted-foreground">Email</dt>
            <dd>{values.email}</dd>
          </div>
          {values.note.trim() ? (
            <div>
              <dt className="text-muted-foreground">Note</dt>
              <dd className="whitespace-pre-wrap">{values.note}</dd>
            </div>
          ) : null}
        </dl>
        <div className="flex flex-wrap gap-2">
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
    <form className="grid gap-4" onSubmit={handleSubmit} noValidate>
      {context && "missing" in context ? (
        <p id={contextId} className="text-sm text-muted-foreground">
          That selection is not in the fixtures. Choose a record from the list.
          The unknown query value was not used as a label.
        </p>
      ) : context && "title" in context ? (
        <p id={contextId} className="text-sm text-muted-foreground">
          Preparing a preview for {context.title}. You can change this by
          picking another record.
        </p>
      ) : (
        <p id={contextId} className="text-sm text-muted-foreground">
          No record preselected. The preview will include only what you type.
        </p>
      )}

      <div className="grid gap-2">
        <Label htmlFor={`${formId}-name`}>Name</Label>
        <Input
          id={`${formId}-name`}
          name="name"
          required
          autoComplete="name"
          value={values.name}
          aria-invalid={errors.name ? true : undefined}
          aria-describedby={errors.name ? nameErrorId : undefined}
          onChange={(event) => update("name", event.currentTarget.value)}
        />
        {errors.name ? (
          <p id={nameErrorId} className="text-sm text-destructive">
            {errors.name}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor={`${formId}-email`}>Email</Label>
        <Input
          id={`${formId}-email`}
          name="email"
          type="email"
          required
          autoComplete="email"
          value={values.email}
          aria-invalid={errors.email ? true : undefined}
          aria-describedby={errors.email ? emailErrorId : undefined}
          onChange={(event) => update("email", event.currentTarget.value)}
        />
        {errors.email ? (
          <p id={emailErrorId} className="text-sm text-destructive">
            {errors.email}
          </p>
        ) : null}
      </div>

      <div className="grid gap-2">
        <Label htmlFor={`${formId}-note`}>Note (optional)</Label>
        <Textarea
          id={`${formId}-note`}
          name="note"
          value={values.note}
          onChange={(event) => update("note", event.currentTarget.value)}
        />
      </div>

      <DemoNotice>
        Preview stays in this tab. Reload clears it. No email, account, or
        payment is created.
      </DemoNotice>

      <p
        id={statusId}
        role="status"
        aria-live="polite"
        className="text-sm text-muted-foreground"
      >
        {demoStatusCopy[status]}
      </p>

      <div className="flex flex-wrap gap-2">
        <Button type="submit">{submitLabel}</Button>
        <Button type="button" variant="secondary" onClick={handleReset}>
          Reset
        </Button>
      </div>
    </form>
  );
}
