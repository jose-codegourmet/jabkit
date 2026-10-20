"use client";

import type { Route } from "next";
import { useRouter } from "next/navigation";
import {
  type ChangeEvent,
  useEffect,
  useId,
  useOptimistic,
  useRef,
  useState,
  useTransition,
} from "react";
import { cn } from "@/lib/cn";
import { ActCard } from "../../_components/ActCard";
import { DemoBadge } from "../../_components/Badges";
import { Segmented } from "../../_components/Segmented";
import { StatePanel } from "../../_components/StatePanel";
import { Sticker } from "../../_components/Sticker";
import { artists } from "../../_data/artists";
import { stages } from "../../_data/stages";
import styles from "../../style.module.css";
import {
  demoStates,
  lineupBrowse,
  lineupControls,
  lineupStates,
  showingCount,
} from "./content";
import { LineupTable } from "./LineupTable";
import page from "./lineup.module.css";
import {
  filterLineup,
  isDayFilter,
  isLineupState,
  isLineupView,
  type LineupQuery,
  type LineupView,
  lineupHref,
} from "./query";
import { useViewPreference } from "./useViewPreference";

const resultsId = "lineup-results";
/** How long the demo "Try again" shows the loading state before the lineup returns. */
const retryDelayMs = 900;

const dayOptions = lineupControls.dayOptions.map((option) => ({
  ...option,
  controls: resultsId,
}));

/**
 * Filters, view toggle and results for /lineup. The URL is the source of
 * truth (the server parses it into `query`); changes apply optimistically and
 * are written back with router.replace.
 */
export function LineupExplorer({ query }: { query: LineupQuery }) {
  const router = useRouter();
  const [, startTransition] = useTransition();
  const [current, setOptimistic] = useOptimistic(query);
  const [storedView, saveView] = useViewPreference();
  const [retrying, setRetrying] = useState(false);
  const retryTimer = useRef<number | undefined>(undefined);
  const resultsRef = useRef<HTMLDivElement>(null);
  const stageSelectId = useId();

  useEffect(() => () => window.clearTimeout(retryTimer.current), []);

  const view: LineupView = current.view ?? storedView ?? "cards";
  const state = retrying ? "loading" : current.state;
  const acts = current.state === "empty" ? [] : filterLineup(artists, current);
  const isDemoState = current.state !== "live";

  function update(patch: Partial<LineupQuery>) {
    const next = { ...current, ...patch };
    startTransition(() => {
      setOptimistic(next);
      router.replace(lineupHref(next) as Route, { scroll: false });
    });
  }

  function onStageChange(event: ChangeEvent<HTMLSelectElement>) {
    const value = event.target.value;
    const stage = stages.find((entry) => entry.id === value)?.id ?? "all";
    update({ stage });
  }

  function onViewChange(next: string) {
    if (!isLineupView(next)) return;
    saveView(next);
    update({ view: next });
  }

  function clearFilters() {
    update({ day: "both", stage: "all", state: "live" });
    resultsRef.current?.focus();
  }

  function retry() {
    window.clearTimeout(retryTimer.current);
    setRetrying(true);
    update({ state: "live" });
    retryTimer.current = window.setTimeout(() => {
      setRetrying(false);
      resultsRef.current?.focus();
    }, retryDelayMs);
  }

  const count = showingCount(acts.length);
  const showCount = state === "live" || state === "empty";

  return (
    <div className={page.explorer}>
      <fieldset className={cn(styles.quietPanel, page.toolbar)}>
        <legend className="sr-only">{lineupBrowse.filtersLabel}</legend>
        <Segmented
          label={lineupControls.dayLabel}
          mode="tabs"
          onChange={(value) => {
            if (isDayFilter(value)) update({ day: value });
          }}
          options={dayOptions}
          showLabel
          value={current.day}
        />
        <div className={page.field}>
          <label className={page.fieldLabel} htmlFor={stageSelectId}>
            {lineupControls.stageLabel}
          </label>
          <select
            className={page.select}
            id={stageSelectId}
            onChange={onStageChange}
            value={current.stage}
          >
            <option value="all">{lineupControls.stageAll}</option>
            {stages.map((stage) => (
              <option key={stage.id} value={stage.id}>
                {stage.name}
              </option>
            ))}
          </select>
        </div>
        <Segmented
          className={page.viewToggle}
          label={lineupControls.viewLabel}
          mode="toggle"
          onChange={onViewChange}
          options={lineupControls.viewOptions}
          showLabel
          value={view}
        />
      </fieldset>

      <div className={page.demoStates}>
        <div className={page.demoStatesCopy}>
          <DemoBadge>{demoStates.badge}</DemoBadge>
          <p>{demoStates.description}</p>
        </div>
        <Segmented
          label={demoStates.label}
          mode="toggle"
          onChange={(value) => {
            if (!isLineupState(value)) return;
            window.clearTimeout(retryTimer.current);
            setRetrying(false);
            update({ state: value });
          }}
          options={demoStates.options}
          showLabel
          value={current.state}
        />
      </div>

      <div
        aria-busy={state === "loading" ? true : undefined}
        aria-label={lineupBrowse.resultsLabel}
        className={page.wall}
        data-view={view}
        id={resultsId}
        ref={resultsRef}
        role="tabpanel"
        tabIndex={-1}
      >
        <div className={page.wallHead}>
          <p aria-live="polite" className={page.count} role="status">
            {showCount ? (
              <>
                {count.before}{" "}
                <span className={page.countNumber}>{count.count}</span>{" "}
                {count.after}
              </>
            ) : null}
          </p>
          <div className={page.wallBadges}>
            <DemoBadge>{lineupBrowse.demoLineupBadge}</DemoBadge>
            {isDemoState ? (
              <DemoBadge>{demoStates.activeBadge}</DemoBadge>
            ) : null}
          </div>
          <div className={page.wallStickers}>
            <Sticker
              motion="drift"
              rotate={10}
              shape="squiggle"
              size="3.5rem"
              tone="cobalt"
            />
            <Sticker
              motion="spin"
              shape="knob"
              size="3.25rem"
              tone="tangerine"
            />
            <Sticker
              motion="drift"
              rotate={-14}
              shape="bolt"
              size="3rem"
              tone="lime"
            />
          </div>
        </div>

        {state === "loading" ? (
          <StatePanel
            count={view === "cards" ? 4 : 6}
            kind="loading"
            layout={view === "cards" ? "cards" : "rows"}
            message={lineupStates.loading}
          />
        ) : state === "error" ? (
          <StatePanel
            action={{ label: lineupStates.retry, onClick: retry }}
            kind="error"
            message={lineupStates.error}
          />
        ) : acts.length === 0 ? (
          <StatePanel
            action={{ label: lineupStates.clearFilters, onClick: clearFilters }}
            kind="empty"
            message={lineupStates.empty}
          />
        ) : view === "cards" ? (
          <ul className={page.grid}>
            {acts.map((artist, index) => (
              <li className={page.gridItem} key={artist.slug}>
                <ActCard
                  artist={artist}
                  headingLevel="h3"
                  tilt={index % 2 === 0 ? 1 : -1}
                />
              </li>
            ))}
          </ul>
        ) : (
          <LineupTable acts={acts} />
        )}
      </div>
    </div>
  );
}
