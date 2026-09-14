import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { sampleImage } from "../../assets";
import {
  articlesByAuthor,
  contributorHref,
  contributors,
  getContributor,
  storiesHref,
  storyHref,
  topicLabels,
} from "../../content";
import styles from "../../style.module.css";
import { sampleRoot } from "../../types";

export function generateStaticParams() {
  return contributors.map((person) => ({ slug: person.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const person = getContributor(slug);
  if (!person) {
    return { title: "Contributor not found - Common Hours" };
  }
  return {
    title: `${person.name} - Common Hours`,
    description: person.shortBio,
  };
}

export default async function ContributorPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const person = getContributor(slug);
  if (!person) notFound();

  const bibliography = articlesByAuthor(person.slug);
  const portrait = sampleImage(person.portraitId, person.portraitAlt);
  const topic = bibliography[0]?.topic ?? "places";

  return (
    <main id="top">
      <header className={styles.section}>
        <div className={styles.frame}>
          <nav className="jk-caption">
            <a href={sampleRoot}>Common Hours</a>
            {` / ${person.name}`}
          </nav>
          <div className={`${styles.byline} mt-6`}>
            <Avatar size="lg">
              <AvatarImage src={portrait.src} alt={person.portraitAlt} />
              <AvatarFallback>{person.fallback}</AvatarFallback>
            </Avatar>
            <div>
              <p className="jk-label">{person.role}</p>
              <h1 className="jk-heading mt-2">{person.name}</h1>
            </div>
          </div>
          <p className="jk-lead mt-6">{person.shortBio}</p>
          {person.biography.map((paragraph) => (
            <p key={paragraph.slice(0, 24)} className="jk-body mt-4">
              {paragraph}
            </p>
          ))}
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild variant="secondary">
              <a href={sampleRoot}>Back to the issue</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={storiesHref(topic)}>
                {topicLabels[topic]} in the archive
              </a>
            </Button>
          </div>
        </div>
      </header>
      <section className={styles.section} aria-labelledby="bibliography">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="bibliography">
            In this issue
          </h2>
          <ul className={`${styles.listPlain} mt-8`}>
            {bibliography.map((story) => (
              <li key={story.slug}>
                <Badge variant="secondary">{topicLabels[story.topic]}</Badge>
                <h3 className="mt-2">
                  <a className={styles.storyLink} href={storyHref(story.slug)}>
                    <span className={styles.storyTitle}>{story.title}</span>
                  </a>
                </h3>
                <p className={`jk-caption ${styles.meta} mt-2`}>
                  {story.publishedOn}
                </p>
              </li>
            ))}
          </ul>
          <p className="jk-caption mt-8">
            Other editors:{" "}
            {contributors
              .filter((other) => other.slug !== person.slug)
              .map((other, index, list) => (
                <span key={other.slug}>
                  <a href={contributorHref(other.slug)}>{other.name}</a>
                  {index < list.length - 1 ? " · " : ""}
                </span>
              ))}
          </p>
        </div>
      </section>
    </main>
  );
}
