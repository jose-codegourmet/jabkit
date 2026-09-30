import type { Metadata } from "next";
import { parseDemoState, parseEnum } from "../../_components/demo-state";
import { DEMO_TODAY } from "../../_data/portal";
import { CalendarPage } from "./_page/CalendarPage";
import { calendarViews, isIsoDate } from "./_page/calendar-data";
import { calendarSeo } from "./_page/content";

export const metadata: Metadata = {
  title: { absolute: calendarSeo.title },
  description: calendarSeo.description,
};

type SearchParams = Record<string, string | string[] | undefined>;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;
  const rawDate = Array.isArray(params.date) ? params.date[0] : params.date;

  return (
    <CalendarPage
      demoState={parseDemoState(params.state)}
      initialDate={rawDate && isIsoDate(rawDate) ? rawDate : DEMO_TODAY}
      initialView={parseEnum(params.view, calendarViews, "day")}
      openAdd={parseEnum(params.new, ["1"], null) === "1"}
    />
  );
}
