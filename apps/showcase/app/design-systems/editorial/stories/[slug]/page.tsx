import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Content4 } from "@/marketing/content4";
import { toContent4Author, toContent4Blocks } from "../../_components/adapters";
import {
  articles,
  contributorHref,
  getArticle,
  getContributor,
  readingMinutes,
  relatedArticles,
  storyHref,
  topicLabels,
} from "../../content";
import styles from "../../style.module.css";
import { sampleRoot } from "../../types";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) {
    return { title: "Story not found - Common Hours" };
  }
  return {
    title: `${article.title} - Common Hours`,
    description: article.standfirst,
  };
}

export default async function StoryPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const author = getContributor(article.authorId);
  if (!author) notFound();

  const related = relatedArticles(article);
  const minutes = readingMinutes(article);

  return (
    <main id="top">
      <p className={`jk-caption ${styles.meta} ${styles.frame} pt-8`}>
        <Badge variant="secondary">{topicLabels[article.topic]}</Badge>
        {` · ${minutes} min read · ${article.publishedOn}`}
      </p>
      <Content4
        breadcrumbs={[
          { label: "Common Hours", href: sampleRoot },
          { label: "Stories", href: `${sampleRoot}/stories` },
          { label: article.title },
        ]}
        title={article.title}
        author={toContent4Author(article, author)}
        outlineLabel="On this page"
        backToTopLabel="Back to title"
        blocks={toContent4Blocks(article)}
      />
      <section className={styles.section} aria-labelledby="related">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="related">
            Related reading
          </h2>
          <p className="jk-body mt-4">
            Two more pieces from this issue. Neither is the story above.
          </p>
          <div className={`${styles.related} mt-8`}>
            {related.map((story) => (
              <article key={story.slug}>
                <h3>
                  <a className={styles.storyLink} href={storyHref(story.slug)}>
                    <span className={styles.storyTitle}>{story.title}</span>
                  </a>
                </h3>
                <p className="jk-body mt-3">{story.standfirst}</p>
              </article>
            ))}
          </div>
          <p className="jk-caption mt-8">
            More from <a href={contributorHref(author.slug)}>{author.name}</a>
            {" · "}
            <a href={`${sampleRoot}/stories`}>All stories</a>
          </p>
          <div className="mt-6">
            <Button asChild variant="secondary">
              <a href={contributorHref(author.slug)}>Contributor profile</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
