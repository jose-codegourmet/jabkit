import type { Metadata } from "next";
import { Faq12 } from "@/marketing/faq12";
import { MembershipPreview } from "../_components/MembershipPreview";
import { membershipFaqs } from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Membership - Common Hours",
  description:
    "Two demo memberships. Compare monthly and yearly amounts and preview a signup locally.",
};

function firstParam(value: string | string[] | undefined): string | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  const trimmed = raw?.trim();
  return trimmed ? trimmed : undefined;
}

export default async function MembershipPage({
  searchParams,
}: {
  searchParams: Promise<{ plan?: string; interval?: string }>;
}) {
  const params = await searchParams;
  const plan = firstParam(params.plan);
  const interval = firstParam(params.interval);
  const ignoredUnknownPlan =
    Boolean(plan) && plan !== "reader" && plan !== "patron";

  return (
    <main id="top">
      <header className={styles.section}>
        <div className={styles.frame}>
          <h1 className="jk-heading">Membership</h1>
          <p className="jk-lead mt-4">
            Two illustrative tiers. Yearly amounts are ten times monthly. No
            payment runs. Preview a signup with a name and email only.
          </p>
        </div>
      </header>
      <MembershipPreview
        key={`${plan ?? ""}-${interval ?? ""}`}
        initialPlan={plan}
        initialInterval={interval}
        ignoredUnknownPlan={ignoredUnknownPlan}
      />
      <Faq12
        kicker="Before you preview"
        title="Membership questions"
        description="Billing figures and the local preview are part of the sample. They are not a checkout."
        categories={membershipFaqs}
      />
    </main>
  );
}
