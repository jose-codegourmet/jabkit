import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { RoomCarousel } from "./_components/RoomCarousel";
import { sampleImage } from "./assets";
import {
  brand,
  demoNote,
  experienceHref,
  experiences,
  inquireHref,
  setting,
} from "./content";
import styles from "./style.module.css";
import { sampleRoot } from "./types";

export const metadata: Metadata = {
  title: "Stillwater House - JabKit Luxury sample",
  description:
    "Fictional lakeside guest house. Compare three rooms and preview a stay inquiry locally.",
};

export default function LuxuryHomePage() {
  const hero = sampleImage(
    "lux-hero",
    "Placeholder view of a small house beside still water at early morning",
  );
  const featured = experiences[0];

  return (
    <main id="top">
      <section className={styles.section}>
        <div className={styles.frame}>
          <figure className={styles.figure}>
            <img
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] object-cover object-[center_35%] md:aspect-[16/9]"
            />
            <figcaption className={`jk-caption ${styles.caption}`}>
              Stillwater House on Stillwater Reach. Photography is a stub
              until LUX-03.
            </figcaption>
          </figure>
          <div className={`${styles.heroCopy} mt-8`}>
            <h1 className="jk-display">{brand.statement}</h1>
            <p className="jk-lead mt-6">{brand.intro}</p>
            <p className={`jk-caption ${styles.meta} mt-4`}>
              {setting.description}
            </p>
            <p className={`jk-caption ${styles.meta} mt-2`}>{demoNote}</p>
            <div className={`${styles.actions} mt-6`}>
              <Button asChild>
                <a href={`${sampleRoot}/rooms`}>Explore rooms</a>
              </Button>
              <Button asChild variant="secondary">
                <a href={inquireHref()}>Plan a stay</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <RoomCarousel />

      <section className={styles.section} aria-labelledby="experience-home">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="experience-home">
            {featured.title}
          </h2>
          <p className="jk-body mt-4">{featured.atmosphere}</p>
          <p className={`jk-caption ${styles.meta} mt-4`}>
            {featured.duration}
          </p>
          <div className={`${styles.actions} mt-6`}>
            <Button asChild>
              <a href={experienceHref(featured.slug)}>Read the experiences</a>
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="house-home">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="house-home">
            A house that stays in one place
          </h2>
          <p className="jk-body mt-4">
            Timber, plaster, and a kitchen table that seats the guests who
            are actually staying. Helen Mora keeps the path, the landing, and
            the three rooms in the same story.
          </p>
          <div className={`${styles.actions} mt-6`}>
            <Button asChild variant="secondary">
              <a href={`${sampleRoot}/house`}>The house</a>
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="inquire-home">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="inquire-home">
            Plan a stay without booking
          </h2>
          <p className="jk-body mt-4">
            Choose a room, preferred dates, and a guest count. Use Inquire
            in the header when you want to preview the form. Nothing is sent.
          </p>
        </div>
      </section>
    </main>
  );
}
