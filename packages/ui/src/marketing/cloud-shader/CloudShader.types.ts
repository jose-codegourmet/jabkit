import type { HTMLAttributes, ReactNode } from "react";

export type CloudShaderLayout = "saas" | "window";

export interface CloudShaderLink {
  label: string;
  href: string;
}

export interface CloudShaderMetric {
  label: string;
  value: string;
  delta: string;
}

export interface CloudShaderProof {
  name: string;
  src?: string;
}

export interface CloudShaderProps extends HTMLAttributes<HTMLElement> {
  children?: ReactNode;
  layout?: CloudShaderLayout;
  speed?: number;
  count?: number;
  brand?: CloudShaderLink;
  mark?: string;
  navItems?: CloudShaderLink[];
  signIn?: CloudShaderLink;
  headerAction?: CloudShaderLink;
  heading?: string;
  description?: string;
  primaryAction?: CloudShaderLink;
  secondaryAction?: CloudShaderLink;
  helper?: string;
  metrics?: CloudShaderMetric[];
  proof?: CloudShaderProof[];
  proofLabel?: string;
}
