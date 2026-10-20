import type { Metadata } from "next";
import { isTopicId } from "../_data/contact";
import { ContactPage } from "./_page/ContactPage";
import { contactSeo } from "./_page/content";

export const metadata: Metadata = {
  title: { absolute: contactSeo.title },
  description: contactSeo.description,
};

export default async function Page({ searchParams }: PageProps<"/contact">) {
  const { topic } = await searchParams;
  const requested = Array.isArray(topic) ? topic[0] : topic;
  return <ContactPage initialTopic={isTopicId(requested) ? requested : ""} />;
}
