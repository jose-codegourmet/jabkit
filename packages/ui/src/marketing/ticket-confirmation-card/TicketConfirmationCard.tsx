"use client";

import { CircleCheckIcon } from "lucide-react";
import { useId } from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { ticketConfirmationCardMocks } from "./TicketConfirmationCard.mocks";
import type {
  TicketConfirmationCardProps,
  TicketConfirmationDetail,
  TicketConfirmationPaymentLine,
} from "./TicketConfirmationCard.types";

function barcodeBars(seed: string) {
  let n = 2166136261;
  for (let i = 0; i < seed.length; i++) {
    n ^= seed.charCodeAt(i);
    n = Math.imul(n, 16777619);
  }
  return Array.from({ length: 42 }, (_, position) => {
    n = Math.imul(n ^ (n >>> 13), 1274126177);
    return {
      id: `${seed}-${position}-${n >>> 0}`,
      width: 1 + (Math.abs(n) % 3),
    };
  });
}

function LedgerRow({
  label,
  value,
  strong = false,
}: {
  label: string;
  value: string;
  strong?: boolean;
}) {
  return (
    <div
      className={cn(
        "flex items-baseline gap-2 font-mono text-[11px] leading-5 sm:text-xs",
        strong ? "font-semibold text-card-foreground" : "text-muted-foreground",
      )}
    >
      <span className="shrink-0">{label}</span>
      <span
        aria-hidden="true"
        className="min-w-3 flex-1 border-b border-dotted border-border"
      />
      <span className="shrink-0 tabular-nums text-card-foreground">
        {value}
      </span>
    </div>
  );
}

