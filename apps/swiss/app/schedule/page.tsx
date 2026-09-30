import type { Metadata } from "next";
import { SchedulePage } from "./_page/SchedulePage";
export const metadata: Metadata = {
  title: "Schedule — FRAME/01 Film Festival",
  description:
    "The full FRAME/01 schedule. Filter screenings by day, venue, and category, check availability, and choose a screening. Table and calendar views.",
};
export default function Page() {
  return <SchedulePage />;
}
