import type { Metadata } from "next";
import { parseDemoState } from "../../_components/demo-state";
import { tasksSeo } from "./_page/content";
import { Roster } from "./_page/Roster";
import { TaskBoard } from "./_page/TaskBoard";

export const metadata: Metadata = {
  title: { absolute: tasksSeo.title },
  description: tasksSeo.description,
};

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const { state } = await searchParams;
  const demoState = parseDemoState(state);
  return (
    <>
      <TaskBoard key={demoState} state={demoState} />
      <Roster />
    </>
  );
}
