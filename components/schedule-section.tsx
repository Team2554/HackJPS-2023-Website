"use client"

import { useState } from "react"
import { ExternalLink } from "lucide-react"
import { cn } from "@/lib/utils"
import { SafeExternalLink } from "@/components/safe-external-link"
import { SITE_CONFIG } from "@/lib/site-config"

type ScheduleItem = { time: string; event: string }
type ScheduleDay = {
  label: string
  dateLabel: string
  items: ScheduleItem[]
}

const schedule: ScheduleDay[] = [
  {
    label: "Day 1",
    dateLabel: "May 29",
    items: [
      { time: "4:00 PM", event: "Check-in Begins (Virtual)" },
      { time: "4:15 PM", event: "Opening Ceremony (30 min)" },
      { time: "4:45 PM", event: "Code4Hope Workshop: Hack to Business (45 min)" },
      { time: "5:30 PM", event: "Working Period" },
      { time: "6:15 PM", event: "Dinner" },
      { time: "6:45 PM", event: "Working Period" },
      { time: "8:00 PM", event: "Day 1 Wrap-Up" },
    ],
  },
  {
    label: "Day 2",
    dateLabel: "May 30",
    items: [
      { time: "9:00 AM", event: "Working Period Begins" },
      { time: "12:30 PM", event: "Lunch Break" },
      { time: "1:30 PM", event: "Working Period" },
      { time: "6:30 PM", event: "Dinner Break" },
      { time: "7:30 PM", event: "Working Period" },
      { time: "11:00 PM", event: "Late-Night Working Period" },
    ],
  },
  {
    label: "Day 3",
    dateLabel: "May 31",
    items: [
      { time: "8:00 AM", event: "Working Period Begins" },
      { time: "12:30 PM", event: "Lunch Break" },
      { time: "1:30 PM", event: "Working Period" },
      { time: "5:00 PM", event: "Dinner Break" },
      { time: "6:00 PM", event: "Working Period" },
      { time: "9:00 PM", event: "Day 3 Wrap-Up" },
    ],
  },
]

export function ScheduleSection() {
  const [activeDay, setActiveDay] = useState<number>(0)

  const currentSchedule = schedule[activeDay]?.items || []

  return (
    <section id="schedule" className="min-h-screen px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="group flex items-center gap-4">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            EVENT SCHEDULE
          </h2>
          <SafeExternalLink
            href={SITE_CONFIG.links.devpostDates}
            className="opacity-0 group-hover:opacity-100 transition-opacity p-2 text-muted-foreground hover:text-accent"
            aria-label="View on DevPost"
          >
            <ExternalLink className="h-8 w-8" />
          </SafeExternalLink>
        </div>

        <div className="mt-12 flex gap-4" style={{ fontFamily: "'ShareTechMono', monospace" }}>
          {schedule.map((day, index) => (
            <button
              key={day.label}
              onClick={() => setActiveDay(index)}
              className={cn(
                "relative px-8 py-3 text-sm font-bold uppercase tracking-widest transition-all",
                activeDay === index
                  ? "bg-accent text-accent-foreground border-transparent"
                  : "bg-transparent text-muted-foreground border border-foreground/15 hover:bg-foreground/5"
              )}
            >
              <span className="sm:hidden">{day.label}</span>
              <span className="hidden sm:inline">{day.label} - {day.dateLabel}</span>
            </button>
          ))}
        </div>

        <div className="mt-10 space-y-0">
          {currentSchedule.map((item) => (
            <div
              key={`${item.time}-${item.event}`}
              className="flex items-center gap-6 border-t border-border/50 py-4"
            >
              <div className="w-24 shrink-0 text-sm font-medium text-muted-foreground">{item.time}</div>
              <div className="flex-1 font-medium text-foreground">{item.event}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
