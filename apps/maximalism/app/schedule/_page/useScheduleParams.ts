"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useCallback, useMemo } from "react";
import type { Day } from "../../_data/artists";
import { isScheduleSort, type ScheduleSort } from "../../_data/schedule";
import { isStageId, type StageId } from "../../_data/stages";
import { type DemoState, isDemoState } from "./content";

export type ScheduleParams = {
  day: Day;
  stage: StageId | "all";
  sort: ScheduleSort;
  mine: boolean;
  /** Labelled demo-only preview state (?state=loading|error|clash). */
  state: DemoState;
};

const defaults: ScheduleParams = {
  day: 1,
  stage: "all",
  sort: "start",
  mine: false,
  state: "live",
};

/**
 * Schedule filters live in the URL (day=1|2, stage=<StageId>|all,
 * sort=start|stage|act, mine=1, state=<demo state>) so a plan view can be
 * shared or reloaded. Defaults are omitted to keep the URL short.
 */
export function useScheduleParams() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const params = useMemo<ScheduleParams>(() => {
    const stage = searchParams.get("stage");
    const sort = searchParams.get("sort");
    const state = searchParams.get("state");
    return {
      day: searchParams.get("day") === "2" ? 2 : 1,
      stage: isStageId(stage) ? stage : "all",
      sort: isScheduleSort(sort) ? sort : "start",
      mine: searchParams.get("mine") === "1",
      state: isDemoState(state) ? state : "live",
    };
  }, [searchParams]);

  const update = useCallback(
    (patch: Partial<ScheduleParams>) => {
      const next = { ...params, ...patch };
      const query = new URLSearchParams();
      if (next.day !== defaults.day) query.set("day", String(next.day));
      if (next.stage !== defaults.stage) query.set("stage", next.stage);
      if (next.sort !== defaults.sort) query.set("sort", next.sort);
      if (next.mine) query.set("mine", "1");
      if (next.state !== defaults.state) query.set("state", next.state);
      const search = query.toString();
      // Native history integrates with the Next router: no server round trip.
      window.history.replaceState(
        null,
        "",
        search ? `${pathname}?${search}` : pathname,
      );
    },
    [params, pathname],
  );

  return { params, update };
}
