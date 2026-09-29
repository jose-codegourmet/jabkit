import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Card, CardContent } from "@/atoms/card";
import { ChildTile } from "../../_components/ChildTile";
import { ClayImage } from "../../_components/ClayImage";
import { ClaySurface } from "../../_components/ClaySurface";
import { CtaBand } from "../../_components/CtaBand";
import { ExampleBoard } from "../../_components/ExampleBoard";
import { InitialAvatar } from "../../_components/InitialAvatar";
import { PageIntro } from "../../_components/PageIntro";
import { PlaceholderText } from "../../_components/PlaceholderText";
import { getMember } from "../../_data/members";
import { homeMorningBoard } from "../../_data/routines";
import {
  forCaregivers,
  forChildren,
  forFamiliesIntro,
  forParents,
  privacyPlain,
  routineIdeas,
} from "./content";
import styles from "./for-families.module.css";

const owners = homeMorningBoard.steps.reduce<
  { id: (typeof homeMorningBoard.steps)[number]["owner"]; steps: string[] }[]
>((rows, step) => {
  const existing = rows.find((row) => row.id === step.owner);
  if (existing) {
    existing.steps.push(step.label);
    return rows;
  }
  rows.push({ id: step.owner, steps: [step.label] });
  return rows;
}, []);

export function ForFamiliesPage() {
  return (
    <div className={styles.page}>
      <PageIntro
        backgroundId={forFamiliesIntro.backgroundId}
        body={forFamiliesIntro.body}
        className={styles.intro}
        title={forFamiliesIntro.title}
      />

      <section aria-labelledby="parents-heading" className={styles.section}>
        <div className={styles.split}>
          <div className={styles.copy}>
            <h2 className="jk-heading" id="parents-heading">
              {forParents.title}
            </h2>
            <Card className={`${styles.plainCard} ring-0`}>
              <CardContent className={styles.cardBody}>
                <ul className={styles.bullets}>
                  <li>{forParents.bullets[0]}</li>
                  <li>
                    <PlaceholderText text={forParents.placeholder} />
                  </li>
                  {forParents.bullets.slice(1).map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
          <ExampleBoard
            allDoneMessage={homeMorningBoard.allDone}
            className={styles.board}
            compact
            dayLabel={homeMorningBoard.dayLabel}
            steps={homeMorningBoard.steps}
            title={homeMorningBoard.title}
          />
        </div>
      </section>

      <section aria-labelledby="children-heading" className={styles.section}>
        <div className={styles.split}>
          <div className={styles.copy}>
            <h2 className="jk-heading" id="children-heading">
              {forChildren.title}
            </h2>
            <ul className={styles.bullets}>
              {forChildren.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ChildTile className={styles.childTile} step={forChildren.step} />
            <ul aria-label="I did it states" className={styles.stateList}>
              {forChildren.states.map((state) => (
                <li className={styles.stateItem} key={state.id}>
                  <span className={styles.stateLabel}>{state.label}</span>
                  <Button
                    className={`${styles.stateButton} ${state.className}`}
                    tabIndex={-1}
                    type="button"
                  >
                    {forChildren.action}
                  </Button>
                </li>
              ))}
            </ul>
          </div>
          <ClayImage
            alt=""
            className={`${styles.photo} ${styles.kidsPhoto}`}
            decorative
            fluid
            id={forChildren.imageId}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </section>

      <section aria-labelledby="caregivers-heading" className={styles.section}>
        <div className={styles.split}>
          <div className={styles.copy}>
            <h2 className="jk-heading" id="caregivers-heading">
              {forCaregivers.title}
            </h2>
            <ul className={styles.bullets}>
              {forCaregivers.bullets.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <ul className={styles.people}>
              {owners.map((owner) => {
                const member = getMember(owner.id);
                if (!member) return null;
                return (
                  <li key={owner.id}>
                    <InitialAvatar memberId={owner.id} size="lg" />
                    <span>{member.firstName}</span>
                    {owner.steps.map((step) => (
                      <Badge key={step}>{step}</Badge>
                    ))}
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
            id={forCaregivers.imageId}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </section>

      <section aria-labelledby="privacy-heading" className={styles.section}>
        <div className={styles.split}>
          <Card className={`${styles.plainCard} ring-0`}>
            <CardContent className={styles.cardBody}>
              <h2 className="jk-heading" id="privacy-heading">
                {privacyPlain.title}
              </h2>
              <p className="jk-body">{privacyPlain.body}</p>
              <p className={styles.placeholderLine}>
                <PlaceholderText text={privacyPlain.placeholder} />
              </p>
              <a className={styles.textLink} href={privacyPlain.linkHref}>
                {privacyPlain.linkLabel}
              </a>
            </CardContent>
          </Card>
          <ClayImage
            alt=""
            className={`${styles.photo} ${styles.privacyPhoto}`}
            decorative
            fluid
            id={privacyPlain.imageId}
            sizes="(min-width: 768px) 40vw, 100vw"
          />
        </div>
      </section>

      <section aria-labelledby="routines-heading" className={styles.section}>
        <ClaySurface className={styles.band}>
          <h2 className="jk-heading" id="routines-heading">
            {routineIdeas.title}
          </h2>
          <p className="jk-body">{routineIdeas.body}</p>
          <Button asChild>
            <a href={routineIdeas.buttonHref}>{routineIdeas.buttonLabel}</a>
          </Button>
        </ClaySurface>
      </section>

      <CtaBand className={styles.cta} />
    </div>
  );
}
