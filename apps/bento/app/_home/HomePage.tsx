import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { BenImage } from "../_components/BenImage";
import { BentoGrid, Tile, TileLabel } from "../_components/Bento";
import { CtaBand } from "../_components/CtaBand";
import { DemoNotice } from "../_components/DemoNotice";
import { LogoMark } from "../_components/Logo";
import { MiniDashboard } from "../_components/MiniDashboard";
import {
  MiniCalendarColumn,
  MiniKanban,
  MiniTable,
} from "../_components/MiniPreviews";
import { StatusBadge } from "../_components/StatusBadge";
import { dashboardTiles } from "../_data/tiles";
import shared from "../style.module.css";
import { benefits, drillDown, hero, problem, whoTeaser } from "./content";
import styles from "./home.module.css";

const previews = {
  calendar: MiniCalendarColumn,
  bookings: MiniTable,
  tasks: MiniKanban,
} as const;

export function HomePage() {
  return (
    <>
      <section
        aria-labelledby="home-hero-heading"
        className={cn(shared.container, styles.hero)}
      >
        <BentoGrid>
          <Tile span={5} surfaceClassName={styles.heroCopy}>
            <p className={shared.eyebrow}>{hero.eyebrow}</p>
            <h1
              className={cn("jk-display", styles.heroTitle)}
              id="home-hero-heading"
            >
              {hero.title}
            </h1>
            <p className="jk-lead">{hero.body}</p>
            <div className={shared.actions}>
              <Button asChild>
                <Link href={hero.primary.href}>{hero.primary.label}</Link>
              </Button>
              <Button asChild variant="secondary">
                <Link href={hero.secondary.href}>{hero.secondary.label}</Link>
              </Button>
            </div>
          </Tile>
          <Tile
            rowSpan={2}
            span={7}
            surfaceClassName={styles.heroBoard}
            tone="muted"
          >
            <MiniDashboard
              caption={<DemoNotice variant="inline">{hero.caption}</DemoNotice>}
            />
          </Tile>
          <Tile flush span={5} surfaceClassName={styles.heroPhoto}>
            <BenImage
              alt={hero.imageAlt}
              fit="cover"
              id={hero.imageId}
              priority
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
          </Tile>
        </BentoGrid>
      </section>

      <section
        aria-labelledby="home-problem-heading"
        className={cn(shared.container, shared.section)}
      >
        <div className={shared.sectionHead}>
          <h2 className="jk-heading" id="home-problem-heading">
            {problem.title}
          </h2>
          <p className="jk-lead">{problem.body}</p>
        </div>
        <BentoGrid>
          <Tile rowSpan={2} span={7} surfaceClassName={styles.converge}>
            <ul
              aria-label="Where the day lives today"
              className={styles.sources}
            >
              {problem.sources.map((source) => (
                <li className={styles.source} key={source}>
                  {source}
                </li>
              ))}
            </ul>
            <svg
              aria-hidden="true"
              className={styles.connector}
              preserveAspectRatio="none"
              viewBox="0 0 300 60"
            >
              <path d="M50 0 C50 34 150 26 150 60" />
              <path d="M150 0 L150 60" />
              <path d="M250 0 C250 34 150 26 150 60" />
            </svg>
            <p className={styles.destination}>
              <LogoMark size={30} />
              <span>{problem.destination}</span>
            </p>
          </Tile>
          <Tile
            flush
            rowSpan={2}
            span={5}
            surfaceClassName={styles.problemPhoto}
          >
            <BenImage
              alt={problem.imageAlt}
              fit="cover"
              id={problem.imageId}
              sizes="(min-width: 1024px) 34vw, 100vw"
            />
          </Tile>
        </BentoGrid>
      </section>

      <section
        aria-labelledby="home-benefits-heading"
        className={cn(shared.container, shared.section)}
      >
        <div className={shared.sectionHead}>
          <h2 className="jk-heading" id="home-benefits-heading">
            {benefits.title}
          </h2>
        </div>
        <BentoGrid as="ul">
          {dashboardTiles.map((tile) => {
            const headingId = `benefit-${tile.key}`;
            const isToday = tile.key === "today";
            return (
              <Tile
                as="li"
                href={tile.productHref}
                key={tile.key}
                kind="link"
                labelledBy={headingId}
                linkLabel={`How the ${tile.benefit.title} tile works`}
                span={tile.benefit.span}
                surfaceClassName={cn(
                  styles.benefit,
                  isToday && styles.benefitToday,
                )}
                tone={tile.key === "bookings" ? "apricot" : "default"}
              >
                <TileLabel>{tile.benefit.title}</TileLabel>
                <h3 className={styles.benefitQuestion} id={headingId}>
                  {tile.benefit.question}
                </h3>
                <p className={styles.benefitAnswer}>{tile.benefit.answer}</p>
                {tile.key === "bookings" ? (
                  <StatusBadge status="needs-reply" />
                ) : null}
                {isToday ? (
                  <div className={styles.material}>
                    <BenImage
                      decorative
                      fit="cover"
                      id={benefits.materialImageId}
                      sizes="(min-width: 1024px) 55vw, 100vw"
                    />
                  </div>
                ) : null}
              </Tile>
            );
          })}
        </BentoGrid>
      </section>

      <section
        aria-labelledby="home-drill-heading"
        className={cn(shared.container, shared.section)}
      >
        <div className={shared.sectionHead}>
          <h2 className="jk-heading" id="home-drill-heading">
            {drillDown.title}
          </h2>
          <p className="jk-lead">{drillDown.body}</p>
        </div>
        <BentoGrid as="ul">
          {drillDown.cards.map((card) => {
            const Preview = previews[card.id];
            const headingId = `drill-${card.id}`;
            return (
              <Tile
                as="li"
                href={card.href}
                key={card.id}
                kind="link"
                labelledBy={headingId}
                span={4}
              >
                <h3 className={styles.drillTitle} id={headingId}>
                  {card.label}
                  <ArrowRightIcon aria-hidden="true" />
                </h3>
                <Preview />
              </Tile>
            );
          })}
        </BentoGrid>
      </section>

      <section
        aria-labelledby="home-who-heading"
        className={cn(shared.container, shared.section)}
      >
        <div className={cn(shared.sectionHead, styles.whoHead)}>
          <h2 className="jk-heading" id="home-who-heading">
            {whoTeaser.title}
          </h2>
          <Link className={shared.textLink} href={whoTeaser.link.href}>
            {whoTeaser.link.label}
            <ArrowRightIcon aria-hidden="true" />
          </Link>
        </div>
        <BentoGrid>
          <Tile flush span={12} surfaceClassName={styles.banner}>
            <BenImage
              alt={whoTeaser.imageAlt}
              fit="cover"
              id={whoTeaser.imageId}
              sizes="(min-width: 1280px) 76rem, 100vw"
            />
          </Tile>
          {whoTeaser.roles.map((role) => (
            <Tile as="article" key={role.title} span={4}>
              <h3 className="jk-title">{role.title}</h3>
              <p className={shared.muted}>{role.body}</p>
            </Tile>
          ))}
        </BentoGrid>
      </section>

      <CtaBand />
    </>
  );
}
