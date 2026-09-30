import { useId } from "react";
import { cn } from "@/lib/cn";
import { textEquivalent, type WeeklyVisits } from "../_data/weekly";
import styles from "../style.module.css";

export type VisitsChartProps = {
  week: WeeklyVisits;
  size?: "mini" | "tile" | "full";
  /**
   * "details": a visible "Show numbers" disclosure with the table.
   * "table": the table is always visible under the chart.
   * "caption": the written-out sentence is shown under the chart.
   */
  textMode?: "details" | "table" | "caption";
  caption?: string;
  className?: string;
};

/**
 * Visits per day as labelled bars, built in markup so it renders on the server and
 * reads without the picture. The written-out numbers are always in the DOM and the
 * chart points at them with aria-describedby.
 */
export function VisitsChart({
  week,
  size = "tile",
  textMode = "details",
  caption,
  className,
}: VisitsChartProps) {
  const textId = useId();
  const max = Math.max(...week.days.map((day) => day.visits ?? 0), 1);
  const text = textEquivalent(week);

  return (
    <figure
      className={cn(
        styles.chart,
        size === "mini" && styles.chartMini,
        size === "full" && styles.chartFull,
        className,
      )}
    >
      <div
        aria-describedby={textId}
        aria-label={`Visits per day, ${week.label.toLowerCase()}`}
        className={styles.bars}
        role="img"
      >
        {week.days.map((day) => (
          <div className={styles.bar} key={day.day}>
            {day.visits === null ? (
              <span aria-hidden="true" className={styles.barClosed} />
            ) : (
              <>
                {size === "mini" ? null : (
                  <span aria-hidden="true" className={styles.barValue}>
                    {day.visits}
                  </span>
                )}
                <span
                  aria-hidden="true"
                  className={styles.barFill}
                  data-peak={day.visits === max}
                  style={{
                    ["--bar" as string]: `${(day.visits / max) * 100}%`,
                  }}
                />
              </>
            )}
            <span aria-hidden="true" className={styles.barDay}>
              {day.day}
            </span>
          </div>
        ))}
      </div>

      {textMode === "caption" ? (
        <figcaption className={styles.chartText} id={textId}>
          {text}
        </figcaption>
      ) : (
        <p className="sr-only-text" id={textId}>
          {text}
        </p>
      )}

      {textMode === "details" ? (
        <details className={styles.details}>
          <summary>Show numbers</summary>
          <NumbersTable week={week} />
        </details>
      ) : null}
      {textMode === "table" ? (
        <NumbersTable caption={caption} week={week} />
      ) : null}
    </figure>
  );
}

function NumbersTable({
  week,
  caption,
}: {
  week: WeeklyVisits;
  caption?: string;
}) {
  return (
    <table className={styles.numbers}>
      {caption ? <caption>{caption}</caption> : null}
      <thead>
        <tr>
          <th scope="col">Day</th>
          <th scope="col">Visits</th>
        </tr>
      </thead>
      <tbody>
        {week.days.map((day) => (
          <tr key={day.day}>
            <th scope="row">{day.label}</th>
            <td>{day.visits === null ? "Closed" : day.visits}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
