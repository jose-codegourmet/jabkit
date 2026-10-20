import type { Metadata } from "next";
import { scheduleMeta } from "./_page/content";
import { SchedulePage } from "./_page/SchedulePage";

export const metadata: Metadata = {
  title: { absolute: scheduleMeta.title },
  description: scheduleMeta.description,
};

export default function Page() {
  return <SchedulePage />;
}
