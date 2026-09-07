import type { HTMLAttributes } from "react";

export type StoryScrollTone =
  | "surface"
  | "muted"
  | "card"
  | "primary"
  | "accent"
  | "inverse";

export interface StoryScrollPoint {
  title: string;
  body: string;
}

export interface StoryScrollChapter {
  id: string;
  kicker?: string;
  headline: string;
  body?: string;
  points?: StoryScrollPoint[];
  closing?: string;
  closingAlign?: "start" | "end";
  tone?: StoryScrollTone;
}

export interface StoryScrollProps
  extends Omit<HTMLAttributes<HTMLElement>, "children"> {
  label?: string;
  chapters?: StoryScrollChapter[];
}
