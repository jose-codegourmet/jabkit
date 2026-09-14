import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { About14 } from "@/marketing/about14";
import { sampleImage } from "../assets";
import {
  brand,
  contactHref,
  founder,
  processStages,
  serviceHref,
  team,
} from "../content";
import styles from "../style.module.css";

export const metadata: Metadata = {
  title: "Studio - West Room Studio",
  description:
    "How West Room Studio works, who writes the drawings, and what a client should expect at each stage.",
};

export default function StudioPage() {
  const worktable = sampleImage(
    "min-process-model",
    "Worktable with drawings covered, timber samples, and daylight from the side",
  );
  const profile = sampleImage(
    "min-profile",
    "Ivo Maren at a worktable, looking at a drawing, fictional portrait",
  );

  return (
    <main id="top">
      <About14
        title="A small practice for small rooms"
        label="West Room"
        intro={brand.intro}
        philosophy={founder.philosophy}
        profile={{
          src: profile.src,
          alt: profile.alt,
          name: founder.name,
          role: founder.role,
          fallback: founder.fallback,
        }}
        image={{
          src: worktable.src,
          alt: worktable.alt,
        }}
      />

      <section className={styles.section} aria-labelledby="process">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="process">
            Working sequence
          </h2>
          <ol className={`${styles.listPlain} mt-8`}>
            {processStages.map((stage) => (
              <li key={stage.id}>
                <h3 className="jk-label">{stage.title}</h3>
                <p className="jk-body mt-2">{stage.body}</p>
              </li>
            ))}
          </ol>
          <p className={`jk-caption ${styles.meta} mt-8`}>
            Models, samples, and drawings help us test a room before it is
            built.
          </p>
        </div>
      </section>

      <section className={styles.section} aria-labelledby="people">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="people">
            People
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
          <div className="mt-8 flex flex-wrap gap-2">
            <Button asChild variant="secondary">
              <a href={serviceHref("architecture")}>Architecture</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={serviceHref("interiors")}>Interiors</a>
            </Button>
            <Button asChild>
              <a href={contactHref()}>Discuss a project</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
