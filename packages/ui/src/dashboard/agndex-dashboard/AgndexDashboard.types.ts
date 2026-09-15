import type { HTMLAttributes } from "react";

export type AgndexDashboardPageId =
  | "dashboard"
  | "api-keys"
  | "billing"
  | "docs"
  | "settings";

export type AgndexDashboardAppearance = "light" | "dark" | "system";

export interface AgndexDashboardNavItem {
  id: AgndexDashboardPageId | "discord";
  label: string;
  href?: string;
  external?: boolean;
}

export interface AgndexDashboardNavGroup {
  label: string;
  items: AgndexDashboardNavItem[];
}

export interface AgndexDashboardProject {
  id: string;
  name: string;
}

export interface AgndexDashboardUser {
  name: string;
  email: string;
  initials: string;
  image?: string;
}

export interface AgndexDashboardIndex {
  id: string;
  name: string;
  updatedAt: string;
  docs: number;
}

export interface AgndexDashboardCredentials {
  projectId: string;
  projectKey: string;
}

export interface AgndexDashboardSummary {
  tier: string;
  indexesUsed: number;
  indexesLimit: number;
}

export interface AgndexDashboardSubscription {
  tier: string;
  plan: string;
  billingCycle: string;
}

export interface AgndexDashboardUsageStat {
  label: string;
  value: string;
}

export interface AgndexDashboardResourceRow {
  resource: string;
  included: string;
  overage: string;
}

export interface AgndexDashboardProps extends HTMLAttributes<HTMLElement> {
  brand?: string;
  portalLabel?: string;
  navGroups?: AgndexDashboardNavGroup[];
  footerNav?: AgndexDashboardNavItem[];
  projects?: AgndexDashboardProject[];
  user?: AgndexDashboardUser;
  indexes?: AgndexDashboardIndex[];
  credentials?: AgndexDashboardCredentials;
  summary?: AgndexDashboardSummary;
  subscription?: AgndexDashboardSubscription;
  usageStats?: AgndexDashboardUsageStat[];
  resourceRows?: AgndexDashboardResourceRow[];
  initialPage?: AgndexDashboardPageId;
  initialProjectId?: string;
}
