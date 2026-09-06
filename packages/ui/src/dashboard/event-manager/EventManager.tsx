"use client";

import {
  CalendarDaysIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ListIcon,
  PlusIcon,
  SearchIcon,
} from "lucide-react";
import * as React from "react";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/atoms/dialog/Dialog";
import { Input } from "@/atoms/input";
import { Label } from "@/atoms/label";
import { Textarea } from "@/atoms/textarea";
import { cn } from "@/lib/cn";
import type {
  EventManagerEvent,
  EventManagerProps,
  EventManagerTone,
  EventManagerView,
} from "./EventManager.types";

const WEEKDAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const TONES: EventManagerTone[] = [
  "chart-1",
  "chart-2",
  "chart-3",
  "chart-4",
  "chart-5",
  "destructive",
];
const TONE_LABEL: Record<EventManagerTone, string> = {
  "chart-1": "Ocean",
  "chart-2": "Grove",
  "chart-3": "Citrus",
  "chart-4": "Orchid",
  "chart-5": "Lagoon",
  destructive: "Alert",
};
const TONE_CHIP: Record<EventManagerTone, string> = {
  "chart-1": "border-chart-1/40 bg-chart-1/15 text-chart-1",
  "chart-2": "border-chart-2/40 bg-chart-2/15 text-chart-2",
  "chart-3": "border-chart-3/40 bg-chart-3/15 text-chart-3",
  "chart-4": "border-chart-4/40 bg-chart-4/15 text-chart-4",
  "chart-5": "border-chart-5/40 bg-chart-5/15 text-chart-5",
  destructive: "border-destructive/40 bg-destructive/15 text-destructive",
};
const TONE_DOT: Record<EventManagerTone, string> = {
  "chart-1": "bg-chart-1",
  "chart-2": "bg-chart-2",
  "chart-3": "bg-chart-3",
  "chart-4": "bg-chart-4",
  "chart-5": "bg-chart-5",
  destructive: "bg-destructive",
};
const VIEWS: { id: EventManagerView; label: string }[] = [
  { id: "month", label: "Month" },
  { id: "week", label: "Week" },
  { id: "day", label: "Day" },
  { id: "list", label: "List" },
];
const DEFAULT_CATEGORIES = ["Meeting", "Task", "Reminder", "Personal"];
const DEFAULT_TAGS = [
  "Important",
  "Urgent",
  "Work",
  "Personal",
  "Team",
  "Client",
];
const defaults = {
  title: "Harbor calendar",
  description: "Search, filter, and reschedule the Northline week.",
  searchPlaceholder: "Search events",
  emptyLabel: "No events match these filters.",
  addEventLabel: "New event",
  todayLabel: "Today",
  weekdayLabels: WEEKDAYS,
} as const;

type Draft = {
  id?: string;
  title: string;
  description: string;
  start: string;
  end: string;
  category: string;
  tags: string[];
  tone: EventManagerTone;
  attendees: string;
};

function startOfDay(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}

function startOfMonth(date: Date) {
  return new Date(date.getFullYear(), date.getMonth(), 1);
}

function startOfWeek(date: Date) {
  const next = startOfDay(date);
  next.setDate(next.getDate() - next.getDay());
  return next;
}

function addDays(date: Date, amount: number) {
  const next = new Date(date);
  next.setDate(next.getDate() + amount);
  return next;
}

function addMonths(date: Date, amount: number) {
  return new Date(date.getFullYear(), date.getMonth() + amount, 1);
}

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isSameMonth(a: Date, b: Date) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth();
}

function calendarDays(month: Date) {
  const first = startOfMonth(month);
  const gridStart = startOfWeek(first);
  return Array.from({ length: 42 }, (_, i) => addDays(gridStart, i));
}

function weekDays(date: Date) {
  const start = startOfWeek(date);
  return Array.from({ length: 7 }, (_, i) => addDays(start, i));
}

function pad(value: number) {
  return String(value).padStart(2, "0");
}

function toLocalInput(date: Date) {
  return `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}T${pad(date.getHours())}:${pad(date.getMinutes())}`;
}

function parseLocalInput(value: string) {
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
}

function formatTime(date: Date) {
  return date.toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
  });
}

function formatDayHeading(date: Date) {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
  });
}

function monthYearFormatter(date: Date) {
  return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
}

