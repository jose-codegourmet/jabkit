import type { Metadata } from "next";
import { BriefForm } from "../_components/BriefForm";
import { getEngagement, getProject, isEngagementId } from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Start a brief - Good Noise",
  description:
    "Local project-brief preview. Values stay in the browser. Nothing is emailed or stored.",
};

function firstParam(value: string | string[] | undefined): string | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  const trimmed = raw?.trim();
  return trimmed ? trimmed : undefined;
}

export default async function StartPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string; plan?: string }>;
}) {
  const params = await searchParams;
  const project = getProject(firstParam(params.project));
  const planQuery = firstParam(params.plan);
  const plan = isEngagementId(planQuery) ? getEngagement(planQuery) : undefined;

  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame} style={{ maxWidth: "42rem" }}>
        <h1 className="jk-heading">Start a brief</h1>
        <p className="jk-lead mt-4">
          Preview a local brief. You can edit it after. Reset clears the draft,
          including a case that arrived from the URL. No message leaves this
          page.
        </p>
        {plan || project ? (
          <p className="jk-caption mt-4">
            Arrived with
            {plan ? ` ${plan.title}` : ""}
            {project ? ` and ${project.title}` : ""}. You can change both in the
            form.
          </p>
        ) : planQuery && !plan ? (
          <p className="jk-caption mt-4">
            That engagement is not in the fixtures. The unknown value was not
            used as a label.
          </p>
        ) : null}
        <div className="mt-10">
          <BriefForm initialPlan={plan?.id} initialProject={project?.slug} />
        </div>
      </div>
    </main>
  );
}
