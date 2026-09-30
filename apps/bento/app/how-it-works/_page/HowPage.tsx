import { ArrowDownIcon, InfoCircledIcon } from "@radix-ui/react-icons";
import { Alert, AlertDescription } from "@/atoms/alert";
import { cn } from "@/lib/cn";
import { BenImage } from "../../_components/BenImage";
import { BentoGrid, Tile, TileLabel } from "../../_components/Bento";
import { CtaBand } from "../../_components/CtaBand";
import { MiniKanban, MiniTable } from "../../_components/MiniPreviews";
import { Placeholder } from "../../_components/Placeholder";
import { VisitsChart } from "../../_components/VisitsChart";
import { thisWeek } from "../../_data/weekly";
import shared from "../../style.module.css";
import { header, type StepPreview, setup, steps } from "./content";
import styles from "./how.module.css";

function Preview({ kind }: { kind: StepPreview }) {
  if (kind === "bookings") return <MiniTable />;
  if (kind === "tasks") return <MiniKanban />;
  return (
    <div className={styles.chartFrame}>
      <VisitsChart size="mini" textMode="caption" week={thisWeek} />
    </div>
  );
}

export function HowPage() {
  return (
    <>
      <section
        aria-labelledby="how-heading"
        className={cn(shared.container, styles.header)}
      >
        <BentoGrid>
          <Tile span={8} surfaceClassName={styles.headerCopy}>
            <h1 className={cn("jk-display", styles.title)} id="how-heading">
              {header.title}
            </h1>
            <p className="jk-lead">{header.body}</p>
          </Tile>
          <Tile
            kind="action"
            span={4}
            surfaceClassName={styles.index}
            tone="evergreen"
          >
            <nav aria-label={steps.indexLabel}>
              <ol className={styles.indexList}>
                {steps.items.map((step, index) => (
                  <li key={step.id}>
                    <a className={styles.indexLink} href={`#step-${step.id}`}>
                      <span aria-hidden="true" className={styles.indexNumber}>
                        {index + 1}
                      </span>
                      <span>{step.label}</span>
                      <ArrowDownIcon
                        aria-hidden="true"
                        className={styles.indexArrow}
                      />
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </Tile>
        </BentoGrid>
      </section>

      <section
        aria-labelledby="how-steps-heading"
        className={cn(shared.container, shared.section)}
      >
        <h2 className="sr-only-text" id="how-steps-heading">
          {steps.srTitle}
        </h2>
        <ol className={styles.steps}>
          {steps.items.map((step, index) => {
            const headingId = `step-${step.id}-heading`;
            return (
              <li
                className={cn(
                  shared.grid,
                  styles.step,
                  index % 2 === 1 && styles.stepFlipped,
                )}
                id={`step-${step.id}`}
                key={step.id}
              >
                <Tile
                  className={styles.copyTile}
                  span={7}
                  surfaceClassName={styles.stepCopy}
                >
                  <div className={styles.stepLabel}>
                    <span aria-hidden="true" className={styles.stepNumber}>
                      {index + 1}
                    </span>
                    <TileLabel>{step.label}</TileLabel>
                  </div>
                  <h3 className={styles.stepTitle} id={headingId}>
                    {step.title}
                  </h3>
                  <p className={cn("jk-lead", styles.stepBody)}>{step.body}</p>
                  <div className={styles.stepPreview}>
                    <Preview kind={step.preview} />
                  </div>
                </Tile>
                <Tile
                  className={styles.photoTile}
                  flush
                  span={5}
                  surfaceClassName={styles.stepPhoto}
                >
                  <BenImage
                    alt={step.imageAlt}
                    fit="cover"
                    id={step.imageId}
                    sizes="(min-width: 1024px) 34vw, (min-width: 768px) 50vw, 100vw"
                  />
                </Tile>
              </li>
            );
          })}
        </ol>
      </section>

      <section
        aria-labelledby="how-setup-heading"
        className={cn(shared.container, shared.section)}
      >
        <BentoGrid>
          <Tile span={7} surfaceClassName={styles.setupCopy}>
            <h2 className="jk-heading" id="how-setup-heading">
              {setup.title}
            </h2>
            <p className="jk-lead">{setup.body}</p>
          </Tile>
          <Tile flush span={5} surfaceClassName={styles.setupNote}>
            {/* Static reference note, not a live message: role="note" replaces the default role="alert". */}
            <Alert className={styles.alert} role="note">
              <InfoCircledIcon aria-hidden="true" />
              <AlertDescription className={styles.alertText}>
                <ul className={styles.setupList}>
                  {setup.items.map((item) => (
                    <li key={item.label}>
                      <strong>{item.label}</strong>{" "}
                      <Placeholder>{item.value}</Placeholder>
                    </li>
                  ))}
                </ul>
              </AlertDescription>
            </Alert>
          </Tile>
        </BentoGrid>
      </section>

      <CtaBand />
    </>
  );
}
