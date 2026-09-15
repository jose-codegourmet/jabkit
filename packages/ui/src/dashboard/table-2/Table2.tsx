"use client";

import {
  Building2Icon,
  ChevronLeftIcon,
  ChevronRightIcon,
  CreditCardIcon,
  DownloadIcon,
  EllipsisIcon,
  MailIcon,
  SearchIcon,
} from "lucide-react";
import * as React from "react";
import { Badge } from "@/atoms/badge";
import { Button } from "@/atoms/button";
import { Checkbox } from "@/atoms/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/atoms/dropdown-menu/DropdownMenu";
import { Input } from "@/atoms/input";
import { cn } from "@/lib/cn";
import type {
  Table2Invoice,
  Table2InvoiceStatus,
  Table2PaymentMethod,
  Table2Props,
} from "./Table2.types";

const DEFAULT_INVOICES: Table2Invoice[] = [
  {
    id: "inv-northline-2408",
    number: "INV-2408",
    customer: "Northline Freight",
    email: "billing@northline.freight",
    amount: 4280,
    paymentMethod: { kind: "card", brand: "Visa", last4: "4242" },
    dueDate: "2026-09-18",
    status: "pending",
  },
  {
    id: "inv-harbor-2407",
    number: "INV-2407",
    customer: "Harbor Studio",
    email: "accounts@harbor.studio",
    amount: 1860.5,
    paymentMethod: { kind: "card", brand: "Mastercard", last4: "5512" },
    dueDate: "2026-09-04",
    status: "overdue",
  },
  {
    id: "inv-kiln-2406",
    number: "INV-2406",
    customer: "Kiln Press",
    email: "pay@kiln.press",
    amount: 940,
    paymentMethod: { kind: "transfer", label: "ACH" },
    dueDate: "2026-08-28",
    status: "paid",
  },
  {
    id: "inv-brine-2405",
    number: "INV-2405",
    customer: "Brine Market",
    email: "finance@brine.market",
    amount: 3125,
    paymentMethod: { kind: "card", brand: "Amex", last4: "1005" },
    dueDate: "2026-09-22",
    status: "pending",
  },
  {
    id: "inv-cedar-2404",
    number: "INV-2404",
    customer: "Cedar Row Labs",
    email: "ops@cedarrow.labs",
    amount: 760,
    paymentMethod: { kind: "card", brand: "Visa", last4: "1881" },
    dueDate: "2026-10-02",
    status: "draft",
  },
  {
    id: "inv-lumen-2403",
    number: "INV-2403",
    customer: "Lumen Archive",
    email: "hello@lumen.archive",
    amount: 2540,
    paymentMethod: { kind: "transfer", label: "Wire" },
    dueDate: "2026-09-11",
    status: "paid",
  },
  {
    id: "inv-silt-2402",
    number: "INV-2402",
    customer: "Silt Cooperative",
    email: "ledger@silt.coop",
    amount: 1188.25,
    paymentMethod: { kind: "card", brand: "Mastercard", last4: "0044" },
    dueDate: "2026-08-30",
    status: "overdue",
  },
  {
    id: "inv-grove-2401",
    number: "INV-2401",
    customer: "Grove Atelier",
    email: "studio@grove.atelier",
    amount: 640,
    paymentMethod: { kind: "card", brand: "Visa", last4: "9910" },
    dueDate: "2026-09-27",
    status: "pending",
  },
  {
    id: "inv-field-2399",
    number: "INV-2399",
    customer: "Field Note Books",
    email: "pay@fieldnote.books",
    amount: 210,
    paymentMethod: { kind: "transfer", label: "ACH" },
    dueDate: "2026-08-12",
    status: "paid",
  },
  {
    id: "inv-oriole-2398",
    number: "INV-2398",
    customer: "Oriole Transit",
    email: "ap@oriole.transit",
    amount: 5790,
    paymentMethod: { kind: "card", brand: "Amex", last4: "3003" },
    dueDate: "2026-09-09",
    status: "overdue",
  },
  {
    id: "inv-quarry-2397",
    number: "INV-2397",
    customer: "Quarry Goods",
    email: "billing@quarry.goods",
    amount: 1475,
    paymentMethod: { kind: "card", brand: "Visa", last4: "2219" },
    dueDate: "2026-10-08",
    status: "draft",
  },
  {
    id: "inv-pine-2396",
    number: "INV-2396",
    customer: "Pine & Copper",
    email: "invoices@pinecopper.shop",
    amount: 890.75,
    paymentMethod: { kind: "card", brand: "Mastercard", last4: "7741" },
    dueDate: "2026-09-15",
    status: "pending",
  },
];

