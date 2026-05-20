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
    subtitle: "Core event logistics and how to get started.",
    blocks: [
      {
        heading: "Opening Ceremony",
        body: [
          "Day 1 (May 29) begins at 4:00 PM and runs through 8:00 PM as a full virtual kickoff.",
          "Opening Ceremony starts at 4:15 PM (30 minutes), followed by Code4Hope's Hack to Business workshop at 4:45 PM (45 minutes).",
          "After the workshop, participants move into team formation, dinner, and working periods through the 8:00 PM wrap-up.",
        ],
      },
      {
        heading: "Food, Rest, and Safety",
        bullets: [
          "Meals and snacks are on your own during the virtual event",
          "Bring a water bottle, charger, and any personal medication you need",
          "If you need immediate help, message staff in Discord",
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
] as const
