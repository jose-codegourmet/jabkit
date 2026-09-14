import type { Metadata } from "next";
import { Faq12 } from "@/marketing/faq12";
import { PlanPreview } from "../_components/PlanPreview";
import { capabilities, pricingFaqs } from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Plans - Pocket Keeps",
  description:
    "Two illustrative plan concepts. Compare Sleeve and Cabinet locally. No payment is collected.",
};

function firstParam(value: string | string[] | undefined): string | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  const trimmed = raw?.trim();
  return trimmed ? trimmed : undefined;
}

export default async function PricingPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; interval?: string }>;
}) {
  const params = await searchParams;
  const plan = firstParam(params.plan);
  const interval = firstParam(params.interval);
  const ignoredUnknownPlan =
    Boolean(plan) && plan !== "sleeve" && plan !== "cabinet";

  return (
    <main id="top">
      <header className={styles.section}>
        <div className={styles.frame}>
          <h1 className="jk-heading">Plan concepts</h1>
          <p className="jk-lead mt-4">
            Sleeve is the working local demo. Cabinet names a future cabinet of
            synced sleeves. Neither card starts a subscription.
          </p>

          <table className="mt-8 w-full max-w-3xl text-left text-sm">
            <caption className={`jk-caption ${styles.meta} mb-3`}>
              Capability matrix
            </caption>
            <thead>
              <tr>
                <th className="border-b border-border py-2 pr-4">Capability</th>
                <th className="border-b border-border py-2 pr-4">Status</th>
                <th className="border-b border-border py-2">Note</th>
              </tr>
            </thead>
            <tbody>
              {capabilities.map((row) => (
                <tr key={row.id}>
                  <td className="border-b border-border py-2 pr-4">
                    {row.label}
                  </td>
                  <td className="border-b border-border py-2 pr-4">
                    {row.status === "works-now" ? "Works now" : "Concept only"}
                  </td>
                  <td className="border-b border-border py-2">{row.note}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </header>
      <PlanPreview
        key={`${plan ?? ""}-${interval ?? ""}`}
        ignoredUnknownPlan={ignoredUnknownPlan}
        initialInterval={interval}
        initialPlan={plan}
      />
      <Faq12
        categories={pricingFaqs}
        description="Prices are demo figures. FAQ states that no payment is collected."
        kicker="Before you compare"
        title="Nothing is billed"
      />
    </main>
  );
}