export function TicketConfirmationCard({
  className,
  eyebrow = ticketConfirmationCardMocks.default.eyebrow,
  heading = ticketConfirmationCardMocks.default.heading,
  description = ticketConfirmationCardMocks.default.description,
  statusLabel = ticketConfirmationCardMocks.default.statusLabel,
  statusDetail = ticketConfirmationCardMocks.default.statusDetail,
  ticketIdLabel = ticketConfirmationCardMocks.default.ticketIdLabel,
  ticketId = ticketConfirmationCardMocks.default.ticketId,
  eventName = ticketConfirmationCardMocks.default.eventName,
  details = ticketConfirmationCardMocks.default.details,
  paymentHeading = ticketConfirmationCardMocks.default.paymentHeading,
  paymentLines = ticketConfirmationCardMocks.default.paymentLines,
  totalLabel = ticketConfirmationCardMocks.default.totalLabel,
  total = ticketConfirmationCardMocks.default.total,
  paymentMethodLabel = ticketConfirmationCardMocks.default.paymentMethodLabel,
  paymentMethod = ticketConfirmationCardMocks.default.paymentMethod,
  barcodeLabel = ticketConfirmationCardMocks.default.barcodeLabel,
  showBarcode = ticketConfirmationCardMocks.default.showBarcode,
  ctaLabel = ticketConfirmationCardMocks.default.ctaLabel,
  ctaHref = ticketConfirmationCardMocks.default.ctaHref,
  ...props
}: TicketConfirmationCardProps) {
  const headingId = useId();
  const descriptionId = useId();
  const detailList = details ?? [];
  const lineItems = paymentLines ?? [];
  const code = ticketId ?? "TICKET";

  return (
    <section
      aria-describedby={description ? descriptionId : undefined}
      aria-labelledby={headingId}
      className={cn("bg-muted text-foreground", className)}
      data-slot="ticket-confirmation-card"
      {...props}
    >
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <header className="mx-auto max-w-xl text-center">
          {eyebrow ? (
            <p className="text-xs font-medium tracking-[0.16em] text-muted-foreground uppercase">
              {eyebrow}
            </p>
          ) : null}
          <h2
            className="mt-3 text-3xl font-semibold tracking-tight text-balance sm:text-5xl sm:leading-[1.1]"
            id={headingId}
          >
            {heading}
          </h2>
          {description ? (
            <p
              className="mt-3 text-sm leading-6 text-muted-foreground text-pretty sm:text-base"
              id={descriptionId}
            >
              {description}
            </p>
          ) : null}
        </header>

        <article
          className={cn(
            "relative mx-auto mt-10 w-full max-w-md overflow-hidden rounded-[calc(var(--radius)+0.35rem)] border border-border bg-card text-card-foreground shadow-[0_22px_48px_-28px_color-mix(in_oklab,var(--jk-foreground),transparent_68%)]",
            "motion-safe:animate-in motion-safe:fade-in motion-safe:slide-in-from-bottom-2 motion-safe:duration-500",
          )}
        >
          <div className="px-6 pt-7 pb-6 text-center">
            <span
              className={cn(
                "mx-auto grid size-14 place-items-center rounded-full bg-success text-success-foreground",
                "motion-safe:animate-in motion-safe:zoom-in-95 motion-safe:duration-500",
              )}
            >
              <CircleCheckIcon aria-hidden="true" className="size-7" />
            </span>
            <p className="mt-4 text-lg font-semibold tracking-tight">
              {statusLabel}
            </p>
            {statusDetail ? (
              <p className="mt-1 text-sm leading-6 text-muted-foreground text-pretty">
                {statusDetail}
              </p>
            ) : null}

            <p className="mt-5 rounded-[--radius] border border-border bg-muted/70 px-3 py-2.5">
              <span className="block text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                {ticketIdLabel}
              </span>
              <span className="mt-1 block font-mono text-sm tracking-[0.14em] text-foreground">
                {ticketId}
              </span>
            </p>

            {eventName ? (
              <h3 className="mt-5 text-xl font-semibold tracking-tight text-balance">
                {eventName}
              </h3>
            ) : null}

            {detailList.length > 0 ? (
              <dl className="mt-5 grid grid-cols-2 gap-x-4 gap-y-3 text-left">
                {detailList.map((item: TicketConfirmationDetail) => (
                  <div key={`${item.label}-${item.value}`}>
                    <dt className="text-[10px] font-medium tracking-[0.14em] text-muted-foreground uppercase">
                      {item.label}
                    </dt>
                    <dd className="mt-1 text-sm font-medium text-pretty">
                      {item.value}
                    </dd>
                  </div>
                ))}
              </dl>
            ) : null}
          </div>

          <div className="relative" aria-hidden="true">
            <span className="absolute top-1/2 -left-3 size-6 -translate-y-1/2 rounded-full bg-muted ring-1 ring-border" />
            <span className="absolute top-1/2 -right-3 size-6 -translate-y-1/2 rounded-full bg-muted ring-1 ring-border" />
            <div className="mx-6 border-t border-dashed border-border" />
          </div>

          <div className="px-6 pt-5 pb-6">
            {paymentHeading ? (
              <p className="mb-3 text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                {paymentHeading}
              </p>
            ) : null}
            <div className="space-y-1.5">
              {lineItems.map((line: TicketConfirmationPaymentLine) => (
                <LedgerRow
                  key={`${line.label}-${line.value}`}
                  label={line.label}
                  value={line.value}
                />
              ))}
              {total ? (
                <LedgerRow label={totalLabel ?? "Paid"} strong value={total} />
              ) : null}
              {paymentMethod ? (
                <LedgerRow
                  label={paymentMethodLabel ?? "Method"}
                  value={paymentMethod}
                />
              ) : null}
            </div>

            {showBarcode ? (
              <div className="mt-5 border-t border-dashed border-border pt-4">
                <div
                  aria-hidden="true"
                  className="flex h-11 items-end justify-center gap-px"
                >
                  {barcodeBars(code).map((bar) => (
                    <span
                      className="bg-foreground"
                      key={bar.id}
                      style={{
                        width: bar.width,
                        height: bar.width > 1 ? "100%" : "70%",
                      }}
                    />
                  ))}
                </div>
                <p className="mt-2 text-center font-mono text-[10px] tracking-[0.24em] text-muted-foreground">
                  {code.replaceAll("-", "")}
                </p>
                {barcodeLabel ? (
                  <p className="mt-1 text-center text-xs text-muted-foreground">
                    {barcodeLabel}
                  </p>
                ) : null}
              </div>
            ) : null}

            {ctaLabel && ctaHref ? (
              <Button asChild className="mt-5 w-full" size="lg">
                <a href={ctaHref}>{ctaLabel}</a>
              </Button>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  );
}
