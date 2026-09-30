import { Skeleton } from "@/atoms/skeleton";
import { BentoGrid, Tile } from "../../../_components/Bento";
import { DemoNotice } from "../../../_components/DemoNotice";
import { PortalPageHeader } from "../../../_components/PortalPageHeader";
import { TileSkeleton } from "../../../_components/TileStates";
import { VisitsChart } from "../../../_components/VisitsChart";
import { demoFootnote } from "../../../_data/portal";
import { getWeek, type WeekId } from "../../../_data/weekly";
import {
  type ReportState,
  reportStatesCopy,
  reportsHeader,
  summaryItems,
  visitsSection,
} from "./content";
import { ReportRetry } from "./ReportRetry";
import styles from "./reports.module.css";
import { WeekPicker } from "./WeekPicker";

export function ReportsPage({
  weekId,
  state,
}: {
  weekId: WeekId;
  state: ReportState;
}) {
  const week = getWeek(weekId);
  const failed = state === "error";
  const loading = state === "loading";

  return (
    <>
      <PortalPageHeader
        actions={<WeekPicker weekId={weekId} />}
        title={reportsHeader.title}
      />

      <BentoGrid className={styles.grid}>
        <Tile
          as="section"
          className={failed ? undefined : styles.chartTile}
          kind={failed ? "action" : "static"}
          labelledBy={visitsSection.id}
          span={failed ? 12 : 8}
          state={state === "ready" ? "default" : state}
        >
          <div className={styles.chartHead}>
            <h2 className="jk-title" id={visitsSection.id}>
              {visitsSection.heading}
            </h2>
            <p className={styles.weekLabel}>{week.label}</p>
          </div>

          {loading ? (
            <TileSkeleton
              className={styles.chartSkeleton}
              message={reportStatesCopy.loading}
              rows={7}
            />
          ) : null}
          {failed ? (
            <ReportRetry headingId={visitsSection.id} weekId={weekId} />
          ) : null}
          {state === "ready" ? (
            <VisitsChart
              caption={visitsSection.caption}
              className={styles.chart}
              size="full"
              textMode="table"
              week={week}
            />
          ) : null}
        </Tile>

        {failed
          ? null
          : summaryItems(week).map((item) => (
              <Tile
                className={styles.summary}
                key={item.id}
                span={4}
                state={loading ? "loading" : "default"}
              >
                {loading ? (
                  <div aria-hidden="true" className={styles.statSkeleton}>
                    <Skeleton className="h-3.5 w-2/5 motion-reduce:animate-none" />
                    <Skeleton className="h-8 w-3/5 motion-reduce:animate-none" />
                  </div>
                ) : (
                  <p className={styles.stat}>
                    <span className={styles.statLabel}>{item.label}</span>{" "}
                    <span className={`jk-figure ${styles.statValue}`}>
                      {item.value}
                    </span>
                  </p>
                )}
              </Tile>
            ))}
      </BentoGrid>

      <DemoNotice className={styles.footnote} variant="inline">
        {demoFootnote}
      </DemoNotice>
    </>
  );
}
