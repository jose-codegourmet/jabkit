import type { HTMLAttributes } from "react";

export interface AdmitOneTicketFace {
  id: string;
  name: string;
  presenter?: string;
  event?: string;
  venue?: string;
  dates?: string;
  stubText?: string;
  watermark?: string;
}

export interface AdmitOneTicketProps
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  heading?: string;
  name?: string;
  presenter?: string;
  event?: string;
  venue?: string;
  dates?: string;
  stubText?: string;
  watermark?: string;
  tickets?: AdmitOneTicketFace[];
  width?: number;
  tilt?: boolean;
  maxTilt?: number;
}
