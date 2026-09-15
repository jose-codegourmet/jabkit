import { ArrowTopRightIcon as ArrowUpRight } from "@radix-ui/react-icons";
import type { Metadata } from "next";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import { Button } from "@/atoms/button";
import { ArtImage } from "./_components/ArtImage";
import { sampleImage } from "./assets";
import {
  contributorHref,
  contributors,
  currentIssue,
  getContributor,
  homeLead,
  homeMore,
  homeSecondary,
  storiesHref,
  storyHref,
  topicLabels,
} from "./content";
import s from "./home.module.css";
export const metadata: Metadata = {
  title: "Late Light · Vol. 12",
  description:
    "An independent journal of everyday places, the people who keep them, and the rituals that bring us together.",
};
export default function EditorialHomePage() {
  const lead = homeLead();
  const author = getContributor(lead.authorId);
  return (
    <main id="top" className={s.home}>
      <section data-motion-reveal className={s.masthead}>
        <div className={s.issueLine}>
          <span>{currentIssue.label}</span>
          <span>An independent journal of everyday life</span>
          <span>{currentIssue.dateLine}</span>
        </div>
        <h1 data-motion-title>
          <img
            src="/assets/design-systems/editorial/edt-logo-wordmark.webp"
            alt="Common Hours"
            width={1200}
            height={131}
          />
        </h1>
        <nav aria-label="Journal topics" className={s.topicNav}>
          {(["places", "people", "rituals"] as const).map((topic) => (
            <a key={topic} href={storiesHref(topic)}>
              {topicLabels[topic]}
            </a>
          ))}
          <a href="/stories">
            The archive <ArrowUpRight width={13} height={13} />
          </a>
        </nav>
      </section>
      <section
        data-motion-reveal
        className={s.cover}
        aria-labelledby="cover-lead"
      >
        <a
          href={storyHref(lead.slug)}
          className={s.coverImage}
          aria-label={`Read ${lead.title}`}
        >
          <ArtImage
            id={lead.leadImageId}
            mobile="edt-st01-mobile"
            alt={lead.leadAlt}
            priority
          />
        </a>
        <div className={s.coverCopy}>
          <p className={s.kicker}>
            The cover story · {topicLabels[lead.topic]}
          </p>
          <h2 id="cover-lead">
            <a href={storyHref(lead.slug)}>{lead.title}</a>
          </h2>
          <p className={s.standfirst}>{lead.standfirst}</p>
          <p className={s.byline}>By {author?.name}</p>
          <a className={s.readLink} href={storyHref(lead.slug)}>
            Read the story <ArrowUpRight width={17} height={17} />
          </a>
        </div>
      </section>
      <div className={s.secondary}>
        {homeSecondary().map((story) => (
          <article key={story.slug} data-motion-story>
            <a href={storyHref(story.slug)} className={s.secondaryImage}>
              <ArtImage id={story.leadImageId} alt={story.leadAlt} />
            </a>
            <div>
              <p className={s.kicker}>{topicLabels[story.topic]}</p>
              <h3>
                <a href={storyHref(story.slug)}>{story.title}</a>
              </h3>
              <p className={s.byline}>
                {getContributor(story.authorId)?.name} · {story.publishedOn}
              </p>
            </div>
          </article>
        ))}
      </div>
      <section
        data-motion-reveal
        className={s.issueFeature}
        aria-labelledby="topics"
      >
        <ArtImage
          id="edt-issue-object"
          alt="A photograph-led journal open to a quiet neighborhood street"
        />
        <div>
          <p className={s.kicker}>Volume 12</p>
          <h2 id="topics">Late Light</h2>
          <p>
            The rooms that open early. The walks we repeat. The people who hold
            a neighborhood together.
          </p>
          <p>
            Nine stories about the ordinary things that deserve another look.
          </p>
          <Button asChild>
            <a href="/stories">
              Read the issue <ArrowUpRight width={16} height={16} />
            </a>
          </Button>
        </div>
      </section>
      <section data-motion-reveal className={s.more} aria-labelledby="also">
        <hr className={s.motionRule} data-motion-rule />
        <h2 id="also">Also in this issue</h2>
        <div className={s.moreGrid}>
          {homeMore().map((story) => (
            <article key={story.slug} data-motion-story>
              <a href={storyHref(story.slug)}>
                <ArtImage id={story.leadImageId} alt={story.leadAlt} />
                <p className={s.kicker}>{topicLabels[story.topic]}</p>
                <h3>{story.title}</h3>
              </a>
              <p className={s.byline}>
                By {getContributor(story.authorId)?.name}
              </p>
            </article>
          ))}
        </div>
      </section>
      <section
        data-motion-reveal
        className={s.editors}
        aria-labelledby="contributors"
      >
        <div className={s.editorsIntro}>
          <ArtImage
            id="edt-background-collage"
            alt="Photographic fragments and aubergine paper from the journal's editorial desk"
          />
          <div>
            <h2 id="contributors">
              Made by people
              <br />
              who pay attention.
            </h2>
            <p>
              Walking, listening, returning. Meet the writers behind this issue.
            </p>
            <a className={s.readLink} href="/about">
              About the journal <ArrowUpRight width={17} height={17} />
            </a>
          </div>
        </div>
        <div className={s.people}>
          {contributors.map((person) => {
            const portrait = sampleImage(person.portraitId, person.portraitAlt);
            return (
              <a href={contributorHref(person.slug)} key={person.slug}>
                <Avatar className={s.avatar}>
                  <AvatarImage src={portrait.src} alt={person.portraitAlt} />
                  <AvatarFallback>{person.fallback}</AvatarFallback>
                </Avatar>
                <div>
                  <h3>{person.name}</h3>
                  <p>{person.role}</p>
                </div>
                <ArrowUpRight width={18} height={18} />
              </a>
            );
          })}
        </div>
      </section>
      <section data-motion-reveal className={s.join} aria-labelledby="join">
        <ArtImage
          id="edt-cta"
          mobile="edt-cta-mobile"
          alt="A linen-bound journal, pencil, and photographic print in quiet afternoon light"
        />
        <div className={s.joinCopy}>
          <h2 id="join">
            Good stories
            <br />
            are worth keeping.
          </h2>
          <p>Make a little room for Common Hours.</p>
          <Button asChild>
            <a href="/membership">
              Explore membership <ArrowUpRight width={17} height={17} />
            </a>
          </Button>
        </div>
      </section>
    </main>
  );
}
