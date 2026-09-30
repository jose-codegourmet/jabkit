import type { Metadata } from "next";
import { CheckoutPage } from "./_page/CheckoutPage";
export const metadata: Metadata = {
  title: "Checkout (demo) — FRAME/01",
  description:
    "Demonstration checkout for the FRAME/01 sample site. No tickets are sold and no payment is taken.",
  robots: { index: false, follow: false },
};
export default function Page() {
  return <CheckoutPage />;
}
