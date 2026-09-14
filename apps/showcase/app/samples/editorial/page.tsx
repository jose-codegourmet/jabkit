import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { sampleImage } from "./assets";
import {
  brand,
  contributorHref,
  currentIssue,
  demoNote,
  getContributor,
  homeLead,
  homeMore,
  homeSecondary,
  storiesHref,
  storyHref,
  topicLabels,
} from "./content";
import styles from "./style.module.css";
import { sampleRoot } from "./types";

export const metadata: Metadata = {
  title: "Common Hours - JabKit Editorial sample",
  description:
    "Fictional independent journal. Stories, contributors, and a local membership preview.",
};

function StoryMeta({
  topic,
  authorName,
  date,
}: {
  topic: string;
  authorName: string;
  date: string;
}) {
  return (
    <p className={`jk-caption ${styles.meta}`}>
      {topic} · {authorName} · {date}
    </p>
  );
}

export default function EditorialHomePage() {
  const lead = homeLead();
  const secondary = homeSecondary();
  const more = homeMore();
  const leadAuthor = getContributor(lead.authorId);
  if (!leadAuthor) throw new Error("Lead author missing");
  const leadImage = sampleImage(lead.leadImageId, lead.leadAlt);
  const portrait = sampleImage(leadAuthor.portraitId, leadAuthor.portraitAlt);

  return (
    <main id="top">
      <section className={styles.section}>
        <div className={styles.frame}>
          <p className="jk-label">
            {currentIssue.label} · {currentIssue.dateLine}
          </p>
          <h1 className="jk-display mt-4">{brand.statement}</h1>
          <p className="jk-lead mt-6">{brand.intro}</p>
          <p className={`jk-caption ${styles.meta} mt-4`}>{demoNote}</p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="cover-lead">
        <div className={`${styles.frame} ${styles.leadGrid}`}>
          <article>
            <Badge variant="secondary">{topicLabels[lead.topic]}</Badge>
            <h2 className="jk-heading mt-4" id="cover-lead">
              <a className={styles.storyLink} href={storyHref(lead.slug)}>
                <span className={styles.storyTitle}>{lead.title}</span>
              </a>
            </h2>
            <p className="jk-lead mt-4">{lead.standfirst}</p>
            <div className={`${styles.byline} mt-4`}>
              <Avatar size="sm">
                <AvatarImage src={portrait.src} alt={leadAuthor.portraitAlt} />
                <AvatarFallback>{leadAuthor.fallback}</AvatarFallback>
              </Avatar>
              <StoryMeta
                topic={topicLabels[lead.topic]}
                authorName={leadAuthor.name}
                date={lead.publishedOn}
              />
            </div>
            <div className="mt-6">
              <Button asChild>
                <a href={storyHref(lead.slug)}>Read the lead story</a>
              </Button>
            </div>
            <figure className={`${styles.figure} ${styles.coverFigure} mt-8`}>
              <img
                src={leadImage.src}
                alt={lead.leadAlt}
                width={leadImage.width}
                height={leadImage.height}
                fetchPriority="high"
                decoding="async"
                className="aspect-[4/5] object-cover object-[center_40%] md:aspect-[3/2]"
              />
              <figcaption className={`jk-caption ${styles.caption}`}>
                {lead.leadCaption}
              </figcaption>
            </figure>
          </article>
          <div className={styles.secondaryList}>
            {secondary.map((story) => {
              const author = getContributor(story.authorId);
              if (!author) throw new Error(`Author missing for ${story.slug}`);
              return (
                <article key={story.slug}>
                  <Badge variant="secondary">{topicLabels[story.topic]}</Badge>
                  <h3 className="mt-3">
                    <a
                      className={styles.storyLink}
                      href={storyHref(story.slug)}
                    >
                      <span className={styles.storyTitle}>{story.title}</span>
                    </a>
                  </h3>
                  <p className="jk-body mt-3">{story.standfirst}</p>
                  <StoryMeta
                    topic={topicLabels[story.topic]}
                    authorName={author.name}
                    date={story.publishedOn}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="topics">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="topics">
            Topics in this issue
          </h2>
          <p className="jk-body mt-4">
            Filter the archive from here. Rituals is the path for the sample
            journey: soup, a dusk walk, and a dish of keys.
          </p>
          <div className={`${styles.topics} mt-6`}>
            <Button asChild>
              <a href={storiesHref("rituals")}>Rituals</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={storiesHref("places")}>Places</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={storiesHref("people")}>People</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={storiesHref("all")}>All stories</a>
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="also">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="also">
            Also in Late Light
          </h2>
          <div className={`${styles.moreGrid} mt-8`}>
            {more.map((story) => {
              const author = getContributor(story.authorId);
              if (!author) throw new Error(`Author missing for ${story.slug}`);
              const image = sampleImage(story.leadImageId, story.leadAlt);
              return (
                <article key={story.slug}>
                  <a className={styles.storyLink} href={storyHref(story.slug)}>
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
                    <h3 className={`${styles.storyTitle} mt-3`}>
                      {story.title}
                    </h3>
                  </a>
                  <StoryMeta
                    topic={topicLabels[story.topic]}
                    authorName={author.name}
                    date={story.publishedOn}
                  />
                </article>
              );
            })}
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="contributors">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="contributors">
            Who wrote this issue
          </h2>
          <p className="jk-body mt-4">
            Three fictional editors. Follow a byline from any story, or start
            here.
          </p>
          <ul className={`${styles.listPlain} mt-6`}>
            <li>
              <a href={contributorHref("mira-ellison")}>Mira Ellison</a>
              <span className={`jk-caption ${styles.meta}`}> — Places</span>
            </li>
            <li>
              <a href={contributorHref("jonah-voss")}>Jonah Voss</a>
              <span className={`jk-caption ${styles.meta}`}> — People</span>
            </li>
            <li>
              <a href={contributorHref("adele-park")}>Adele Park</a>
              <span className={`jk-caption ${styles.meta}`}> — Rituals</span>
            </li>
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="join">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="join">
            Keep the issue on the table
          </h2>
          <p className="jk-body mt-4">
            Two demo memberships. Compare monthly and yearly amounts, then
            preview a signup without sending anything.
          </p>
          <div className="mt-6">
            <Button asChild>
              <a href={`${sampleRoot}/membership`}>View membership</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
