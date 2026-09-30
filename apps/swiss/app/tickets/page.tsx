import type { Metadata, Route } from "next";
import Link from "next/link";
import { Button } from "@/atoms/button";
import { Card } from "@/atoms/card";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/atoms/data-table";
import { DemoNotice } from "../_components/DemoNotice";
import { FaqAccordion } from "../_components/FaqAccordion";
import { Grid, GridItem } from "../_components/Grid";
import { PageHeader } from "../_components/PageHeader";
import { passComparison, passes } from "../_data/passes";
import styles from "./_page/tickets.module.css";
export const metadata: Metadata = {
  title: "Tickets & passes — FRAME/01 Film Festival",
  description:
    "Compare FRAME/01 single screening tickets, day passes, and the festival pass. Demo listing: prices and availability are placeholders pending approval.",
};
export default function Page() {
  return (
    <>
      <PageHeader
        index="05"
        title="Tickets & passes"
        body="Three ways in. Pick one screening, one day, or all four."
      />
      <Grid>
        <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
          <p className={styles.notice}>
            Demo pricing. Prices and availability are placeholders until the
            festival confirms them.
          </p>
        </GridItem>
      </Grid>
      <section className={styles.plans}>
        <Grid>
          {passes.map((plan, index) => (
            <GridItem
              key={plan.id}
              span={{ mobile: 4, tablet: index === 2 ? 8 : 4, desktop: 4 }}
            >
              <Card className={styles.plan}>
                <p className={styles.index}>0{index + 1}</p>
                <h2>{plan.name}</h2>
                <p className={styles.price}>{plan.price}</p>
                <p>{plan.description}</p>
                <ul>
                  {plan.includes.map((i) => (
                    <li key={i}>✓ {i}</li>
                  ))}
                </ul>
                {plan.unavailableExample ? (
                  <p className={styles.unavailable}>
                    — {plan.unavailableExample}
                  </p>
                ) : null}
                <Button asChild>
                  <Link href={plan.action.href as Route}>
                    {plan.action.label}
                  </Link>
                </Button>
              </Card>
            </GridItem>
          ))}
        </Grid>
      </section>
      <section className={styles.section}>
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 8, desktop: 12 }}>
            <Table>
              <TableCaption>What each option includes</TableCaption>
              <TableHeader>
                <TableRow>
                  <TableHead>Option</TableHead>
                  <TableHead>Single screening</TableHead>
                  <TableHead>Day pass</TableHead>
                  <TableHead>Festival pass</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {passComparison.map((row) => (
                  <TableRow key={row.label}>
                    <TableHead>{row.label}</TableHead>
                    <TableCell>{row.single}</TableCell>
                    <TableCell>{row.day}</TableCell>
                    <TableCell>{row.festival}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </GridItem>
          <GridItem span={{ mobile: 4, tablet: 6, desktop: 7 }}>
            <p className={styles.concession}>
              Students and other concessions: [Concession policy — client to
              confirm].
            </p>
          </GridItem>
        </Grid>
      </section>
      <section className={styles.section}>
        <Grid>
          <GridItem span={{ mobile: 4, tablet: 7, desktop: 8 }}>
            <h2 className={styles.heading}>Questions before you choose?</h2>
            <FaqAccordion itemIds={["refunds-policy", "access-venues"]} />
            <Link className={styles.allQuestions} href="/faq">
              All questions ↗
            </Link>
          </GridItem>
        </Grid>
      </section>
      <DemoNotice />
    </>
  );
}
