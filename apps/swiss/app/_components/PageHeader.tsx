import styles from "../style.module.css";
import { Grid, GridItem } from "./Grid";

export function PageHeader({
  index,
  title,
  body,
  count,
}: {
  index: string;
  title: string;
  body: string;
  count?: string;
}) {
  return (
    <header className={styles.pageHeader}>
      <Grid>
        <GridItem span={{ mobile: 4, tablet: 1, desktop: 1 }}>
          <p className={styles.pageIndex} aria-hidden="true">
            {index}
          </p>
        </GridItem>
        <GridItem
          start={{ mobile: 1, tablet: 2, desktop: 2 }}
          span={{ mobile: 4, tablet: 6, desktop: 7 }}
        >
          <h1 className={styles.pageTitle}>{title}</h1>
          <p className={styles.pageBody}>{body}</p>
          {count ? <p className={styles.pageCount}>{count}</p> : null}
        </GridItem>
      </Grid>
    </header>
  );
}
