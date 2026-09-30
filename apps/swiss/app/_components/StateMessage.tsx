import type { ReactNode } from "react";
import { Skeleton } from "@/atoms/skeleton";
import styles from "../style.module.css";

export function StateMessage({
  state,
  title,
  body,
  action,
}: {
  state: "loading" | "empty" | "error";
  title?: string;
  body?: string;
  action?: ReactNode;
}) {
  if (state === "loading") {
    return (
      <div
        className={styles.skeletonRows}
        aria-busy="true"
        aria-label="Loading results"
        role="status"
      >
        {["first", "second", "third"].map((row) => (
          <Skeleton className={styles.skeletonRow} key={row} />
        ))}
      </div>
    );
  }
  const defaultCopy =
    state === "error"
      ? {
          title: "Something went wrong.",
          body: "Try again, or return to the full program.",
        }
      : {
          title: "No screenings found.",
          body: "Clear a filter to see more of the program.",
        };
  return (
    <section
      className={styles.stateMessage}
      role={state === "error" ? "alert" : "status"}
    >
      <h3>{title ?? defaultCopy.title}</h3>
      <p>{body ?? defaultCopy.body}</p>
      {action ? <div className={styles.stateAction}>{action}</div> : null}
    </section>
  );
}
