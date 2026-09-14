import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { Content1 } from "@/marketing/content1";
import { ArtImage } from "../_components/ArtImage";
import { toAboutSections } from "../_components/adapters";
import { contributorHref, contributors, storiesHref } from "../content";
import styles from "../style.module.css";
import { sampleRoot } from "../types";

export const metadata: Metadata = {
  title: "About - Common Hours",
  description:
    "Editorial point of view, issue structure, and the three fictional contributors.",
};

export default function AboutPage() {
  return (
    <main id="top">
      <header className={styles.section}>
        <div className={styles.frame}>
          <h1 className="jk-heading">About the journal</h1>
          <p className="jk-lead mt-4">
            We look closely at the places we pass every day, and the people who
            give them meaning.
          </p>
        </div>
      </header>
      <div className={styles.frame}>
        <ArtImage
          id="edt-about-table"
          alt="The editorial team discussing photographs around a shared table"
          className={styles.aboutPhoto}
        />
      </div>
      <Content1
        kicker="Late Light"
        title="How we edit a week"
        description="A journal made from time spent walking, listening, and returning."
        outlineLabel="On this page"
        sections={toAboutSections()}
      />
      <section className={styles.section} aria-labelledby="masthead">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="masthead">
            Contributors
          </h2>
          <ul className={`${styles.listPlain} mt-8`}>
            {contributors.map((person) => (
              <li key={person.slug}>
                <h3>
                  <a href={contributorHref(person.slug)}>{person.name}</a>
                </h3>
                <p className={`jk-caption ${styles.meta}`}>{person.role}</p>
                <p className="jk-body mt-2">{person.shortBio}</p>
              </li>
            ))}
          </ul>
          <div className="mt-8 flex flex-wrap gap-2">
            <Button asChild>
              <a href={storiesHref("all")}>Browse stories</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={`${sampleRoot}membership`}>Membership</a>
            </Button>
          </div>
        </div>
      </section>
    </main>
  );
}
