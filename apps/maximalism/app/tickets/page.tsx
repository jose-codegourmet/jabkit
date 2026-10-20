import type { Metadata } from "next";
import { seo } from "./_page/content";
import { TicketsPage } from "./_page/TicketsPage";

export const metadata: Metadata = {
  title: { absolute: seo.title },
  description: seo.description,
};

export default function Page() {
  return <TicketsPage />;
}
