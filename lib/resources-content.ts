import { SITE_CONFIG } from "@/lib/site-config"

export type ResourceBlock = {
  heading: string
  body?: string[]
  bullets?: string[]
}

export type ResourceSection = {
  id: "general" | "rules"
  menu: string
  title: string
  subtitle: string
  blocks: ResourceBlock[]
}

export const RESOURCE_SECTIONS: ResourceSection[] = [
  {
    id: "general",
    title: "General\nInformation",
    subtitle: "Core event logistics and how to get started once you arrive.",
    blocks: [
      {
        heading: "Opening Ceremony",
        body: [
          "Check-in opens at 8:00 AM in the main atrium. Opening remarks begin at 9:00 AM.",
          "If the auditorium reaches capacity, overflow seating and live stream screens will be available in adjacent rooms.",
        ],
      },
      {
        heading: "WiFi",
        bullets: [
          "Network: HACKJPS",
          "Use a non-school email for guest access",
          "Save your temporary access code in case you reconnect on another device",
        ],
      },
      {
        heading: "Building Access",
        body: [
          "Primary doors remain open during staffed hours.",
          "Participants will not be able to repeatedly enter and exit the venue.",
        ],
      },
      {
        heading: "Food, Rest, and Safety",
        bullets: [
          "Meals and snacks will be available for purchase at the in-person event",
          "Bring a water bottle, charger, and any personal medication you need",
          "If you need immediate help, go to the check-in desk or message staff in Discord",
        ],
      },
      {
        heading: "What To Bring",
        bullets: [
          "Laptop and charger",
          "School ID and registration confirmation",
          "Any hardware components you specifically want to use",
        ],
      },
    ],
    menu: ""
  },
  {
    id: "rules",
    title: "Event\nRules",
    subtitle: "Keep projects fair, safe, and eligible for final judging.",
    blocks: [
      {
        heading: "Team Composition",
        bullets: [
          "Teams of 1 to 4 participants",
          "All members must be officially registered",
          "Team changes close after kickoff",
        ],
      },
      {
        heading: "Project Scope",
        bullets: [
          "Build must start during the event window",
          "Prior work is allowed only for setup scaffolding and must be disclosed",
          "You can use open-source libraries with attribution",
        ],
      },
      {
        heading: "Submission",
        body: [
          "Submit on Devpost before the deadline with source access, demo instructions, and a short video or live walkthrough plan.",
        ],
      },
    ],
    menu: ""
  },
]

export const RESOURCE_MENU_ITEMS = RESOURCE_SECTIONS.map((section) => ({
  id: section.id,
  label: section.id === "general" ? "General" : "Rules",
}))

export const RESOURCE_QUICK_LINKS = [
  { label: "Discord", href: SITE_CONFIG.links.discord },
  { label: "Devpost", href: SITE_CONFIG.links.devpost },
  { label: "Registration Form", href: SITE_CONFIG.links.register },
  { label: "Venue Map", href: SITE_CONFIG.links.venueMap },
] as const
