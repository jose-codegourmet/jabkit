import type { Metadata } from "next";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Projects13 } from "@/marketing/projects13";
import { toProjects13Projects } from "./_components/adapters";
import { sampleImage } from "./assets";
import {
  brand,
  closeStrip,
  engagements,
  homeProjects,
  processStages,
  serviceHref,
  startHref,
} from "./content";
import styles from "./style.module.css";
import { sampleRoot as root } from "./types";

export const metadata: Metadata = {
  title: "Good Noise - JabKit Neo-brutalism sample",
  description:
    "Fictional independent branding studio. Work, engagements, and a local project-brief preview.",
};

export default function NeoHomePage() {
  const hero = sampleImage(
    "neo-hero",
    "Sculptural studio object with a megaphone-like silhouette on an off-white sweep",
  );
  const selected = homeProjects();

  return (
    <main id="top">
      <section className={styles.section}>
        <div className={`${styles.frame} ${styles.poster}`}>
          <div>
            <h1 className="jk-display">{brand.statement}</h1>
            <p className="jk-lead mt-6">{brand.intro}</p>
            <div className={styles.actions}>
              <Button asChild>
                <a href={`${root}/work`}>See the work</a>
              </Button>
              <Button asChild variant="secondary">
                <a href={startHref()}>Start a brief</a>
              </Button>
            </div>
          </div>
          <figure className={`${styles.figure} ${styles.reveal}`}>
            <img
              src={hero.src}
              alt={hero.alt}
              width={hero.width}
              height={hero.height}
              fetchPriority="high"
              decoding="async"
              className="aspect-square object-cover md:aspect-[4/3]"
            />
            <figcaption className={`jk-caption ${styles.caption}`}>
              Studio object for the poster. Lettering is live HTML. Photography
              is a local stub until the NEO-03 series.
            </figcaption>
          </figure>
        </div>
      </section>

      <Projects13
        label="Selected work"
        projects={toProjects13Projects(selected)}
      />

      <section className={styles.section} aria-labelledby="engagements">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="engagements">
            Three one-time engagements
          </h2>
          <div className={styles.strips}>
            {engagements.map((engagement) => (
              <article className={styles.strip} key={engagement.id}>
                <h3 className="jk-heading">{engagement.title}</h3>
                <p className="jk-body">{engagement.suitable}</p>
                <div>
                  <Button asChild variant="secondary" size="sm">
                    <a href={startHref({ plan: engagement.id })}>
                      Start {engagement.title}
                    </a>
                  </Button>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6">
            <a href={`${root}/services`}>Compare scopes</a>
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="method">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="method">
            Method
          </h2>
          <ol className={`${styles.steps} mt-8`}>
            {processStages.map((stage, index) => (
              <li className={styles.step} key={stage.id}>
                <Badge variant="outline">
                  {String(index + 1).padStart(2, "0")}
                </Badge>
                <h3 className="jk-label mt-3">{stage.title}</h3>
                <p className="jk-body mt-2">{stage.body}</p>
              </li>
            ))}
          </ol>
          <p className="mt-8">
            <a href={serviceHref("full-brand")}>Read Full Brand in detail</a>
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="close">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="close">
            {closeStrip.title}
          </h2>
          <p className="jk-body mt-4">{closeStrip.body}</p>
          <div className={styles.actions}>
            <Button asChild>
              <a href={startHref()}>Start a brief</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={`${root}/work`}>See the work</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
