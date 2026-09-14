import type { Metadata } from "next";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { ArchiveControls } from "../_components/ArchiveControls";
import { sampleImage } from "../assets";
import {
  filterArticles,
  getContributor,
  parseTopicFilter,
  storiesHref,
  storyHref,
  topicLabels,
} from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Stories - Common Hours",
  description:
    "Nine sample stories. Filter by Places, People, or Rituals and search titles.",
};

function firstParam(value: string | string[] | undefined): string | undefined {
  const raw = Array.isArray(value) ? value[0] : value;
  const trimmed = raw?.trim();
  return trimmed ? trimmed : undefined;
}

export default async function StoriesIndexPage({
  searchParams,
}: {
  searchParams: Promise<{ filter?: string; q?: string }>;
}) {
  const params = await searchParams;
  const topic = parseTopicFilter(firstParam(params.filter));
  const q = firstParam(params.q) ?? "";
  const records = filterArticles(topic, q);

  return (
    <main id="top" className={styles.section}>
      <div className={styles.frame}>
        <h1 className="jk-heading">Stories</h1>
        <p className="jk-lead mt-4">
          Nine pieces from Late Light. Filter by topic. Search titles and
          standfirsts. The URL keeps the result so refresh and back work.
        </p>
        <div className="mt-8">
          <ArchiveControls current={topic} q={q} />
        </div>
        {records.length === 0 ? (
          <div className="mt-12">
            <p className="jk-body">
              No stories match this topic and search. Try Rituals without a
              query, or clear the filters.
            </p>
            <div className="mt-4">
              <Button asChild variant="secondary">
                <a href={storiesHref("all")}>Reset archive</a>
              </Button>
            </div>
          </div>
        ) : (
          <ul className={`${styles.archiveList} mt-8`}>
            {records.map((story) => {
              const author = getContributor(story.authorId);
              if (!author) {
                throw new Error(`Author missing for ${story.slug}`);
              }
              const image = sampleImage(story.leadImageId, story.leadAlt);
              return (
                <li key={story.slug} className={styles.archiveItem}>
                  <figure className={styles.figure}>
                    <img
                      src={image.src}
                      alt={story.leadAlt}
                      width={image.width}
                      height={image.height}
                      loading="lazy"
                      decoding="async"
                      className="aspect-[3/2] object-cover"
                    />
                  </figure>
                  <div>
                    <Badge variant="secondary">
                      {topicLabels[story.topic]}
                    </Badge>
                    <h2 className="mt-3">
                      <a
                        className={styles.storyLink}
                        href={storyHref(story.slug)}
                      >
                        <span className={styles.storyTitle}>{story.title}</span>
                      </a>
                    </h2>
                    <p className="jk-body mt-3">{story.standfirst}</p>
                    <p className={`jk-caption ${styles.meta} mt-3`}>
                      {author.name} · {story.publishedOn}
                    </p>
                  </div>
                </li>
              );
            })}
          </ul>
        )}
      </div>
    </main>
  );
}
