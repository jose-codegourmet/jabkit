import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Card, CardHeader, CardTitle } from "@/atoms/card";
import { ChildTile } from "../../_components/ChildTile";
import { ClayImage } from "../../_components/ClayImage";
import { CtaBand } from "../../_components/CtaBand";
import { InitialAvatar } from "../../_components/InitialAvatar";
import { PageIntro } from "../../_components/PageIntro";
import { PlaceholderText } from "../../_components/PlaceholderText";
import { getMember } from "../../_data/members";
import { CelebrateDemo } from "./CelebrateDemo";
import {
  buildStep,
  caregivers,
  celebrateStep,
  howItWorksIntro,
  nextStep,
  plansChange,
  processNote,
} from "./content";
import styles from "./how-it-works.module.css";
import { StepBuilder } from "./StepBuilder";

const stateClass: Record<(typeof plansChange.states)[number]["id"], string> = {
  normal: "",
  hover: "jk-clay-hover",
  pressed: "jk-clay-pressed",
  focus: "jk-clay-focus",
  disabled: "jk-clay-disabled",
};

export function HowItWorksPage() {
  return (
    <div className={styles.page}>
      <PageIntro
        action={{
          href: howItWorksIntro.actionHref,
          label: howItWorksIntro.actionLabel,
        }}
        backgroundId={howItWorksIntro.backgroundId}
        body={howItWorksIntro.body}
        title={howItWorksIntro.title}
      />

      <section aria-labelledby="build-heading" className={styles.section}>
        <div className={`${styles.split} ${styles.imageLeft}`}>
          <div className={styles.copy}>
            <h2 className="jk-heading" id="build-heading">
              {buildStep.title}
            </h2>
            <p className="jk-body">{buildStep.body}</p>
            <ul className={styles.checklist}>
              {buildStep.checklist.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <StepBuilder />
          </div>
          <ClayImage
            alt=""
            className={`${styles.photo} ${styles.stepPhoto}`}
            decorative
            fluid
            id={buildStep.imageId}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </section>

      <section aria-labelledby="next-heading" className={styles.section}>
        <div className={`${styles.split} ${styles.imageLeft}`}>
          <div className={styles.copy}>
            <h2 className="jk-heading" id="next-heading">
              {nextStep.title}
            </h2>
            <p className="jk-body">{nextStep.body}</p>
            <ChildTile
              className={styles.childView}
              step={nextStep.current}
              thenStep={nextStep.following}
            />
          </div>
          <ClayImage
            alt=""
            className={`${styles.photo} ${styles.stepPhoto}`}
            decorative
            fluid
            id={nextStep.imageId}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </section>

      <section aria-labelledby="celebrate-heading" className={styles.section}>
        <div className={`${styles.split} ${styles.imageLeft}`}>
          <div className={styles.copy}>
            <h2 className="jk-heading" id="celebrate-heading">
              {celebrateStep.title}
            </h2>
            <p className="jk-body">{celebrateStep.body}</p>
            <CelebrateDemo />
          </div>
          <ClayImage
            alt=""
            className={`${styles.photo} ${styles.stepPhoto}`}
            decorative
            fluid
            id={celebrateStep.imageId}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </section>

      <section aria-labelledby="change-heading" className={styles.section}>
        <div className={styles.split}>
          <div className={styles.copy}>
            <h2 className="jk-heading" id="change-heading">
              {plansChange.title}
            </h2>
            <p className="jk-body">{plansChange.body}</p>
          </div>
          <ClayImage
            alt=""
            className={`${styles.photo} ${styles.changePhoto}`}
            decorative
            fluid
            id={plansChange.imageId}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
        <ul className={styles.actionGrid}>
          {plansChange.tiles.map((tile) => (
            <li key={tile}>
              <Card className={`${styles.actionCard} ring-0`}>
                <CardHeader>
                  <CardTitle>
                    <h3 className={styles.actionTitle}>{tile}</h3>
                  </CardTitle>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
        <p className={styles.placeholderLine}>
          <PlaceholderText text={plansChange.placeholder} />
        </p>
        <ul
          aria-label={plansChange.stateStripLabel}
          className={styles.stateList}
        >
          {plansChange.states.map((state) => (
            <li className={styles.stateItem} key={state.id}>
              <span className={styles.stateLabel}>{state.label}</span>
              <Button
                className={stateClass[state.id] || undefined}
                disabled={state.id === "disabled"}
                type="button"
              >
                {plansChange.tiles[0]}
              </Button>
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="caregivers-heading" className={styles.section}>
        <div className={styles.split}>
          <div className={styles.copy}>
            <h2 className="jk-heading" id="caregivers-heading">
              {caregivers.title}
            </h2>
            <p className="jk-body">{caregivers.body}</p>
            <p className={styles.placeholderLine}>
              <PlaceholderText text={caregivers.placeholder} />
            </p>
            <ul className={styles.people}>
              {caregivers.people.map((person) => {
                const member = getMember(person.id);
                if (!member) return null;
                return (
                  <li key={person.id}>
                    <InitialAvatar memberId={person.id} size="lg" />
                    <span>{member.firstName}</span>
                    {person.owner ? (
                      <Badge>{caregivers.ownerBadge}</Badge>
                    ) : null}
                  </li>
                );
              })}
            </ul>
          </div>
          <ClayImage
            alt=""
            className={`${styles.photo} ${styles.carePhoto}`}
            decorative
            fluid
            id={caregivers.imageId}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </section>

      <section aria-labelledby="process-heading" className={styles.section}>
        <div className={styles.split}>
          <div className={styles.copy}>
            <h2 className="jk-heading" id="process-heading">
              {processNote.title}
            </h2>
            <p className="jk-body">{processNote.body}</p>
          </div>
          <ClayImage
            alt=""
            className={`${styles.photo} ${styles.processPhoto}`}
            decorative
            fluid
            id={processNote.imageId}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </section>

      <CtaBand className={styles.cta} hideHowItWorksLink />
    </div>
  );
}
