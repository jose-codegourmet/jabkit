import type { Metadata } from "next";
import { ProgramPage } from "./_page/ProgramPage";

export const metadata: Metadata = {
  title: "Program — FRAME/01 Film Festival",
  description:
    "All films at FRAME/01: documentaries, narrative features, and shorts. Compare runtime, date, venue, and language, then open a film to choose a screening.",
};

export default function Page() {
  return <ProgramPage />;
}
