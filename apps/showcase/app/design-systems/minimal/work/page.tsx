import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { WorkFilter } from "../_components/WorkFilter";
import { sampleImage } from "../assets";
import {
  disciplineLabel,
  filterProjects,
  parseDisciplineFilter,
  projectHref,
  workHref,
} from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Work - West Room Studio",
  description:
    "Six sample projects across residential, workspace, and retail. Filter by discipline.",
};

export default async function WorkIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ discipline?: string }>;
}) {
  const { discipline: requested } = await searchParams;
  const discipline = parseDisciplineFilter(requested);
  const records = filterProjects(discipline);

  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">Work</h1>
        <p className="jk-lead mt-4">
          Six finished rooms. Filter by discipline. Captions stay visible
          without hover.
        </p>
        <div className="mt-8">
          <WorkFilter current={discipline} />
        </div>
        {records.length === 0 ? (
          <div className="mt-12">
            <p className="jk-body">No projects in this filter.</p>
            <div className="mt-4">
              <Button asChild variant="secondary">
                <a href={workHref("all")}>Reset filter</a>
              </Button>
            </div>
          </div>
        ) : (
          <ul className={`${styles.gridWork} mt-12`}>
            {records.map((project, index) => {
              const image = sampleImage(
                project.imageIds.establishing,
                project.alt.establishing,
              );
              const portrait = index % 2 === 1;
              return (
                <li key={project.slug}>
                  <a
                    className={styles.workLink}
                    href={projectHref(project.slug)}
                  >
                    <figure className={styles.figure}>
                      <img
                        src={image.src}
                        alt={project.alt.establishing}
                        width={image.width}
                        height={image.height}
                        loading="lazy"
                        decoding="async"
                        className={portrait ? "aspect-[4/5]" : "aspect-[4/3]"}
                      />
                    </figure>
                    <p className={`${styles.workTitle} mt-3`}>
                      {project.title}
                    </p>
                    <p className={`jk-caption ${styles.meta}`}>
                      {disciplineLabel(project.discipline)}
                      {` / ${project.place} / ${project.year}`}
                    </p>
                  </a>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
