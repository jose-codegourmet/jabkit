export type DemoFormStatus = "draft" | "invalid" | "preview" | "reset";

export const demoStatusCopy: Record<DemoFormStatus, string> = {
  draft: "Draft. Nothing has been prepared.",
  invalid: "Fix the highlighted fields. Nothing was sent.",
  preview: "Preview prepared. Demo only. Nothing was sent.",
  reset: "Form reset. Values cleared for this visit. Nothing was stored.",
};

export interface DemoFormValues {
  name: string;
  email: string;
  note: string;
}

export const emptyDemoFormValues: DemoFormValues = {
  name: "",
  email: "",
  note: "",
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export function validateDemoFormValues(
  values: DemoFormValues,
): Partial<DemoFormValues> {
  const errors: Partial<DemoFormValues> = {};
  if (!values.name.trim()) errors.name = "Enter a name.";
  if (!values.email.trim()) errors.email = "Enter an email.";
  else if (!emailPattern.test(values.email.trim())) {
    errors.email = "Enter a valid email.";
  }
  return errors;
}

export function fieldErrorMessage(
  field: HTMLInputElement | HTMLTextAreaElement,
): string {
  if (field.validity.valueMissing) {
    return field.name === "email"
      ? "Enter an email."
      : `Enter a ${field.name}.`;
  }
  if (field.validity.typeMismatch || field.validity.patternMismatch) {
    return "Enter a valid email.";
  }
  return field.validationMessage;
}

export function firstInvalidControl(form: HTMLFormElement): HTMLElement | null {
  return form.querySelector(":invalid");
}

/** In-memory only. Lost on reload, navigation away, or reset. */
export function createVisitSet<T>(initial: Iterable<T> = []): {
  snapshot: () => Set<T>;
  has: (value: T) => boolean;
  add: (value: T) => Set<T>;
  remove: (value: T) => Set<T>;
  clear: () => Set<T>;
} {
  let values = new Set(initial);
  return {
    snapshot: () => new Set(values),
    has: (value) => values.has(value),
    add: (value) => {
      values = new Set(values);
      values.add(value);
      return values;
    },
    remove: (value) => {
      values = new Set(values);
      values.delete(value);
      return values;
    },
    clear: () => {
      values = new Set();
      return values;
    },
  };
}
