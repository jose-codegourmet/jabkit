import type { Metadata } from "next";
import { termsSeo } from "./_page/content";
import { TermsPage } from "./_page/TermsPage";

export const metadata: Metadata = {
  title: { absolute: termsSeo.title },
  description: termsSeo.description,
};

export default function Page() {
  return <TermsPage />;
}
