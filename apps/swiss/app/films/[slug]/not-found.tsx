import Link from "next/link";
import { Button } from "@/atoms/button";
import { Grid, GridItem } from "../../_components/Grid";
import styles from "./_page/film.module.css";
export default function FilmNotFound() {
  return (
    <section className={styles.notFound}>
      <Grid>
        <GridItem span={{ mobile: 4, tablet: 6, desktop: 8 }}>
          <p className={styles.index}>Film / —</p>
          <h1>Film not found.</h1>
          <p>This title isn't in the FRAME/01 demo program.</p>
          <Button asChild>
            <Link href="/program">Go to the program</Link>
          </Button>
        </GridItem>
      </Grid>
    </section>
  );
}