function rangeForView(date: Date, view: EventManagerView) {
  if (view === "day") return formatDayHeading(date);
  if (view === "week" || view === "list") {
    const start = startOfWeek(date);
    const end = addDays(start, 6);
    const opts: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      year: "numeric",
    };
    return `${start.toLocaleDateString("en-US", opts)} - ${end.toLocaleDateString("en-US", opts)}`;
  }
  const start = startOfMonth(date);
  const end = new Date(date.getFullYear(), date.getMonth() + 1, 0);
  const opts: Intl.DateTimeFormatOptions = {
    month: "short",
    day: "numeric",
    year: "numeric",
  };
  return `${start.toLocaleDateString("en-US", opts)} - ${end.toLocaleDateString("en-US", opts)}`;
}

function createEventId() {
  return `event-${Math.random().toString(36).slice(2, 10)}`;
}

function moveEventToDay(
  event: EventManagerEvent,
  day: Date,
): EventManagerEvent {
  const start = new Date(day);
  start.setHours(
    event.startTime.getHours(),
    event.startTime.getMinutes(),
    0,
    0,
  );
  const duration = event.endTime.getTime() - event.startTime.getTime();
  return {
    ...event,
    startTime: start,
    endTime: new Date(start.getTime() + duration),
  };
}

function emptyDraft(day: Date, category: string): Draft {
  const start = new Date(day);
  start.setHours(9, 0, 0, 0);
  const end = new Date(day);
  end.setHours(10, 0, 0, 0);
  return {
    title: "",
    description: "",
    start: toLocalInput(start),
    end: toLocalInput(end),
    category,
    tags: [],
    tone: "chart-1",
    attendees: "",
  };
}

function draftFromEvent(event: EventManagerEvent): Draft {
  return {
    id: event.id,
    title: event.title,
    description: event.description ?? "",
    start: toLocalInput(event.startTime),
    end: toLocalInput(event.endTime),
    category: event.category ?? "",
    tags: event.tags ?? [],
    tone: event.tone ?? "chart-1",
    attendees: (event.attendees ?? []).join(", "),
  };
}

function eventFromDraft(draft: Draft): EventManagerEvent | null {
  const startTime = parseLocalInput(draft.start);
  const endTime = parseLocalInput(draft.end);
  const title = draft.title.trim();
  if (!title || !startTime || !endTime) return null;
  const attendees = draft.attendees
    .split(",")
    .map((name) => name.trim())
    .filter(Boolean);
  return {
    id: draft.id ?? createEventId(),
    title,
    description: draft.description.trim() || undefined,
    startTime,
    endTime: endTime.getTime() < startTime.getTime() ? startTime : endTime,
    tone: draft.tone,
    category: draft.category || undefined,
    attendees: attendees.length ? attendees : undefined,
    tags: draft.tags,
  };
}

function FilterChip({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={cn(
        "shrink-0 rounded-full border px-3 py-1 text-xs font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        active
          ? "border-primary bg-primary text-primary-foreground"
          : "border-border bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground",
      )}
    >
      {children}
    </button>
  );
}

function EventChip({
  event,
  compact = false,
  draggable = false,
  onOpen,
  onDragStart,
}: {
  event: EventManagerEvent;
  compact?: boolean;
  draggable?: boolean;
  onOpen: () => void;
  onDragStart?: () => void;
}) {
  const tone = event.tone ?? "chart-1";
  return (
    <button
      type="button"
      draggable={draggable}
      onDragStart={(nativeEvent) => {
        nativeEvent.dataTransfer.setData("text/plain", event.id);
        nativeEvent.dataTransfer.effectAllowed = "move";
        onDragStart?.();
      }}
      onClick={(nativeEvent) => {
        nativeEvent.stopPropagation();
        onOpen();
      }}
      title={event.description}
      className={cn(
        "w-full rounded-[calc(var(--radius)-6px)] border px-1.5 py-1 text-left transition-colors hover:brightness-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        TONE_CHIP[tone],
        compact && "py-0.5",
        draggable && "cursor-grab active:cursor-grabbing",
      )}
    >
      <p className="truncate text-[11px] font-medium">{event.title}</p>
      <p className="text-[10px] opacity-80">{formatTime(event.startTime)}</p>
    </button>
  );
}

