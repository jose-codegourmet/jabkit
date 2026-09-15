"use client";

import { CircleCheckIcon } from "lucide-react";
import { useId } from "react";
import { Button } from "@/atoms/button";
import { cn } from "@/lib/cn";
import { orderConfirmationCardMocks } from "./OrderConfirmationCard.mocks";
import type {
  OrderConfirmationCardProps,
  OrderConfirmationItem,
  OrderConfirmationMeta,
} from "./OrderConfirmationCard.types";

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
      <span className="shrink-0 text-right tabular-nums text-card-foreground">
        {value}
      </span>
    </div>
  );
}

function LineItem({
  item,
  quantityLabel,
}: {
  item: OrderConfirmationItem;
  quantityLabel: string;
}) {
  return (
    <li className="flex items-start gap-3">
      {item.image ? (
        <img
          alt={item.image.alt}
          className="size-14 shrink-0 rounded-[calc(var(--radius)-0.25rem)] border border-border object-cover"
          src={item.image.src}
        />
      ) : (
        <span
          aria-hidden="true"
          className="grid size-14 shrink-0 place-items-center rounded-[calc(var(--radius)-0.25rem)] border border-border bg-muted text-[10px] font-medium tracking-[0.12em] text-muted-foreground uppercase"
        >
          {item.name.slice(0, 2)}
        </span>
      )}
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-pretty">{item.name}</p>
        {item.detail ? (
          <p className="mt-0.5 text-xs leading-5 text-muted-foreground">
            {item.detail}
          </p>
        ) : null}
        <p className="mt-1 font-mono text-[11px] text-muted-foreground">
          {quantityLabel} {item.quantity}
        </p>
      </div>
      <p className="shrink-0 font-mono text-sm tabular-nums">{item.price}</p>
    </li>
  );
}

export function OrderConfirmationCard({
  className,
  eyebrow = orderConfirmationCardMocks.default.eyebrow,
  heading = orderConfirmationCardMocks.default.heading,
  description = orderConfirmationCardMocks.default.description,
  statusLabel = orderConfirmationCardMocks.default.statusLabel,
  statusDetail = orderConfirmationCardMocks.default.statusDetail,
  orderIdLabel = orderConfirmationCardMocks.default.orderIdLabel,
  orderId = orderConfirmationCardMocks.default.orderId,
  itemsHeading = orderConfirmationCardMocks.default.itemsHeading,
  items = orderConfirmationCardMocks.default.items,
  quantityLabel = orderConfirmationCardMocks.default.quantityLabel,
  shippingHeading = orderConfirmationCardMocks.default.shippingHeading,
  shippingLines = orderConfirmationCardMocks.default.shippingLines,
  summary = orderConfirmationCardMocks.default.summary,
  totalLabel = orderConfirmationCardMocks.default.totalLabel,
  total = orderConfirmationCardMocks.default.total,
  paymentMethodLabel = orderConfirmationCardMocks.default.paymentMethodLabel,
  paymentMethod = orderConfirmationCardMocks.default.paymentMethod,
  primaryAction = orderConfirmationCardMocks.default.primaryAction,
  secondaryAction = orderConfirmationCardMocks.default.secondaryAction,
  ...props
}: OrderConfirmationCardProps) {
  const headingId = useId();
  const descriptionId = useId();
  const lineItems = items ?? [];
  const shipTo = shippingLines ?? [];
  const totals = summary ?? [];

  return (
    <section
      aria-describedby={description ? descriptionId : undefined}
      aria-labelledby={headingId}
      className={cn("bg-muted text-foreground", className)}
      data-slot="order-confirmation-card"
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
                {orderIdLabel}
              </span>
              <span className="mt-1 block font-mono text-sm tracking-[0.14em] text-foreground">
                {orderId}
              </span>
            </p>
          </div>

          {lineItems.length > 0 ? (
            <div className="border-t border-border px-6 py-5 text-left">
              {itemsHeading ? (
                <p className="mb-3 text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                  {itemsHeading}
                </p>
              ) : null}
              <ul className="space-y-4">
                {lineItems.map((item) => (
                  <LineItem
                    item={item}
                    key={item.id}
                    quantityLabel={quantityLabel ?? "Qty"}
                  />
                ))}
              </ul>
            </div>
          ) : null}

          {shipTo.length > 0 ? (
            <div className="border-t border-border px-6 py-5 text-left">
              {shippingHeading ? (
                <p className="mb-2 text-[10px] font-medium tracking-[0.16em] text-muted-foreground uppercase">
                  {shippingHeading}
                </p>
              ) : null}
              <p className="text-sm leading-6 text-pretty">
                {shipTo.map((line) => (
                  <span className="block" key={line}>
                    {line}
                  </span>
                ))}
              </p>
            </div>
          ) : null}

          <div className="border-t border-border px-6 pt-5 pb-6">
            <div className="space-y-1.5">
              {totals.map((row: OrderConfirmationMeta) => (
                <LedgerRow
                  key={`${row.label}-${row.value}`}
                  label={row.label}
                  value={row.value}
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

            {primaryAction || secondaryAction ? (
              <div className="mt-5 flex flex-col gap-2">
                {primaryAction ? (
                  <Button asChild className="w-full" size="lg">
                    <a href={primaryAction.href}>{primaryAction.label}</a>
                  </Button>
                ) : null}
                {secondaryAction ? (
                  <Button
                    asChild
                    className="w-full"
                    size="lg"
                    variant="secondary"
                  >
                    <a href={secondaryAction.href}>{secondaryAction.label}</a>
                  </Button>
                ) : null}
              </div>
            ) : null}
          </div>
        </article>
      </div>
    </section>
  );
}
