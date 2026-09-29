import type { Metadata } from "next";
import { forFamiliesSeo } from "./_page/content";
import { ForFamiliesPage } from "./_page/ForFamiliesPage";

export const metadata: Metadata = {
  title: { absolute: forFamiliesSeo.title },
  description: forFamiliesSeo.description,
};

export default function Page() {
  return <ForFamiliesPage />;
}
