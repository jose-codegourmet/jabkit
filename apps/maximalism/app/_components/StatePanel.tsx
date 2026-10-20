import { Alert, AlertDescription, AlertTitle } from "@/atoms/alert";
import { Button } from "@/atoms/button";
import { Skeleton } from "@/atoms/skeleton";
import { cn } from "@/lib/cn";
import styles from "../style.module.css";

type StateAction = { label: string; onClick: () => void };

export type StatePanelProps =
  | {
      kind: "loading";
      message: string;
      /** Skeleton layout under the message. */
      layout?: "cards" | "rows";
      count?: number;
      className?: string;
    }
  | {
      kind: "empty" | "error";
      message: string;
      title?: string;
      action?: StateAction;
      className?: string;
    };

/**
 * Loading, empty and error states. Loading and empty are polite status regions;
 * error is an alert. Skeletons stop pulsing while motion is paused.
 */
export function StatePanel(props: StatePanelProps) {
  if (props.kind === "loading") {
    const { message, layout = "cards", count = 3, className } = props;
    return (
      <div
        aria-busy="true"
        className={cn(styles.statePanel, className)}
        role="status"
      >
        <p className={styles.stateMessage}>{message}</p>
        <div
          aria-hidden="true"
          className={
            layout === "cards" ? styles.skeletonCards : styles.skeletonRows
          }
        >
          {Array.from({ length: count }, (_, index) => (
            <Skeleton
              className={
                layout === "cards" ? styles.skeletonCard : styles.skeletonRow
              }
              key={`skeleton-${index.toString()}`}
            />
          ))}
        </div>
      </div>
    );
  }

  const { kind, message, title, action, className } = props;

  if (kind === "error") {
    return (
      <Alert className={cn(styles.stateAlert, className)}>
        {title ? <AlertTitle>{title}</AlertTitle> : null}
        <AlertDescription>{message}</AlertDescription>
        {action ? (
          <div className={styles.stateActions}>
            <Button onClick={action.onClick} variant="secondary">
              {action.label}
            </Button>
          </div>
        ) : null}
      </Alert>
    );
  }

  return (
    <div
      className={cn(styles.statePanel, styles.stateEmpty, className)}
      role="status"
    >
      {title ? <p className={styles.stateTitle}>{title}</p> : null}
      <p className={styles.stateMessage}>{message}</p>
      {action ? (
        <div className={styles.stateActions}>
          <Button onClick={action.onClick} variant="secondary">
            {action.label}
          </Button>
        </div>
      ) : null}
    </div>
  );
}
