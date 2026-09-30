import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import type { ReactNode } from "react";
import { Button } from "@/atoms/button";
import { Progress, ProgressLabel } from "@/atoms/progress";
import { cn } from "@/lib/cn";
import { BenImage } from "../../_components/BenImage";
import { BentoGrid, Tile, TileFooter } from "../../_components/Bento";
import { CtaBand } from "../../_components/CtaBand";
import { DayTimeline, MiniDashboard } from "../../_components/MiniDashboard";
import { MiniCalendarColumn } from "../../_components/MiniPreviews";
import { StatusBadge } from "../../_components/StatusBadge";
import { EmptyState, TileSkeleton } from "../../_components/TileStates";
import { VisitsChart } from "../../_components/VisitsChart";
import {
  formatShortDate,
  formatShortTime,
  formatTime,
  needsReply,
  todayVisits,
} from "../../_data/bookings";
import { type CardStateId, cardStates } from "../../_data/card-states";
import { followUps } from "../../_data/customers";
import {
  deskCoverage,
  getStaff,
  offTodayLine,
  onShiftToday,
} from "../../_data/staff";
import { getTile } from "../../_data/tiles";
import { thisWeek } from "../../_data/weekly";
import shared from "../../style.module.css";
import {
  cardStatesSection,
  demoTag,
  header,
  interlude,
  type TourSection,
  tour,
  tourLabels,
} from "./content";
import { ErrorStateTile } from "./ErrorStateTile";
import styles from "./product.module.css";

export function ProductPage() {
  return (
    <>
      <ProductHeader />
      <TourGrid />
      <CardStates />
      <Interlude />
      <CtaBand />
    </>
  );
}

function ProductHeader() {
  return (
    <section
      aria-labelledby="product-heading"
      className={cn(shared.container, styles.hero)}
    >
      <BentoGrid>
        <Tile kind="action" span={5} surfaceClassName={styles.heroCopy}>
          <h1
            className={cn("jk-display", styles.heroTitle)}
            id="product-heading"
          >
            {header.title}
          </h1>
          <p className="jk-lead">{header.body}</p>
          <div className={shared.actions}>
            <Button asChild size="lg">
              <Link href={header.cta.href}>{header.cta.label}</Link>
            </Button>
          </div>
        </Tile>
        <Tile span={7} surfaceClassName={styles.heroBoard} tone="muted">
          <MiniDashboard />
        </Tile>
      </BentoGrid>
    </section>
  );
}

/* ---------- The five tiles, each its own anchored section ---------- */

function headingId(section: TourSection) {
  return `product-${section.id}-heading`;
}

function TourHead({ section }: { section: TourSection }) {
  return (
    <>
      <h2 className={styles.tourTitle} id={headingId(section)}>
        {section.title}
      </h2>
      {section.primary ? (
        <p className={styles.demoLine}>
          {section.primary} <span className={styles.demoTag}>{demoTag}</span>
        </p>
      ) : null}
      <p className={styles.tourBody}>{section.body}</p>
    </>
  );
}

function TourLink({ section }: { section: TourSection }) {
  const { action } = getTile(section.tile);
  return (
    <TileFooter>
      <Link className={styles.tourLink} href={action.href}>
        {section.linkLabel}
        <ArrowRightIcon aria-hidden="true" />
      </Link>
    </TileFooter>
  );
}

function SubLabel({ children }: { children: ReactNode }) {
  return <p className={styles.subLabel}>{children}</p>;
}

