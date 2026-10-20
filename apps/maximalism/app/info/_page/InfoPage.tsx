import type { Route } from "next";
import Link from "next/link";
import { cn } from "@/lib/cn";
import { CampaignBand } from "../../_components/CampaignBand";
import { CtaBand } from "../../_components/CtaBand";
import { DemoNotice } from "../../_components/DemoNotice";
import { infoSections } from "../../_data/info";
import site from "../../style.module.css";
import { AccessibilitySection } from "./AccessibilitySection";
import { contactNudge, infoHeader } from "./content";
import { FaqSection } from "./FaqSection";
import { GettingThere } from "./GettingThere";
import styles from "./info.module.css";
import { PoliciesSection } from "./PoliciesSection";
import { SafetySection } from "./SafetySection";
import { VenueSection } from "./VenueSection";

export function InfoPage() {
  return (
    <div className={styles.page}>
      <CampaignBand
        body={infoHeader.body}
        className={styles.band}
        eyebrow={infoHeader.eyebrow}
        imageId={infoHeader.imageId}
        title={infoHeader.title}
      >
        <nav aria-label={infoHeader.navLabel}>
          <ul className={styles.onPageList}>
            {infoSections.map((section) => (
              <li key={section.id}>
                <a className={styles.onPageLink} href={`#${section.id}`}>
                  {section.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <DemoNotice variant="inline" />
      </CampaignBand>

      <GettingThere />
      <VenueSection />
      <AccessibilitySection />
      <SafetySection />
      <PoliciesSection />
      <FaqSection />

      <p className={styles.nudge}>
        {contactNudge.lead}{" "}
        <Link
          className={cn(site.textLink, styles.nudgeLink)}
          href={contactNudge.link.href as Route}
        >
          {contactNudge.link.label}
        </Link>
        .
      </p>

      <CtaBand hideInfoLink />
    </div>
  );
}