export function EventManager({
  className,
  title = defaults.title,
  description = defaults.description,
  events: eventsProp,
  defaultEvents = [],
  categories = DEFAULT_CATEGORIES,
  availableTags = DEFAULT_TAGS,
  defaultView = "month",
  today: todayProp,
  defaultDate,
  defaultSearch = "",
  defaultCategoryFilter = null,
  defaultTagFilter = null,
  defaultToneFilter = null,
  searchPlaceholder = defaults.searchPlaceholder,
  emptyLabel = defaults.emptyLabel,
  addEventLabel = defaults.addEventLabel,
  todayLabel = defaults.todayLabel,
  weekdayLabels = defaults.weekdayLabels,
  onEventCreate,
  onEventUpdate,
  onEventDelete,
  onEventsChange,
  ...props
}: EventManagerProps) {
  const headingId = React.useId();
  const searchId = React.useId();
  const today = startOfDay(todayProp ?? new Date());
  const isControlled = eventsProp !== undefined;
  const [uncontrolledEvents, setUncontrolledEvents] =
    React.useState<EventManagerEvent[]>(defaultEvents);
  const events = isControlled ? eventsProp : uncontrolledEvents;
  const [view, setView] = React.useState<EventManagerView>(defaultView);
  const [cursor, setCursor] = React.useState(() =>
    startOfDay(defaultDate ?? today),
  );
  const [query, setQuery] = React.useState(defaultSearch);
  const [categoryFilter, setCategoryFilter] = React.useState<string | null>(
    defaultCategoryFilter,
  );
  const [tagFilter, setTagFilter] = React.useState<string | null>(
    defaultTagFilter,
  );
  const [toneFilter, setToneFilter] = React.useState<EventManagerTone | null>(
    defaultToneFilter,
  );
  const [draft, setDraft] = React.useState<Draft | null>(null);
  const [draggingId, setDraggingId] = React.useState<string | null>(null);

  const commitEvents = React.useCallback(
    (next: EventManagerEvent[]) => {
      if (!isControlled) setUncontrolledEvents(next);
      onEventsChange?.(next);
    },
    [isControlled, onEventsChange],
  );

  const visibleEvents = React.useMemo(() => {
    const needle = query.trim().toLowerCase();
    return events.filter((event) => {
      const haystack = [
        event.title,
        event.description ?? "",
        event.category ?? "",
        ...(event.tags ?? []),
        ...(event.attendees ?? []),
      ]
        .join(" ")
        .toLowerCase();
      const matchesQuery = needle.length === 0 || haystack.includes(needle);
      const matchesCategory =
        categoryFilter === null || event.category === categoryFilter;
      const matchesTag =
        tagFilter === null || (event.tags ?? []).includes(tagFilter);
      const matchesTone =
        toneFilter === null || (event.tone ?? "chart-1") === toneFilter;
      return matchesQuery && matchesCategory && matchesTag && matchesTone;
    });
  }, [categoryFilter, events, query, tagFilter, toneFilter]);

  const eventsByDay = React.useCallback(
    (day: Date) =>
      visibleEvents
        .filter((event) => isSameDay(event.startTime, day))
        .sort((a, b) => a.startTime.getTime() - b.startTime.getTime()),
    [visibleEvents],
  );

  const listEvents = React.useMemo(() => {
    const start = view === "month" ? startOfMonth(cursor) : startOfWeek(cursor);
    const end =
      view === "month"
        ? new Date(cursor.getFullYear(), cursor.getMonth() + 1, 0)
        : addDays(startOfWeek(cursor), 6);
    return visibleEvents
      .filter((event) => {
        const day = startOfDay(event.startTime);
        return day >= startOfDay(start) && day <= startOfDay(end);
      })
      .sort((a, b) => a.startTime.getTime() - b.startTime.getTime());
  }, [cursor, view, visibleEvents]);

  const goByView = (offset: number) => {
    if (view === "month") setCursor(startOfMonth(addMonths(cursor, offset)));
    else if (view === "day") setCursor(addDays(cursor, offset));
    else setCursor(addDays(cursor, offset * 7));
  };

  const dropOnDay = (day: Date, eventId: string) => {
    const current = events.find((event) => event.id === eventId);
    if (!current) return;
    const nextEvent = moveEventToDay(current, day);
    commitEvents(
      events.map((event) => (event.id === eventId ? nextEvent : event)),
    );
    onEventUpdate?.(eventId, nextEvent);
    setCursor(startOfDay(day));
    setDraggingId(null);
  };

  const saveDraft = () => {
    if (!draft) return;
    const nextEvent = eventFromDraft(draft);
    if (!nextEvent) return;
    const exists = events.some((event) => event.id === nextEvent.id);
    const next = exists
      ? events.map((event) => (event.id === nextEvent.id ? nextEvent : event))
      : [...events, nextEvent];
    commitEvents(next);
    if (exists) onEventUpdate?.(nextEvent.id, nextEvent);
    else onEventCreate?.(nextEvent);
    setCursor(startOfDay(nextEvent.startTime));
    setDraft(null);
  };

  const deleteDraft = () => {
    if (!draft?.id) return;
    commitEvents(events.filter((event) => event.id !== draft.id));
    onEventDelete?.(draft.id);
    setDraft(null);
  };

  const heading =
    view === "month" ? monthYearFormatter(cursor) : formatDayHeading(cursor);

  return (
    <section
      data-slot="event-manager"
      aria-labelledby={headingId}
      className={cn(
        "flex min-h-[100dvh] flex-col bg-background text-foreground",
        className,
      )}
      {...props}
    >
      <header className="flex flex-col gap-4 border-b border-border px-4 py-4 sm:px-6">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          <div className="min-w-0">
            <h1
              id={headingId}
              className="text-lg font-semibold tracking-[-0.03em]"
            >
              {title}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
            <p className="mt-2 text-sm font-medium">{heading}</p>
            <p className="text-xs text-muted-foreground">
              {rangeForView(cursor, view)}
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setCursor(today)}
            >
              {todayLabel}
            </Button>
            <div className="inline-flex overflow-hidden rounded-[--radius] border border-border">
              <button
                type="button"
                aria-label="Previous"
                className="inline-flex size-9 items-center justify-center text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => goByView(-1)}
              >
                <ChevronLeftIcon className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Next"
                className="inline-flex size-9 items-center justify-center border-l border-border text-foreground hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                onClick={() => goByView(1)}
              >
                <ChevronRightIcon className="size-4" />
              </button>
            </div>
            <Button
              type="button"
              variant="primary"
              size="sm"
              className="gap-1.5"
              onClick={() =>
                setDraft(emptyDraft(cursor, categories[0] ?? "Meeting"))
              }
            >
              <PlusIcon className="size-4" />
              {addEventLabel}
            </Button>
          </div>
        </div>

        <div className="relative max-w-md">
          <SearchIcon
            aria-hidden="true"
            className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
          />
          <Input
            id={searchId}
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder={searchPlaceholder}
            aria-label={searchPlaceholder}
            className="h-10 rounded-[--radius] pr-3 pl-9"
          />
        </div>

        <div className="flex flex-col gap-3">
          <fieldset className="flex gap-2 overflow-x-auto border-0 p-0">
            <legend className="sr-only">View</legend>
            {VIEWS.map((item) => (
              <FilterChip
                key={item.id}
                active={view === item.id}
                onClick={() => setView(item.id)}
              >
                {item.id === "list" ? (
                  <span className="inline-flex items-center gap-1">
                    <ListIcon className="size-3.5" />
                    {item.label}
                  </span>
                ) : item.id === "month" ? (
                  <span className="inline-flex items-center gap-1">
                    <CalendarDaysIcon className="size-3.5" />
                    {item.label}
                  </span>
                ) : (
                  item.label
                )}
              </FilterChip>
            ))}
          </fieldset>
          <fieldset className="flex gap-2 overflow-x-auto border-0 p-0">
            <legend className="sr-only">Filter by category</legend>
            <FilterChip
              active={categoryFilter === null}
              onClick={() => setCategoryFilter(null)}
            >
              All categories
            </FilterChip>
            {categories.map((category) => (
              <FilterChip
                key={category}
                active={categoryFilter === category}
                onClick={() =>
                  setCategoryFilter((current) =>
                    current === category ? null : category,
                  )
                }
              >
                {category}
              </FilterChip>
            ))}
          </fieldset>
          <fieldset className="flex gap-2 overflow-x-auto border-0 p-0">
            <legend className="sr-only">Filter by tag</legend>
            <FilterChip
              active={tagFilter === null}
              onClick={() => setTagFilter(null)}
            >
              All tags
            </FilterChip>
            {availableTags.map((tag) => (
              <FilterChip
                key={tag}
                active={tagFilter === tag}
                onClick={() =>
                  setTagFilter((current) => (current === tag ? null : tag))
                }
              >
                {tag}
              </FilterChip>
            ))}
          </fieldset>
          <fieldset className="flex gap-2 overflow-x-auto border-0 p-0">
            <legend className="sr-only">Filter by color</legend>
            {TONES.map((tone) => (
              <button
                key={tone}
                type="button"
                aria-pressed={toneFilter === tone}
                aria-label={TONE_LABEL[tone]}
                onClick={() =>
                  setToneFilter((current) => (current === tone ? null : tone))
                }
                className={cn(
                  "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  toneFilter === tone
                    ? TONE_CHIP[tone]
                    : "border-border bg-background text-muted-foreground hover:bg-accent",
                )}
              >
                <span
                  className={cn("size-2 rounded-full", TONE_DOT[tone])}
                  aria-hidden="true"
                />
                {TONE_LABEL[tone]}
              </button>
            ))}
          </fieldset>
        </div>
      </header>

      {view === "month" ? (
        <MonthView
          cursor={cursor}
          weekdayLabels={weekdayLabels}
          today={today}
          eventsByDay={eventsByDay}
          onSelectDay={setCursor}
          onOpenEvent={(event) => setDraft(draftFromEvent(event))}
          onCreateDay={(day) =>
            setDraft(emptyDraft(day, categories[0] ?? "Meeting"))
          }
          onDrop={dropOnDay}
          draggingId={draggingId}
          onDragStart={setDraggingId}
        />
      ) : null}

      {view === "week" ? (
        <WeekView
          days={weekDays(cursor)}
          weekdayLabels={weekdayLabels}
          today={today}
          eventsByDay={eventsByDay}
          onSelectDay={setCursor}
          onOpenEvent={(event) => setDraft(draftFromEvent(event))}
          onDrop={dropOnDay}
          onDragStart={setDraggingId}
        />
      ) : null}

      {view === "day" ? (
        <DayView
          day={cursor}
          events={eventsByDay(cursor)}
          emptyLabel={emptyLabel}
          onOpenEvent={(event) => setDraft(draftFromEvent(event))}
          onCreate={() =>
            setDraft(emptyDraft(cursor, categories[0] ?? "Meeting"))
          }
        />
      ) : null}

      {view === "list" ? (
        <ListView
          events={listEvents}
          emptyLabel={emptyLabel}
          onOpenEvent={(event) => setDraft(draftFromEvent(event))}
        />
      ) : null}

      <Dialog
        open={draft !== null}
        onOpenChange={(open) => {
          if (!open) setDraft(null);
        }}
      >
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>{draft?.id ? "Edit event" : "New event"}</DialogTitle>
            <DialogDescription>
              Times stay on this device. Drag a chip onto another day to
              reschedule.
            </DialogDescription>
          </DialogHeader>
          {draft ? (
            <form
              className="grid gap-3"
              onSubmit={(event) => {
                event.preventDefault();
                saveDraft();
              }}
            >
              <div className="grid gap-1.5">
                <Label htmlFor="event-title">Title</Label>
                <Input
                  id="event-title"
                  value={draft.title}
                  onChange={(event) =>
                    setDraft({ ...draft, title: event.target.value })
                  }
                  required
                />
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="event-notes">Notes</Label>
                <Textarea
                  id="event-notes"
                  value={draft.description}
                  onChange={(event) =>
                    setDraft({ ...draft, description: event.target.value })
                  }
                />
              </div>
              <div className="grid gap-3 sm:grid-cols-2">
                <div className="grid gap-1.5">
                  <Label htmlFor="event-start">Starts</Label>
                  <Input
                    id="event-start"
                    type="datetime-local"
                    value={draft.start}
                    onChange={(event) =>
                      setDraft({ ...draft, start: event.target.value })
                    }
                    required
                  />
                </div>
                <div className="grid gap-1.5">
                  <Label htmlFor="event-end">Ends</Label>
                  <Input
                    id="event-end"
                    type="datetime-local"
                    value={draft.end}
                    onChange={(event) =>
                      setDraft({ ...draft, end: event.target.value })
                    }
                    required
                  />
                </div>
              </div>
              <div className="grid gap-1.5">
                <Label htmlFor="event-category">Category</Label>
                <select
                  id="event-category"
                  value={draft.category}
                  onChange={(event) =>
                    setDraft({ ...draft, category: event.target.value })
                  }
                  className="h-8 w-full rounded-lg border border-input bg-background px-2.5 text-sm text-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-none"
                >
                  {categories.map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </select>
              </div>
              <fieldset className="grid gap-1.5 border-0 p-0">
                <legend className="text-sm font-medium">Color</legend>
                <div className="flex flex-wrap gap-2">
                  {TONES.map((tone) => (
                    <button
                      key={tone}
                      type="button"
                      aria-pressed={draft.tone === tone}
                      aria-label={TONE_LABEL[tone]}
                      onClick={() => setDraft({ ...draft, tone })}
                      className={cn(
                        "inline-flex items-center gap-1.5 rounded-full border px-2.5 py-1 text-xs font-medium focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                        draft.tone === tone
                          ? TONE_CHIP[tone]
                          : "border-border text-muted-foreground hover:bg-accent",
                      )}
                    >
                      <span
                        className={cn("size-2 rounded-full", TONE_DOT[tone])}
                      />
                      {TONE_LABEL[tone]}
                    </button>
                  ))}
                </div>
              </fieldset>
              <fieldset className="grid gap-1.5 border-0 p-0">
                <legend className="text-sm font-medium">Tags</legend>
                <div className="flex flex-wrap gap-1.5">
                  {availableTags.map((tag) => {
                    const selected = draft.tags.includes(tag);
                    return (
                      <button
                        key={tag}
                        type="button"
                        aria-pressed={selected}
                        onClick={() =>
                          setDraft({
                            ...draft,
                            tags: selected
                              ? draft.tags.filter((item) => item !== tag)
                              : [...draft.tags, tag],
                          })
                        }
                      >
                        <Badge variant={selected ? "primary" : "outline"}>
                          {tag}
                        </Badge>
                      </button>
                    );
                  })}
                </div>
              </fieldset>
              <div className="grid gap-1.5">
                <Label htmlFor="event-attendees">Attendees</Label>
                <Input
                  id="event-attendees"
                  value={draft.attendees}
                  onChange={(event) =>
                    setDraft({ ...draft, attendees: event.target.value })
                  }
                  placeholder="Names, separated by commas"
                />
              </div>
              <DialogFooter>
                {draft.id ? (
                  <Button
                    type="button"
                    variant="destructive"
                    size="sm"
                    onClick={deleteDraft}
                  >
                    Delete
                  </Button>
                ) : null}
                <Button
                  type="button"
                  variant="secondary"
                  size="sm"
                  onClick={() => setDraft(null)}
                >
                  Cancel
                </Button>
                <Button type="submit" size="sm">
                  Save
                </Button>
              </DialogFooter>
            </form>
          ) : null}
        </DialogContent>
      </Dialog>
    </section>
  );
}

