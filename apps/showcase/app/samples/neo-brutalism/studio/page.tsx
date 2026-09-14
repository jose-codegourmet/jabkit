import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { About6 } from "@/marketing/about6";
import { studioImages } from "../_components/adapters";
import {
  boundaries,
  brand,
  principles,
  processStages,
  serviceHref,
  startHref,
  studioStory,
  studioWorkplace,
  team,
} from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Studio - Good Noise",
  description:
    "How Good Noise works, who holds which role, and what stays outside the brief.",
};

export default function StudioPage() {
  return (
    <main id="top">
      <About6
        story={{
          title: studioStory.title,
          description: studioStory.description,
          images: studioImages("story"),
        }}
        workplace={{
          title: studioWorkplace.title,
          paragraphs: studioWorkplace.paragraphs,
          images: studioImages("workplace"),
        }}
      />

      <section className={styles.section} aria-labelledby="principles">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="principles">
            Point of view
          </h2>
          <p className="jk-body mt-4">{brand.intro}</p>
          <ul className={`${styles.listPlain} mt-8`}>
            {principles.map((item) => (
              <li key={item.title}>
                <h3 className="jk-label">{item.title}</h3>
                <p className="jk-body mt-2">{item.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="roles">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="roles">
            Roles
          </h2>
          <ul className={`${styles.listPlain} mt-8`}>
            {team.map((member) => (
              <li key={member.name}>
                <p className="jk-label">{member.name}</p>
                <p className="jk-caption">{member.role}</p>
                <p className="jk-body mt-2">{member.note}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="method">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="method">
            Method
          </h2>
          <ol className={`${styles.listPlain} mt-8`}>
            {processStages.map((stage) => (
              <li key={stage.id}>
                <h3 className="jk-label">{stage.title}</h3>
                <p className="jk-body mt-2">{stage.body}</p>
              </li>
            ))}
          </ol>
          <div className={styles.actions}>
            <Button asChild variant="secondary">
              <a href={serviceHref("identity-sprint")}>Identity Sprint</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={serviceHref("full-brand")}>Full Brand</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={serviceHref("launch-campaign")}>Launch Campaign</a>
            </Button>
          </div>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="boundaries">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="boundaries">
            Working boundaries
          </h2>
          <ul className="jk-body mt-6 list-disc pl-5">
            {boundaries.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <div className={styles.actions}>
            <Button asChild>
              <a href={startHref()}>Start a brief</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
