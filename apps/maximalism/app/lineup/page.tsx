import type { Metadata } from "next";
import { Suspense } from "react";
import { CampaignBand } from "../_components/CampaignBand";
import { CtaBand } from "../_components/CtaBand";
import { DemoNotice } from "../_components/DemoNotice";
import { StatePanel } from "../_components/StatePanel";
import {
  lineupBrowse,
  lineupHeader,
  lineupMeta,
  lineupStates,
} from "./_page/content";
import { LineupSection } from "./_page/LineupSection";
import page from "./_page/lineup.module.css";

export const metadata: Metadata = {
  title: { absolute: lineupMeta.title },
  description: lineupMeta.description,
};

export default function LineupPage(props: PageProps<"/lineup">) {
  return (
    <>
      <CampaignBand
        body={lineupHeader.body}
        eyebrow={lineupHeader.eyebrow}
        imageId={lineupHeader.imageId}
        title={lineupHeader.title}
      >
        <DemoNotice variant="inline" />
      </CampaignBand>

      <section aria-labelledby="lineup-browse-heading" className={page.browse}>
        <h2 className="sr-only" id="lineup-browse-heading">
          {lineupBrowse.heading}
        </h2>
        <Suspense
          fallback={
            <StatePanel
              count={4}
              kind="loading"
              layout="cards"
              message={lineupStates.loading}
            />
          }
        >
          <LineupSection searchParams={props.searchParams} />
        </Suspense>
      </section>

      <CtaBand />
    </>
  );
}
