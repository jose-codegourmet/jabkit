import type { Metadata } from "next";
import { pricingSeo } from "./_page/content";
import { PricingPage } from "./_page/PricingPage";

export const metadata: Metadata = {
  title: { absolute: pricingSeo.title },
  description: pricingSeo.description,
};

export default function Page() {
  return <PricingPage />;
}
