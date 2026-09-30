import type { Metadata } from "next";
import { whoSeo } from "./_page/content";
import { WhoPage } from "./_page/WhoPage";

export const metadata: Metadata = {
  title: { absolute: whoSeo.title },
  description: whoSeo.description,
};

export default function Page() {
  return <WhoPage />;
}
