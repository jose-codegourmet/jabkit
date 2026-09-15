"use client";

import { CheckIcon, CircleCheckIcon } from "lucide-react";
import {
  type FormEvent,
  type ReactNode,
  useId,
  useMemo,
  useState,
} from "react";
import { Button } from "@/atoms/button";
import { Checkbox } from "@/atoms/checkbox";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type { VForm8Plan, VForm8Props, VForm8Step } from "./VForm8.types";

const defaultPlans = [
  {
    id: "starter",
    name: "Starter",
    price: "$0 / month",
    description: "One desk, local files, and a quiet inbox.",
  },
  {
    id: "studio",
    name: "Studio",
    price: "$18 / month",
    description: "Shared boards, guest seats, and weekly backups.",
  },
  {
    id: "desk",
    name: "Desk",
    price: "$42 / month",
    description: "Client rooms, archive search, and priority support.",
  },
] as const satisfies readonly VForm8Plan[];

const defaults = {
  title: "Open a Kestrel desk",
  description:
    "Three short steps. Name the account, pick a plan, then confirm before we send the invite.",
  accountStepLabel: "Account",
  planStepLabel: "Plan",
  reviewStepLabel: "Review",
  nameLabel: "Full name",
  namePlaceholder: "Mira Solano",
  defaultName: "",
  emailLabel: "Work email",
  emailPlaceholder: "you@studio.work",
  defaultEmail: "",
  passwordLabel: "Password",
  passwordPlaceholder: "At least 8 characters",
  defaultPassword: "",
  defaultPlanId: "studio",
  newsletterLabel: "Send the Sunday field notes",
  defaultNewsletter: true,
  continueLabel: "Continue",
  backLabel: "Back",
  submitLabel: "Create account",
  successTitle: "Desk is ready",
  successDescription: "We sent a confirm link. Open it to finish the invite.",
  passwordSetLabel: "Password set",
  newsletterYesLabel: "Sunday notes on",
  newsletterNoLabel: "No newsletter",
  defaultStep: "account" as VForm8Step,
};

const wizardSteps = ["account", "plan", "review"] as const;

function FieldShell({
  id,
  label,
  children,
}: {
  id: string;
  label: string;
  children: ReactNode;
}) {
  return (
    <div className="space-y-2">
      <Label htmlFor={id}>{label}</Label>
      {children}
    </div>
  );
}

function ReviewRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-border py-3 last:border-b-0">
      <dt className="text-sm text-muted-foreground">{label}</dt>
      <dd className="text-right text-sm font-medium text-balance">{value}</dd>
    </div>
  );
}

