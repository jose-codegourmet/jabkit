import { Suspense } from "react";
import { Alert, AlertDescription } from "@/atoms/alert";
import { cn } from "@/lib/cn";
import { CampaignBand } from "../../_components/CampaignBand";
import { CtaBand } from "../../_components/CtaBand";
import { DemoNotice } from "../../_components/DemoNotice";
import { Placeholder } from "../../_components/Placeholder";
import { StatePanel } from "../../_components/StatePanel";
import { Sticker } from "../../_components/Sticker";
import shared from "../../style.module.css";
import { scheduleControls, scheduleHeader, stateCopy } from "./content";
import { PlanSummary } from "./PlanSummary";
import { SchedulePlanner } from "./SchedulePlanner";
import styles from "./schedule.module.css";

const toolHeadingId = "schedule-tool-heading";

/**
 * Short campaign band on top, then a quiet plan-maker: URL-driven controls
 * and set list in the main column, the personal plan beside it.
 */
export function SchedulePage() {
  return (
    <>
      <CampaignBand
        body={scheduleHeader.body}
        className={styles.band}
        eyebrow={scheduleHeader.eyebrow}
        imageId={scheduleHeader.imageId}
        title={scheduleHeader.title}
      >
        <DemoNotice variant="inline" />
      </CampaignBand>

      <section
        aria-labelledby={toolHeadingId}
        className={cn(shared.section, styles.tool)}
      >
        <Sticker
          className={styles.toolStickerA}
          rotate={35}
          shape="arrow"
          size="clamp(2.5rem, 5vw, 4rem)"
          tone="pink"
        />
        <Sticker
          className={styles.toolStickerB}
          motion="drift"
          rotate={10}
          shape="squiggle"
          size="clamp(2.5rem, 5vw, 4.25rem)"
          tone="cobalt"
        />
        <h2 className="sr-only" id={toolHeadingId}>
          {scheduleControls.heading}
        </h2>
        <div className={styles.layout}>
          <div className={styles.main}>
            <Suspense
              fallback={
                <StatePanel
                  count={4}
                  kind="loading"
                  layout="rows"
                  message={stateCopy.loading}
                />
              }
            >
              <SchedulePlanner />
            </Suspense>
            <Alert className={styles.changeNotice} role="note">
              <AlertDescription>
                <Placeholder text={stateCopy.changeNotice} />
              </AlertDescription>
            </Alert>
          </div>
          <div className={styles.side}>
            <PlanSummary />
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
