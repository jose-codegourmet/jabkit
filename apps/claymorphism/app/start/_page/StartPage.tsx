import { ClayImage } from "../../_components/ClayImage";
import { DemoFormNotice } from "../../_components/DemoFormNotice";
import type { RoutineSlug } from "../../_data/types";
import { startIntro } from "./content";
import { StartForm } from "./StartForm";
import styles from "./start.module.css";

export function StartPage({ routine }: { routine?: RoutineSlug }) {
  return (
    <div className={styles.page}>
      <section aria-labelledby="start-heading" className={styles.intro}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <h1 className="jk-heading" id="start-heading">
              {startIntro.title}
            </h1>
            <p className={`jk-body ${styles.lede}`}>{startIntro.body}</p>
            <DemoFormNotice>{startIntro.notice}</DemoFormNotice>
            <StartForm routine={routine} />
          </div>
          <div className={styles.visual}>
            <ClayImage
              alt={startIntro.imageAlt}
              className={styles.photo}
              fluid
              id={startIntro.imageId}
              priority
              sizes="(min-width: 640px) 36vw, 0px"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
