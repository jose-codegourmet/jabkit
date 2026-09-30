"use client";

import type { Route } from "next";
import { useRouter } from "next/navigation";
import { useOptimistic, useTransition } from "react";
import { Button } from "@/atoms/button";
import { FormField, NativeSelect } from "../../../_components/FormField";
import { type WeekId, weeks } from "../../../_data/weekly";
import { weekIds, weekPicker } from "./content";
import styles from "./reports.module.css";

/**
 * "This week" / "Last week", synced to ?week=. It is a plain GET form, so it still
 * works without JavaScript (the submit button only renders inside <noscript>). With
 * JavaScript, changing the select replaces the URL in place and keeps focus here.
 */
export function WeekPicker({ weekId }: { weekId: WeekId }) {
  const router = useRouter();
  const [pending, startTransition] = useTransition();
  const [selected, setSelected] = useOptimistic(weekId);

  function change(value: string) {
    const next = weekIds.find((id) => id === value);
    if (!next) return;
    startTransition(() => {
      setSelected(next);
      router.replace(`/demo/reports?week=${next}` as Route, { scroll: false });
    });
  }

  return (
    <form
      action="/demo/reports"
      aria-busy={pending || undefined}
      className={styles.weekForm}
      method="get"
    >
      <FormField
        className={styles.weekField}
        id={weekPicker.id}
        label={weekPicker.label}
      >
        {(control) => (
          <NativeSelect
            {...control}
            name="week"
            onChange={(event) => change(event.currentTarget.value)}
            value={selected}
          >
            {weeks.map((week) => (
              <option key={week.id} value={week.id}>
                {week.label}
              </option>
            ))}
          </NativeSelect>
        )}
      </FormField>
      <noscript>
        <Button type="submit" variant="secondary">
          {weekPicker.submit}
        </Button>
      </noscript>
    </form>
  );
}