const STATUS_FILTERS: { id: Table2InvoiceStatus | "all"; label: string }[] = [
  { id: "all", label: "All" },
  { id: "pending", label: "Pending" },
  { id: "overdue", label: "Overdue" },
  { id: "paid", label: "Paid" },
  { id: "draft", label: "Draft" },
];

const STATUS_LABEL: Record<Table2InvoiceStatus, string> = {
  paid: "Paid",
  pending: "Pending",
  overdue: "Overdue",
  draft: "Draft",
};

const STATUS_CLASS: Record<Table2InvoiceStatus, string> = {
  paid: "border-success/30 bg-success/15 text-success",
  pending: "border-warning/30 bg-warning/15 text-warning",
  overdue: "border-destructive/30 bg-destructive/15 text-destructive",
  draft: "border-border bg-muted text-muted-foreground",
};

const defaults = {
  title: "Invoices",
  description: "Search, select, and settle the Northline ledger.",
  searchPlaceholder: "Search invoices",
  emptyLabel: "No invoices match this filter.",
  markPaidLabel: "Mark as paid",
  remindLabel: "Send reminder",
  downloadLabel: "Download",
  previousLabel: "Previous",
  nextLabel: "Next",
  selectedCountLabel: "selected",
} as const;

function formatAmount(amount: number, currency = "USD") {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency,
  }).format(amount);
}

