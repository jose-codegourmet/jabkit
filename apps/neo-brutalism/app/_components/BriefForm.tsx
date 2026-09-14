"use client";

import { type FormEvent, useId, useMemo, useState } from "react";
import { Button } from "@/atoms/button";
import { Checkbox } from "@/atoms/checkbox";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { Textarea } from "@/atoms/textarea";
import {
  deliverableOptions,
  engagements,
  getDeliverable,
  getEngagement,
  getProject,
  projects,
} from "../content";
import styles from "../style.module.css";
import type { DeliverableId, EngagementId } from "../types";

type FormValues = {
  name: string;
  email: string;
  plan: string;
  project: string;
  goal: string;
  timing: string;
  context: string;
  deliverables: DeliverableId[];
};

type FieldKey = Exclude<keyof FormValues, "deliverables"> | "deliverables";

function isEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

function defaultsForPlan(plan: string): DeliverableId[] {
  return getEngagement(plan)?.defaultDeliverableIds.slice() ?? [];
}

export function BriefForm({
  initialPlan,
  initialProject,
}: {
  initialPlan?: EngagementId;
  initialProject?: string;
}) {
  const formId = useId();
  const [values, setValues] = useState<FormValues>({
    name: "",
    email: "",
    plan: initialPlan ?? "",
    project: initialProject ?? "",
    goal: "",
    timing: "",
    context: "",
    deliverables: defaultsForPlan(initialPlan ?? ""),
  });
  const [errors, setErrors] = useState<Partial<Record<FieldKey, string>>>({});
  const [status, setStatus] = useState<"draft" | "invalid" | "preview">(
    "draft",
  );

  const selectedProject = getProject(values.project);
  const selectedPlan = getEngagement(values.plan);

  const contextLine = useMemo(() => {
    if (selectedPlan && selectedProject) {
      return `${selectedPlan.title} for ${selectedProject.title}`;
    }
    if (selectedPlan) return selectedPlan.title;
    if (selectedProject) return selectedProject.title;
    return "No case or scope selected yet.";
  }, [selectedPlan, selectedProject]);

  function fieldId(key: string) {
    return `${formId}-${key}`;
  }

  function errorId(key: string) {
    return `${formId}-${key}-error`;
  }

  function validate(next: FormValues) {
    const nextErrors: Partial<Record<FieldKey, string>> = {};
    if (!next.name.trim()) nextErrors.name = "Enter your name.";
    if (!next.email.trim()) nextErrors.email = "Enter an email address.";
    else if (!isEmail(next.email.trim())) {
      nextErrors.email = "Enter an email address with an @ sign.";
    }
    if (!getEngagement(next.plan)) {
      nextErrors.plan = "Choose an engagement.";
    }
    if (!next.goal.trim()) {
      nextErrors.goal = "Describe the launch in one or two sentences.";
    }
    if (next.project && !getProject(next.project)) {
      nextErrors.project = "Choose a listed case, or leave this blank.";
    }
    if (next.deliverables.length === 0) {
      nextErrors.deliverables = "Choose at least one deliverable.";
    }
    return nextErrors;
  }

  function focusFirst(nextErrors: Partial<Record<FieldKey, string>>) {
    const order: FieldKey[] = [
      "name",
      "email",
      "plan",
      "project",
      "goal",
      "deliverables",
      "timing",
      "context",
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
    setValues({
      name: "",
      email: "",
      plan: "",
      project: "",
      goal: "",
      timing: "",
      context: "",
      deliverables: [],
    });
    setErrors({});
    setStatus("draft");
  }

  function toggleDeliverable(id: DeliverableId, checked: boolean) {
    setValues((current) => {
      const next = checked
        ? [...new Set([...current.deliverables, id])]
        : current.deliverables.filter((item) => item !== id);
      return { ...current, deliverables: next };
    });
  }

  if (status === "preview") {
    return (
      <div className={styles.review}>
        <p className="jk-label" aria-live="polite">
          Brief preview prepared. Nothing was sent.
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
            <dt className="jk-label">Engagement</dt>
            <dd>{selectedPlan?.title ?? "None"}</dd>
          </div>
          <div>
            <dt className="jk-label">Related case</dt>
            <dd>{selectedProject?.title ?? "None"}</dd>
          </div>
          <div>
            <dt className="jk-label">Project goal</dt>
            <dd>{values.goal}</dd>
          </div>
          <div>
            <dt className="jk-label">Deliverables</dt>
            <dd>
              {values.deliverables
                .map((id) => getDeliverable(id)?.label)
                .filter(Boolean)
                .join(", ")}
            </dd>
          </div>
          <div>
            <dt className="jk-label">Timing</dt>
            <dd>{values.timing.trim() ? values.timing : "Not specified"}</dd>
          </div>
          <div>
            <dt className="jk-label">Context</dt>
            <dd>{values.context.trim() ? values.context : "Not specified"}</dd>
          </div>
        </dl>
        <div className={styles.actions}>
          <Button type="button" onClick={() => setStatus("draft")}>
            Edit
          </Button>
          <Button type="button" variant="secondary" onClick={onReset}>
            Reset
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form className="grid gap-6" noValidate onSubmit={onSubmit}>
      <p className="jk-body" aria-live="polite">
        {status === "invalid"
          ? "The brief is not ready. Check the marked fields."
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
        <Label htmlFor={fieldId("plan")}>Engagement</Label>
        <select
          className={styles.select}
          id={fieldId("plan")}
          name="plan"
          value={values.plan}
          aria-invalid={Boolean(errors.plan)}
          aria-describedby={errors.plan ? errorId("plan") : undefined}
          onChange={(event) => {
            const plan = event.target.value;
            setValues((current) => ({
              ...current,
              plan,
              deliverables: defaultsForPlan(plan),
            }));
          }}
        >
          <option value="">Choose an engagement</option>
          {engagements.map((engagement) => (
            <option key={engagement.id} value={engagement.id}>
              {engagement.title}
            </option>
          ))}
        </select>
        {errors.plan ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("plan")}>
            {errors.plan}
          </p>
        ) : null}
      </div>
      <div className={styles.field}>
        <Label htmlFor={fieldId("project")}>Related case (optional)</Label>
        <select
          className={styles.select}
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
        <Label htmlFor={fieldId("goal")}>Project goal</Label>
        <Textarea
          id={fieldId("goal")}
          name="goal"
          rows={5}
          value={values.goal}
          aria-invalid={Boolean(errors.goal)}
          aria-describedby={errors.goal ? errorId("goal") : undefined}
          onChange={(event) =>
            setValues((current) => ({ ...current, goal: event.target.value }))
          }
        />
        {errors.goal ? (
          <p className={`jk-caption ${styles.error}`} id={errorId("goal")}>
            {errors.goal}
          </p>
        ) : null}
      </div>
      <fieldset
        className={styles.field}
        aria-describedby={
          errors.deliverables ? errorId("deliverables") : undefined
        }
      >
        <legend className="jk-label" id={fieldId("deliverables")}>
          Desired deliverables
        </legend>
        <div className={styles.checkList}>
          {deliverableOptions.map((item) => {
            const id = fieldId(`deliverable-${item.id}`);
            return (
              <div className={styles.checkRow} key={item.id}>
                <Checkbox
                  id={id}
                  checked={values.deliverables.includes(item.id)}
                  onCheckedChange={(checked) =>
                    toggleDeliverable(item.id, checked === true)
                  }
                />
                <Label htmlFor={id}>{item.label}</Label>
              </div>
            );
          })}
        </div>
        {errors.deliverables ? (
          <p
            className={`jk-caption ${styles.error}`}
            id={errorId("deliverables")}
          >
            {errors.deliverables}
          </p>
        ) : null}
      </fieldset>
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
      <div className={styles.field}>
        <Label htmlFor={fieldId("context")}>Optional context</Label>
        <Textarea
          id={fieldId("context")}
          name="context"
          rows={4}
          value={values.context}
          onChange={(event) =>
            setValues((current) => ({
              ...current,
              context: event.target.value,
            }))
          }
        />
      </div>
      <div className={styles.actions}>
        <Button type="submit">Preview brief</Button>
        <Button type="button" variant="secondary" onClick={onReset}>
          Reset
        </Button>
      </div>
    </form>
  );
}
