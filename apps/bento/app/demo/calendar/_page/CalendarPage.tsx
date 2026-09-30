"use client";

import {
  ChevronLeftIcon,
  ChevronRightIcon,
  PlusIcon,
} from "@radix-ui/react-icons";
import { type ReactNode, useEffect, useMemo, useRef, useState } from "react";
import { Button } from "@/atoms/button";
import { toast } from "@/atoms/toast";
import { BentoGrid, Tile } from "../../../_components/Bento";
import type { DemoState } from "../../../_components/demo-state";
import { PortalPageHeader } from "../../../_components/PortalPageHeader";
import {
  EmptyState,
  ErrorState,
  TileSkeleton,
} from "../../../_components/TileStates";
import {
  type Booking,
  bookingIds,
  bookings,
  formatTime,
} from "../../../_data/bookings";
import { DEMO_TODAY } from "../../../_data/portal";
import type { StaffId } from "../../../_data/staff";
import { AddVisitDialog, type NewVisit } from "./AddVisitDialog";
import styles from "./calendar.module.css";
import {
  addDays,
  bookableStaffIds,
  type CalendarView,
  dayEntries,
  headingFor,
  overlapIdsFor,
  serviceLengths,
  visitsOn,
  weekDates,
} from "./calendar-data";
import {
  addVisitDialog,
  calendarGrid,
  calendarHeader,
  calendarStates,
  emptyDay,
} from "./content";
import { DayView } from "./DayView";
import { StaffFilter } from "./StaffFilter";
import { VisitPanel } from "./VisitPanel";
import { WeekView } from "./WeekView";

const HEADING_ID = "calendar-heading";

/** Keep ?view= and ?date= in the address bar without a server round trip. */
function syncUrl(view: CalendarView, date: string) {
  const params = new URLSearchParams();
  if (view !== "day") params.set("view", view);
  if (date !== DEMO_TODAY) params.set("date", date);
  const query = params.toString();
  const { pathname } = window.location;
  window.history.replaceState(
    window.history.state,
    "",
    query ? `${pathname}?${query}` : pathname,
  );
}

