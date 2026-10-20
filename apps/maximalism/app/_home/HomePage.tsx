import { CtaBand } from "../_components/CtaBand";
import { DemoNotice } from "../_components/DemoNotice";
import { HomeHero } from "./HomeHero";
import styles from "./home.module.css";
import { LineupPreview } from "./LineupPreview";
import { PracticalInfo } from "./PracticalInfo";
import { ScheduleTeaser } from "./ScheduleTeaser";
import { StagesGrid } from "./StagesGrid";
import { TicketsTeaser } from "./TicketsTeaser";
import { VisualArts } from "./VisualArts";

/** Home runs loud to quiet in bands: campaign collage first, transactional panels after. */
export function HomePage() {
  return (
    <>
      <HomeHero />
      <DemoNotice className={styles.heroNotice} variant="inline" />
      <LineupPreview />
      <StagesGrid />
      <ScheduleTeaser />
      <VisualArts />
      <TicketsTeaser />
      <PracticalInfo />
      <CtaBand />
    </>
  );
}
