import type { Metadata } from "next";
import { BookingsPage } from "./_page/BookingsPage";
import { bookingsSeo } from "./_page/content";

export const metadata: Metadata = {
  title: { absolute: bookingsSeo.title },
  description: bookingsSeo.description,
};

type SearchParams = Record<string, string | string[] | undefined>;

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  return <BookingsPage searchParams={await searchParams} />;
}
