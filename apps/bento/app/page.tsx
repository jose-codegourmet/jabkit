import type { Metadata } from "next";
import { homeSeo } from "./_home/content";
import { HomePage } from "./_home/HomePage";

export const metadata: Metadata = {
  title: { absolute: homeSeo.title },
  description: homeSeo.description,
};

export default function Page() {
  return <HomePage />;
}