function MonthView({
  cursor,
  weekdayLabels,
  today,
  eventsByDay,
  onSelectDay,
  onOpenEvent,
  onCreateDay,
  onDrop,
  draggingId,
  onDragStart,
}: {
  cursor: Date;
  weekdayLabels: readonly string[];
  today: Date;
  eventsByDay: (day: Date) => EventManagerEvent[];
  onSelectDay: (day: Date) => void;
  onOpenEvent: (event: EventManagerEvent) => void;
  onCreateDay: (day: Date) => void;
  onDrop: (day: Date, eventId: string) => void;
  draggingId: string | null;
  onDragStart: (id: string) => void;
}) {
  const days = calendarDays(cursor);
  return (
    <>
      <div
        className="hidden grid-cols-7 border-b border-border text-center text-xs font-medium text-muted-foreground md:grid"
        aria-hidden="true"
      >
        {weekdayLabels.map((label) => (
          <div
            key={label}
            className="border-r border-border py-2.5 last:border-r-0"
          >
            {label}
          </div>
        ))}
      </div>
      <div className="hidden flex-1 md:grid md:grid-cols-7 md:grid-rows-6">
        {days.map((day) => {
          const inMonth = isSameMonth(day, cursor);
          const selected = isSameDay(day, cursor);
          const isToday = isSameDay(day, today);
          const dayEvents = eventsByDay(day);
          const extra = dayEvents.length - 2;
          return (
            <fieldset
              key={day.toISOString()}
              onDragOver={(event) => event.preventDefault()}
              onDrop={(event) => {
                event.preventDefault();
                const eventId = event.dataTransfer.getData("text/plain");
                if (eventId) onDrop(day, eventId);
              }}
              className={cn(
                "relative m-0 flex min-h-[7.5rem] flex-col border-r border-b border-border p-2 [&:nth-child(7n)]:border-r-0",
                !inMonth && "bg-muted/50 text-muted-foreground",
                draggingId && "bg-accent/40",
              )}
            >
              <legend className="sr-only">
                {weekdayLabels[day.getDay()] ?? WEEKDAYS[day.getDay()]}{" "}
                {day.getDate()}
              </legend>
              <button
                type="button"
                onClick={() => onSelectDay(day)}
                onDoubleClick={() => onCreateDay(day)}
                aria-pressed={selected}
                aria-current={isToday ? "date" : undefined}
                aria-label={`${weekdayLabels[day.getDay()] ?? WEEKDAYS[day.getDay()]} ${day.getDate()}`}
                className={cn(
                  "mb-2 inline-flex size-7 items-center justify-center self-end rounded-full text-xs font-medium tabular-nums hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
                  isToday &&
                    "bg-primary text-primary-foreground hover:bg-primary",
                  selected &&
                    !isToday &&
                    "bg-accent text-accent-foreground ring-2 ring-ring ring-offset-1 ring-offset-background",
                )}
              >
                {day.getDate()}
              </button>
              <div className="flex min-h-0 flex-1 flex-col gap-1 overflow-hidden">
                {dayEvents.slice(0, 2).map((event) => (
                  <EventChip
                    key={event.id}
                    event={event}
                    compact
                    draggable
                    onOpen={() => onOpenEvent(event)}
                    onDragStart={() => onDragStart(event.id)}
                  />
                ))}
                {extra > 0 ? (
                  <p className="px-1 text-[11px] text-muted-foreground">
                    +{extra} more
                  </p>
                ) : null}
              </div>
            </fieldset>
          );
        })}
      </div>
      <ol className="flex flex-1 flex-col divide-y divide-border md:hidden">
        {days
          .filter((day) => isSameMonth(day, cursor))
          .map((day) => {
            const dayEvents = eventsByDay(day);
            const selected = isSameDay(day, cursor);
            const isToday = isSameDay(day, today);
            return (
              <li key={day.toISOString()}>
                <fieldset
                  className={cn(
                    "m-0 flex w-full items-start gap-4 border-0 px-4 py-3",
                    selected && "bg-accent",
                  )}
                  onDragOver={(event) => event.preventDefault()}
                  onDrop={(event) => {
                    event.preventDefault();
                    const eventId = event.dataTransfer.getData("text/plain");
                    if (eventId) onDrop(day, eventId);
                  }}
                >
                  <legend className="sr-only">
                    {weekdayLabels[day.getDay()] ?? WEEKDAYS[day.getDay()]}{" "}
                    {day.getDate()}
                  </legend>
                  <button
                    type="button"
                    onClick={() => onSelectDay(day)}
                    className="flex w-12 shrink-0 flex-col text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    <span className="text-xs text-muted-foreground">
                      {weekdayLabels[day.getDay()] ?? WEEKDAYS[day.getDay()]}
                    </span>
                    <span
                      className={cn(
                        "mt-1 inline-flex size-8 items-center justify-center rounded-full text-sm font-semibold tabular-nums",
                        isToday && "bg-primary text-primary-foreground",
                      )}
                    >
                      {day.getDate()}
                    </span>
                  </button>
                  <div className="min-w-0 flex-1 space-y-1.5">
                    {dayEvents.length === 0 ? (
                      <button
                        type="button"
                        onClick={() => onCreateDay(day)}
                        className="text-sm text-muted-foreground hover:text-foreground"
                      >
                        No events
                      </button>
                    ) : (
                      dayEvents.map((event) => (
                        <EventChip
                          key={event.id}
                          event={event}
                          draggable
                          onOpen={() => onOpenEvent(event)}
                          onDragStart={() => onDragStart(event.id)}
                        />
                      ))
                    )}
                  </div>
                </fieldset>
              </li>
            );
          })}
      </ol>
    </>
  );
}

