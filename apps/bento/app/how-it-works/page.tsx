import type { Metadata } from "next";
import { howSeo } from "./_page/content";
import { HowPage } from "./_page/HowPage";

export const metadata: Metadata = {
  title: { absolute: howSeo.title },
  description: howSeo.description,
};

export default function Page() {
  return <HowPage />;
}