function formatDueDate(value: string) {
  const date = new Date(`${value}T00:00:00`);
  if (Number.isNaN(date.getTime())) return value;
  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

function paymentLabel(method: Table2PaymentMethod) {
  if (method.kind === "transfer") {
    return method.label ?? "Bank transfer";
  }
  const brand = method.brand ?? "Card";
  return method.last4 ? `${brand} ${method.last4}` : brand;
}

function invoiceMatches(invoice: Table2Invoice, query: string) {
  if (!query) return true;
  const haystack = [
    invoice.number,
    invoice.customer,
    invoice.email,
    invoice.status,
    paymentLabel(invoice.paymentMethod),
  ]
    .join(" ")
    .toLowerCase();
  return haystack.includes(query);
}

function downloadCsv(invoices: Table2Invoice[]) {
  const header = [
    "Number",
    "Customer",
    "Email",
    "Amount",
    "Currency",
    "Method",
    "Due date",
    "Status",
  ];
  const rows = invoices.map((invoice) => [
    invoice.number,
    invoice.customer,
    invoice.email,
    String(invoice.amount),
    invoice.currency ?? "USD",
    paymentLabel(invoice.paymentMethod),
    invoice.dueDate,
    invoice.status,
  ]);
  const csv = [header, ...rows]
    .map((cells) =>
      cells.map((cell) => `"${cell.replaceAll('"', '""')}"`).join(","),
    )
    .join("\n");
  const blob = new Blob([csv], { type: "text/csv;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = "invoices.csv";
  link.click();
  URL.revokeObjectURL(url);
}

export function Table2({
  className,
  title = defaults.title,
  description = defaults.description,
  searchPlaceholder = defaults.searchPlaceholder,
  emptyLabel = defaults.emptyLabel,
  markPaidLabel = defaults.markPaidLabel,
  remindLabel = defaults.remindLabel,
  downloadLabel = defaults.downloadLabel,
  previousLabel = defaults.previousLabel,
  nextLabel = defaults.nextLabel,
  selectedCountLabel = defaults.selectedCountLabel,
  invoices: invoicesProp,
  defaultInvoices = DEFAULT_INVOICES,
  defaultSearch = "",
  defaultStatusFilter = null,
  pageSize = 6,
  defaultPage = 1,
  onInvoicesChange,
  onMarkPaid,
  onSendReminder,
  onDownload,
  ...props
}: Table2Props) {
  const headingId = React.useId();
  const searchId = React.useId();
  const noticeId = React.useId();
  const isControlled = invoicesProp !== undefined;
  const [uncontrolled, setUncontrolled] =
    React.useState<Table2Invoice[]>(defaultInvoices);
  const invoices = isControlled ? invoicesProp : uncontrolled;
  const [query, setQuery] = React.useState(defaultSearch);
  const [statusFilter, setStatusFilter] = React.useState<
    Table2InvoiceStatus | null
  >(defaultStatusFilter);
  const [page, setPage] = React.useState(Math.max(1, defaultPage));
  const [selected, setSelected] = React.useState<string[]>([]);
  const [notice, setNotice] = React.useState("");

  const commit = React.useCallback(
    (next: Table2Invoice[]) => {
      if (!isControlled) setUncontrolled(next);
      onInvoicesChange?.(next);
    },
    [isControlled, onInvoicesChange],
  );

  const filtered = React.useMemo(() => {
    const needle = query.trim().toLowerCase();
    return invoices.filter((invoice) => {
      const matchesStatus =
        statusFilter === null || invoice.status === statusFilter;
      return matchesStatus && invoiceMatches(invoice, needle);
    });
  }, [invoices, query, statusFilter]);

  const pageCount = Math.max(1, Math.ceil(filtered.length / pageSize));
  const currentPage = Math.min(page, pageCount);
  const pageRows = filtered.slice(
    (currentPage - 1) * pageSize,
    currentPage * pageSize,
  );
  const pageIds = pageRows.map((invoice) => invoice.id);
  const selectedOnPage = pageIds.filter((id) => selected.includes(id));
  const allPageSelected =
    pageIds.length > 0 && selectedOnPage.length === pageIds.length;
  const somePageSelected = selectedOnPage.length > 0 && !allPageSelected;

  React.useEffect(() => {
    const ids = new Set(invoices.map((invoice) => invoice.id));
    setSelected((current) => current.filter((id) => ids.has(id)));
  }, [invoices]);

  const toggleRow = (id: string, checked: boolean) => {
    setSelected((current) =>
      checked
        ? [...new Set([...current, id])]
        : current.filter((item) => item !== id),
    );
  };

  const togglePage = (checked: boolean) => {
    setSelected((current) => {
      if (checked) return [...new Set([...current, ...pageIds])];
      return current.filter((id) => !pageIds.includes(id));
    });
  };

  const markPaid = (ids: string[]) => {
    if (ids.length === 0) return;
    commit(
      invoices.map((invoice) =>
        ids.includes(invoice.id) ? { ...invoice, status: "paid" } : invoice,
      ),
    );
    onMarkPaid?.(ids);
    setNotice(
      ids.length === 1
        ? "1 invoice marked as paid."
        : `${ids.length} invoices marked as paid.`,
    );
    setSelected([]);
  };

  const sendReminder = (ids: string[]) => {
    if (ids.length === 0) return;
    onSendReminder?.(ids);
    setNotice(
      ids.length === 1
        ? "Reminder queued for 1 invoice."
        : `Reminders queued for ${ids.length} invoices.`,
    );
  };

  const download = (ids: string[]) => {
    const rows = invoices.filter((invoice) => ids.includes(invoice.id));
    if (rows.length === 0) return;
    onDownload?.(ids);
    downloadCsv(rows);
    setNotice(
      rows.length === 1
        ? "Downloaded 1 invoice."
        : `Downloaded ${rows.length} invoices.`,
    );
  };

  const openCount = invoices.filter(
    (invoice) => invoice.status === "pending" || invoice.status === "overdue",
  ).length;

  return (
    <section
      data-slot="table-2"
      aria-labelledby={headingId}
      className={cn(
        "bg-background px-4 py-8 text-foreground sm:px-6",
        className,
      )}
      {...props}
    >
      <div className="mx-auto w-full max-w-6xl rounded-[--radius] border border-border bg-card shadow-[0_24px_60px_-36px_color-mix(in_oklab,var(--jk-foreground),transparent_82%)]">
        <header className="flex flex-col gap-4 border-b border-border px-5 py-5 sm:flex-row sm:items-start sm:justify-between">
          <div className="min-w-0">
            <h1
              id={headingId}
              className="text-xl font-semibold tracking-[-0.03em]"
            >
              {title}
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">{description}</p>
          </div>
          <p className="shrink-0 rounded-full border border-border bg-muted px-2.5 py-1 text-xs font-medium text-muted-foreground">
            {openCount} open
          </p>
        </header>

        <div className="flex flex-col gap-4 px-5 py-4">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full max-w-sm">
              <SearchIcon
                aria-hidden="true"
                className="pointer-events-none absolute top-1/2 left-3 size-4 -translate-y-1/2 text-muted-foreground"
              />
              <Input
                id={searchId}
                type="search"
                value={query}
                onChange={(event) => {
                  setQuery(event.target.value);
                  setPage(1);
                }}
                placeholder={searchPlaceholder}
                aria-label={searchPlaceholder}
                className="h-10 rounded-[--radius] pr-3 pl-9"
              />
            </div>
            {selected.length > 0 ? (
              <div className="flex flex-wrap items-center gap-2">
                <p className="text-sm text-muted-foreground">
                  {selected.length} {selectedCountLabel}
                </p>
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="gap-1.5"
                  onClick={() => markPaid(selected)}
                >
                  {markPaidLabel}
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="gap-1.5"
                  onClick={() => sendReminder(selected)}
                >
                  <MailIcon className="size-3.5" />
                  {remindLabel}
                </Button>
                <Button
                  type="button"
                  size="sm"
                  variant="secondary"
                  className="gap-1.5"
                  onClick={() => download(selected)}
                >
                  <DownloadIcon className="size-3.5" />
                  {downloadLabel}
                </Button>
              </div>
            ) : null}
          </div>

          <fieldset className="flex flex-wrap gap-2 border-0 p-0">
            <legend className="sr-only">Filter by status</legend>
            {STATUS_FILTERS.map((item) => {
              const active =
                item.id === "all"
                  ? statusFilter === null
                  : statusFilter === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={active}
                  onClick={() => {
                    setStatusFilter(item.id === "all" ? null : item.id);
                    setPage(1);
                  }}
                  className={cn(
                    "rounded-full border px-3 py-1 text-xs font-medium transition-colors duration-200 ease-out motion-reduce:transition-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                    active
                      ? "border-primary bg-primary text-primary-foreground"
                      : "border-border bg-background text-muted-foreground hover:bg-accent hover:text-accent-foreground",
                  )}
                >
                  {item.label}
                </button>
              );
            })}
          </fieldset>
        </div>

        <p id={noticeId} className="sr-only" aria-live="polite">
          {notice}
        </p>
        {notice ? (
          <p className="border-t border-border px-5 py-2 text-sm text-muted-foreground">
            {notice}
          </p>
        ) : null}

        <div className="overflow-x-auto border-t border-border">
          <table className="w-full min-w-[44rem] border-collapse text-left text-sm">
            <caption className="sr-only">{title}</caption>
            <thead className="bg-muted/50 text-xs font-medium tracking-wide text-muted-foreground uppercase">
              <tr>
                <th scope="col" className="w-12 px-5 py-3">
                  <Checkbox
                    checked={allPageSelected}
                    indeterminate={somePageSelected}
                    onCheckedChange={(value) => togglePage(value === true)}
                    aria-label="Select invoices on this page"
                  />
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  Invoice
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  Status
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  Method
                </th>
                <th scope="col" className="px-3 py-3 text-right font-medium">
                  Amount
                </th>
                <th scope="col" className="px-3 py-3 font-medium">
                  Due
                </th>
                <th scope="col" className="w-12 px-5 py-3">
                  <span className="sr-only">Row actions</span>
                </th>
              </tr>
            </thead>
            <tbody>
              {pageRows.length === 0 ? (
                <tr>
                  <td
                    colSpan={7}
                    className="px-5 py-12 text-center text-sm text-muted-foreground"
                  >
                    {emptyLabel}
                  </td>
                </tr>
              ) : (
                pageRows.map((invoice) => {
                  const isSelected = selected.includes(invoice.id);
                  return (
                    <tr
                      key={invoice.id}
                      data-selected={isSelected ? "true" : undefined}
                      className={cn(
                        "border-t border-border transition-colors duration-200 ease-out motion-reduce:transition-none",
                        isSelected ? "bg-accent/60" : "hover:bg-muted/40",
                      )}
                    >
                      <td className="px-5 py-3 align-middle">
                        <Checkbox
                          checked={isSelected}
                          onCheckedChange={(value) =>
                            toggleRow(invoice.id, value === true)
                          }
                          aria-label={`Select ${invoice.number}`}
                        />
                      </td>
                      <td className="px-3 py-3 align-middle">
                        <p className="font-medium">{invoice.number}</p>
                        <p className="text-xs text-muted-foreground">
                          {invoice.customer}
                        </p>
                        <p className="text-xs text-muted-foreground">
                          {invoice.email}
                        </p>
                      </td>
                      <td className="px-3 py-3 align-middle">
                        <Badge
                          variant="outline"
                          className={cn(
                            "capitalize",
                            STATUS_CLASS[invoice.status],
                          )}
                        >
                          {STATUS_LABEL[invoice.status]}
                        </Badge>
                      </td>
                      <td className="px-3 py-3 align-middle">
                        <span className="inline-flex items-center gap-2 text-sm">
                          {invoice.paymentMethod.kind === "transfer" ? (
                            <Building2Icon
                              aria-hidden="true"
                              className="size-4 text-muted-foreground"
                            />
                          ) : (
                            <CreditCardIcon
                              aria-hidden="true"
                              className="size-4 text-muted-foreground"
                            />
                          )}
                          {paymentLabel(invoice.paymentMethod)}
                        </span>
                      </td>
                      <td className="px-3 py-3 text-right align-middle font-medium tabular-nums">
                        {formatAmount(invoice.amount, invoice.currency)}
                      </td>
                      <td className="px-3 py-3 align-middle text-muted-foreground">
                        {formatDueDate(invoice.dueDate)}
                      </td>
                      <td className="px-5 py-3 align-middle">
                        <DropdownMenu>
                          <DropdownMenuTrigger
                            aria-label={`Actions for ${invoice.number}`}
                            className="inline-flex size-8 items-center justify-center rounded-[calc(var(--radius)-4px)] text-muted-foreground hover:bg-accent hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                          >
                            <EllipsisIcon className="size-4" />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuItem
                              onClick={() => markPaid([invoice.id])}
                            >
                              {markPaidLabel}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => sendReminder([invoice.id])}
                            >
                              {remindLabel}
                            </DropdownMenuItem>
                            <DropdownMenuItem
                              onClick={() => download([invoice.id])}
                            >
                              {downloadLabel}
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  );
                })
              )}
            </tbody>
          </table>
        </div>

        <footer className="flex flex-col gap-3 border-t border-border px-5 py-4 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-muted-foreground">
            {selected.length} of {filtered.length} row
            {filtered.length === 1 ? "" : "s"} selected
          </p>
          <div className="flex items-center gap-2">
            <Button
              type="button"
              size="sm"
              variant="secondary"
              className="gap-1"
              disabled={currentPage <= 1}
              onClick={() => setPage((value) => Math.max(1, value - 1))}
            >
              <ChevronLeftIcon className="size-3.5" />
              {previousLabel}
            </Button>
            <p className="min-w-16 text-center text-xs tabular-nums text-muted-foreground">
              {currentPage} / {pageCount}
            </p>
            <Button
              type="button"
              size="sm"
              variant="secondary"
              className="gap-1"
              disabled={currentPage >= pageCount}
              onClick={() =>
                setPage((value) => Math.min(pageCount, value + 1))
              }
            >
              {nextLabel}
              <ChevronRightIcon className="size-3.5" />
            </Button>
          </div>
        </footer>
      </div>
    </section>
  );
}
