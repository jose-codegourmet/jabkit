export const comboboxMocks = {
  frameworks: ["Next.js", "SvelteKit", "Nuxt.js", "Remix", "Astro"] as const,
  timezones: [
    {
      value: "Americas",
      items: [
        "(GMT-5) New York",
        "(GMT-8) Los Angeles",
        "(GMT-6) Chicago",
        "(GMT-5) Toronto",
      ],
    },
    {
      value: "Europe",
      items: [
        "(GMT+0) London",
        "(GMT+1) Paris",
        "(GMT+1) Berlin",
        "(GMT+1) Rome",
      ],
    },
    {
      value: "Asia/Pacific",
      items: [
        "(GMT+9) Tokyo",
        "(GMT+8) Shanghai",
        "(GMT+8) Singapore",
        "(GMT+11) Sydney",
      ],
    },
  ],
  empty: "No items found.",
  timezoneEmpty: "No timezones found.",
  frameworkPlaceholder: "Select a framework",
  timezonePlaceholder: "Select a timezone",
} as const;
