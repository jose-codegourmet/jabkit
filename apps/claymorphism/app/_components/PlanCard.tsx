import { ArrowRightIcon, CheckIcon } from "@radix-ui/react-icons";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import type { Plan } from "../_data/types";
import styles from "../style.module.css";
import { ClaySurface } from "./ClaySurface";
import { PlaceholderText } from "./PlaceholderText";

export type PlanCardProps = {
  plan: Plan;
  variant?: "compact" | "full";
  className?: string;
};

export function PlanCard({ plan, variant = "full", className }: PlanCardProps) {
  if (variant === "compact") {
    return (
      <ClaySurface className={cn(styles.plan, className)}>
        <h3 className={styles.planName}>{plan.name}</h3>
        <p>{plan.homeSummary}</p>
        <p>
          <PlaceholderText text={plan.homeDetail} />
        </p>
      </ClaySurface>
    );
  }

  const headingId = `plan-${plan.id}-name`;

  return (
    <ClaySurface
      aria-labelledby={headingId}
      className={cn(styles.plan, styles.planFull, className)}
      data-featured={plan.featured ? "true" : undefined}
      role="group"
      tone={plan.featured ? "lavender" : "cream"}
    >
      <div className={styles.planTop}>
        <h3 className={styles.planName} id={headingId}>
          {plan.name}
        </h3>
        <span className={styles.planBadge}>{plan.badge}</span>
      </div>
      <p className={styles.planSummary}>{plan.summary}</p>

      <div className={styles.planPrice}>
        <p className={styles.planAmount}>
          <PlaceholderText text={plan.price.amount} />
        </p>
        <p className={styles.planNote}>
          <PlaceholderText text={plan.price.note} />
        </p>
      </div>

      <div className={styles.planIncludes}>
        <p className={styles.planIncludesTitle}>{plan.includesTitle}</p>
        <ul className={styles.planList}>
          {plan.includes.map((item) => (
            <li key={item}>
              <span aria-hidden="true" className={styles.planCheck}>
                <CheckIcon />
              </span>
              <span>
                <PlaceholderText text={item} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      <Button asChild className={styles.planButton} size="lg">
        <a href={plan.cta.href}>
          {plan.cta.label}
          <ArrowRightIcon aria-hidden="true" />
        </a>
      </Button>
    </ClaySurface>
  );
}