export function CalendarPage({
  initialView,
  initialDate,
  openAdd,
  demoState,
}: {
  initialView: CalendarView;
  initialDate: string;
  openAdd: boolean;
  demoState: DemoState;
}) {
  const [view, setView] = useState(initialView);
  const [date, setDate] = useState(initialDate);
  const [state, setState] = useState(demoState);
  const [activeStaff, setActiveStaff] = useState<StaffId[]>(bookableStaffIds);
  const [visits, setVisits] = useState<Booking[]>(bookings);
  const [addOpen, setAddOpen] = useState(openAdd);
  const [panelOpen, setPanelOpen] = useState(false);
  const [panelVisit, setPanelVisit] = useState<Booking | null>(null);
  const [announcement, setAnnouncement] = useState("");

  const addOpenerRef = useRef<HTMLElement | null>(null);
  const panelOpenerRef = useRef<HTMLElement | null>(null);
  const addedCount = useRef(0);

  const source = state === "empty" ? [] : visits;
  const heading = headingFor(view, date);

  const dayVisits = useMemo(
    () => visitsOn(source, date, activeStaff),
    [source, date, activeStaff],
  );
  const entries = useMemo(() => dayEntries(dayVisits), [dayVisits]);
  const week = useMemo(
    () =>
      weekDates(date).map((day) => {
        const list = visitsOn(source, day, activeStaff);
        return { date: day, visits: list, overlapIds: overlapIdsFor(list) };
      }),
    [source, date, activeStaff],
  );
  const count =
    view === "day"
      ? dayVisits.length
      : week.reduce((total, day) => total + day.visits.length, 0);
  const lastAnnounced = useRef(`${heading}|${count}`);

  const panelOverlap = useMemo(() => {
    if (!panelVisit) return false;
    const sameDay = visitsOn(visits, panelVisit.date, bookableStaffIds);
    return overlapIdsFor(sameDay).has(panelVisit.id);
  }, [panelVisit, visits]);

  // Announce date, view and filter changes, never the initial render.
  useEffect(() => {
    const key = `${heading}|${count}`;
    if (lastAnnounced.current === key) return;
    lastAnnounced.current = key;
    setAnnouncement(`${heading}. ${calendarGrid.visitCount(count)}.`);
  }, [heading, count]);

  function go(nextView: CalendarView, nextDate: string) {
    setView(nextView);
    setDate(nextDate);
    syncUrl(nextView, nextDate);
  }

  function toggleStaff(id: StaffId) {
    setActiveStaff((current) =>
      current.includes(id)
        ? current.filter((item) => item !== id)
        : bookableStaffIds.filter(
            (item) => item === id || current.includes(item),
          ),
    );
  }

  function openAddDialog(opener: HTMLElement | null) {
    addOpenerRef.current = opener;
    setAddOpen(true);
  }

  function changeAddOpen(next: boolean) {
    setAddOpen(next);
    // ?new=1 opens the dialog once; closing it drops the flag from the URL.
    if (!next && window.location.search.includes("new=")) syncUrl(view, date);
  }

  function addVisit(input: NewVisit) {
    addedCount.current += 1;
    const visit: Booking = {
      id: `demo-${addedCount.current}`,
      customerId: "",
      customer: input.customer,
      service: input.service,
      date: input.date,
      start: input.start,
      lengthMinutes: serviceLengths[input.service],
      staffId: input.staffId,
      status: "confirmed",
      note: "",
      phone: "Demo number",
    };
    setVisits((current) => [...current, visit]);
    setActiveStaff((current) =>
      current.includes(visit.staffId)
        ? current
        : bookableStaffIds.filter(
            (item) => item === visit.staffId || current.includes(item),
          ),
    );
    if (state !== "ready") setState("ready");
    setAddOpen(false);
    go(view, visit.date);
    toast.add({ title: addVisitDialog.success(formatTime(visit.start)) });
  }

  function openVisit(visit: Booking, opener: HTMLButtonElement) {
    panelOpenerRef.current = opener;
    setPanelVisit(visit);
    setPanelOpen(true);
  }

  const returnFromAdd = () => {
    const opener = addOpenerRef.current;
    return opener?.isConnected
      ? opener
      : document.querySelector<HTMLElement>("[data-calendar-add]");
  };
  const returnFromPanel = () => {
    const opener = panelOpenerRef.current;
    return opener?.isConnected ? opener : null;
  };

  const isEmpty =
    state === "empty" || (view === "day" && dayVisits.length === 0);
  const tileState =
    state === "loading"
      ? "loading"
      : state === "error"
        ? "error"
        : isEmpty
          ? "empty"
          : "default";

  let body: ReactNode;
  if (state === "loading") {
    body = <TileSkeleton message={calendarStates.loading} rows={6} />;
  } else if (state === "error") {
    body = (
      <ErrorState
        message={calendarStates.error}
        onRetry={() => {
          setState("ready");
          syncUrl(view, date);
        }}
        retryLabel={calendarStates.retry}
      />
    );
  } else if (isEmpty) {
    body = (
      <EmptyState
        action={
          <Button onClick={(event) => openAddDialog(event.currentTarget)}>
            <PlusIcon aria-hidden="true" />
            {emptyDay.action}
          </Button>
        }
        centered
        className={styles.empty}
        imageId="ben-empty-day"
        message={emptyDay.message}
      />
    );
  } else if (view === "day") {
    body = (
      <DayView entries={entries} onOpen={openVisit} staffIds={activeStaff} />
    );
  } else {
    body = (
      <WeekView
        days={week}
        onOpen={openVisit}
        onOpenDay={(day) => go("day", day)}
        selected={date}
      />
    );
  }

  return (
    <div className={styles.root}>
      <PortalPageHeader
        actions={
          <div className={styles.headerActions}>
            {/* biome-ignore lint/a11y/useSemanticElements: a toggle-button group, not a form fieldset */}
            <div
              aria-label={calendarHeader.viewLabel}
              className={styles.segmented}
              role="group"
            >
              {(["day", "week"] as const).map((option) => (
                <button
                  aria-pressed={view === option}
                  className={styles.segment}
                  key={option}
                  onClick={() => go(option, date)}
                  type="button"
                >
                  {calendarHeader.views[option]}
                </button>
              ))}
            </div>
            <div className={styles.navButtons}>
              <Button onClick={() => go(view, DEMO_TODAY)} variant="secondary">
                {calendarHeader.today}
              </Button>
              <Button
                onClick={() => go(view, addDays(date, -1))}
                variant="secondary"
              >
                <ChevronLeftIcon aria-hidden="true" />
                {calendarHeader.previous}
              </Button>
              <Button
                onClick={() => go(view, addDays(date, 1))}
                variant="secondary"
              >
                {calendarHeader.next}
                <ChevronRightIcon aria-hidden="true" />
              </Button>
            </div>
            <Button
              data-calendar-add=""
              onClick={(event) => openAddDialog(event.currentTarget)}
            >
              <PlusIcon aria-hidden="true" />
              {calendarHeader.add}
            </Button>
          </div>
        }
        title={calendarHeader.title}
      />

      <BentoGrid>
        <Tile
          as="section"
          kind="action"
          labelledBy={HEADING_ID}
          state={tileState}
          surfaceClassName={styles.tile}
        >
          <div className={styles.tileTop}>
            <div className={styles.headingGroup}>
              <h2 className={styles.heading} id={HEADING_ID}>
                {heading}
              </h2>
              {view === "day" && date === DEMO_TODAY ? (
                <span className={styles.todayTag}>{calendarGrid.todayTag}</span>
              ) : null}
              {state === "ready" || state === "empty" ? (
                <p className={styles.count}>{calendarGrid.visitCount(count)}</p>
              ) : null}
            </div>
            <StaffFilter active={activeStaff} onToggle={toggleStaff} />
          </div>
          {body}
        </Tile>
      </BentoGrid>

      <p aria-live="polite" className={styles.srOnly}>
        {announcement}
      </p>

      <VisitPanel
        canOpenBooking={panelVisit ? bookingIds.includes(panelVisit.id) : false}
        onClose={() => setPanelOpen(false)}
        open={panelOpen}
        overlap={panelOverlap}
        returnFocus={returnFromPanel}
        visit={panelVisit}
      />
      <AddVisitDialog
        defaultDate={date}
        defaultStaff={activeStaff[0] ?? bookableStaffIds[0]}
        onAdd={addVisit}
        onOpenChange={changeAddOpen}
        open={addOpen}
        returnFocus={returnFromAdd}
      />
    </div>
  );
}