export function VForm8({
  className,
  title = defaults.title,
  description = defaults.description,
  accountStepLabel = defaults.accountStepLabel,
  planStepLabel = defaults.planStepLabel,
  reviewStepLabel = defaults.reviewStepLabel,
  nameLabel = defaults.nameLabel,
  namePlaceholder = defaults.namePlaceholder,
  defaultName = defaults.defaultName,
  emailLabel = defaults.emailLabel,
  emailPlaceholder = defaults.emailPlaceholder,
  defaultEmail = defaults.defaultEmail,
  passwordLabel = defaults.passwordLabel,
  passwordPlaceholder = defaults.passwordPlaceholder,
  defaultPassword = defaults.defaultPassword,
  plans = defaultPlans,
  defaultPlanId = defaults.defaultPlanId,
  newsletterLabel = defaults.newsletterLabel,
  defaultNewsletter = defaults.defaultNewsletter,
  continueLabel = defaults.continueLabel,
  backLabel = defaults.backLabel,
  submitLabel = defaults.submitLabel,
  successTitle = defaults.successTitle,
  successDescription = defaults.successDescription,
  passwordSetLabel = defaults.passwordSetLabel,
  newsletterYesLabel = defaults.newsletterYesLabel,
  newsletterNoLabel = defaults.newsletterNoLabel,
  defaultStep = defaults.defaultStep,
  onComplete,
  onSubmit,
  ...props
}: VForm8Props) {
  const headingId = useId();
  const nameId = useId();
  const emailId = useId();
  const passwordId = useId();
  const newsletterId = useId();
  const planGroupId = useId();
  const [step, setStep] = useState<VForm8Step>(
    defaultStep === "success" ? "success" : defaultStep,
  );
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [password, setPassword] = useState(defaultPassword);
  const [planId, setPlanId] = useState(
    plans.some((plan) => plan.id === defaultPlanId)
      ? defaultPlanId
      : (plans[0]?.id ?? ""),
  );
  const [newsletter, setNewsletter] = useState(defaultNewsletter);

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.id === planId) ?? plans[0],
    [planId, plans],
  );

  const stepIndex = wizardSteps.indexOf(step === "success" ? "review" : step);

  const goBack = () => {
    if (step === "plan") setStep("account");
    if (step === "review") setStep("plan");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();

    if (step === "account") {
      if (!name.trim() || !email.trim() || password.length < 8) return;
      setStep("plan");
      return;
    }

    if (step === "plan") {
      if (!planId) return;
      setStep("review");
      return;
    }

    if (step === "review") {
      onComplete?.({
        name: name.trim(),
        email: email.trim(),
        planId,
        newsletter,
      });
      setStep("success");
    }
  };

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="v-form-8"
      {...props}
    >
      <div className="mx-auto flex min-h-[32rem] max-w-5xl items-center justify-center px-5 py-16 sm:px-8 sm:py-20">
        <article
          className={cn(
            "w-full max-w-lg overflow-hidden rounded-[calc(var(--radius)+0.4rem)] border border-border bg-card text-card-foreground shadow-sm",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500",
          )}
        >
          {step === "success" ? (
            <div className="flex flex-col items-center gap-4 px-5 py-12 text-center sm:px-8">
              <span className="grid size-14 place-items-center rounded-full bg-primary text-primary-foreground">
                <CircleCheckIcon aria-hidden="true" className="size-7" />
              </span>
              <h2
                className="text-xl font-semibold tracking-tight text-balance sm:text-2xl"
                id={headingId}
              >
                {successTitle}
              </h2>
              <p className="max-w-sm text-sm leading-6 text-muted-foreground">
                {successDescription}
              </p>
            </div>
          ) : (
            <form
              className="flex flex-col gap-6 p-5 sm:p-6"
              onSubmit={handleSubmit}
            >
              <header className="space-y-2">
                <h2
                  className="text-xl font-semibold tracking-tight text-balance sm:text-2xl"
                  id={headingId}
                >
                  {title}
                </h2>
                {description ? (
                  <p className="text-sm leading-6 text-muted-foreground">
                    {description}
                  </p>
                ) : null}
              </header>

              <ol
                aria-label="Onboarding steps"
                className="grid grid-cols-3 gap-2"
              >
                {(
                  [
                    ["account", accountStepLabel],
                    ["plan", planStepLabel],
                    ["review", reviewStepLabel],
                  ] as const
                ).map(([key, label], index) => {
                  const complete = index < stepIndex;
                  const current = key === step;
                  return (
                    <li key={key} className="min-w-0">
                      <div
                        aria-current={current ? "step" : undefined}
                        className={cn(
                          "flex items-center gap-2 rounded-[--radius] border px-2 py-2 sm:px-3",
                          current
                            ? "border-primary bg-accent"
                            : "border-border bg-background",
                        )}
                      >
                        <span
                          aria-hidden="true"
                          className={cn(
                            "grid size-6 shrink-0 place-items-center rounded-full text-xs font-semibold",
                            current || complete
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground",
                          )}
                        >
                          {complete ? (
                            <CheckIcon className="size-3.5" />
                          ) : (
                            index + 1
                          )}
                        </span>
                        <span
                          className={cn(
                            "truncate text-xs font-medium sm:text-sm",
                            current
                              ? "text-foreground"
                              : "text-muted-foreground",
                          )}
                        >
                          {label}
                        </span>
                      </div>
                    </li>
                  );
                })}
              </ol>

              {step === "account" ? (
                <div className="space-y-4">
                  <FieldShell id={nameId} label={nameLabel}>
                    <Input
                      autoComplete="name"
                      className="h-12 rounded-[--radius] bg-background"
                      id={nameId}
                      name="name"
                      onChange={(event) => setName(event.target.value)}
                      placeholder={namePlaceholder}
                      required
                      type="text"
                      value={name}
                    />
                  </FieldShell>
                  <FieldShell id={emailId} label={emailLabel}>
                    <Input
                      autoComplete="email"
                      className="h-12 rounded-[--radius] bg-background"
                      id={emailId}
                      name="email"
                      onChange={(event) => setEmail(event.target.value)}
                      placeholder={emailPlaceholder}
                      required
                      type="email"
                      value={email}
                    />
                  </FieldShell>
                  <FieldShell id={passwordId} label={passwordLabel}>
                    <Input
                      autoComplete="new-password"
                      className="h-12 rounded-[--radius] bg-background"
                      id={passwordId}
                      minLength={8}
                      name="password"
                      onChange={(event) => setPassword(event.target.value)}
                      placeholder={passwordPlaceholder}
                      required
                      type="password"
                      value={password}
                    />
                  </FieldShell>
                </div>
              ) : null}

              {step === "plan" ? (
                <div className="space-y-4">
                  <fieldset className="space-y-3">
                    <legend className="sr-only" id={planGroupId}>
                      {planStepLabel}
                    </legend>
                    {plans.map((plan) => {
                      const selected = plan.id === planId;
                      return (
                        <label
                          className={cn(
                            "flex cursor-pointer items-start gap-3 rounded-[--radius] border p-4 outline-none transition-[border-color,background-color,transform] duration-200 ease-out motion-reduce:transition-none",
                            selected
                              ? "border-primary bg-accent"
                              : "border-border bg-background hover:bg-muted/40",
                          )}
                          key={plan.id}
                        >
                          <input
                            checked={selected}
                            className="sr-only"
                            name="plan"
                            onChange={() => setPlanId(plan.id)}
                            type="radio"
                            value={plan.id}
                          />
                          <span
                            aria-hidden="true"
                            className={cn(
                              "mt-0.5 grid size-4 shrink-0 place-items-center rounded-full border",
                              selected
                                ? "border-primary bg-primary text-primary-foreground"
                                : "border-input bg-background",
                            )}
                          >
                            {selected ? (
                              <span className="size-1.5 rounded-full bg-primary-foreground" />
                            ) : null}
                          </span>
                          <span className="min-w-0 flex-1 space-y-1">
                            <span className="flex items-baseline justify-between gap-3">
                              <span className="text-sm font-semibold">
                                {plan.name}
                              </span>
                              <span className="text-sm text-muted-foreground">
                                {plan.price}
                              </span>
                            </span>
                            <span className="block text-sm leading-6 text-muted-foreground">
                              {plan.description}
                            </span>
                          </span>
                        </label>
                      );
                    })}
                  </fieldset>

                  <div className="flex items-start gap-3 rounded-[--radius] border border-border bg-background p-4">
                    <Checkbox
                      checked={newsletter}
                      id={newsletterId}
                      name="newsletter"
                      onCheckedChange={(value) => setNewsletter(value === true)}
                    />
                    <Label
                      className="text-sm leading-6 font-normal"
                      htmlFor={newsletterId}
                    >
                      {newsletterLabel}
                    </Label>
                  </div>
                </div>
              ) : null}

              {step === "review" ? (
                <dl className="rounded-[--radius] border border-border bg-background px-4">
                  <ReviewRow label={nameLabel} value={name.trim()} />
                  <ReviewRow label={emailLabel} value={email.trim()} />
                  <ReviewRow label={passwordLabel} value={passwordSetLabel} />
                  <ReviewRow
                    label={planStepLabel}
                    value={
                      selectedPlan
                        ? `${selectedPlan.name} (${selectedPlan.price})`
                        : ""
                    }
                  />
                  <ReviewRow
                    label={newsletterLabel}
                    value={newsletter ? newsletterYesLabel : newsletterNoLabel}
                  />
                </dl>
              ) : null}

              <div className="flex flex-col-reverse gap-2 sm:flex-row sm:justify-between">
                {step === "account" ? (
                  <span className="hidden sm:block" />
                ) : (
                  <Button
                    onClick={goBack}
                    size="lg"
                    type="button"
                    variant="secondary"
                  >
                    {backLabel}
                  </Button>
                )}
                <Button className="sm:min-w-40" size="lg" type="submit">
                  {step === "review" ? submitLabel : continueLabel}
                </Button>
              </div>
            </form>
          )}
        </article>
      </div>
    </section>
  );
}
