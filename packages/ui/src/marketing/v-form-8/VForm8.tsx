"use client";

import { CheckCircle2Icon, Loader2Icon } from "lucide-react";
import {
  type FormEvent,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import { Checkbox } from "@/atoms/checkbox";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import type { VForm8Plan, VForm8Props, VForm8Step } from "./VForm8.types";

const defaultPlans = [
  {
    id: "hobby",
    label: "Hobby",
    description: "Free forever, up to 3 projects",
  },
  {
    id: "pro",
    label: "Pro",
    description: "$12/mo - unlimited projects",
  },
  {
    id: "team",
    label: "Team",
    description: "$49/mo - collaboration tools",
  },
] as const satisfies readonly VForm8Plan[];

const defaults = {
  accountStepLabel: "Account",
  planStepLabel: "Plan",
  confirmStepLabel: "Confirm",
  nameLabel: "Full name",
  namePlaceholder: "Alex Rivera",
  defaultName: "",
  emailLabel: "Email",
  emailPlaceholder: "you@example.com",
  defaultEmail: "",
  planFieldLabel: "Choose a plan",
  defaultPlanId: "hobby",
  newsletterLabel: "Send me product updates and tips",
  defaultNewsletter: true,
  continueLabel: "Continue",
  backLabel: "Back",
  submitLabel: "Create account",
  reviewNameLabel: "Name",
  reviewEmailLabel: "Email",
  reviewPlanLabel: "Plan",
  reviewUpdatesLabel: "Updates",
  updatesYesLabel: "Yes",
  updatesNoLabel: "No",
  successTitle: "Account created!",
  successDescription:
    "Welcome, {name}. Check your inbox to verify your email.",
  defaultStep: "account" as VForm8Step,
};

const wizardSteps = ["account", "plan", "confirm"] as const;

const fieldInputClassName =
  "h-9 rounded-lg bg-background shadow-xs sm:h-8 dark:bg-input/30";

const actionButtonClassName =
  "relative inline-flex h-9 shrink-0 items-center justify-center rounded-lg border px-3 text-sm font-medium outline-none transition-colors motion-reduce:transition-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-1 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 sm:h-8";

const primaryButtonClassName = cn(
  actionButtonClassName,
  "border-primary bg-primary text-primary-foreground hover:bg-primary/90",
);

const outlineButtonClassName = cn(
  actionButtonClassName,
  "border-input bg-card text-foreground hover:bg-accent/50",
);

function prefersReducedMotion() {
  if (typeof window === "undefined" || !window.matchMedia) return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function VForm8({
  className,
  title,
  accountStepLabel = defaults.accountStepLabel,
  planStepLabel = defaults.planStepLabel,
  confirmStepLabel = defaults.confirmStepLabel,
  nameLabel = defaults.nameLabel,
  namePlaceholder = defaults.namePlaceholder,
  defaultName = defaults.defaultName,
  emailLabel = defaults.emailLabel,
  emailPlaceholder = defaults.emailPlaceholder,
  defaultEmail = defaults.defaultEmail,
  planFieldLabel = defaults.planFieldLabel,
  plans = defaultPlans,
  defaultPlanId = defaults.defaultPlanId,
  newsletterLabel = defaults.newsletterLabel,
  defaultNewsletter = defaults.defaultNewsletter,
  continueLabel = defaults.continueLabel,
  backLabel = defaults.backLabel,
  submitLabel = defaults.submitLabel,
  reviewNameLabel = defaults.reviewNameLabel,
  reviewEmailLabel = defaults.reviewEmailLabel,
  reviewPlanLabel = defaults.reviewPlanLabel,
  reviewUpdatesLabel = defaults.reviewUpdatesLabel,
  updatesYesLabel = defaults.updatesYesLabel,
  updatesNoLabel = defaults.updatesNoLabel,
  successTitle = defaults.successTitle,
  successDescription = defaults.successDescription,
  defaultStep = defaults.defaultStep,
  onComplete,
  onSubmit,
  ...props
}: VForm8Props) {
  const headingId = useId();
  const nameId = useId();
  const emailId = useId();
  const newsletterId = useId();
  const planGroupId = useId();
  const [step, setStep] = useState<VForm8Step>(
    defaultStep === "success" ? "success" : defaultStep,
  );
  const [name, setName] = useState(defaultName);
  const [email, setEmail] = useState(defaultEmail);
  const [planId, setPlanId] = useState(
    plans.some((plan) => plan.id === defaultPlanId)
      ? defaultPlanId
      : (plans[0]?.id ?? ""),
  );
  const [newsletter, setNewsletter] = useState(defaultNewsletter);
  const [loading, setLoading] = useState(false);
  const confirmTimer = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (confirmTimer.current !== null) {
        window.clearTimeout(confirmTimer.current);
      }
    };
  }, []);

  const selectedPlan = useMemo(
    () => plans.find((plan) => plan.id === planId) ?? plans[0],
    [planId, plans],
  );

  const stepIndex = wizardSteps.indexOf(step === "success" ? "confirm" : step);

  const stepItems = [
    ["account", accountStepLabel],
    ["plan", planStepLabel],
    ["confirm", confirmStepLabel],
  ] as const;

  const resolvedSuccessDescription = successDescription.replaceAll(
    "{name}",
    name.trim() || "there",
  );

  const goBack = () => {
    if (step === "plan") setStep("account");
    if (step === "confirm") setStep("plan");
  };

  const finish = () => {
    onComplete?.({
      name: name.trim(),
      email: email.trim(),
      planId,
      newsletter,
    });
    setLoading(false);
    setStep("success");
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    onSubmit?.(event);
    if (event.defaultPrevented) return;
    event.preventDefault();

    if (step === "account") {
      if (!name.trim() || !email.trim()) return;
      setStep("plan");
      return;
    }

    if (step === "plan") {
      if (!planId) return;
      setStep("confirm");
    }
  };

  const handleConfirm = () => {
    if (loading) return;
    if (prefersReducedMotion()) {
      finish();
      return;
    }
    setLoading(true);
    confirmTimer.current = window.setTimeout(finish, 1000);
  };

  return (
    <section
      aria-labelledby={headingId}
      className={cn("bg-background text-foreground", className)}
      data-slot="v-form-8"
      {...props}
    >
      <div className="flex justify-center px-4 py-16 sm:py-20">
        {step === "success" ? (
          <div className="flex w-full max-w-sm flex-col items-center gap-4 py-10 text-center">
            <div className="flex size-12 items-center justify-center rounded-full bg-success/10">
              <CheckCircle2Icon
                aria-hidden="true"
                className="size-6 text-success"
              />
            </div>
            <div className="space-y-1">
              <p className="font-semibold" id={headingId}>
                {successTitle}
              </p>
              <p className="text-sm text-muted-foreground">
                {resolvedSuccessDescription}
              </p>
            </div>
          </div>
        ) : (
          <div className="w-full max-w-sm space-y-6">
            <h2
              className={
                title ? "text-lg font-semibold tracking-tight" : "sr-only"
              }
              id={headingId}
            >
              {title ?? "Create your account"}
            </h2>

            <ol
              aria-label="Onboarding steps"
              className="flex w-full items-center gap-2"
            >
              {stepItems.map(([key, label], index) => {
                const complete = index < stepIndex;
                const current = key === step;
                return (
                  <li
                    className={cn(
                      "flex min-w-0 items-center gap-2",
                      index < stepItems.length - 1 ? "flex-1" : "shrink-0",
                    )}
                    key={key}
                  >
                    <div className="flex items-center gap-1.5">
                      <span
                        aria-current={current ? "step" : undefined}
                        aria-hidden="true"
                        className={cn(
                          "flex size-6 items-center justify-center rounded-full",
                          "text-xs font-semibold motion-safe:transition-colors",
                          complete
                            ? "bg-primary text-primary-foreground"
                            : current
                              ? "border-2 border-primary text-primary"
                              : "border border-border text-muted-foreground",
                        )}
                      >
                        {complete ? (
                          <CheckCircle2Icon className="size-3.5" />
                        ) : (
                          index + 1
                        )}
                      </span>
                      <span
                        className={cn(
                          "text-xs font-medium",
                          current
                            ? "text-foreground"
                            : "text-muted-foreground",
                        )}
                      >
                        {label}
                      </span>
                    </div>
                    {index < stepItems.length - 1 ? (
                      <span
                        aria-hidden="true"
                        className={cn(
                          "h-px min-w-6 flex-1",
                          complete ? "bg-primary" : "bg-border",
                        )}
                      />
                    ) : null}
                  </li>
                );
              })}
            </ol>

            {step === "account" || step === "plan" ? (
              <form className="grid gap-4" onSubmit={handleSubmit}>
                {step === "account" ? (
                  <>
                    <div className="grid gap-2">
                      <Label htmlFor={nameId}>{nameLabel}</Label>
                      <Input
                        autoComplete="name"
                        className={fieldInputClassName}
                        id={nameId}
                        name="name"
                        onChange={(event) => setName(event.target.value)}
                        placeholder={namePlaceholder}
                        required
                        type="text"
                        value={name}
                      />
                    </div>
                    <div className="grid gap-2">
                      <Label htmlFor={emailId}>{emailLabel}</Label>
                      <Input
                        autoComplete="email"
                        className={fieldInputClassName}
                        id={emailId}
                        name="email"
                        onChange={(event) => setEmail(event.target.value)}
                        placeholder={emailPlaceholder}
                        required
                        type="email"
                        value={email}
                      />
                    </div>
                    <button
                      className={cn(primaryButtonClassName, "w-full")}
                      type="submit"
                    >
                      {continueLabel}
                    </button>
                  </>
                ) : null}

                {step === "plan" ? (
                  <>
                    <fieldset className="grid gap-2">
                      <legend
                        className="text-sm leading-none font-medium"
                        id={planGroupId}
                      >
                        {planFieldLabel}
                      </legend>
                      <div className="grid gap-3">
                        {plans.map((plan) => {
                          const selected = plan.id === planId;
                          const optionId = `${planGroupId}-${plan.id}`;
                          return (
                            <label
                              className={cn(
                                "flex cursor-pointer items-start gap-3 rounded-lg border p-3",
                                "motion-safe:transition-colors",
                                selected
                                  ? "border-primary/40 bg-accent/50"
                                  : "border-border hover:bg-accent/50",
                              )}
                              htmlFor={optionId}
                              key={plan.id}
                            >
                              <span className="relative mt-0.5 grid size-4 shrink-0 place-items-center">
                                <input
                                  checked={selected}
                                  className="peer absolute inset-0 cursor-pointer opacity-0"
                                  id={optionId}
                                  name="plan"
                                  onChange={() => setPlanId(plan.id)}
                                  type="radio"
                                  value={plan.id}
                                />
                                <span
                                  aria-hidden="true"
                                  className={cn(
                                    "grid size-4 place-items-center rounded-full border",
                                    selected
                                      ? "border-primary"
                                      : "border-input bg-background",
                                  )}
                                >
                                  {selected ? (
                                    <span className="size-2 rounded-full bg-primary" />
                                  ) : null}
                                </span>
                              </span>
                              <span className="flex flex-col gap-0.5">
                                <span className="text-sm font-medium">
                                  {plan.label}
                                </span>
                                <span className="text-xs text-muted-foreground">
                                  {plan.description}
                                </span>
                              </span>
                            </label>
                          );
                        })}
                      </div>
                    </fieldset>

                    <Label
                      className="font-normal"
                      htmlFor={newsletterId}
                    >
                      <Checkbox
                        checked={newsletter}
                        id={newsletterId}
                        name="newsletter"
                        onCheckedChange={(value) =>
                          setNewsletter(value === true)
                        }
                      />
                      {newsletterLabel}
                    </Label>

                    <div className="flex gap-3">
                      <button
                        className={cn(outlineButtonClassName, "flex-1")}
                        onClick={goBack}
                        type="button"
                      >
                        {backLabel}
                      </button>
                      <button
                        className={cn(primaryButtonClassName, "flex-1")}
                        type="submit"
                      >
                        {continueLabel}
                      </button>
                    </div>
                  </>
                ) : null}
              </form>
            ) : null}

            {step === "confirm" ? (
              <div className="space-y-4">
                <div className="divide-y divide-border rounded-lg border border-border">
                  {(
                    [
                      [reviewNameLabel, name.trim()],
                      [reviewEmailLabel, email.trim()],
                      [reviewPlanLabel, selectedPlan?.label ?? planId],
                      [
                        reviewUpdatesLabel,
                        newsletter ? updatesYesLabel : updatesNoLabel,
                      ],
                    ] as const
                  ).map(([label, value]) => (
                    <div
                      className="flex items-center justify-between px-4 py-3 text-sm"
                      key={label}
                    >
                      <span className="text-muted-foreground">{label}</span>
                      <span className="font-medium">{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button
                    className={cn(outlineButtonClassName, "flex-1")}
                    onClick={goBack}
                    type="button"
                  >
                    {backLabel}
                  </button>
                  <button
                    aria-busy={loading || undefined}
                    className={cn(primaryButtonClassName, "flex-1")}
                    disabled={loading}
                    onClick={handleConfirm}
                    type="button"
                  >
                    <span className={cn(loading && "opacity-0")}>
                      {submitLabel}
                    </span>
                    {loading ? (
                      <Loader2Icon
                        aria-hidden="true"
                        className="absolute size-4 motion-safe:animate-spin"
                      />
                    ) : null}
                  </button>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>
    </section>
  );
}
