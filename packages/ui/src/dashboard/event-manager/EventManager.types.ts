import type { HTMLAttributes } from "react";

export type EventManagerView = "month" | "week" | "day" | "list";

export type EventManagerTone =
  | "chart-1"
  | "chart-2"
  | "chart-3"
  | "chart-4"
  | "chart-5"
  | "destructive";

export interface EventManagerEvent {
  id: string;
  title: string;
  description?: string;
  startTime: Date;
  endTime: Date;
  tone?: EventManagerTone;
  category?: string;
  attendees?: string[];
  tags?: string[];
}

export interface EventManagerProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  title?: string;
  description?: string;
  events?: EventManagerEvent[];
  defaultEvents?: EventManagerEvent[];
  categories?: string[];
  availableTags?: string[];
  defaultView?: EventManagerView;
  today?: Date;
  defaultDate?: Date;
  defaultSearch?: string;
  defaultCategoryFilter?: string | null;
  defaultTagFilter?: string | null;
  defaultToneFilter?: EventManagerTone | null;
  searchPlaceholder?: string;
  emptyLabel?: string;
  addEventLabel?: string;
  todayLabel?: string;
  weekdayLabels?: string[];
  onEventCreate?: (event: EventManagerEvent) => void;
  onEventUpdate?: (id: string, event: EventManagerEvent) => void;
  onEventDelete?: (id: string) => void;
  onEventsChange?: (events: EventManagerEvent[]) => void;
}
