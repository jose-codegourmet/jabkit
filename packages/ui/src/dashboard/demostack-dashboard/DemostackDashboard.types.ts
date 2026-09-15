import type { HTMLAttributes } from "react";

export type DemostackDashboardPageId =
  | "home"
  | "demostacks"
  | "showcases"
  | "videos"
  | "demo-hub"
  | "analytics"
  | "theme"
  | "integration"
  | "settings";

export type DemostackDashboardNavId =
  | DemostackDashboardPageId
  | "profile"
  | "logout";

export type DemostackDashboardSort = "recent" | "ascending" | "descending";

export type DemostackDashboardView = "grid" | "list";

export interface DemostackDashboardMember {
  name: string;
  initials: string;
  image?: string;
}

export interface DemostackDashboardOrganization {
  id: string;
  name: string;
  role: string;
  members: DemostackDashboardMember[];
}

export interface DemostackDashboardUser {
  name: string;
  email: string;
  initials: string;
  image?: string;
}

export interface DemostackDashboardNavItem {
  id: DemostackDashboardPageId;
  label: string;
  badge?: string;
}

export interface DemostackDashboardNavGroup {
  label: string;
  items: DemostackDashboardNavItem[];
}

export interface DemostackDashboardNotification {
  id: string;
  title: string;
  description: string;
  time: string;
}

export interface DemostackDashboardAction {
  title: string;
  description: string;
  image: string;
}

export interface DemostackDashboardTip {
  title: string;
  description: string;
  image: string;
}

export interface DemostackDashboardResource {
  label: string;
}

export interface DemostackDashboardInspiration {
  title: string;
}

export interface DemostackDashboardStack {
  id: string;
  title: string;
  author: string;
  avatar?: string;
  image: string;
  updatedAt: string;
  dateTime: string;
}

export interface DemostackDashboardProps extends HTMLAttributes<HTMLElement> {
  brand?: string;
  organizations?: DemostackDashboardOrganization[];
  user?: DemostackDashboardUser;
  navGroups?: DemostackDashboardNavGroup[];
  notifications?: DemostackDashboardNotification[];
  actions?: DemostackDashboardAction[];
  tips?: DemostackDashboardTip[];
  resources?: DemostackDashboardResource[];
  inspiration?: DemostackDashboardInspiration[];
  stacks?: DemostackDashboardStack[];
  searchPlaceholder?: string;
  initialPage?: DemostackDashboardPageId;
  initialOrganizationId?: string;
}
