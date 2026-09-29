import type { Metadata } from "next";
import { LegalPage } from "../_legal/LegalPage";
import { termsDocument, termsSeo } from "./_page/content";

export const metadata: Metadata = {
  title: { absolute: termsSeo.title },
  description: termsSeo.description,
};

export default function Page() {
  return <LegalPage document={termsDocument} />;
}
