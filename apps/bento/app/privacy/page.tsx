import type { Metadata } from "next";
import { privacySeo } from "./_page/content";
import { PrivacyPage } from "./_page/PrivacyPage";

export const metadata: Metadata = {
  title: { absolute: privacySeo.title },
  description: privacySeo.description,
};

export default function Page() {
  return <PrivacyPage />;
}
