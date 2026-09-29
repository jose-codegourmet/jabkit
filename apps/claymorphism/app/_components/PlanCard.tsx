import { Button } from "@/atoms/button";
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
  return (
    <ClaySurface
      className={className ? `${styles.plan} ${className}` : styles.plan}
    >
      <h3 className={styles.planName}>{plan.name}</h3>
      {variant === "compact" ? (
        <>
          <p>{plan.homeSummary}</p>
          <p>
            <PlaceholderText text={plan.homeDetail} />
          </p>
        </>
      ) : (
        <>
          <p className={styles.planPrice}>
            <PlaceholderText text={plan.price} />
          </p>
          <p>{plan.summary}</p>
          <ul className={styles.planList}>
            {plan.includes.map((item) => (
              <li key={item}>
                <PlaceholderText text={item} />
              </li>
            ))}
          </ul>
          <Button asChild>
            <a href={plan.cta.href}>{plan.cta.label}</a>
          </Button>
        </>
      )}
    </ClaySurface>
  );
}
