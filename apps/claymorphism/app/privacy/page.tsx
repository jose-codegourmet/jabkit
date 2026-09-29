import type { Metadata } from "next";
import { LegalPage } from "../_legal/LegalPage";
import { privacyDocument, privacySeo } from "./_page/content";

export const metadata: Metadata = {
  title: { absolute: privacySeo.title },
  description: privacySeo.description,
};

export default function Page() {
  return <LegalPage document={privacyDocument} />;
}
