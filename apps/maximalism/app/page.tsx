import type { Metadata } from "next";
import { homeMeta } from "./_home/content";
import { HomePage } from "./_home/HomePage";

export const metadata: Metadata = {
  title: { absolute: homeMeta.title },
  description: homeMeta.description,
};

export default function Page() {
  return <HomePage />;
}
