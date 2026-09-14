import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { Projects16 } from "@/marketing/projects16";
import { toProjects16Images } from "./_components/adapters";
import { sampleImage } from "./assets";
import {
  approachClose,
  brand,
  contactHref,
  homeProjects,
  principles,
} from "./content";
import styles from "./style.module.css";
import { sampleRoot as root } from "./types";

export const metadata: Metadata = {
  title: "West Room Studio - JabKit Minimal sample",
  description:
    "Fictional architecture and interiors practice. Work, project detail, services, and a local inquiry preview.",
};

export default function MinimalHomePage() {
  const hero = sampleImage(
    "min-hero",
    "Daylight interior looking through a threshold into a modest courtyard house",
  );
  const selected = homeProjects();

  return (
    <main id="top">
      <section className={styles.section}>
        <div className={styles.frame}>
          <p className="jk-label">{brand.tagline}</p>
          <h1 className="jk-display mt-4">{brand.statement}</h1>
          <p className="jk-lead mt-6">{brand.intro}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            <Button asChild>
              <a href={`${root}/work`}>View work</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={contactHref()}>Discuss a project</a>
            </Button>
          </div>
          <figure className={`${styles.figure} mt-12`}>
            <img
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              fetchPriority="high"
              decoding="async"
              className="aspect-[4/5] object-cover object-[center_40%] md:aspect-[16/9]"
            />
            <figcaption className={`jk-caption ${styles.caption}`}>
              Courtyard House, North Hollow. Leading view for this sample.
              Photography is a local stub until the MIN-03 series lands.
            </figcaption>
          </figure>
        </div>
      </section>

      <Projects16
        title="Four rooms from the current set"
        description="Captions link to the project. The work index holds all six."
        action={{ label: "View all work", href: `${root}/work` }}
        images={toProjects16Images(selected)}
      />

      <section className={styles.section} aria-labelledby="approach">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="approach">
            How we approach a room
          </h2>
          <ol className={`${styles.listPlain} mt-8`}>
            {principles.map((item) => (
              <li key={item.title}>
                <h3 className="jk-label">{item.title}</h3>
                <p className="jk-body mt-2">{item.body}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="inquire">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="inquire">
            {approachClose.title}
          </h2>
          <p className="jk-body mt-4">{approachClose.body}</p>
          <div className="mt-6 flex flex-wrap gap-2">
            <Button asChild>
              <a href={`${root}/services`}>Compare scopes</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={contactHref()}>Discuss a project</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
