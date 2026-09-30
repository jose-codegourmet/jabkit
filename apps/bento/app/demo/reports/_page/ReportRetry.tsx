"use client";

import type { Route } from "next";
import { useRouter } from "next/navigation";
import { ErrorState } from "../../../_components/TileStates";
import type { WeekId } from "../../../_data/weekly";
import { reportStatesCopy } from "./content";

/**
 * Error body for the report tile. "Try again" drops ?state= and keeps the week.
 * Focus moves to the tile heading first, which survives the re-render, so keyboard
 * and screen reader users are not dropped to the top of the page.
 */
export function ReportRetry({
  weekId,
  headingId,
}: {
  weekId: WeekId;
  headingId: string;
}) {
  const router = useRouter();

  function retry() {
    const heading = document.getElementById(headingId);
    if (heading) {
      heading.tabIndex = -1;
      heading.focus();
    }
    router.replace(`/demo/reports?week=${weekId}` as Route, { scroll: false });
  }

  return (
    <ErrorState
      message={reportStatesCopy.error}
      onRetry={retry}
      retryLabel={reportStatesCopy.retry}
    />
  );
}
