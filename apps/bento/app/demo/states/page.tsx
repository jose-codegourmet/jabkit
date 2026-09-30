import type { Metadata } from "next";
import { statesSeo } from "./_page/content";
import { StatesPage } from "./_page/StatesPage";

export const metadata: Metadata = {
  title: { absolute: statesSeo.title },
  description: statesSeo.description,
};

export default function Page() {
  return <StatesPage />;
}