function WeekView({
  days,
  weekdayLabels,
  today,
  eventsByDay,
  onSelectDay,
  onOpenEvent,
  onDrop,
  onDragStart,
}: {
  days: Date[];
  weekdayLabels: readonly string[];
  today: Date;
  eventsByDay: (day: Date) => EventManagerEvent[];
  onSelectDay: (day: Date) => void;
  onOpenEvent: (event: EventManagerEvent) => void;
  onDrop: (day: Date, eventId: string) => void;
  onDragStart: (id: string) => void;
}) {
  return (
    <div className="grid flex-1 grid-cols-1 overflow-x-auto md:grid-cols-7">
      {days.map((day) => {
        const dayEvents = eventsByDay(day);
        const isToday = isSameDay(day, today);
        return (
          <fieldset
            key={day.toISOString()}
            className="m-0 flex min-h-[22rem] min-w-[10rem] flex-col border-b border-border md:border-r md:border-l-0 md:border-t-0 md:last:border-r-0"
            onDragOver={(event) => event.preventDefault()}
            onDrop={(event) => {
              event.preventDefault();
              const eventId = event.dataTransfer.getData("text/plain");
              if (eventId) onDrop(day, eventId);
            }}
          >
            <legend className="sr-only">
              {weekdayLabels[day.getDay()] ?? WEEKDAYS[day.getDay()]}{" "}
              {day.getDate()}
            </legend>
            <button
              type="button"
              onClick={() => onSelectDay(day)}
              className="flex items-center justify-between border-b border-border px-3 py-3 text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              <span className="text-xs font-medium text-muted-foreground">
                {weekdayLabels[day.getDay()] ?? WEEKDAYS[day.getDay()]}
              </span>
              <span
                className={cn(
                  "inline-flex size-7 items-center justify-center rounded-full text-sm font-semibold tabular-nums",
                  isToday && "bg-primary text-primary-foreground",
                )}
              >
                {day.getDate()}
              </span>
            </button>
            <div className="flex flex-1 flex-col gap-1.5 p-2">
              {dayEvents.length === 0 ? (
                <p className="px-1 text-xs text-muted-foreground">Open</p>
              ) : (
                dayEvents.map((event) => (
                  <EventChip
                    key={event.id}
                    event={event}
                    draggable
                    onOpen={() => onOpenEvent(event)}
                    onDragStart={() => onDragStart(event.id)}
                  />
                ))
              )}
            </div>
          </fieldset>
        );
      })}
    </div>
  );
}

