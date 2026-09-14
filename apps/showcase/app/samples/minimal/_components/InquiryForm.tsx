"use client";

import { type FormEvent, useId, useMemo, useState } from "react";
import { Button } from "@/atoms/button";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { Textarea } from "@/atoms/textarea";
import {
  demoNote,
  getProject,
  getService,
  projects,
  services,
} from "../content";
import type { ServiceId } from "../types";
import styles from "../style.module.css";

type FormValues = {
  name: string;
  email: string;
  service: string;
  project: string;
  location: string;
  brief: string;
  timing: string;
};

type FieldKey = keyof FormValues;

const emptyValues: FormValues = {
  name: "",
  email: "",
  service: "",
  project: "",
  location: "",
  brief: "",
  timing: "",
};

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

export function InquiryForm({
  initialProject,
  initialService,
}: {
  initialProject?: string;
  initialService?: ServiceId;
}) {
  const formId = useId();
  const [values, setValues] = useState<FormValues>({
    ...emptyValues,
    project: initialProject ?? "",
    service: initialService ?? "",
  });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<"draft" | "invalid" | "preview">(
    "draft",
  );

  const selectedProject = getProject(values.project);
  const selectedService = getService(values.service);

  const contextLine = useMemo(() => {
    if (selectedService && selectedProject) {
      return `${selectedService.title} for ${selectedProject.title}`;
    }
    if (selectedService) return selectedService.title;
    if (selectedProject) return selectedProject.title;
    return "No project or scope selected yet.";
  }, [selectedProject, selectedService]);

  function fieldId(key: FieldKey) {
    return `${formId}-${key}`;
  }

  function errorId(key: FieldKey) {
    return `${formId}-${key}-error`;
  }

  function validate(next: FormValues) {
    const nextErrors: Partial<Record<FieldKey, string>> = {};
    if (!next.name.trim()) nextErrors.name = "Enter your name.";
    if (!next.email.trim()) nextErrors.email = "Enter an email address.";
    else if (!isEmail(next.email.trim())) {
      nextErrors.email = "Enter an email address with an @ sign.";
    }
    if (!getService(next.service)) {
      nextErrors.service = "Choose architecture or interiors.";
    }
    if (!next.location.trim()) {
      nextErrors.location = "Enter a location for the work.";
    }
    if (!next.brief.trim()) {
      nextErrors.brief = "Write a short brief.";
    }
    if (next.project && !getProject(next.project)) {
      nextErrors.project = "Choose a listed project, or leave this blank.";
    }
    return nextErrors;
  }

  function focusFirst(nextErrors: Partial<Record<FieldKey, string>>) {
    const order: FieldKey[] = [
      "name",
      "email",
      "service",
      "project",
      "location",
      "brief",
      "timing",
    ];
    const first = order.find((key) => nextErrors[key]);
    if (!first) return;
    document.getElementById(fieldId(first))?.focus();
  }

  function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validate(values);
    if (Object.keys(nextErrors).length) {
      setErrors(nextErrors);
      setStatus("invalid");
      focusFirst(nextErrors);
      return;
    }
    setErrors({});
    setStatus("preview");
  }

  function onReset() {
    setValues(emptyValues);
    setErrors({});
    setStatus("draft");
  }

  if (status === "preview") {
    return (
      <div className={styles.review}>
        <p className="jk-label" aria-live="polite">
          Inquiry preview prepared. Nothing was sent.
        </p>
        <dl className={styles.listPlain}>
          <div>
            <dt className="jk-label">Name</dt>
            <dd>{values.name}</dd>
          </div>
          <div>
            <dt className="jk-label">Email</dt>
            <dd>{values.email}</dd>
          </div>
          <div>
            <dt className="jk-label">Scope</dt>
            <dd>{selectedService?.title ?? "None"}</dd>
          </div>
          <div>
            <dt className="jk-label">Related project</dt>
            <dd>{selectedProject?.title ?? "None"}</dd>
          </div>
          <div>
            <dt className="jk-label">Location</dt>
            <dd>{values.location}</dd>
          </div>
          <div>
            <dt className="jk-label">Brief</dt>
            <dd>{values.brief}</dd>
          </div>
          <div>
            <dt className="jk-label">Timing</dt>
            <dd>{values.timing.trim() ? values.timing : "Not specified"}</dd>
          </div>
        </dl>
        <div className="flex flex-wrap gap-2">
          <Button type="button" onClick={() => setStatus("draft")}>
            Edit
          </Button>
          <Button type="button" variant="secondary" onClick={onReset}>
            Reset inquiry
          </Button>
        </div>
        <p className={`jk-caption ${styles.meta}`}>{demoNote}</p>
      </div>
    );
  }

  return (
    <form className="grid gap-6" noValidate onSubmit={onSubmit}>
      <p className="jk-body" aria-live="polite">
        {status === "invalid"
          ? "The inquiry is not ready. Check the marked fields."
          : `Context: ${contextLine}`}
      </p>
      <div className={styles.field}>
        <Label htmlFor={fieldId("name")}>Name</Label>
        <Input
          id={fieldId("name")}
          name="name"
          autoComplete="name"
          value={values.name}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? errorId("name") : undefined}
          onChange={(event) =>
            setValues((current) => ({ ...current, name: event.target.value }))
          }
        />
        {errors.name ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("name")}>
            {errors.name}
          </p>
        ) : null}
      </div>
      <div className={styles.field}>
        <Label htmlFor={fieldId("email")}>Email</Label>
        <Input
          id={fieldId("email")}
          name="email"
          type="email"
          autoComplete="email"
          value={values.email}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? errorId("email") : undefined}
          onChange={(event) =>
            setValues((current) => ({ ...current, email: event.target.value }))
          }
        />
        {errors.email ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("email")}>
            {errors.email}
          </p>
        ) : null}
      </div>
      <div className={styles.field}>
        <Label htmlFor={fieldId("service")}>Project type</Label>
        <select
          className="h-11 w-full rounded-[--radius] border border-input bg-transparent px-2.5 text-base"
          id={fieldId("service")}
          name="service"
          value={values.service}
          aria-invalid={Boolean(errors.service)}
          aria-describedby={errors.service ? errorId("service") : undefined}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              service: event.target.value,
            }))
          }
        >
          <option value="">Choose a scope</option>
          {services.map((service) => (
            <option key={service.id} value={service.id}>
              {service.title}
            </option>
          ))}
        </select>
        {errors.service ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("service")}>
            {errors.service}
          </p>
        ) : null}
      </div>
      <div className={styles.field}>
        <Label htmlFor={fieldId("project")}>Related project (optional)</Label>
        <select
          className="h-11 w-full rounded-[--radius] border border-input bg-transparent px-2.5 text-base"
          id={fieldId("project")}
          name="project"
          value={values.project}
          aria-invalid={Boolean(errors.project)}
          aria-describedby={errors.project ? errorId("project") : undefined}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              project: event.target.value,
            }))
          }
        >
          <option value="">None</option>
          {projects.map((project) => (
            <option key={project.slug} value={project.slug}>
              {project.title}
            </option>
          ))}
        </select>
        {errors.project ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("project")}>
            {errors.project}
          </p>
        ) : null}
      </div>
      <div className={styles.field}>
        <Label htmlFor={fieldId("location")}>Location</Label>
        <Input
          id={fieldId("location")}
          name="location"
          value={values.location}
          aria-invalid={Boolean(errors.location)}
          aria-describedby={errors.location ? errorId("location") : undefined}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              location: event.target.value,
            }))
          }
        />
        {errors.location ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("location")}>
            {errors.location}
          </p>
        ) : null}
      </div>
      <div className={styles.field}>
        <Label htmlFor={fieldId("brief")}>Short brief</Label>
        <Textarea
          id={fieldId("brief")}
          name="brief"
          rows={5}
          value={values.brief}
          aria-invalid={Boolean(errors.brief)}
          aria-describedby={errors.brief ? errorId("brief") : undefined}
          onChange={(event) =>
            setValues((current) => ({ ...current, brief: event.target.value }))
          }
        />
        {errors.brief ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("brief")}>
            {errors.brief}
          </p>
        ) : null}
      </div>
      <div className={styles.field}>
        <Label htmlFor={fieldId("timing")}>Timing (optional)</Label>
        <Input
          id={fieldId("timing")}
          name="timing"
          value={values.timing}
          onChange={(event) =>
            setValues((current) => ({ ...current, timing: event.target.value }))
          }
        />
      </div>
      <div className="flex flex-wrap gap-2">
        <Button type="submit">Preview inquiry</Button>
        <Button type="button" variant="secondary" onClick={onReset}>
          Reset inquiry
        </Button>
      </div>
      <p className={`jk-caption ${styles.meta}`}>{demoNote}</p>
    </form>
  );
}
