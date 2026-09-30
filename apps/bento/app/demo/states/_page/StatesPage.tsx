import { Progress, ProgressLabel } from "@/atoms/progress";
import { BentoGrid, Tile, TileLabel } from "../../../_components/Bento";
import { PortalPageHeader } from "../../../_components/PortalPageHeader";
import { StatusBadge } from "../../../_components/StatusBadge";
import { EmptyState, TileSkeleton } from "../../../_components/TileStates";
import { type CardState, cardStates } from "../../../_data/card-states";
import { deskCoverage } from "../../../_data/staff";
import { getTile } from "../../../_data/tiles";
import { thisWeek } from "../../../_data/weekly";
import {
  layoutRules,
  layoutSection,
  selectedDayVisits,
  stateGridLabel,
  stateProps,
  statesHeader,
} from "./content";
import { ErrorSpecimen } from "./ErrorSpecimen";
import { LayoutDiagram } from "./LayoutDiagram";
import styles from "./states.module.css";

/** Renders `code` spans written between backticks. */
function RuleText({ text }: { text: string }) {
  return text
    .split("`")
    .map((part, index) =>
      index % 2 === 1 ? <code key={`code-${part}`}>{part}</code> : part,
    );
}

/** "Tuesday", plus that day's visits from the weekly demo data. */
function SelectedDay({ label }: { label: string }) {
  const day = thisWeek.days.find((item) => item.label === label);
  return (
    <>
      <p className="jk-figure">{label}</p>
      {day?.visits ? (
        <p className={styles.muted}>{selectedDayVisits(day.visits)}</p>
      ) : null}
    </>
  );
}

function Specimen({ state }: { state: CardState }) {
  const tileClass = styles.specimenTile;

  switch (state.id) {
    case "loading":
      return (
        <Tile className={tileClass} state="loading">
          <TileSkeleton message={state.copy} rows={4} />
        </Tile>
      );
    case "empty":
      return (
        <Tile className={tileClass} state="empty">
          <TileLabel>{getTile("follow-ups").label}</TileLabel>
          <EmptyState imageId="ben-empty-list" message={state.copy} />
        </Tile>
      );
    case "warning":
      return (
        <Tile className={tileClass} state="warning" tone="apricot">
          <TileLabel>{getTile("bookings").label}</TileLabel>
          <p className="jk-figure">{state.copy}</p>
          <StatusBadge className={styles.badge} status="needs-reply" />
        </Tile>
      );
    case "actionable": {
      const bookings = getTile("bookings");
      const linkId = "state-actionable-link";
      return (
        <Tile
          className={tileClass}
          href={state.href ?? bookings.action.href}
          kind="link"
          labelledBy={linkId}
          linkLabel={
            <span id={linkId}>{state.copy.replace(/\s*→\s*$/, "")}</span>
          }
        >
          <TileLabel>{bookings.label}</TileLabel>
          <p className={styles.question}>{bookings.benefit.question}</p>
        </Tile>
      );
    }
    case "selected":
      return (
        <Tile className={tileClass} state="selected">
          <SelectedDay label={state.copy} />
        </Tile>
      );
    case "error":
      return <ErrorSpecimen message={state.copy} />;
    case "static":
      return (
        <Tile className={tileClass} kind="static">
          <TileLabel>{getTile("team").label}</TileLabel>
          <Progress className={styles.progress} value={deskCoverage.percent}>
            <ProgressLabel className={styles.progressLabel}>
              {state.copy}
            </ProgressLabel>
          </Progress>
        </Tile>
      );
  }
}

export function StatesPage() {
  return (
    <>
      <PortalPageHeader sub={statesHeader.sub} title={statesHeader.title} />

      <BentoGrid
        aria-label={stateGridLabel}
        as="section"
        className={styles.stateGrid}
      >
        {cardStates.map((state) => (
          <figure className={styles.specimen} key={state.id}>
            <figcaption className={styles.caption}>
              <div className={styles.captionTop}>
                <h2 className={styles.stateName}>{state.name}</h2>
                <code className={styles.prop}>{stateProps[state.id]}</code>
              </div>
              <p className={styles.note}>{state.note}</p>
            </figcaption>
            <Specimen state={state} />
          </figure>
        ))}
      </BentoGrid>

      <section aria-labelledby={layoutSection.id} className={styles.rules}>
        <h2 className={styles.sectionHeading} id={layoutSection.id}>
          {layoutSection.heading}
        </h2>
        <BentoGrid className={styles.rulesGrid}>
          <Tile className={styles.rulesTile} kind="action" span={7}>
            <LayoutDiagram />
          </Tile>
          <Tile className={styles.rulesTile} span={5}>
            <dl className={styles.ruleList}>
              {layoutRules.map((rule) => (
                <div className={styles.rule} key={rule.term}>
                  <dt>{rule.term}</dt>
                  <dd>
                    <RuleText text={rule.text} />
                  </dd>
                </div>
              ))}
            </dl>
          </Tile>
        </BentoGrid>
      </section>
    </>
  );
}
