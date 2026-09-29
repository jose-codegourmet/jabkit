import type { Metadata } from "next";
import { ContactPage } from "./_page/ContactPage";
import { contactSeo } from "./_page/content";

export const metadata: Metadata = {
  title: { absolute: contactSeo.title },
  description: contactSeo.description,
};

export default function Page() {
  return <ContactPage />;
}
