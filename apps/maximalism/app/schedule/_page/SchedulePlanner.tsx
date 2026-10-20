"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { DemoBadge } from "../../_components/Badges";
import { Segmented } from "../../_components/Segmented";
import { StatePanel } from "../../_components/StatePanel";
import { usePlan } from "../../_components/usePlan";
import { getArtist } from "../../_data/artists";
import {
  type Clash,
  filterSets,
  findClashes,
  sortSets,
} from "../../_data/schedule";
import { ClashNotice } from "./ClashNotice";
import {
  clashCopy,
  type DemoState,
  demoStates,
  isDemoState,
  resultText,
  scheduleTable,
  stateCopy,
} from "./content";
import { planHeadingId } from "./PlanSummary";
import { ScheduleControls } from "./ScheduleControls";
import { ScheduleTable } from "./ScheduleTable";
import styles from "./schedule.module.css";
import { useScheduleParams } from "./useScheduleParams";

const panelId = "schedule-results";
const retryDelayMs = 900;

function clashKey(clash: Clash) {
  return `${clash.a}|${clash.b}`;
}

/** Client island: URL-driven controls, results, clash warnings and states. */
export function SchedulePlanner() {
  const { params, update } = useScheduleParams();
  const { plan, remove } = usePlan();
  const [dismissed, setDismissed] = useState<readonly string[]>([]);
  const [announcement, setAnnouncement] = useState("");
  const [retrying, setRetrying] = useState(false);
  const retryTimer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(retryTimer.current), []);

  const rows = useMemo(
    () =>
      sortSets(
        filterSets({
          day: params.day,
          stage: params.stage,
          planOnly: params.mine,
          plan,
        }),
        params.sort,
      ),
    [params, plan],
  );

  // Real clashes from the saved plan. The demo set times never overlap, so
  // this list stays empty with the shipped data; the labelled demo state
  // previews the warning instead.
  const clashes = findClashes(plan).filter(
    (clash) => !dismissed.includes(clashKey(clash)),
  );

  const demoClash = useMemo<Clash | null>(() => {
    if (params.state !== "clash") return null;
    const [a, b] = sortSets(filterSets({ day: params.day }), "start");
    if (!a || !b) return null;
    return {
      a: a.slug,
      b: b.slug,
      day: params.day,
      overlapMinutes: clashCopy.demoOverlapMinutes,
    };
  }, [params.state, params.day]);

  const view: DemoState | "retrying" = retrying ? "retrying" : params.state;
  const showList = view === "live" || view === "clash";

  function focusPlanHeading() {
    document.getElementById(planHeadingId)?.focus();
  }

  function dismissClash(clash: Clash, demo: boolean) {
    if (demo) update({ state: "live" });
    else setDismissed((list) => [...list, clashKey(clash)]);
    // The alert is removed; keep focus somewhere meaningful.
    focusPlanHeading();
  }

  function removeFromClash(clash: Clash, slug: string, demo: boolean) {
    if (plan.includes(slug)) {
      remove(slug);
      setAnnouncement(clashCopy.removed(getArtist(slug)?.name ?? slug));
    }
    dismissClash(clash, demo);
  }

  function retry() {
    setRetrying(true);
    window.clearTimeout(retryTimer.current);
    retryTimer.current = window.setTimeout(() => {
      setRetrying(false);
      update({ state: "live" });
    }, retryDelayMs);
  }

  return (
    <div className={styles.planner}>
      <ScheduleControls onChange={update} panelId={panelId} params={params} />

      <p aria-live="polite" className={styles.result} role="status">
        {showList ? resultText(rows.length, params.day) : ""}
      </p>
      <span aria-live="polite" className="sr-only" role="status">
        {announcement}
      </span>

      <div
        aria-label={scheduleTable.listLabel(params.day)}
        className={styles.results}
        id={panelId}
        role="tabpanel"
      >
        {showList ? (
          <>
            {clashes.map((clash) => (
              <ClashNotice
                clash={clash}
                key={clashKey(clash)}
                onKeepBoth={() => dismissClash(clash, false)}
                onRemove={(slug) => removeFromClash(clash, slug, false)}
              />
            ))}
            {demoClash ? (
              <ClashNotice
                clash={demoClash}
                demo
                onKeepBoth={() => dismissClash(demoClash, true)}
                onRemove={(slug) => removeFromClash(demoClash, slug, true)}
              />
            ) : null}
            {rows.length > 0 ? (
              <ScheduleTable
                day={params.day}
                onSort={(sort) => update({ sort })}
                rows={rows}
                sort={params.sort}
              />
            ) : (
              <StatePanel kind="empty" message={stateCopy.empty} />
            )}
          </>
        ) : view === "error" ? (
          <StatePanel
            action={{ label: stateCopy.retry, onClick: retry }}
            kind="error"
            message={stateCopy.error}
          />
        ) : (
          <StatePanel
            count={4}
            kind="loading"
            layout="rows"
            message={stateCopy.loading}
          />
        )}
      </div>

      <div className={styles.demoStates}>
        <DemoBadge>{demoStates.badge}</DemoBadge>
        <Segmented
          label={demoStates.label}
          mode="toggle"
          onChange={(value) => {
            if (!isDemoState(value)) return;
            window.clearTimeout(retryTimer.current);
            setRetrying(false);
            update({ state: value });
          }}
          options={demoStates.options}
          showLabel
          value={params.state}
        />
      </div>
    </div>
  );
}
