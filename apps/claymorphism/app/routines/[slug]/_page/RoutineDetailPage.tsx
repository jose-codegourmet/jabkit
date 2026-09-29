import { Button } from "@/atoms/button";
import { ClayImage } from "../../../_components/ClayImage";
import { ClaySurface } from "../../../_components/ClaySurface";
import { CtaBand } from "../../../_components/CtaBand";
import { ExampleBoard } from "../../../_components/ExampleBoard";
import { RoutineCard } from "../../../_components/RoutineCard";
import { otherRoutines } from "../../../_data/routines";
import type { Routine } from "../../../_data/types";
import { breadcrumbLabel, detailCopy } from "./content";
import styles from "./routine-detail.module.css";

export function RoutineDetailPage({ routine }: { routine: Routine }) {
  const others = otherRoutines(routine.slug);

  return (
    <div className={styles.page}>
      <nav aria-label="Breadcrumb">
        <ol className={styles.crumbs}>
          <li>
            <a href="/routines">{breadcrumbLabel}</a>
          </li>
          <li aria-hidden="true">/</li>
          <li aria-current="page" className={styles.current}>
            {routine.name}
          </li>
        </ol>
      </nav>

      <section aria-labelledby="routine-heading" className={styles.header}>
        <div className={styles.copy}>
          <h1 className="jk-heading" id="routine-heading">
            {routine.name} routine
          </h1>
          <p className="jk-body">
            {routine.stepCountLabel} · {routine.ageNote}
          </p>
          <div className={styles.actions}>
            <Button asChild>
              <a href={`/start?routine=${routine.slug}`}>
                {detailCopy.useRoutine}
              </a>
            </Button>
            <Button asChild variant="secondary">
              <a href="/routines">{detailCopy.browse}</a>
            </Button>
          </div>
        </div>
        <ClayImage
          alt=""
          className={styles.photo}
          decorative
          fluid
          id={routine.imageId}
          priority
          sizes="(min-width: 768px) 42vw, 100vw"
        />
      </section>

      <section className={styles.section}>
        <ExampleBoard
          allDoneMessage={routine.completion}
          steps={routine.steps}
          title={`${routine.name} board`}
        />
      </section>

      <section aria-labelledby="tip-heading" className={styles.section}>
        <ClaySurface className={styles.tip} tone="butter">
          <h2 className="jk-heading" id="tip-heading">
            {detailCopy.tipTitle}
          </h2>
          <p className="jk-body">{routine.tip}</p>
        </ClaySurface>
      </section>

      <section
        aria-labelledby="other-routines-heading"
        className={styles.others}
      >
        <h2 className="jk-heading" id="other-routines-heading">
          {detailCopy.otherTitle}
        </h2>
        <ul className={styles.grid}>
          {others.map((item) => (
            <li key={item.slug}>
              <RoutineCard
                className={styles.card}
                routine={item}
                summary="index"
              />
            </li>
          ))}
        </ul>
      </section>

      <CtaBand className={styles.cta} />
    </div>
  );
}
