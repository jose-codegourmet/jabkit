import type { Metadata } from "next";
import { InquiryForm } from "../_components/InquiryForm";
import { getProject, getService, isServiceId } from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Discuss a project - West Room Studio",
  description:
    "Local inquiry preview. Values stay in the browser. Nothing is emailed or stored.",
};

export default async function ContactPage({
  searchParams,
}: {
  searchParams: Promise<{ project?: string; service?: string }>;
}) {
  const { project: projectQuery, service: serviceQuery } = await searchParams;
  const project = getProject(projectQuery);
  const service = isServiceId(serviceQuery)
    ? getService(serviceQuery)
    : undefined;

  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame} style={{ maxWidth: "40rem" }}>
        <h1 className="jk-heading">Discuss a project</h1>
        <p className="jk-lead mt-4">
          Prepare a local preview of an inquiry. You can edit it after. Reload
          clears it. No message leaves this page.
        </p>
        {project || service ? (
          <p className="jk-caption mt-4">
            Arrived with
            {service ? ` ${service.title}` : ""}
            {project ? ` and ${project.title}` : ""}. You can change both in
            the form.
          </p>
        ) : null}
        <div className="mt-10">
          <InquiryForm
            initialProject={project?.slug}
            initialService={service?.id}
          />
        </div>
      </div>
    </main>
  );
}
