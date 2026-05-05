export const SITE_CONFIG = {
  siteName: "HackJPS",
  designSystemName: "HackJPS",
  year: 2026,
  eventDatesLabel: "May 29-31, 2026",
  countdownTargetIso: "2026-05-29T00:00:00-04:00",
  locationShort: "JPS",
  locationLong: "John P. Stevens High School",
  hackerCountLabel: "500+",
  buildDurationLabel: "72 Hours",
  registrationClosesLabel: "February 28, 2026",
  links: {
    home: "/",
    resources: "/resources",
    discord: "https://discord.gg/ekVUFdykZJ",
    devpost: "https://hackjps26.devpost.com",
    devpostResources: "https://hackjps26.devpost.com/resources",
    devpostDates: "https://hackjps26.devpost.com/details/dates",
    register: "https://forms.gle/ei6hCNsk4a1rQbth8",
    venueMap:
      "https://www.google.com/maps/search/?api=1&query=John+P.+Stevens+High+School,+855+Grove+Ave,+Edison,+NJ",
    sponsorContact: "https://drive.google.com/file/d/1IbdjZukoFwasve6A_WyDpvfJGch2q9NL/view?usp=sharing",
    generalContact: "mailto:hello@hackjps.org",
  },
} as const

export type SiteConfig = typeof SITE_CONFIG
