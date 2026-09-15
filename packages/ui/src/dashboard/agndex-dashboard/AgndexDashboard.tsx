"use client";

import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  ChevronDown,
  ChevronsUpDown,
  Code2,
  Copy,
  CreditCard,
  Download,
  Eye,
  EyeOff,
  FileText,
  FolderKanban,
  Home,
  Info,
  KeyRound,
  Layers,
  LogOut,
  Menu,
  MessageCircle,
  Monitor,
  Moon,
  Package,
  Plus,
  Settings,
  Shield,
  Sun,
  Trash2,
  UserPlus,
  Users,
  X,
} from "lucide-react";
import { type ReactNode, useEffect, useId, useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/atoms/avatar/Avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/atoms/dropdown-menu/DropdownMenu";
import { cn } from "@/lib/cn";
import { agndexDashboardMocks } from "./AgndexDashboard.mocks";
import type {
  AgndexDashboardAppearance,
  AgndexDashboardIndex,
  AgndexDashboardNavItem,
  AgndexDashboardPageId,
  AgndexDashboardProject,
  AgndexDashboardProps,
} from "./AgndexDashboard.types";

const defaults = agndexDashboardMocks.default;

function BrandMark({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden="true"
      className={cn("size-[1.375rem] text-primary", className)}
      fill="currentColor"
      viewBox="0 0 24 24"
    >
      <path d="M12 12H3A9 9 0 0 1 12 3z" />
      <path d="M12 12V3A9 9 0 0 1 21 12z" opacity="0.72" />
      <path d="M12 12H21A9 9 0 0 1 12 21z" opacity="0.9" />
      <path d="M12 12V21A9 9 0 0 1 3 12z" opacity="0.55" />
    </svg>
  );
}

function NavGlyph({
  id,
  className,
}: {
  id: AgndexDashboardNavItem["id"] | "logout";
  className?: string;
}) {
  const iconClass = cn("size-4 shrink-0", className);
  switch (id) {
    case "dashboard":
      return <Home className={iconClass} />;
    case "api-keys":
      return <KeyRound className={iconClass} />;
    case "billing":
      return <CreditCard className={iconClass} />;
    case "docs":
      return <FileText className={iconClass} />;
    case "discord":
      return <MessageCircle className={iconClass} />;
    case "settings":
      return <Settings className={iconClass} />;
    default:
      return <LogOut className={cn(iconClass, "-rotate-90")} />;
  }
}

function AppearanceGlyph({
  value,
  className,
}: {
  value: AgndexDashboardAppearance;
  className?: string;
}) {
  const iconClass = cn("size-4", className);
  if (value === "dark") return <Moon className={iconClass} />;
  if (value === "light") return <Sun className={iconClass} />;
  return <Monitor className={iconClass} />;
}

function SoftBadge({ children }: { children: string }) {
  return (
    <span className="inline-flex h-auto items-center rounded-lg bg-primary/10 px-2 py-1.5 text-xs font-normal text-primary">
      {children}
    </span>
  );
}

function IconAction({
  label,
  danger,
  onClick,
  children,
}: {
  label: string;
  danger?: boolean;
  onClick?: () => void;
  children: ReactNode;
}) {
  return (
    <button
      aria-label={label}
      className={cn(
        "inline-flex size-9 items-center justify-center rounded-lg outline-none focus-visible:ring-2 focus-visible:ring-ring motion-safe:transition-colors",
        danger
          ? "text-destructive hover:bg-destructive/10"
          : "text-muted-foreground hover:bg-muted hover:text-foreground",
      )}
      onClick={onClick}
      type="button"
    >
      {children}
    </button>
  );
}

function copyValue(value: string) {
  if (typeof navigator === "undefined" || !navigator.clipboard) return;
  void navigator.clipboard.writeText(value);
}

function downloadText(filename: string, value: string) {
  if (typeof document === "undefined") return;
  const blob = new Blob([value], { type: "text/plain" });
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  link.click();
  URL.revokeObjectURL(url);
}

function DashboardHome({
  project,
  summary,
  indexes,
}: {
  project: AgndexDashboardProject;
  summary: NonNullable<AgndexDashboardProps["summary"]>;
  indexes: AgndexDashboardIndex[];
}) {
  const indexesLabel = `${summary.indexesUsed}/${summary.indexesLimit} Indexes`;
  const usedLabel = `${summary.indexesUsed} / ${summary.indexesLimit} Indexes Used`;

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-4 md:gap-11 md:p-8">
      <div className="flex flex-col md:gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Manage your indexes for {project.name}
        </p>
      </div>

      <div className="grid grid-cols-2 gap-2 md:flex md:flex-wrap md:items-center md:justify-between">
        <div className="contents md:flex md:flex-wrap md:items-center md:gap-2">
          <div className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 text-sm font-medium text-foreground max-md:text-sm md:justify-start md:px-4">
            <FolderKanban className="size-4" />
            {project.name}
          </div>
          <div className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 text-sm text-muted-foreground max-md:text-sm md:justify-start md:px-4">
            <Code2 className="size-4" />
            {summary.tier}
          </div>
          <div className="flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-secondary px-3 text-sm text-muted-foreground max-md:text-sm md:justify-start md:px-4">
            <Layers className="size-4" />
            {indexesLabel}
          </div>
        </div>
        <button
          className="inline-flex h-11 items-center justify-center gap-2 rounded-lg bg-destructive px-3 text-sm font-normal text-destructive-foreground outline-none hover:bg-destructive/90 focus-visible:ring-2 focus-visible:ring-ring max-md:text-sm md:px-4 dark:bg-destructive/10 dark:text-destructive dark:hover:bg-destructive/20 motion-safe:transition-colors"
          type="button"
        >
          <Trash2 className="size-4" />
          Delete Project
        </button>
      </div>

      <div className="border-t border-border" />

      <div className="flex flex-col gap-6 md:gap-8">
        <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex flex-wrap items-center gap-2">
              <Layers className="size-4" />
              <h2 className="font-medium">Search Indexes</h2>
              <SoftBadge>{usedLabel}</SoftBadge>
            </div>
            <p className="text-sm text-muted-foreground md:pl-7">
              Manage search indexes for {project.name}
            </p>
          </div>
          <div className="flex flex-row items-center gap-2">
            <button
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-normal outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring md:w-auto md:flex-none motion-safe:transition-colors"
              type="button"
            >
              <Layers className="size-4" />
              Created from sample
            </button>
            <button
              className="inline-flex h-11 flex-1 items-center justify-center gap-2 rounded-lg bg-primary px-4 text-sm font-normal text-primary-foreground outline-none hover:bg-primary/90 focus-visible:ring-2 focus-visible:ring-ring md:w-auto md:flex-none motion-safe:transition-colors"
              type="button"
            >
              <Plus className="size-4" />
              Create Index
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <h3 className="font-medium">
              {indexes.length} Index{indexes.length === 1 ? "" : "es"}
            </h3>
            <SoftBadge>Active</SoftBadge>
          </div>
          <div className="flex flex-col gap-3">
            {indexes.map((index) => (
              <article
                className="flex items-center justify-between gap-3 rounded-xl bg-card px-3 py-3 md:pr-4 motion-safe:transition-colors motion-safe:hover:bg-muted"
                key={index.id}
              >
                <div className="flex items-center gap-3 overflow-hidden md:gap-4">
                  <div className="flex size-11 items-center justify-center rounded-lg border border-border bg-muted text-muted-foreground">
                    <FileText className="size-4" />
                  </div>
                  <div className="flex flex-col gap-1.5 overflow-hidden md:gap-2">
                    <p className="truncate text-sm tracking-tight">
                      {index.name}
                    </p>
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-muted-foreground md:gap-x-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="size-3.5" />
                        <span className="md:hidden">{index.updatedAt}</span>
                        <span className="hidden md:inline">
                          Updated {index.updatedAt}
                        </span>
                      </span>
                      <span className="size-1 rounded-full bg-muted-foreground" />
                      <span>{index.docs} docs</span>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-1">
                  <IconAction label={`Credentials for ${index.name}`}>
                    <KeyRound className="size-4" />
                  </IconAction>
                  <IconAction danger label={`Delete ${index.name}`}>
                    <Trash2 className="size-4" />
                  </IconAction>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

function ApiKeysView({
  project,
  credentials,
}: {
  project: AgndexDashboardProject;
  credentials: NonNullable<AgndexDashboardProps["credentials"]>;
}) {
  const [showKey, setShowKey] = useState(false);
  const [idCopied, setIdCopied] = useState(false);
  const [keyCopied, setKeyCopied] = useState(false);
  const [envCopied, setEnvCopied] = useState(false);
  const maskedKey = "*".repeat(credentials.projectKey.length);
  const envPreview = `AGNDEX_PROJECT_ID = ${credentials.projectId}\nAGNDEX_PROJECT_KEY = ${maskedKey}`;
  const envFile = `AGNDEX_PROJECT_ID=${credentials.projectId}\nAGNDEX_PROJECT_KEY=${credentials.projectKey}\n`;

  function markCopied(setter: (next: boolean) => void) {
    setter(true);
    window.setTimeout(() => setter(false), 1500);
  }

  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-4 md:gap-11 md:p-8">
      <div className="flex flex-col md:gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">API Keys</h1>
        <p className="text-muted-foreground">Credential for {project.name}</p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <FolderKanban className="size-4" />
            <h2 className="font-medium">Project Credentials</h2>
          </div>
          <p className="text-sm text-muted-foreground md:pl-7">
            Use these to authenticate your API requests
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">Project ID</p>
            <div className="flex h-12 items-center gap-2 rounded-xl border border-border bg-card px-4">
              <p className="flex-1 truncate text-sm font-medium">
                {credentials.projectId}
              </p>
              <IconAction
                label="Copy project ID"
                onClick={() => {
                  copyValue(credentials.projectId);
                  markCopied(setIdCopied);
                }}
              >
                {idCopied ? (
                  <span className="text-xs">OK</span>
                ) : (
                  <Copy className="size-4" />
                )}
              </IconAction>
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <p className="text-sm text-muted-foreground">Project Key</p>
            <div className="flex h-12 items-center gap-3 rounded-xl border border-border bg-card px-4">
              <p className="flex-1 truncate font-medium tracking-tight">
                {showKey ? credentials.projectKey : maskedKey}
              </p>
              <IconAction
                label={showKey ? "Hide project key" : "Show project key"}
                onClick={() => setShowKey((open) => !open)}
              >
                {showKey ? (
                  <EyeOff className="size-4" />
                ) : (
                  <Eye className="size-4" />
                )}
              </IconAction>
              <IconAction
                label="Copy project key"
                onClick={() => {
                  copyValue(credentials.projectKey);
                  markCopied(setKeyCopied);
                }}
              >
                {keyCopied ? (
                  <span className="text-xs">OK</span>
                ) : (
                  <Copy className="size-4" />
                )}
              </IconAction>
            </div>
          </div>
          <div className="flex items-start gap-2 text-muted-foreground">
            <Info className="mt-0.5 size-5 shrink-0" />
            <p>
              Keep these secure. Never expose your Project Key in client-side
              code.
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border" />

      <div className="flex flex-col gap-6">
        <h2 className="font-medium">Environment Variables</h2>
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-1 text-muted-foreground">
                <FileText className="size-4" />
                <span>.env</span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-normal outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring motion-safe:transition-colors"
                  onClick={() => {
                    copyValue(envFile);
                    markCopied(setEnvCopied);
                  }}
                  type="button"
                >
                  <Copy className="size-4" />
                  {envCopied ? "Copied" : "Copy"}
                </button>
                <button
                  className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-normal outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring motion-safe:transition-colors"
                  onClick={() => downloadText(".env", envFile)}
                  type="button"
                >
                  <Download className="size-4" />
                  Download
                </button>
              </div>
            </div>
            <div className="rounded-xl border border-border bg-card px-4 py-3 text-sm font-medium tracking-tight">
              <pre className="font-sans whitespace-pre-wrap">{envPreview}</pre>
            </div>
          </div>
          <div className="flex items-start gap-2 text-muted-foreground">
            <Info className="mt-0.5 size-5 shrink-0" />
            <p>
              Keep these secure. Never expose your Project Key in client-side
              code.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

function BillingView({
  subscription,
  usageStats,
  resourceRows,
}: {
  subscription: NonNullable<AgndexDashboardProps["subscription"]>;
  usageStats: NonNullable<AgndexDashboardProps["usageStats"]>;
  resourceRows: NonNullable<AgndexDashboardProps["resourceRows"]>;
}) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-10 p-4 md:gap-11 md:p-8">
      <div className="flex flex-col md:gap-2">
        <h1 className="text-2xl font-semibold tracking-tight">Billing</h1>
        <p className="text-muted-foreground">
          Manage your subscription and payment details
        </p>
      </div>

      <div className="flex flex-col gap-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <CreditCard className="size-4" />
            <h2 className="font-medium">Subscription</h2>
          </div>
          <button
            className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-background px-4 text-sm font-normal outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring motion-safe:transition-colors"
            type="button"
          >
            <Settings className="size-4" />
            Manage Plan
          </button>
        </div>

        <div className="flex flex-col gap-3 rounded-xl bg-card p-0.5 pb-3 dark:bg-muted">
          <div className="flex flex-col gap-3 rounded-lg bg-background p-4 dark:bg-card">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-lg font-medium tracking-tight">
                {subscription.tier}
              </p>
              <span className="text-sm text-primary">{subscription.plan}</span>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-1 text-sm text-muted-foreground">
                <Calendar className="size-4" />
                Billing Cycle
              </div>
              <p className="text-sm font-medium tracking-tight">
                {subscription.billingCycle}
              </p>
            </div>
          </div>
          <div className="flex flex-wrap items-center justify-between gap-2 px-3">
            <p className="text-sm text-muted-foreground">Pricing & Features</p>
            <button
              className="group inline-flex items-center gap-2 text-sm text-primary"
              type="button"
            >
              View Feature Comparison
              <ArrowRight className="size-4 motion-safe:transition-transform motion-safe:group-hover:translate-x-0.5" />
            </button>
          </div>
        </div>
      </div>

      <div className="border-t border-border" />

      <div className="flex flex-col gap-4">
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <Package className="size-4" />
            <h2 className="font-medium">Plan Limits & Usage</h2>
          </div>
          <div className="grid gap-3 md:grid-cols-3">
            {usageStats.map((stat) => (
              <div
                className="flex flex-col gap-6 rounded-xl bg-muted p-4 dark:bg-card"
                key={stat.label}
              >
                <div className="flex items-center gap-2 text-sm">
                  <FolderKanban className="size-4 text-foreground" />
                  <span className="text-muted-foreground opacity-80">
                    {stat.label}
                  </span>
                </div>
                <p className="text-3xl leading-none font-medium">
                  {stat.value}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="overflow-x-auto rounded-xl bg-card">
          <table className="w-full min-w-[36rem] text-left">
            <thead>
              <tr className="bg-muted text-sm dark:bg-background">
                <th className="px-6 py-3 font-normal">Resource</th>
                <th className="px-6 py-3 font-normal">Included</th>
                <th className="px-6 py-3 font-normal">Overage</th>
              </tr>
            </thead>
            <tbody>
              {resourceRows.map((row) => (
                <tr className="border-t border-border" key={row.resource}>
                  <td className="px-6 py-3.5 tracking-tight">{row.resource}</td>
                  <td className="px-6 py-3.5 tracking-tight">{row.included}</td>
                  <td className="px-6 py-3.5 tracking-tight">{row.overage}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <p className="text-muted-foreground">
          Need custom limits?{" "}
          <button
            className="cursor-pointer text-foreground underline underline-offset-2 motion-safe:transition-opacity motion-safe:hover:opacity-60"
            type="button"
          >
            Contact us
          </button>
        </p>
      </div>
    </div>
  );
}

function SimpleView({ title, copy }: { title: string; copy: string }) {
  return (
    <div className="mx-auto flex w-full max-w-4xl flex-col gap-2 p-4 md:p-8">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
      <p className="text-muted-foreground">{copy}</p>
    </div>
  );
}

function SidebarBody({
  brand,
  portalLabel,
  navGroups,
  footerNav,
  user,
  page,
  onNavigate,
}: {
  brand: string;
  portalLabel: string;
  navGroups: NonNullable<AgndexDashboardProps["navGroups"]>;
  footerNav: NonNullable<AgndexDashboardProps["footerNav"]>;
  user: NonNullable<AgndexDashboardProps["user"]>;
  page: AgndexDashboardPageId;
  onNavigate: (id: AgndexDashboardPageId) => void;
}) {
  const itemClass =
    "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[0.9375rem] tracking-tight text-muted-foreground outline-none hover:bg-accent hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring aria-[current=page]:bg-accent aria-[current=page]:font-medium aria-[current=page]:text-foreground";

  return (
    <>
      <div className="flex items-center justify-between gap-2 px-4 pt-6">
        <div className="flex items-center gap-2">
          <BrandMark />
          <span className="text-xl font-semibold tracking-tight">{brand}</span>
        </div>
        <span className="rounded-md bg-background px-2 py-1.5 text-[0.625rem] text-muted-foreground">
          {portalLabel}
        </span>
      </div>

      <nav className="mt-8 flex flex-1 flex-col gap-8 overflow-y-auto px-4">
        {navGroups.map((group) => (
          <div className="flex flex-col" key={group.label}>
            <p className="mb-2 px-0 py-2 text-[0.8125rem] text-muted-foreground">
              {group.label}
            </p>
            <ul className="flex flex-col gap-1.5">
              {group.items.map((item) => (
                <li key={item.id}>
                  {item.external && item.href ? (
                    <a
                      className={itemClass}
                      href={item.href}
                      rel="noreferrer"
                      target="_blank"
                    >
                      <NavGlyph id={item.id} />
                      <span>{item.label}</span>
                    </a>
                  ) : (
                    <button
                      aria-current={page === item.id ? "page" : undefined}
                      className={itemClass}
                      onClick={() => {
                        if (item.id !== "discord") onNavigate(item.id);
                      }}
                      type="button"
                    >
                      <NavGlyph id={item.id} />
                      <span>{item.label}</span>
                    </button>
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="mt-auto flex flex-col gap-1.5 px-4 pb-6">
        {footerNav.map((item) => (
          <button
            aria-current={page === item.id ? "page" : undefined}
            className={itemClass}
            key={item.id}
            onClick={() => {
              if (item.id !== "discord") onNavigate(item.id);
            }}
            type="button"
          >
            <NavGlyph id={item.id} />
            <span>{item.label}</span>
          </button>
        ))}
        <button
          className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[0.9375rem] tracking-tight text-muted-foreground outline-none hover:bg-destructive/10 hover:text-destructive focus-visible:ring-2 focus-visible:ring-ring"
          type="button"
        >
          <NavGlyph id="logout" />
          <span>Logout</span>
        </button>
        <DropdownMenu>
          <DropdownMenuTrigger className="flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[0.9375rem] outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring data-popup-open:bg-accent">
            <Avatar size="sm">
              {user.image ? <AvatarImage alt="" src={user.image} /> : null}
              <AvatarFallback>{user.initials}</AvatarFallback>
            </Avatar>
            <span className="flex-1 text-left font-medium tracking-tight">
              {user.name}
            </span>
            <ChevronsUpDown className="size-4 text-muted-foreground" />
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-64" side="top">
            <DropdownMenuLabel className="font-normal">
              <div className="flex items-center gap-2.5">
                <Avatar size="sm">
                  {user.image ? <AvatarImage alt="" src={user.image} /> : null}
                  <AvatarFallback>{user.initials}</AvatarFallback>
                </Avatar>
                <div className="leading-tight">
                  <p className="text-sm font-medium text-foreground">
                    {user.name}
                  </p>
                  <p className="text-xs text-muted-foreground">{user.email}</p>
                </div>
              </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <BadgeCheck className="size-4" />
                Account
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Users className="size-4" />
                Team
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Shield className="size-4" />
                Security
              </DropdownMenuItem>
              <DropdownMenuItem>
                <UserPlus className="size-4" />
                Invite members
              </DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </>
  );
}

export function AgndexDashboard({
  className,
  brand = defaults.brand,
  portalLabel = defaults.portalLabel,
  navGroups = defaults.navGroups,
  footerNav = defaults.footerNav,
  projects = defaults.projects,
  user = defaults.user,
  indexes = defaults.indexes,
  credentials = defaults.credentials,
  summary = defaults.summary,
  subscription = defaults.subscription,
  usageStats = defaults.usageStats,
  resourceRows = defaults.resourceRows,
  initialPage = defaults.initialPage,
  initialProjectId = defaults.initialProjectId,
  ...props
}: AgndexDashboardProps) {
  const titleId = useId();
  const [page, setPage] = useState<AgndexDashboardPageId>(initialPage);
  const [projectId, setProjectId] = useState(initialProjectId);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [appearance, setAppearance] =
    useState<AgndexDashboardAppearance>("system");
  const [systemDark, setSystemDark] = useState(false);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const sync = () => setSystemDark(media.matches);
    sync();
    media.addEventListener("change", sync);
    return () => media.removeEventListener("change", sync);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const project =
    projects.find((item) => item.id === projectId) ??
    projects[0] ??
    defaults.projects[0];
  const pageLabel =
    navGroups.flatMap((group) => group.items).find((item) => item.id === page)
      ?.label ??
    footerNav.find((item) => item.id === page)?.label ??
    "Dashboard";
  const isDark =
    appearance === "dark" || (appearance === "system" && systemDark);

  function goTo(next: AgndexDashboardPageId) {
    setPage(next);
    setMobileOpen(false);
  }

  let content = (
    <DashboardHome indexes={indexes} project={project} summary={summary} />
  );
  if (page === "api-keys") {
    content = <ApiKeysView credentials={credentials} project={project} />;
  } else if (page === "billing") {
    content = (
      <BillingView
        resourceRows={resourceRows}
        subscription={subscription}
        usageStats={usageStats}
      />
    );
  } else if (page === "docs") {
    content = (
      <SimpleView
        copy="Guides and API references for this project live here."
        title="Docs"
      />
    );
  } else if (page === "settings") {
    content = (
      <SimpleView
        copy="Workspace preferences and member access for this portal."
        title="Settings"
      />
    );
  }

  const sidebar = (
    <SidebarBody
      brand={brand}
      footerNav={footerNav}
      navGroups={navGroups}
      onNavigate={goTo}
      page={page}
      portalLabel={portalLabel}
      user={user}
    />
  );

  return (
    <section
      aria-labelledby={titleId}
      className={cn(
        "flex h-svh overflow-hidden bg-muted text-foreground",
        isDark && "dark",
        className,
      )}
      data-slot="agndex-dashboard"
      {...props}
    >
      <h2 className="sr-only" id={titleId}>
        {brand} developer portal
      </h2>
      <aside className="hidden h-full w-[17.25rem] shrink-0 flex-col border-none bg-muted md:flex">
        {sidebar}
      </aside>

      {mobileOpen ? (
        <div className="fixed inset-0 z-40 md:hidden">
          <button
            aria-label="Close navigation"
            className="absolute inset-0 bg-foreground/20"
            onClick={() => setMobileOpen(false)}
            type="button"
          />
          <aside className="relative z-10 flex h-full w-[17.25rem] flex-col bg-muted shadow-lg">
            <button
              aria-label="Close navigation"
              className="absolute top-4 right-3 inline-flex size-8 items-center justify-center rounded-lg text-muted-foreground hover:bg-accent"
              onClick={() => setMobileOpen(false)}
              type="button"
            >
              <X className="size-4" />
            </button>
            {sidebar}
          </aside>
        </div>
      ) : null}

      <main className="flex min-w-0 flex-1 overflow-hidden md:bg-muted md:p-2">
        <div className="flex h-full min-w-0 flex-1 flex-col overflow-hidden bg-background md:rounded-xl">
          <header className="sticky top-0 z-20 flex h-14 items-center justify-between gap-2 px-4 md:h-16 md:px-6">
            <div className="flex items-center gap-1">
              <button
                aria-label="Open navigation"
                className="inline-flex size-9 items-center justify-center rounded-lg text-foreground outline-none hover:bg-muted focus-visible:ring-2 focus-visible:ring-ring md:hidden"
                onClick={() => setMobileOpen(true)}
                type="button"
              >
                <Menu className="size-5" />
              </button>
              <nav className="hidden items-center gap-1 text-base text-muted-foreground md:flex">
                <span>Agndex</span>
                <span className="text-border">|</span>
                <span>{project.name}</span>
                <span className="text-border">|</span>
                <span className="font-medium text-foreground/80">
                  {pageLabel}
                </span>
              </nav>
            </div>

            <div className="flex items-center gap-3 md:gap-5">
              <DropdownMenu>
                <DropdownMenuTrigger className="inline-flex h-10 max-w-56 items-center justify-between gap-2 rounded-lg bg-secondary px-3 text-sm outline-none hover:bg-accent focus-visible:ring-2 focus-visible:ring-ring data-popup-open:[&>svg]:rotate-180 md:w-56">
                  <span className="flex items-center gap-1.5 overflow-hidden">
                    <FolderKanban className="size-4 shrink-0" />
                    <span className="truncate">{project.name}</span>
                  </span>
                  <ChevronDown className="size-4 shrink-0 motion-safe:transition-transform" />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-56">
                  {projects.map((item) => (
                    <DropdownMenuItem
                      className={cn(
                        "font-normal text-muted-foreground",
                        item.id === project.id && "font-medium text-foreground",
                      )}
                      key={item.id}
                      onClick={() => setProjectId(item.id)}
                    >
                      {item.name}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>

              <DropdownMenu>
                <DropdownMenuTrigger
                  aria-label="Appearance"
                  className="inline-flex size-6 items-center justify-center rounded-md text-muted-foreground outline-none hover:text-foreground focus-visible:ring-2 focus-visible:ring-ring"
                >
                  <AppearanceGlyph value={appearance} />
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-36">
                  {(
                    [
                      ["light", "Light"],
                      ["dark", "Dark"],
                      ["system", "System"],
                    ] as const
                  ).map(([value, label]) => (
                    <DropdownMenuItem
                      className={cn(
                        "font-normal text-muted-foreground",
                        appearance === value && "font-medium text-foreground",
                      )}
                      key={value}
                      onClick={() => setAppearance(value)}
                    >
                      <AppearanceGlyph value={value} />
                      {label}
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </header>
          <div className="min-h-0 flex-1 overflow-y-auto">{content}</div>
        </div>
      </main>
    </section>
  );
}
