"use client";

import { CheckIcon, PlusIcon } from "@radix-ui/react-icons";
import { useState } from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";
import { usePlan } from "./usePlan";

export type PlanButtonProps = {
  slug: string;
  actName: string;
  /** "large" for the artist page, "compact" for table rows. */
  variant?: "large" | "compact";
  className?: string;
};

export function PlanButton({
  slug,
  actName,
  variant = "large",
  className,
}: PlanButtonProps) {
  const { has, toggle } = usePlan();
  const [announcement, setAnnouncement] = useState("");
  const inPlan = has(slug);

  const label =
    variant === "large"
      ? inPlan
        ? "In your plan — remove"
        : "Add to my plan"
      : inPlan
        ? "Added"
        : "Add";

  return (
    <>
      <Button
        aria-pressed={inPlan}
        className={cn(
          styles.planButton,
          variant === "compact" && styles.planButtonCompact,
          className,
        )}
        data-in-plan={inPlan ? "true" : undefined}
        onClick={() => {
          const added = toggle(slug);
          setAnnouncement(
            added ? "Added to your plan" : "Removed from your plan",
          );
        }}
        size={variant === "compact" ? "sm" : "lg"}
        variant={inPlan ? "secondary" : "primary"}
      >
        {inPlan ? (
          <CheckIcon aria-hidden="true" />
        ) : (
          <PlusIcon aria-hidden="true" />
        )}
        <span>{label}</span>
        {variant === "compact" ? (
          <span className="sr-only"> {actName}</span>
        ) : null}
      </Button>
      <span aria-live="polite" className="sr-only" role="status">
        {announcement}
      </span>
    </>
  );
}
