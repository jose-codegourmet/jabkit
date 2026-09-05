import type { HTMLAttributes } from "react";

export interface About11Member {
  name: string;
  role: string;
  image: string;
  imageAlt: string;
}

export interface About11ProcessStep {
  title: string;
  description: string;
}

export interface About11Logo {
  name: string;
}

export interface About11Honor {
  year: string;
  title: string;
  description: string;
}

export interface About11Quote {
  text: string;
  attribution?: string;
  image: string;
  imageAlt: string;
}

export interface About11Motivation {
  title: string;
  description: string;
  image: string;
  imageAlt: string;
}

export interface About11Props
  extends Omit<HTMLAttributes<HTMLElement>, "title"> {
  kicker?: string;
  title?: string;
  description?: string;
  studioNote?: string;
  members?: About11Member[];
  processKicker?: string;
  processTitle?: string;
  processDescription?: string;
  processSteps?: About11ProcessStep[];
  logos?: About11Logo[];
  honorsKicker?: string;
  honorsTitle?: string;
  honors?: About11Honor[];
  quote?: About11Quote | null;
  motivations?: About11Motivation[];
}
