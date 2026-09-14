import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { sampleImage } from "../assets";
import { experiences, inquireHref } from "../content";
import styles from "../style.module.css";
import type { ExperienceRecord } from "../types";

export const metadata: Metadata = {
  title: "Experiences - Stillwater House",
  description:
    "Morning on the water, Seasonal table, and Woodland walk at the fictional house.",
};

function ExperienceChapter({
  experience,
  reverse,
  room,
}: {
  experience: ExperienceRecord;
  reverse: boolean;
  room?: string;
}) {
  const image = sampleImage(experience.imageId, experience.alt);
  return (
    <article className={styles.section} aria-labelledby={experience.slug}>
      <div
        className={`${styles.frame} ${styles.chapter} ${reverse ? styles.chapterReverse : ""}`}
      >
        <figure className={`${styles.figure} ${styles.revealFigure}`}>
          <img
            src={image.src}
            alt={experience.alt}
            width={image.width}
            height={image.height}
            loading="lazy"
            decoding="async"
            className="aspect-[3/2] object-cover"
          />
          <figcaption className={`jk-caption ${styles.caption}`}>
            {experience.caption}
          </figcaption>
        </figure>
        <div>
          <h2
            className={`jk-heading ${styles.anchorHeading}`}
            id={experience.slug}
          >
            {experience.title}
          </h2>
          <p className="jk-lead mt-4">{experience.atmosphere}</p>
          <dl className={`${styles.facts} mt-6`}>
            <div>
              <dt className={`jk-caption ${styles.meta}`}>Duration</dt>
              <dd className="jk-body">{experience.duration}</dd>
            </div>
            <div>
              <dt className={`jk-caption ${styles.meta}`}>Who it is for</dt>
              <dd className="jk-body">{experience.audience}</dd>
            </div>
            <div>
              <dt className={`jk-caption ${styles.meta}`}>Access</dt>
              <dd className="jk-body">{experience.access}</dd>
            </div>
          </dl>
          <p className="jk-body mt-4">{experience.inquiryPrompt}</p>
          <div className={`${styles.actions} mt-6`}>
            <Button asChild>
              <a
                href={inquireHref({
                  experience: experience.slug,
                  room,
                })}
              >
                Ask about this
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default async function ExperiencesPage({
  searchParams,
}: {
  searchParams: Promise<{ room?: string }>;
}) {
  const params = await searchParams;
  const rawRoom = Array.isArray(params.room) ? params.room[0] : params.room;
  const room = rawRoom?.trim();

  return (
    <main id="top">
      <header className={styles.section}>
        <div className={styles.frame}>
          <h1 className="jk-heading">Three experiences</h1>
          <p className="jk-lead mt-4">
            Water, table, and woodland at the same property. None of them is a
            booked slot. Ask about one in the inquiry if you want it noted.
          </p>
        </div>
      </header>
      {experiences.map((experience, index) => (
        <ExperienceChapter
          key={experience.slug}
          experience={experience}
          reverse={index === 1}
          room={room}
        />
      ))}
    </main>
  );
}
