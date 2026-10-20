import type { Route } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { MaxImage } from "../_components/MaxImage";
import { MotionToggle } from "../_components/MotionToggle";
import { Placeholder } from "../_components/Placeholder";
import { Sticker } from "../_components/Sticker";
import { type Artist, artistHref, getArtist } from "../_data/artists";
import { heroCopy } from "./content";
import styles from "./home.module.css";

const featured = heroCopy.featuredSlugs
  .map((slug) => getArtist(slug))
  .filter((artist): artist is Artist => artist !== undefined);

/**
 * Adapts @/marketing/hero231: copy, a fixed cream facts card and CTAs on one
 * side; the city collage with three layered portrait cards on the other.
 * DOM order is the mobile order: headline, facts, CTAs, then collage.
 */
export function HomeHero() {
  return (
    <section aria-labelledby="home-title" className={styles.hero}>
      <div className={styles.heroCopy}>
        <p className={styles.heroKicker}>{heroCopy.kicker}</p>
        <h1 className={cn("jk-display", styles.heroTitle)} id="home-title">
          {heroCopy.title}
        </h1>
        <p className={cn("jk-lead", styles.heroSub)}>{heroCopy.sub}</p>
      </div>

      <div className={styles.facts}>
        <p className={styles.factsLabel}>{heroCopy.facts.label}</p>
        <dl className={styles.factsList}>
          {heroCopy.facts.rows.map((row) => (
            <div className={styles.factsRow} key={row.term}>
              <dt>{row.term}</dt>
              <dd>
                <Placeholder text={row.value} />
              </dd>
            </div>
          ))}
        </dl>
      </div>

      <div className={styles.heroActions}>
        <div className={styles.heroButtons}>
          <Button asChild size="lg">
            <Link href={heroCopy.primary.href as Route}>
              {heroCopy.primary.label}
            </Link>
          </Button>
          <Button asChild size="lg" variant="secondary">
            <Link href={heroCopy.secondary.href as Route}>
              {heroCopy.secondary.label}
            </Link>
          </Button>
        </div>
        <MotionToggle variant="hero" />
      </div>

      <div className={styles.collage}>
        <div className={styles.collageArt}>
          <MaxImage
            className={styles.collageImage}
            decorative
            id="max-hero"
            mobileId="max-hero-mobile"
            mobileRatio="4:5"
            priority
            ratio="16:9"
            sizes="(max-width: 767px) 100vw, (max-width: 1023px) 90vw, 55vw"
          />
          <Sticker
            className={styles.heroStickerStar}
            motion="drift"
            rotate={-14}
            shape="star"
            size="clamp(3rem, 7vw, 5rem)"
            tone="lime"
          />
          <Sticker
            className={styles.heroStickerBurst}
            motion="drift"
            rotate={12}
            shape="burst"
            size="clamp(3.25rem, 7vw, 5.5rem)"
            tone="pink"
          />
          <Sticker
            className={styles.heroStickerKnob}
            motion="spin"
            shape="knob"
            size="clamp(2.75rem, 5vw, 4rem)"
            tone="tangerine"
          />
        </div>
        <ul aria-label={heroCopy.featuredLabel} className={styles.heroCards}>
          {featured.map((artist, index) => (
            <li
              className={styles.heroCard}
              data-position={index}
              key={artist.slug}
            >
              <a className={styles.heroCardLink} href={artistHref(artist.slug)}>
                <MaxImage
                  className={styles.heroCardArt}
                  decorative
                  id={artist.imageId}
                  priority
                  ratio="4:5"
                  sizes="(max-width: 767px) 30vw, 14rem"
                />
                <span className={styles.heroCardName}>{artist.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
