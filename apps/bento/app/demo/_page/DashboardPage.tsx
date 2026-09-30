import { ArrowRightIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { Progress, ProgressLabel } from "@/atoms/progress";
import {
  BentoGrid,
  Tile,
  TileFooter,
  TileLabel,
} from "../../_components/Bento";
import { DemoNotice } from "../../_components/DemoNotice";
import { DayTimeline } from "../../_components/MiniDashboard";
import { PortalPageHeader } from "../../_components/PortalPageHeader";
import { StatusBadge } from "../../_components/StatusBadge";
import { VisitsChart } from "../../_components/VisitsChart";
import { formatShortTime, nextVisits } from "../../_data/bookings";
import { followUps } from "../../_data/customers";
import { demoFootnote } from "../../_data/portal";
import { deskCoverage, getStaff, teamTileLine } from "../../_data/staff";
import { getTile, type TileKey } from "../../_data/tiles";
import { thisWeek } from "../../_data/weekly";
import { dashboardHeader } from "./content";
import styles from "./dashboard.module.css";
import { OverlapAlert } from "./OverlapAlert";

function TileAction({ tile }: { tile: TileKey }) {
  const { action } = getTile(tile);
  return (
    <TileFooter>
      <Link className={styles.action} href={action.href}>
        {action.label}
        <ArrowRightIcon aria-hidden="true" />
      </Link>
    </TileFooter>
  );
}

export function DashboardPage() {
  const today = getTile("today");
  const confirmation = getTile("bookings");
  const follow = getTile("follow-ups");
  const team = getTile("team");
  const trend = getTile("trend");

  return (
    <>
      <PortalPageHeader
        actions={
          <Button asChild>
            <Link href={dashboardHeader.action.href}>
              {dashboardHeader.action.label}
            </Link>
          </Button>
        }
        sub={dashboardHeader.sub}
        title={dashboardHeader.title}
      />

      <BentoGrid>
        <Tile
          as="section"
          kind="action"
          labelledBy="tile-today"
          span={8}
          surfaceClassName={styles.today}
        >
          <TileLabel as="h2" id="tile-today">
            {today.label}
          </TileLabel>
          <p className="jk-figure">{today.primary}</p>
          <ol aria-label="Next visits" className={styles.visits}>
            {nextVisits(3).map((visit) => (
              <li key={visit.id}>
                <time className={styles.time}>
                  {formatShortTime(visit.start)}
                </time>
                <span>
                  <span className={styles.visitName}>{visit.customer}</span>
                  <span className={styles.visitMeta}>
                    {" · "}
                    {visit.service} · {getStaff(visit.staffId).name}
                  </span>
                </span>
              </li>
            ))}
          </ol>
          <DayTimeline />
          <TileAction tile="today" />
        </Tile>

        <Tile
          as="section"
          kind="action"
          labelledBy="tile-confirmation"
          span={4}
          state="warning"
          tone="apricot"
        >
          <TileLabel as="h2" id="tile-confirmation">
            {confirmation.label}
          </TileLabel>
          <p className="jk-figure">{confirmation.primary}</p>
          <StatusBadge status="needs-reply" />
          <TileAction tile="bookings" />
        </Tile>

        <Tile as="section" kind="action" labelledBy="tile-follow-ups" span={4}>
          <TileLabel as="h2" id="tile-follow-ups">
            {follow.label}
          </TileLabel>
          <p className="jk-figure">{follow.primary}</p>
          <ul className={styles.rows}>
            {followUps.map((customer) => (
              <li key={customer.id}>
                <span className={styles.visitName}>{customer.name}</span> —{" "}
                {customer.followUp?.reason}
              </li>
            ))}
          </ul>
          <TileAction tile="follow-ups" />
        </Tile>

        <Tile as="section" kind="action" labelledBy="tile-team" span={4}>
          <TileLabel as="h2" id="tile-team">
            {team.label}
          </TileLabel>
          <p className="jk-figure">{team.primary}</p>
          <p className={styles.teamLine}>{teamTileLine}</p>
          <Progress className={styles.progress} value={deskCoverage.percent}>
            <ProgressLabel className={styles.progressLabel}>
              {deskCoverage.label}
            </ProgressLabel>
          </Progress>
          <TileAction tile="team" />
        </Tile>

        <Tile as="section" kind="action" labelledBy="tile-trend" span={4}>
          <TileLabel as="h2" id="tile-trend">
            {trend.label}
          </TileLabel>
          <p className={styles.trendTitle}>{trend.primary}</p>
          <VisitsChart textMode="details" week={thisWeek} />
          <TileAction tile="trend" />
        </Tile>

        <OverlapAlert />
      </BentoGrid>

      <DemoNotice className={styles.footnote} variant="inline">
        {demoFootnote}
      </DemoNotice>
    </>
  );
}
