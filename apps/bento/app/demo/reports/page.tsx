import type { Metadata } from "next";
import { parseEnum } from "../../_components/demo-state";
import { reportStates, reportsSeo, weekIds } from "./_page/content";
import { ReportsPage } from "./_page/ReportsPage";

export const metadata: Metadata = {
  title: { absolute: reportsSeo.title },
  description: reportsSeo.description,
};

export default async function Page({
  searchParams,
}: PageProps<"/demo/reports">) {
  const params = await searchParams;
  const weekId = parseEnum(params.week, weekIds, "this-week");
  const state = parseEnum(params.state, reportStates, "ready");

  return <ReportsPage state={state} weekId={weekId} />;
}
