import { agencyContactSectionMocks } from "@/marketing/agency-contact-section/AgencyContactSection.mocks";
import { agencyIndexSectionMocks } from "@/marketing/agency-index-section/AgencyIndexSection.mocks";
import { agencyServicesSectionMocks } from "@/marketing/agency-services-section/AgencyServicesSection.mocks";
import { agencyTopbarMocks } from "@/marketing/agency-topbar/AgencyTopbar.mocks";
import type { AgencyLayoutPageProps } from "./AgencyLayoutPage.types";

const defaultFooterColumns = [
  {
    title: "Index",
    links: [
      { label: "Top", href: "#top" },
      { label: "Works", href: "#works" },
      { label: "Services", href: "#services" },
    ],
  },
  {
    title: "Social",
    links: [
      { label: "Are.na", href: "#arena" },
      { label: "Instagram", href: "#instagram" },
      { label: "Read.cv", href: "#readcv" },
    ],
  },
  {
    title: "Legal",
    links: [
      { label: "Imprint", href: "#imprint" },
      { label: "Privacy", href: "#privacy" },
      { label: "Cookies", href: "#cookies" },
    ],
  },
  {
    title: "Colophon",
    links: [
      { label: "Set in Archivo and JBR", href: "#colophon" },
      { label: "OKLCH color space", href: "#color" },
      { label: "Hand-coded HTML/CSS", href: "#build" },
    ],
  },
];

export const agencyLayoutPageMocks = {
  default: {
    nav: agencyTopbarMocks.default,
    index: agencyIndexSectionMocks.default,
    services: agencyServicesSectionMocks.default,
    contact: agencyContactSectionMocks.default,
    footerBrand: "LA YO UT",
    footerColumns: defaultFooterColumns,
  },
  alternate: {
    nav: agencyTopbarMocks.alternate,
    index: agencyIndexSectionMocks.alternate,
    services: agencyServicesSectionMocks.alternate,
    contact: agencyContactSectionMocks.alternate,
    footerBrand: "STUDIO",
    footerColumns: [
      {
        title: "Index",
        links: [
          { label: "Top", href: "#top" },
          { label: "Work", href: "#index" },
        ],
      },
      {
        title: "Social",
        links: [{ label: "Instagram", href: "#instagram" }],
      },
    ],
  },
} satisfies Record<string, AgencyLayoutPageProps>;
