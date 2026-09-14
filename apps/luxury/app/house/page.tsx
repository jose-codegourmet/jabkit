import type { Metadata } from "next";
import { Button } from "@/atoms/button";
import { About14 } from "@/marketing/about14";
import { Content1 } from "@/marketing/content1";
import { Faq12 } from "@/marketing/faq12";
import { toHouseSections } from "../_components/adapters";
import { sampleImage } from "../assets";
import { host, houseFaqs, inquireHref, setting } from "../content";
import styles from "../style.module.css";
import { sampleRoot } from "../types";

export const metadata: Metadata = {
  title: "The house - Stillwater House",
  description:
    "Host, materials, arrival notes, and a fictional-setting disclosure for Stillwater House.",
};

export default function HousePage() {
  const house = sampleImage(
    "lux-arrival-detail",
    "entrance of a small lakeside house",
  );
  const portrait = sampleImage(
    "lux-host",
    "portrait of Helen Mora, the fictional house keeper",
  );

  return (
    <main id="top">
      <header className={styles.section}>
        <div className={styles.frame}>
          <h1 className="jk-heading">The house</h1>
          <p className="jk-lead mt-4">{setting.description}</p>
        </div>
      </header>

      <About14
        title="How the house is kept"
        label="Helen Mora"
        intro={host.intro}
        philosophy={host.philosophy}
        profile={{
          src: portrait.src,
          alt: portrait.alt,
          name: host.name,
          role: host.role,
          fallback: host.fallback,
        }}
        image={{ src: house.src, alt: house.alt }}
      />

      <Content1
        kicker=""
        title="Materials, days, and arrival"
        description="The details that help you settle in."
        outlineLabel="On this page"
        sections={toHouseSections()}
      />

      <section className={styles.section} aria-labelledby="grounds">
        <div className={styles.frame}>
          <h2 className="jk-heading" id="grounds">
            How the rooms sit
          </h2>
          <p className="jk-body mt-4">
            A schematic of the grounds, not a map you can navigate.
          </p>
          <svg
            viewBox="0 0 320 160"
            role="img"
            aria-labelledby="grounds-title grounds-desc"
            className="mt-8 w-full max-w-xl"
          >
            <title id="grounds-title">Stillwater House grounds</title>
            <desc id="grounds-desc">
              Lake at the top, landing, house with Garden Room toward the court,
              Lake Room facing water, Upper Suite above, woodland behind.
            </desc>
            <rect
              x="8"
              y="8"
              width="304"
              height="48"
              fill="var(--jk-muted)"
              stroke="var(--jk-border)"
            />
            <text x="20" y="38" fill="var(--jk-foreground)" fontSize="12">
              Lake
            </text>
            <rect
              x="120"
              y="56"
              width="80"
              height="16"
              fill="var(--jk-accent)"
              stroke="var(--jk-border)"
            />
            <text x="132" y="68" fill="var(--jk-foreground)" fontSize="10">
              Landing
            </text>
            <rect
              x="96"
              y="80"
              width="128"
              height="48"
              fill="var(--jk-card)"
              stroke="var(--jk-border)"
            />
            <text x="108" y="108" fill="var(--jk-foreground)" fontSize="12">
              House
            </text>
            <rect
              x="8"
              y="80"
              width="72"
              height="48"
              fill="var(--jk-secondary)"
              stroke="var(--jk-border)"
            />
            <text x="16" y="108" fill="var(--jk-foreground)" fontSize="10">
              Garden
            </text>
            <rect
              x="240"
              y="80"
              width="72"
              height="64"
              fill="var(--jk-muted)"
              stroke="var(--jk-border)"
            />
            <text x="248" y="116" fill="var(--jk-foreground)" fontSize="10">
              Wood
            </text>
          </svg>
          <div className={`${styles.actions} mt-8`}>
            <Button asChild>
              <a href={`${sampleRoot}rooms`}>Compare rooms</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={`${sampleRoot}experiences`}>Experiences</a>
            </Button>
            <Button asChild variant="secondary">
              <a href={inquireHref()}>Plan a stay</a>
            </Button>
          </div>
        </div>
      </section>

      <Faq12
        kicker=""
        title="Practical questions"
        description="Access, guest counts, and the local inquiry. "
        categories={houseFaqs}
      />
    </main>
  );
}
