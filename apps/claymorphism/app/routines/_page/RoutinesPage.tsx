import { Button } from "@/atoms/button";
import { ClayImage } from "../../_components/ClayImage";
import { ClaySurface } from "../../_components/ClaySurface";
import { PageIntro } from "../../_components/PageIntro";
import { RoutineCard } from "../../_components/RoutineCard";
import { routines } from "../../_data/routines";
import { makeYourOwn, openRoutineLabel, routinesIntro } from "./content";
import styles from "./routines.module.css";

export function RoutinesPage() {
  return (
    <div className={styles.page}>
      <PageIntro
        body={routinesIntro.body}
        className={styles.intro}
        title={routinesIntro.title}
      />

      <section className={styles.section}>
        <ul className={styles.grid}>
          {routines.map((routine) => (
            <li key={routine.slug}>
              <RoutineCard
                className={styles.card}
                linkLabel={openRoutineLabel}
                routine={routine}
                summary="index"
              />
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="make-your-own-heading"
        className={styles.section}
      >
        <ClaySurface className={styles.band}>
          <div className={styles.bandCopy}>
            <h2 className="jk-heading" id="make-your-own-heading">
              {makeYourOwn.title}
            </h2>
            <p className="jk-body">{makeYourOwn.body}</p>
            <Button asChild>
              <a href={makeYourOwn.buttonHref}>{makeYourOwn.buttonLabel}</a>
            </Button>
          </div>
          <ClayImage
            alt=""
            className={styles.board}
            decorative
            fluid
            id={makeYourOwn.imageId}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </ClaySurface>
      </section>
    </div>
  );
}
