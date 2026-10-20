import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/atoms/breadcrumb";
import { cn } from "@/lib/cn";
import { CtaBand } from "../../../_components/CtaBand";
import { Placeholder } from "../../../_components/Placeholder";
import { Sticker } from "../../../_components/Sticker";
import { type Artist, relatedArtists } from "../../../_data/artists";
import { getStage } from "../../../_data/stages";
import shared from "../../../style.module.css";
import { ArtistHeader } from "./ArtistHeader";
import styles from "./artist.module.css";
import { artistCopy } from "./content";
import { RelatedSets } from "./RelatedSets";
import { StageStrip } from "./StageStrip";

export function ArtistPage({ artist }: { artist: Artist }) {
  const stage = getStage(artist.stageId);
  const related = relatedArtists(artist.slug);

  return (
    <div className={styles.page}>
      <Breadcrumb
        aria-label={artistCopy.breadcrumb.label}
        className={styles.breadcrumb}
      >
        <BreadcrumbList className={styles.breadcrumbList}>
          <BreadcrumbItem>
            <BreadcrumbLink
              className={styles.breadcrumbLink}
              render={<Link href="/lineup" />}
            >
              {artistCopy.breadcrumb.root.label}
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className={styles.breadcrumbSeparator}>
            /
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbPage className={styles.breadcrumbPage}>
              {artist.name}
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <ArtistHeader artist={artist} />

      <section
        aria-labelledby="artist-about-heading"
        className={cn(shared.section, styles.about)}
      >
        <div className={styles.aboutHead}>
          <h2
            className={cn("jk-heading", styles.aboutHeading)}
            id="artist-about-heading"
          >
            {artistCopy.about.heading(artist.name)}
          </h2>
          <Sticker
            className={styles.aboutSticker}
            motion="drift"
            rotate={-6}
            shape="squiggle"
            size="clamp(4rem, 8vw, 6.5rem)"
            tone="pink"
          />
        </div>
        <div className={styles.aboutProse}>
          <p className={cn("jk-lead", styles.aboutBio)}>{artist.bio}</p>
          <p className={cn("jk-body", styles.aboutLinks)}>
            <Placeholder text={artistCopy.about.listeningLinks} />
          </p>
        </div>
      </section>

      <RelatedSets related={related} stageName={stage.name} />

      <StageStrip stage={stage} />

      <CtaBand />
    </div>
  );
}