function DayView({
  day,
  events,
  emptyLabel,
  onOpenEvent,
  onCreate,
}: {
  day: Date;
  events: EventManagerEvent[];
  emptyLabel: string;
  onOpenEvent: (event: EventManagerEvent) => void;
  onCreate: () => void;
}) {
  return (
    <div className="mx-auto flex w-full max-w-2xl flex-1 flex-col gap-3 px-4 py-6">
      <div className="flex items-center justify-between">
        <p className="text-sm text-muted-foreground">{formatDayHeading(day)}</p>
        <Button type="button" variant="secondary" size="sm" onClick={onCreate}>
          Add to day
        </Button>
      </div>
      {events.length === 0 ? (
        <p className="rounded-[--radius] border border-dashed border-border px-4 py-10 text-center text-sm text-muted-foreground">
          {emptyLabel}
        </p>
      ) : (
        <ul className="divide-y divide-border rounded-[--radius] border border-border">
          {events.map((event) => (
            <li key={event.id}>
              <button
                type="button"
                onClick={() => onOpenEvent(event)}
                className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  className={cn(
                    "mt-1 size-2.5 shrink-0 rounded-full",
                    TONE_DOT[event.tone ?? "chart-1"],
                  )}
                />
                <span className="min-w-0 flex-1">
                  <span className="flex items-baseline justify-between gap-3">
                    <span className="truncate font-medium">{event.title}</span>
                    <span className="shrink-0 text-xs text-muted-foreground">
                      {formatTime(event.startTime)} -{" "}
                      {formatTime(event.endTime)}
                    </span>
                  </span>
                  {event.description ? (
                    <span className="mt-1 block text-sm text-muted-foreground">
                      {event.description}
                    </span>
                  ) : null}
                  <span className="mt-2 flex flex-wrap gap-1.5">
                    {event.category ? (
                      <Badge variant="outline">{event.category}</Badge>
                    ) : null}
                    {(event.tags ?? []).map((tag) => (
                      <Badge key={tag} variant="secondary">
                        {tag}
                      </Badge>
                    ))}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function ListView({
  events,
  emptyLabel,
  onOpenEvent,
}: {
  events: EventManagerEvent[];
  emptyLabel: string;
  onOpenEvent: (event: EventManagerEvent) => void;
}) {
  return (
    <div className="mx-auto flex w-full max-w-3xl flex-1 flex-col px-4 py-6">
      {events.length === 0 ? (
        <p className="rounded-[--radius] border border-dashed border-border px-4 py-10 text-center text-sm text-muted-foreground">
          {emptyLabel}
        </p>
      ) : (
        <ul className="divide-y divide-border rounded-[--radius] border border-border bg-card">
          {events.map((event) => (
            <li key={event.id}>
              <button
                type="button"
                onClick={() => onOpenEvent(event)}
                className="flex w-full items-start gap-3 px-4 py-3 text-left hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <span
                  className={cn(
                    "mt-1 size-2.5 shrink-0 rounded-full",
                    TONE_DOT[event.tone ?? "chart-1"],
                  )}
                />
                <span className="min-w-0 flex-1">
                  <span className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="font-medium">{event.title}</span>
                    <span className="text-xs text-muted-foreground">
                      {formatDayHeading(event.startTime)}
                    </span>
                  </span>
                  <span className="mt-1 block text-xs text-muted-foreground">
                    {formatTime(event.startTime)} - {formatTime(event.endTime)}
                    {event.attendees?.length
                      ? ` · ${event.attendees.join(", ")}`
                      : ""}
                  </span>
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
