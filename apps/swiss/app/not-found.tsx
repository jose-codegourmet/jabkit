import Link from "next/link";
import { Button } from "@/atoms/button";
import { Grid, GridItem } from "./_components/Grid";
import { SwissImage } from "./_components/SwissImage";
export default function NotFound() {
  return (
    <section className="py-[var(--jk-space-section)]">
      <Grid>
        <GridItem span={{ mobile: 4, tablet: 5, desktop: 7 }}>
          <p className="m-0 text-[var(--swi-signal)] text-5xl font-bold tracking-[-.06em]">
            4/04
          </p>
          <h1 className="mt-8 mb-0 max-w-[8ch] text-[clamp(4rem,10vw,9rem)] font-bold leading-[.86] tracking-[-.06em]">
            Missing frame.
          </h1>
          <p className="mt-8 text-[var(--jk-text-lead)]">
            This page isn't in the program.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Button asChild>
              <Link href="/program">Go to the program</Link>
            </Button>
            <Button asChild variant="secondary">
              <Link href="/schedule">Open the schedule</Link>
            </Button>
          </div>
        </GridItem>
        <GridItem
          start={{ desktop: 8 }}
          span={{ mobile: 4, tablet: 3, desktop: 5 }}
        >
          <SwissImage
            id="swi-404-frame"
            ratio="4:5"
            priority
            sizes="(max-width:767px) 100vw,40vw"
          />
        </GridItem>
      </Grid>
    </section>
  );
}
