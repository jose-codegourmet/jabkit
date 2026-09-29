import type { Metadata } from "next";
import { routinesSeo } from "./_page/content";
import { RoutinesPage } from "./_page/RoutinesPage";

export const metadata: Metadata = {
  title: { absolute: routinesSeo.title },
  description: routinesSeo.description,
};

export default function Page() {
  return <RoutinesPage />;
}
