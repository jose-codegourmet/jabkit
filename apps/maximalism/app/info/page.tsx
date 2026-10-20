import type { Metadata } from "next";
import { infoMeta } from "./_page/content";
import { InfoPage } from "./_page/InfoPage";

export const metadata: Metadata = {
  title: { absolute: infoMeta.title },
  description: infoMeta.description,
};

export default function Page() {
  return <InfoPage />;
}
