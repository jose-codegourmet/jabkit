import type { Metadata } from "next";
import { HomePage } from "./_home/HomePage";

export const metadata: Metadata = {
  title: { absolute: "Pillo — Little steps. Lighter days." },
  description:
    "Pillo turns chores, school prep, and small daily goals into shared visual routines your family can see, tick off, and celebrate together.",
};

export default function Page() {
  return <HomePage />;
}
