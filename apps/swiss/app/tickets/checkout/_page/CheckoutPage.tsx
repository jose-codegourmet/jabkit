"use client";
import Link from "next/link";
import { type FormEvent, useEffect, useState } from "react";
import { Button } from "@/atoms/button";
import { Card } from "@/atoms/card";
import { Checkbox } from "@/atoms/checkbox";
import { Input } from "@/atoms/input";
import { Textarea } from "@/atoms/textarea";
import { DemoNotice } from "../../../_components/DemoNotice";
import { Grid, GridItem } from "../../../_components/Grid";
import { films } from "../../../_data/films";
import { getPass } from "../../../_data/passes";
import { getScreening } from "../../../_data/screenings";
import { getVenue } from "../../../_data/venues";
import styles from "./checkout.module.css";

type Errors = { name?: string; email?: string; confirm?: string };
export function CheckoutPage() {
  const [screeningId, setScreeningId] = useState<string>(),
    [passId, setPassId] = useState<string>(),
    [quantity, setQuantity] = useState(1),
    [name, setName] = useState(""),
    [email, setEmail] = useState(""),
    [needs, setNeeds] = useState(""),
    [confirmed, setConfirmed] = useState(false),
    [errors, setErrors] = useState<Errors>({}),
    [loading, setLoading] = useState(false),
    [success, setSuccess] = useState(false);
  useEffect(() => {
    const q = new URLSearchParams(location.search);
    setScreeningId(q.get("screening") ?? undefined);
    setPassId(q.get("pass") ?? undefined);
  }, []);
  const screening = screeningId ? getScreening(screeningId) : undefined;
  const pass = passId ? getPass(passId) : undefined;
  const film = screening
    ? films.find((f) => f.slug === screening.filmSlug)
    : undefined;
  const venue = screening ? getVenue(screening.venueSlug) : undefined;
  const unavailable =
    screening?.status === "sold-out" || screening?.status === "not-on-sale";
  const submit = (e: FormEvent) => {
    e.preventDefault();
    const next: Errors = {};
    if (!name.trim()) next.name = "Enter your name.";
    if (!/^\S+@\S+\.\S+$/.test(email))
      next.email = "Enter an email address like name@example.com.";
    if (!confirmed) next.confirm = "Confirm you understand this is a demo.";
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
    }, 800);
  };
  const reset = () => {
    setSuccess(false);
    setName("");
    setEmail("");
    setNeeds("");
    setConfirmed(false);
    setErrors({});
  };
  if (success)
    return (
      <>
        <section className={styles.success}>
          <h1>Demo order complete.</h1>
          <p>
            This was a demonstration. No ticket was issued and nothing was
            charged.
          </p>
          <p className={styles.reference}>Demo reference: F01-DEMO-101</p>
          <div>
            <Button asChild>
              <Link href="/program">Back to the program</Link>
            </Button>
            <Button variant="secondary" onClick={reset}>
              Start again
            </Button>
          </div>
        </section>
        <DemoNotice />
      </>
    );
  const selection = screening
    ? `${film?.title} · ${screening.dayLabel}, ${screening.time} · ${venue?.name}`
    : pass?.name;
  return (
    <>
      <div className={styles.banner}>
        Demo checkout. No payment is taken and no ticket is issued.
      </div>
      <section className={styles.checkout}>
        <Grid>
          <GridItem
            className={styles.summaryWrap}
            start={{ desktop: 8 }}
            span={{ mobile: 4, tablet: 3, desktop: 5 }}
          >
            <Card className={styles.summary}>
              <h2>Your selection</h2>
              {selection ? (
                <>
                  <p className={styles.selection}>{selection}</p>
                  <div className={styles.quantity}>
                    <span>Quantity</span>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.max(1, quantity - 1))}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <output>{quantity}</output>
                    <button
                      type="button"
                      onClick={() => setQuantity(Math.min(6, quantity + 1))}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                  <p>Price: [Price — client to confirm]</p>
                  <Link href={screening ? "/schedule" : "/tickets"}>
                    Change selection
                  </Link>
                </>
              ) : (
                <>
                  <p>
                    Nothing selected yet. Choose a screening from the schedule
                    or a pass.
                  </p>
                  <div className={styles.actions}>
                    <Button asChild>
                      <Link href="/schedule">Open schedule</Link>
                    </Button>
                    <Button asChild variant="secondary">
                      <Link href="/tickets">Compare passes</Link>
                    </Button>
                  </div>
                </>
              )}
              <DemoNotice variant="inline" />
            </Card>
          </GridItem>
          <GridItem
            className={styles.formWrap}
            start={{ desktop: 1 }}
            span={{ mobile: 4, tablet: 5, desktop: 6 }}
          >
            {unavailable ? (
              <div className={styles.unavailable}>
                <h1>
                  {screening?.status === "sold-out"
                    ? "✕ This screening is sold out. Choose another screening."
                    : "— Tickets for this screening aren't on sale yet."}
                </h1>
                <Button asChild>
                  <Link href="/schedule">Open schedule</Link>
                </Button>
              </div>
            ) : (
              <form onSubmit={submit} noValidate>
                <h1>Your details</h1>
                {Object.keys(errors).length ? (
                  <div className={styles.errorSummary} role="alert">
                    Check {Object.keys(errors).length} fields before continuing.
                  </div>
                ) : null}
                <label htmlFor="checkout-name" id="name-label">
                  Full name
                  <Input
                    id="checkout-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    aria-invalid={!!errors.name}
                    aria-describedby="name-help name-error"
                  />
                </label>
                <p id="name-help">As it should appear on the booking.</p>
                {errors.name ? (
                  <p id="name-error" className={styles.error}>
                    ! {errors.name}
                  </p>
                ) : null}
                <label htmlFor="checkout-email">
                  Email
                  <Input
                    id="checkout-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    aria-invalid={!!errors.email}
                    aria-describedby="email-help email-error"
                  />
                </label>
                <p id="email-help">
                  We'd send your booking here. In this demo, nothing is sent.
                </p>
                {errors.email ? (
                  <p id="email-error" className={styles.error}>
                    ! {errors.email}
                  </p>
                ) : null}
                <label htmlFor="checkout-needs">
                  Access needs (optional)
                  <Textarea
                    id="checkout-needs"
                    value={needs}
                    onChange={(e) => setNeeds(e.target.value)}
                  />
                </label>
                <p>Tell us about seating or access needs for this visit.</p>
                <div className={styles.check}>
                  <Checkbox
                    id="checkout-confirm"
                    checked={confirmed}
                    onCheckedChange={(v) => setConfirmed(v === true)}
                    aria-invalid={!!errors.confirm}
                  />
                  <label htmlFor="checkout-confirm">
                    I understand this is a demo and no ticket is issued.
                  </label>
                </div>
                {errors.confirm ? (
                  <p className={styles.error}>! {errors.confirm}</p>
                ) : null}
                <Button type="submit" disabled={loading || !selection}>
                  {loading ? "Completing…" : "Complete demo order"}
                </Button>
                <p aria-live="polite" className="sr-only">
                  {loading ? "Completing your demo order." : ""}
                </p>
              </form>
            )}
          </GridItem>
        </Grid>
      </section>
    </>
  );
}
