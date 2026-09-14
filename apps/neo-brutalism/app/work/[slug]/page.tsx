import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Content1 } from "@/marketing/content1";
import { toContent1Sections } from "../../_components/adapters";
import {
  disciplineLabel,
  engagementLabel,
  getProject,
  projectHref,
  projects,
  relatedProject,
  serviceHref,
  startHref,
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
    return { title: "Case not found - Good Noise" };
  }
  return {
    title: `${project.title} - Good Noise`,
    description: project.problem,
  };
}

export default async function CaseStudyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProject(slug);
  if (!project) notFound();

  const related = relatedProject(project);

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
            <div className={styles.factStrip}>
              <Badge variant="outline">
                {disciplineLabel(project.discipline)}
              </Badge>
              <p className={`jk-caption ${styles.meta}`}>
                {project.subject}
                {` / ${project.year} / `}
                <a href={serviceHref(project.scopeId)}>
                  {engagementLabel(project.scopeId)}
                </a>
              </p>
            </div>
          </div>
        </header>

        <Content1
          kicker=""
          title="The work"
          description={project.idea}
          outlineLabel="On this page"
          sections={toContent1Sections(project)}
        />

        <section className={styles.section}>
          <div className={styles.frame}>
            <h2 className="jk-heading">Continue</h2>
            <p className="jk-body mt-4">
              Related work is a different case. Start a similar brief with this
              scope already selected.
            </p>
            <div className={styles.actions}>
              <Button asChild variant="secondary">
                <a href={projectHref(related.slug)}>Related: {related.title}</a>
              </Button>
              <Button asChild>
                <a
                  href={startHref({
                    project: project.slug,
                    plan: project.scopeId,
                  })}
                >
                  Start a similar brief
                </a>
              </Button>
            </div>
          </div>
        </section>
      </article>
    </main>
  );
}
