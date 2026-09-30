import type { Metadata } from "next";
import { HomePage } from "./_home/HomePage";

export const metadata: Metadata = {
  title: "FRAME/01 Film Festival — Cinema, clearly seen.",
  description:
    "Four days of independent films and conversations. Browse the FRAME/01 program by day, venue, and category, then choose a screening or pass.",
};

export default function Page() {
  return <HomePage />;
}
