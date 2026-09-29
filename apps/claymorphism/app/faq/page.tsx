import type { Metadata } from "next";
import { faqSeo } from "./_page/content";
import { FaqPage } from "./_page/FaqPage";

export const metadata: Metadata = {
  title: { absolute: faqSeo.title },
  description: faqSeo.description,
};

export default function Page() {
  return <FaqPage />;
}
