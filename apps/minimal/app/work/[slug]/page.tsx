import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Button } from "@/atoms/button";
import { Content1 } from "@/marketing/content1";
import { toContent1Sections } from "../../_components/adapters";
import { sampleImage } from "../../assets";
import {
  adjacentProjects,
  contactHref,
  disciplineLabel,
  getProject,
  projectHref,
  projects,
  serviceHref,
} from "../../content";
import styles from "../../style.module.css";
import { sampleRoot } from "../../types";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) {
    return { title: "Project not found - West Room Studio" };
  }
  return {
    title: `${project.title} - West Room Studio`,
    description: project.brief,
  };
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const hero = sampleImage(
    project.imageIds.establishing,
    project.alt.establishing,
  );
  const { previous, next } = adjacentProjects(project.slug);

  return (
    <main id="top">
      <article>
        <header className={styles.section}>
          <div className={styles.frame}>
            <nav className="jk-caption">
              <a href={`${sampleRoot}work`}>Work</a>
              {` / ${project.title}`}
            </nav>
            <h1 className="jk-heading mt-4">{project.title}</h1>
            <p className={`jk-caption ${styles.meta} mt-3`}>
              {disciplineLabel(project.discipline)}
              {` / ${project.place} / ${project.year} / ${project.area}`}
            </p>
            <figure className={`${styles.figure} mt-8`}>
              <img
                src={hero.src}
                alt={project.alt.establishing}
                width={hero.width}
                height={hero.height}
                fetchPriority="high"
                decoding="async"
                className="aspect-[16/9] object-cover"
              />
              <figcaption className={`jk-caption ${styles.caption}`}>
                {project.captions.establishing}
              </figcaption>
            </figure>
          </div>
        </header>

        <Content1
          kicker=""
          title="Notes on the work"
          description={project.brief}
          outlineLabel="On this page"
          sections={toContent1Sections(project)}
        />

        <section className={styles.section}>
          <div className={styles.frame}>
            <h2 className="jk-heading">Continue</h2>
            <p className="jk-body mt-4">
              Next and previous stay inside this set of six. Discuss a similar
              project with this record already selected.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <Button asChild variant="secondary">
                <a href={projectHref(previous.slug)}>
                  Previous: {previous.title}
                </a>
              </Button>
              <Button asChild variant="secondary">
                <a href={projectHref(next.slug)}>Next: {next.title}</a>
              </Button>
              <Button asChild>
                <a
                  href={contactHref({
                    project: project.slug,
                    service: project.relatedServiceId,
                  })}
                >
                  Discuss a project
                </a>
              </Button>
            </div>
            <p className="jk-caption mt-6">
              Related scope:{" "}
              <a href={serviceHref(project.relatedServiceId)}>
                {project.relatedServiceId === "architecture"
                  ? "Architecture"
                  : "Interiors"}
              </a>
            </p>
          </div>
        </section>
      </article>
    </main>
  );
}
