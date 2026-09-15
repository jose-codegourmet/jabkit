import type { HTMLAttributes } from "react";

export type GridlineDashboardPageId =
  | "dashboard"
  | "modelling"
  | "flexibility"
  | "planning"
  | "operations"
  | "stakeholders"
  | "connections";

export type GridlineDashboardWorkspaceIcon =
  | "database"
  | "flexibility"
  | "planning"
  | "operations"
  | "stakeholders"
  | "connections";

export type GridlineDashboardRegionTone =
  | "chart-1"
  | "chart-2"
  | "chart-3"
  | "chart-4";

export type GridlineDashboardRegionPosition =
  | "north-east"
  | "central"
  | "west"
  | "south-east";

export type GridlineDashboardVoltageTone =
  | "foreground"
  | "success"
  | "warning"
  | "destructive"
  | "chart-1"
  | "chart-3";

export interface GridlineDashboardNavItem {
  id: GridlineDashboardPageId;
  label: string;
  shortLabel: string;
}

export interface GridlineDashboardWorkspace {
  id: GridlineDashboardPageId;
  title: string;
  icon: GridlineDashboardWorkspaceIcon;
  details: string[];
}

export interface GridlineDashboardModellingAction {
  title: string;
  description: string;
  icon: "database" | "comparison" | "clearview";
}

export interface GridlineDashboardRegion {
  id: string;
  name: string;
  legendName: string;
  tone: GridlineDashboardRegionTone;
  position: GridlineDashboardRegionPosition;
}

export interface GridlineDashboardAsset {
  id: string;
  name: string;
  voltage: string;
  equipmentCount: number;
  mapPosition: {
    x: number;
    y: number;
  };
}

export interface GridlineDashboardVoltageFilter {
  id: string;
  label: string;
  tone: GridlineDashboardVoltageTone;
}

export interface GridlineDashboardModel {
  title: string;
  description: string;
  version: string;
  latestVersion: string;
  currentModel: string;
  currentVersion: string;
  latestUpdate: string;
  coverage: string;
  lastPublished: string;
  openIssues: number;
  publication: string;
  validation: string;
  review: string;
}

export interface GridlineDashboardFlexibility {
  regionName: string;
  assetType: string;
  substationCount: number;
  mappedSubstationCount: number;
  locationCount: number;
  attributionCompany: string;
  attributionProduct: string;
  voltageLevels: string[];
}

export interface GridlineDashboardUser {
  name: string;
  email: string;
}

export interface GridlineDashboardProps extends HTMLAttributes<HTMLElement> {
  brand?: string;
  company?: string;
  date?: string;
  searchPlaceholder?: string;
  user?: GridlineDashboardUser;
  navItems?: GridlineDashboardNavItem[];
  workspaces?: GridlineDashboardWorkspace[];
  model?: GridlineDashboardModel;
  modellingActions?: GridlineDashboardModellingAction[];
  regions?: GridlineDashboardRegion[];
  flexibility?: GridlineDashboardFlexibility;
  assets?: GridlineDashboardAsset[];
  voltageFilters?: GridlineDashboardVoltageFilter[];
  initialPage?: GridlineDashboardPageId;
}
