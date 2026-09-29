import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Card, CardDescription, CardHeader, CardTitle } from "@/atoms/card";
import { ClayImage } from "../_components/ClayImage";
import { ClaySurface } from "../_components/ClaySurface";
import { CtaBand } from "../_components/CtaBand";
import { ExampleBoard } from "../_components/ExampleBoard";
import { FaqAccordion } from "../_components/FaqAccordion";
import { PlaceholderText } from "../_components/PlaceholderText";
import { PlanCard } from "../_components/PlanCard";
import { RoutineCard } from "../_components/RoutineCard";
import { gettingStartedFaqs } from "../_data/faq";
import { plans } from "../_data/plans";
import { homeMorningBoard, routines } from "../_data/routines";
import styles from "./home.module.css";
import { ProductPreview } from "./ProductPreview";

const howSteps = [
  {
    title: "Build a board",
    body: "Pick a routine, add the steps, and choose who owns each one.",
    imageId: "cla-step-build",
  },
  {
    title: "Choose the next step",
    body: "Your child sees one clear thing to do now, not the whole list at once.",
    imageId: "cla-step-next",
  },
  {
    title: "Celebrate progress",
    body: "Tap done, hear a little cheer, and collect a badge for the day.",
    imageId: "cla-step-celebrate",
  },
] as const;

const benefits = [
  {
    title: "Everyone knows what comes next",
    body: "Each step shows who owns it, so nobody has to ask twice.",
    imageId: "cla-benefit-owners",
  },
  {
    title: "Flexible when life changes",
    body: "Swap, skip, or move a step in a few taps when the morning goes sideways.",
    imageId: "cla-benefit-change",
  },
  {
    title: "Small wins are worth seeing",
    body: "Children see their progress in words and pictures, and badges mark the day.",
    imageId: "cla-benefit-wins",
  },
] as const;

export function HomePage() {
  return (
    <>
      <section aria-labelledby="home-hero-heading" className={styles.hero}>
        <ClaySurface className={styles.heroCopy}>
          <p className={styles.eyebrow}>Family routines, made visible</p>
          <h1 className="jk-display" id="home-hero-heading">
            Make room for easier mornings.
          </h1>
          <p className="jk-lead">
            Build a routine together, see the next small step, and celebrate
            what got done.
          </p>
          <div className={styles.actions}>
            <Button asChild size="lg">
              <a href="/start">Create a free board</a>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <a href="/how-it-works">See how it works</a>
            </Button>
          </div>
          <p className={styles.fine}>
            Free family plan. No card needed to start.{" "}
            <PlaceholderText text="[Confirm no card required — client to confirm]" />
          </p>
        </ClaySurface>
        <div className={styles.heroStage}>
          <div className={styles.heroMedia}>
            <ClayImage
              alt=""
              className={styles.heroImage}
              decorative
              id="cla-hero"
              mobileId="cla-hero-mobile"
              priority
              sizes="(min-width: 900px) 46vw, 40vw"
            />
          </div>
          <ExampleBoard
            allDoneMessage={homeMorningBoard.allDone}
            className={styles.heroBoard}
            dayLabel={homeMorningBoard.dayLabel}
            steps={homeMorningBoard.steps}
            title={homeMorningBoard.title}
          />
        </div>
      </section>

      <section
        aria-labelledby="home-how-heading"
        className={styles.section}
        id="how"
      >
        <h2 className="jk-heading" id="home-how-heading">
          Three small steps
        </h2>
        <ol className={styles.howGrid}>
          {howSteps.map((step, index) => (
            <li key={step.title}>
              <Card className={`${styles.tile} ring-0`}>
                <ClayImage
                  alt=""
                  className={styles.stepImage}
                  decorative
                  fluid
                  id={step.imageId}
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <CardHeader className={styles.tileHeader}>
                  <Badge className={`${styles.chip} h-11 w-11 px-0`}>
                    {index + 1}
                  </Badge>
                  <CardTitle>
                    <h3 className={styles.tileTitle}>{step.title}</h3>
                  </CardTitle>
                  <CardDescription
                    className={`${styles.tileBody} text-base text-card-foreground`}
                  >
                    {step.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ol>
        <a className={styles.more} href="/how-it-works">
          Read the full walkthrough
        </a>
      </section>

      <ProductPreview />

      <section
        aria-labelledby="home-benefits-heading"
        className={styles.section}
      >
        <h2 className="jk-heading" id="home-benefits-heading">
          Made for real family days
        </h2>
        <ul className={styles.benefitGrid}>
          {benefits.map((benefit) => (
            <li key={benefit.title}>
              <Card className={`${styles.tile} ring-0`}>
                <ClayImage
                  alt=""
                  className={styles.benefitImage}
                  decorative
                  fluid
                  id={benefit.imageId}
                  sizes="(min-width: 768px) 30vw, 100vw"
                />
                <CardHeader className={styles.tileHeader}>
                  <CardTitle>
                    <h3 className={styles.tileTitle}>{benefit.title}</h3>
                  </CardTitle>
                  <CardDescription
                    className={`${styles.tileBody} text-base text-card-foreground`}
                  >
                    {benefit.body}
                  </CardDescription>
                </CardHeader>
              </Card>
            </li>
          ))}
        </ul>
      </section>

      <section
        aria-labelledby="home-routines-heading"
        className={styles.section}
      >
        <div className={styles.sectionIntro}>
          <h2 className="jk-heading" id="home-routines-heading">
            Start from a routine that fits
          </h2>
          <p className="jk-body">Copy a starter routine, then make it yours.</p>
        </div>
        <ul className={styles.routineGrid}>
          {routines.map((routine) => (
            <li key={routine.slug}>
              <RoutineCard routine={routine} />
            </li>
          ))}
        </ul>
        <a className={styles.more} href="/routines">
          See all routine ideas
        </a>
      </section>

      <section
        aria-labelledby="home-pricing-heading"
        className={styles.section}
        id="pricing"
      >
        <h2 className="jk-heading" id="home-pricing-heading">
          Start free. Add Plus when you want more.
        </h2>
        <ul className={styles.planGrid}>
          {plans.map((plan) => (
            <li key={plan.id}>
              <PlanCard plan={plan} variant="compact" />
            </li>
          ))}
        </ul>
        <a className={styles.more} href="/pricing">
          Compare plans
        </a>
      </section>

      <section
        aria-labelledby="home-faq-heading"
        className={styles.section}
        id="faq"
      >
        <h2 className="jk-heading" id="home-faq-heading">
          Questions parents ask first
        </h2>
        <FaqAccordion items={gettingStartedFaqs} />
        <a className={styles.more} href="/faq">
          Read all questions
        </a>
      </section>

      <CtaBand className={styles.ctaBand} />
    </>
  );
}
