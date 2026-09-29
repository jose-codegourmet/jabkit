import type { Metadata } from "next";
import { howItWorksSeo } from "./_page/content";
import { HowItWorksPage } from "./_page/HowItWorksPage";

export const metadata: Metadata = {
  title: { absolute: howItWorksSeo.title },
  description: howItWorksSeo.description,
};

export default function Page() {
  return <HowItWorksPage />;
}
