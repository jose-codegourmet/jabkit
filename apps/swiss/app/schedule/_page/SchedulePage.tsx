"use client";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { Button } from "@/atoms/button";
import { Calendar03 } from "@/atoms/calendar-03";
import { DemoNotice } from "../../_components/DemoNotice";
import { FilterToggleGroup } from "../../_components/FilterToggleGroup";
import { Grid, GridItem } from "../../_components/Grid";
import { PageHeader } from "../../_components/PageHeader";
import { ScreeningTable } from "../../_components/ScreeningTable";
import { StateMessage } from "../../_components/StateMessage";
import { StatusLabel, StatusLegend } from "../../_components/StatusLabel";
import { films } from "../../_data/films";
import {
  checkoutHref,
  festivalDays,
  type Screening,
  screenings,
} from "../../_data/screenings";
import { venues } from "../../_data/venues";
import styles from "./schedule.module.css";

const dayOptions = [
  { value: "all", label: "All" },
  ...festivalDays.map((d) => ({ value: d.id, label: d.label })),
];
const venueOptions = [
  { value: "all", label: "All venues" },
  ...venues.map((v) => ({ value: v.slug, label: v.name })),
];
const categoryOptions = [
  { value: "all", label: "All" },
  { value: "Documentary", label: "Documentary" },
  { value: "Narrative", label: "Narrative" },
  { value: "Shorts program", label: "Shorts program" },
];
export function SchedulePage() {
  const [day, setDay] = useState("all"),
    [venue, setVenue] = useState("all"),
    [category, setCategory] = useState("all"),
    [view, setView] = useState<"table" | "calendar">("table"),
    [selected, setSelected] = useState<Screening>();
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    setDay(q.get("day") ?? "all");
    setVenue(q.get("venue") ?? "all");
  }, []);
  useEffect(() => {
    const q = new URLSearchParams();
    if (day !== "all") q.set("day", day);
    if (venue !== "all") q.set("venue", venue);
    history.replaceState(
      null,
      "",
      `${location.pathname}${q.size ? `?${q}` : ""}`,
    );
  }, [day, venue]);
  const visible = useMemo(
    () =>
      screenings.filter((s) => {
        const film = films.find((f) => f.slug === s.filmSlug);
        return (
          (day === "all" || s.day === day) &&
          (venue === "all" || s.venueSlug === venue) &&
          (category === "all" || film?.category === category)
        );
      }),
    [day, venue, category],
  );
  const clear = () => {
    setDay("all");
    setVenue("all");
    setCategory("all");
  };
  return (
    <>
      <PageHeader
        index="02"
        title="Schedule"
        body="Every screening in one table. Filter it, or switch to the calendar."
      />
      <section className={styles.filterBar}>
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
            <div className={styles.viewSwitch} role="group" aria-label="View">
              <button
                type="button"
                aria-pressed={view === "table"}
                onClick={() => setView("table")}
              >
                Table
              </button>
              <button
                type="button"
                aria-pressed={view === "calendar"}
                onClick={() => setView("calendar")}
              >
                Calendar
              </button>
            </div>
          </GridItem>
          <GridItem span={{ mobile: 4, tablet: 4, desktop: 4 }}>
            <FilterToggleGroup
              label="Day"
              options={dayOptions}
              selected={[day]}
              onChange={(v) => setDay(v.at(-1) ?? "all")}
            />
          </GridItem>
          <GridItem span={{ mobile: 4, tablet: 4, desktop: 4 }}>
            <label className={styles.selectLabel}>
              Venue
              <select value={venue} onChange={(e) => setVenue(e.target.value)}>
                {venueOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </GridItem>
          <GridItem span={{ mobile: 4, tablet: 4, desktop: 4 }}>
            <label className={styles.selectLabel}>
              Category
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              >
                {categoryOptions.map((o) => (
                  <option key={o.value} value={o.value}>
                    {o.label}
                  </option>
                ))}
              </select>
            </label>
          </GridItem>
          <GridItem span={12}>
            <div className={styles.results}>
              <span>Showing {visible.length} of 3 screenings</span>
              <button type="button" onClick={clear}>
                Clear filters
              </button>
            </div>
          </GridItem>
        </Grid>
      </section>
      <section className={styles.content}>
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
            <StatusLegend />
          </GridItem>
          {view === "calendar" ? (
            <GridItem span={{ mobile: 4, tablet: 5, desktop: 5 }}>
              <div className={styles.calendar}>
                <h2>Calendar view</h2>
                <p>Days with screenings are marked with a dot and a count.</p>
                <Calendar03
                  defaultMonth={new Date(2026, 8, 1)}
                  onSelect={() => {}}
                  slots={screenings.map((s) => ({
                    value: s.time,
                    label: s.time,
                    available: s.status === "available",
                  }))}
                />
              </div>
            </GridItem>
          ) : null}
          <GridItem
            span={{
              mobile: 4,
              tablet: 8,
              desktop: view === "calendar" ? 7 : 12,
            }}
          >
            {visible.length ? (
              <>
                <div className={styles.desktop}>
                  <ScreeningTable
                    screenings={visible}
                    caption="FRAME/01 demo schedule"
                    interactive
                    selectedId={selected?.id}
                    onSelect={setSelected}
                  />
                </div>
                <nav className={styles.dayJump} aria-label="Jump to day">
                  {festivalDays.map((d) => (
                    <a key={d.id} href={`#day-${d.id}`}>
                      {d.label}
                    </a>
                  ))}
                </nav>
                <div className={styles.mobile}>
                  {festivalDays.map((d) => (
                    <section key={d.id} id={`day-${d.id}`}>
                      <h2>
                        <span>
                          {d.id === "thu"
                            ? "01"
                            : d.id === "fri"
                              ? "02"
                              : d.id === "sat"
                                ? "03"
                                : "04"}
                        </span>
                        {d.label}
                      </h2>
                      {visible
                        .filter((s) => s.day === d.id)
                        .map((s) => {
                          const f = films.find((f) => f.slug === s.filmSlug);
                          return (
                            <button
                              type="button"
                              key={s.id}
                              disabled={
                                s.status !== "available" &&
                                s.status !== "few-left"
                              }
                              onClick={() => setSelected(s)}
                            >
                              <strong>
                                {s.time} · {f?.title}
                              </strong>
                              <span>
                                {
                                  venues.find((v) => v.slug === s.venueSlug)
                                    ?.name
                                }{" "}
                                · {f?.runtime} min
                              </span>
                              <StatusLabel status={s.status} />
                            </button>
                          );
                        })}
                      {!visible.some((s) => s.day === d.id) && d.emptyNote ? (
                        <p>{d.emptyNote}</p>
                      ) : null}
                    </section>
                  ))}
                </div>
              </>
            ) : (
              <StateMessage
                state="empty"
                title="No screenings match."
                body="Nothing is scheduled for this combination. Try another day or venue."
                action={<Button onClick={clear}>Clear filters</Button>}
              />
            )}
          </GridItem>
        </Grid>
      </section>
      <div className={styles.stateExamples} aria-hidden="true">
        <StateMessage state="loading" />
        <StateMessage
          state="error"
          title="The schedule didn't load."
          body="Try again, or view the program instead."
          action={<Link href="/program">View program</Link>}
        />
      </div>
      {selected ? (
        <aside className={styles.selection}>
          <span>
            {films.find((f) => f.slug === selected.filmSlug)?.title} ·{" "}
            {selected.dayLabel}, {selected.time} ·{" "}
            {venues.find((v) => v.slug === selected.venueSlug)?.name}
          </span>
          <Button asChild>
            <Link href={checkoutHref({ screening: selected.id })}>
              Continue to checkout
            </Link>
          </Button>
        </aside>
      ) : null}
      <DemoNotice />
    </>
  );
}
