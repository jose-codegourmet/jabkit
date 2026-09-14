import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { Projects13 } from "@/marketing/projects13";
import { toProjects13Projects } from "../_components/adapters";
import { WorkControls } from "../_components/WorkControls";
import { filterProjects, parseDisciplineFilter, workHref } from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Work - Good Noise",
  description:
    "Six sample cases. Filter by Identity or Campaign and search by title.",
};

function firstParam(value: string | string[] | undefined): string | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  const trimmed = raw?.trim();
  return trimmed ? trimmed : undefined;
}

export default async function WorkIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; q?: string }>;
}) {
  const params = await searchParams;
  const discipline = parseDisciplineFilter(firstParam(params.filter));
  const q = firstParam(params.q) ?? "";
  const records = filterProjects(discipline, q);

  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">Work</h1>
        <p className="jk-lead mt-4">
          Six cases. Filter All, Identity, or Campaign. Search titles. Results
          stay in the URL so refresh and back work.
        </p>
        <div className="mt-8">
          <WorkControls current={discipline} q={q} />
        </div>
      </div>
      {records.length === 0 ? (
        <div className={styles.frame}>
          <p className="jk-body mt-12">
            No cases match this filter and search.
          </p>
          <div className="mt-4">
            <Button asChild variant="secondary">
              <a href={workHref("all")}>Clear filters</a>
            </Button>
          </div>
        </div>
      ) : (
        <Projects13
          label="Case list"
          projects={toProjects13Projects(records)}
        />
      )}
    </main>
  );
}
