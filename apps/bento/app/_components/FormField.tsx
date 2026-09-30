import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import type { ReactNode, SelectHTMLAttributes } from "react";
import { Label } from "@/atoms/label";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";

export type FieldControlProps = {
  id: string;
  "aria-describedby"?: string;
  "aria-invalid"?: true;
  "aria-required"?: true;
};

export type FormFieldProps = {
  id: string;
  label: string;
  help?: ReactNode;
  error?: string | null;
  required?: boolean;
  optional?: boolean;
  className?: string;
  /** Render the control with the wired ids so help and error are announced. */
  children: (control: FieldControlProps) => ReactNode;
};

export function FormField({
  id,
  label,
  help,
  error,
  required = false,
  optional = false,
  className,
  children,
}: FormFieldProps) {
  const helpId = help ? `${id}-help` : undefined;
  const errorId = error ? `${id}-error` : undefined;
  const describedBy = [helpId, errorId].filter(Boolean).join(" ") || undefined;

  return (
    <div className={cn(styles.field, className)}>
      <Label className={styles.fieldLabel} htmlFor={id}>
        {label}
        {optional ? (
          <span className={styles.fieldOptional}> (optional)</span>
        ) : null}
      </Label>
      {children({
        id,
        "aria-describedby": describedBy,
        "aria-invalid": error ? true : undefined,
        "aria-required": required ? true : undefined,
      })}
      {help ? (
        <p className={styles.fieldHelp} id={helpId}>
          {help}
        </p>
      ) : null}
      {error ? (
        <p className={styles.fieldError} id={errorId}>
          <ExclamationTriangleIcon aria-hidden="true" />
          {error}
        </p>
      ) : null}
    </div>
  );
}

/** Native select styled to match @/atoms/input. */
export function NativeSelect({
  className,
  children,
  ...props
}: SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select className={cn(styles.select, className)} {...props}>
      {children}
    </select>
  );
}
