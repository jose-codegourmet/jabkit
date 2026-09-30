"use client";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/atoms/button";
import { StatusLabel } from "../../../_components/StatusLabel";
import { checkoutHref, type Screening } from "../../../_data/screenings";
import { getVenue } from "../../../_data/venues";
import styles from "./film.module.css";
export function ScreeningPicker({ screenings }: { screenings: Screening[] }) {
  const [selected, setSelected] = useState<string>();
  return (
    <div
      role="radiogroup"
      aria-label="Choose a screening"
      className={styles.picker}
    >
      {screenings.map((screening) => {
        const available =
          screening.status === "available" || screening.status === "few-left";
        const active = selected === screening.id;
        return (
          <div
            key={screening.id}
            className={styles.screeningRow}
            data-selected={active || undefined}
          >
            <div>
              <input
                type="radio"
                name="screening"
                value={screening.id}
                checked={active}
                disabled={!available}
                onChange={() => setSelected(screening.id)}
                aria-label={`${screening.dayLabel}, ${screening.time} at ${getVenue(screening.venueSlug)?.name}`}
              />
              <strong>
                {screening.dayLabel}, {screening.time}
              </strong>
              <span> · {getVenue(screening.venueSlug)?.name}</span>
              <StatusLabel status={screening.status} />
              {active ? (
                <span className={styles.selected}>✓ Selected</span>
              ) : null}
            </div>
            {active ? (
              <Button asChild>
                <Link href={checkoutHref({ screening: screening.id })}>
                  Continue to checkout
                </Link>
              </Button>
            ) : (
              <Button
                variant="secondary"
                disabled={!available}
                onClick={() => setSelected(screening.id)}
              >
                {available
                  ? "Select screening"
                  : screening.status === "sold-out"
                    ? "Sold out"
                    : "Not on sale yet"}
              </Button>
            )}
          </div>
        );
      })}
    </div>
  );
}
