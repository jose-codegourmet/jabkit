import type { HTMLAttributes } from "react";

export interface AdmitOneTicketFace {
  id: string;
  name: string;
  presenter?: string;
  event: string;
  venue?: string;
  dates?: string;
  stubText?: string;
  watermark?: string;
  serial?: string;
}

export interface AdmitOneTicketProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  eyebrow?: string;
  heading?: string;
  description?: string;
  name?: string;
  presenter?: string;
  event?: string;
  venue?: string;
  dates?: string;
  stubText?: string;
  watermark?: string;
  serial?: string;
  tickets?: AdmitOneTicketFace[];
  maxTilt?: number;
  width?: number;
}