function TourGrid() {
  const visits = todayVisits();

  return (
    <div className={cn(shared.container, shared.section, styles.tour)}>
      <BentoGrid>
        <Tile
          as="section"
          className={styles.anchor}
          id={tour.today.id}
          kind="action"
          labelledBy={headingId(tour.today)}
          rowSpan={2}
          span={8}
          surfaceClassName={styles.todayTile}
        >
          <TourHead section={tour.today} />
          <div className={styles.todaySpecimen}>
            <div className={styles.specimenPart}>
              <SubLabel>{tourLabels.visitList}</SubLabel>
              <ol className={styles.visits}>
                {visits.map((visit) => (
                  <li key={visit.id}>
                    <time className={styles.time} dateTime={visit.start}>
                      {formatShortTime(visit.start)}
                    </time>
                    <span className={styles.visitName}>{visit.customer}</span>
                    <span className={styles.visitStaff}>
                      {getStaff(visit.staffId).name}
                    </span>
                  </li>
                ))}
              </ol>
            </div>
            <div
              aria-hidden="true"
              className={cn(styles.specimenPart, styles.calendarThumb)}
            >
              <SubLabel>{tourLabels.calendarThumb}</SubLabel>
              <MiniCalendarColumn />
              <DayTimeline />
            </div>
          </div>
          <TourLink section={tour.today} />
        </Tile>

        <Tile
          as="section"
          className={styles.anchor}
          id={tour.bookings.id}
          kind="action"
          labelledBy={headingId(tour.bookings)}
          span={4}
          state="warning"
          tone="apricot"
        >
          <TourHead section={tour.bookings} />
          <StatusBadge status="needs-reply" />
          <div className={styles.specimenPart}>
            <SubLabel>{tourLabels.bookingList}</SubLabel>
            <ul className={styles.rows}>
              {needsReply.map((booking) => (
                <li key={booking.id}>
                  <span className={styles.visitName}>{booking.customer}</span>
                  <span className={styles.rowMeta}>
                    {formatShortDate(booking.date)} ·{" "}
                    {formatTime(booking.start)}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <TourLink section={tour.bookings} />
        </Tile>

        <Tile
          as="section"
          className={styles.anchor}
          id={tour.followUps.id}
          kind="action"
          labelledBy={headingId(tour.followUps)}
          span={4}
        >
          <TourHead section={tour.followUps} />
          <div className={styles.specimenPart}>
            <SubLabel>{tourLabels.followUpList}</SubLabel>
            <ul className={styles.rows}>
              {followUps.map((customer) => (
                <li key={customer.id}>
                  <span className={styles.visitName}>{customer.name}</span>
                  <span className={styles.rowMeta}>
                    {customer.followUp?.reason}
                  </span>
                </li>
              ))}
            </ul>
          </div>
          <TourLink section={tour.followUps} />
        </Tile>

        <Tile
          as="section"
          className={styles.anchor}
          id={tour.team.id}
          kind="action"
          labelledBy={headingId(tour.team)}
          span={5}
        >
          <TourHead section={tour.team} />
          <div className={styles.specimenPart}>
            <SubLabel>{tourLabels.roster}</SubLabel>
            <ul className={styles.roster}>
              {onShiftToday.map((person) => (
                <li key={person.id}>
                  <span className={styles.visitName}>{person.name}</span>
                  <span className={styles.rowMeta}>
                    {person.role}
                    {person.shift ? (
                      <>
                        {" · "}
                        <span className="jk-num">{person.shift}</span>
                      </>
                    ) : null}
                  </span>
                </li>
              ))}
            </ul>
            <p className={styles.offLine}>{offTodayLine}</p>
          </div>
          <Progress className={styles.progress} value={deskCoverage.percent}>
            <ProgressLabel className={styles.progressLabel}>
              {deskCoverage.label}
            </ProgressLabel>
          </Progress>
          <TourLink section={tour.team} />
        </Tile>

        <Tile
          as="section"
          className={styles.anchor}
          id={tour.trend.id}
          kind="action"
          labelledBy={headingId(tour.trend)}
          span={7}
          surfaceClassName={styles.trendTile}
        >
          <TourHead section={tour.trend} />
          <VisitsChart
            caption={tourLabels.chartCaption}
            className={styles.trendChart}
            size="full"
            textMode="table"
            week={thisWeek}
          />
          <TourLink section={tour.trend} />
        </Tile>
      </BentoGrid>
    </div>
  );
}

/* ---------- Card states ---------- */

function stateById(id: CardStateId) {
  const state = cardStates.find((item) => item.id === id);
  if (!state) throw new Error(`Unknown card state: ${id}`);
  return state;
}

function nameId(id: CardStateId) {
  return `card-state-${id}`;
}

function StateName({ id, children }: { id: CardStateId; children: string }) {
  return (
    <h3 className={styles.stateName} id={nameId(id)}>
      {children}
    </h3>
  );
}

function Note({ children }: { children: string }) {
  return <p className={styles.stateNote}>{children}</p>;
}

function CardStates() {
  const [loading, empty, warning, actionable, selected, error] =
    cardStatesSection.states.map(stateById);

  return (
    <section
      aria-labelledby="product-states-heading"
      className={cn(shared.container, shared.section)}
    >
      <div className={cn(shared.sectionHead, styles.statesHead)}>
        <div className={styles.statesIntro}>
          <h2 className="jk-heading" id="product-states-heading">
            {cardStatesSection.title}
          </h2>
          <p className="jk-lead">{cardStatesSection.body}</p>
        </div>
        <Link className={shared.textLink} href={cardStatesSection.link.href}>
          {cardStatesSection.link.label}
          <ArrowRightIcon aria-hidden="true" />
        </Link>
      </div>

      <BentoGrid as="ul" className={styles.states}>
        <Tile
          as="li"
          labelledBy={nameId(loading.id)}
          span={4}
          state="loading"
          surfaceClassName={styles.stateTile}
        >
          <StateName id={loading.id}>{loading.name}</StateName>
          <TileSkeleton message={loading.copy} rows={2} />
          <Note>{loading.note}</Note>
        </Tile>

        <Tile
          as="li"
          labelledBy={nameId(empty.id)}
          span={4}
          state="empty"
          surfaceClassName={styles.stateTile}
        >
          <StateName id={empty.id}>{empty.name}</StateName>
          <EmptyState message={empty.copy} />
          <Note>{empty.note}</Note>
        </Tile>

        <Tile
          as="li"
          labelledBy={nameId(warning.id)}
          span={4}
          state="warning"
          surfaceClassName={styles.stateTile}
          tone="apricot"
        >
          <StateName id={warning.id}>{warning.name}</StateName>
          <p className={styles.stateFigure}>{warning.copy}</p>
          <Note>{warning.note}</Note>
        </Tile>

        <Tile
          as="li"
          href={actionable.href ?? cardStatesSection.link.href}
          kind="link"
          labelledBy={`${nameId(actionable.id)}-cta`}
          linkLabel={
            <span id={`${nameId(actionable.id)}-cta`}>
              {actionable.copy.replace(/\s*→$/, "")}
            </span>
          }
          span={4}
          surfaceClassName={cn(styles.stateTile, styles.linkState)}
        >
          <StateName id={actionable.id}>{actionable.name}</StateName>
          <Note>{actionable.note}</Note>
        </Tile>

        <Tile
          as="li"
          labelledBy={nameId(selected.id)}
          span={4}
          state="selected"
          surfaceClassName={styles.stateTile}
        >
          <StateName id={selected.id}>{selected.name}</StateName>
          <p className={styles.stateFigure}>{selected.copy}</p>
          <Note>{selected.note}</Note>
        </Tile>

        <ErrorStateTile
          heading={<StateName id={error.id}>{error.name}</StateName>}
          labelledBy={nameId(error.id)}
          message={error.copy}
          note={<Note>{error.note}</Note>}
          retryingMessage={cardStatesSection.retryingMessage}
          surfaceClassName={styles.stateTile}
        />
      </BentoGrid>
    </section>
  );
}

/* ---------- Material interlude ---------- */

function Interlude() {
  return (
    <div className={styles.interlude}>
      <BenImage
        className={styles.interludeImage}
        decorative
        fit="cover"
        id={interlude.imageId}
        sizes="100vw"
      />
      <div className={cn(shared.container, styles.interludeInner)}>
        <div className={styles.panel}>
          <p className={styles.pullLine}>{interlude.line}</p>
        </div>
      </div>
    </div>
  );
}
