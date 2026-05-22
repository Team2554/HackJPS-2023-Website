"use client"

import { useState } from "react"
import Link from "next/link"
import { ClipboardList, ExternalLink } from "lucide-react"
import { SafeExternalLink } from "@/components/safe-external-link"
import {
  RESOURCE_MENU_ITEMS,
  RESOURCE_QUICK_LINKS,
  RESOURCE_SECTIONS,
} from "@/lib/resources-content"
import { SITE_CONFIG } from "@/lib/site-config"

function DiscordLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M18.82 5.18A15.3 15.3 0 0 0 15.07 4l-.18.36a10.45 10.45 0 0 1 3.31 1.65 12.64 12.64 0 0 0-10.41 0 10.45 10.45 0 0 1 3.31-1.65L10.93 4a15.3 15.3 0 0 0-3.75 1.18C4.8 8.7 4.16 12.13 4.48 15.52A15.05 15.05 0 0 0 9.08 18l.57-.78a9.92 9.92 0 0 1-1.48-.72l.36-.28a10.9 10.9 0 0 0 6.94 0l.36.28c-.47.28-.97.52-1.48.72l.57.78a15.05 15.05 0 0 0 4.6-2.48c.38-3.93-.64-7.32-2.7-10.34ZM9.54 13.45c-.83 0-1.51-.76-1.51-1.69s.67-1.69 1.51-1.69 1.52.76 1.51 1.69c0 .93-.67 1.69-1.51 1.69Zm4.92 0c-.83 0-1.51-.76-1.51-1.69s.67-1.69 1.51-1.69 1.52.76 1.51 1.69c0 .93-.67 1.69-1.51 1.69Z" />
    </svg>
  )
}

function DevpostLogo({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5.25 5.25h6.08c4.42 0 7.42 2.68 7.42 6.75s-3 6.75-7.42 6.75H5.25V5.25Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M9.15 8.72h2.04c2.24 0 3.62 1.25 3.62 3.28s-1.38 3.28-3.62 3.28H9.15V8.72Z"
        fill="currentColor"
      />
    </svg>
  )
}

function QuickLinkLogo({ label }: { label: string }) {
  if (label === "Discord") {
    return <DiscordLogo className="h-5 w-5 shrink-0 transition-colors group-hover:text-[#5865f2]" />
  }

  if (label === "Devpost") {
    return <DevpostLogo className="h-5 w-5 shrink-0 transition-colors group-hover:text-[#00b8d9]" />
  }

  return <ClipboardList className="h-5 w-5 shrink-0 transition-colors group-hover:text-[#673ab7]" />
}

export default function ResourcesPage() {
  const [activeId, setActiveId] = useState<
    (typeof RESOURCE_MENU_ITEMS)[number]["id"]
  >("general")

  const activeSection =
    RESOURCE_SECTIONS.find((section) => section.id === activeId) ??
    RESOURCE_SECTIONS[0]

  return (
    <main className="min-h-screen bg-black text-[#c7c3b5]">
      <header className="border-b border-[#c7c3b5]/20 px-4 pb-5 pt-6 md:px-8">
        <div className="grid grid-cols-2 items-start gap-4 md:grid-cols-3">
          <div className="font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#c7c3b5]/90 md:text-xs">
            <p>Location: {SITE_CONFIG.locationShort}</p>
            <p className="mt-1">Dates: {SITE_CONFIG.eventDatesLabel}</p>
          </div>

          <div className="hidden items-center justify-center md:flex">
            <h1 className="font-display text-2xl font-bold uppercase tracking-tight text-[#c7c3b5]">
              <Link href={SITE_CONFIG.links.home} className="transition-colors hover:text-white">
                {SITE_CONFIG.siteName}
              </Link>{" "}
              <span className="font-mono text-xs tracking-[0.18em] text-[#c7c3b5]/70">| Hacker Resources</span>
            </h1>
          </div>

          <div className="justify-self-end text-right font-mono text-[10px] font-bold uppercase tracking-[0.22em] text-[#c7c3b5]/90 md:text-xs">
            <p>Hackers: {SITE_CONFIG.hackerCountLabel}</p>
            <p className="mt-1">Building: {SITE_CONFIG.buildDurationLabel}</p>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:grid md:min-h-[calc(100vh-92px)] md:grid-cols-[290px_1fr]">
        <aside className="border-b border-[#c7c3b5]/20 md:border-b-0 md:border-r md:border-[#c7c3b5]/20">
          <nav className="flex overflow-x-auto md:block">
            {RESOURCE_MENU_ITEMS.map((item) => {
              const active = item.id === activeId

              return (
                <button
                  key={item.id}
                  onClick={() => setActiveId(item.id)}
                  className={`min-w-fit border-r border-[#c7c3b5]/10 px-5 py-4 text-left font-mono text-sm font-bold uppercase tracking-[0.16em] transition-colors md:block md:w-full md:border-r-0 md:border-b md:border-[#c7c3b5]/10 md:px-4 md:py-4 md:text-base ${
                    active
                      ? "bg-[#c7c3b5] text-black"
                      : "text-[#c7c3b5]/95 hover:bg-[#c7c3b5]/10"
                  }`}
                >
                  {item.label}
                </button>
              )
            })}

            <SafeExternalLink
              href={SITE_CONFIG.links.devpostResources}
              className="flex min-w-fit items-center gap-2 border-r border-[#c7c3b5]/10 px-5 py-4 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#c7c3b5]/95 transition-colors hover:bg-[#c7c3b5]/10 md:border-b md:border-r-0 md:border-[#c7c3b5]/10 md:px-4 md:py-4 md:text-base"
            >
              Get Started
              <ExternalLink className="h-4 w-4" />
            </SafeExternalLink>

            <SafeExternalLink
              href={SITE_CONFIG.links.devpost}
              className="flex min-w-fit items-center gap-2 border-r border-[#c7c3b5]/10 px-5 py-4 font-mono text-sm font-bold uppercase tracking-[0.16em] text-[#c7c3b5]/95 transition-colors hover:bg-[#c7c3b5]/10 md:border-b md:border-r-0 md:border-[#c7c3b5]/10 md:px-4 md:py-4 md:text-base"
            >
              Schedule
              <ExternalLink className="h-4 w-4" />
            </SafeExternalLink>
          </nav>
        </aside>

        <section className="relative px-6 py-8 md:px-10 md:py-10 lg:px-14">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-px bg-[#c7c3b5]/15" />

          <div className="w-full max-w-7xl">
            <p className="font-mono text-xs uppercase tracking-[0.28em] text-[#c7c3b5]/60">
              {activeSection.menu}
            </p>
            <h2 className="mt-3 whitespace-pre-line font-display text-6xl font-bold uppercase leading-[0.88] tracking-tight text-[#e1dece] md:text-7xl lg:text-8xl">
              {activeSection.title}
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-[#c7c3b5]/75 md:text-lg">
              {activeSection.subtitle}
            </p>

            <div className="mt-7 grid w-full grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {RESOURCE_QUICK_LINKS.map((link) => (
                <SafeExternalLink
                  key={link.label}
                  href={link.href}
                  className="group flex min-h-16 items-center justify-between border border-[#c7c3b5]/20 bg-[#c7c3b5]/[0.03] px-4 py-3 transition-colors hover:border-current hover:bg-[#c7c3b5]/10 data-[brand=devpost]:hover:text-[#00b8d9] data-[brand=discord]:hover:text-[#5865f2] data-[brand=registration-form]:hover:text-[#673ab7]"
                  data-brand={link.label.toLowerCase().replaceAll(" ", "-")}
                >
                  <span className="flex min-w-0 items-center gap-3 font-mono text-xs uppercase tracking-[0.18em] text-[#d7d3c3] transition-colors group-hover:text-current">
                    <QuickLinkLogo label={link.label} />
                    <span className="truncate">{link.label}</span>
                  </span>
                  <ExternalLink className="h-3.5 w-3.5 text-[#c7c3b5]/75 transition-all group-hover:translate-x-0.5 group-hover:text-current" />
                </SafeExternalLink>
              ))}
            </div>

            <div className="mt-10 space-y-10 pb-16">
              {activeSection.blocks.map((block) => (
                <article key={block.heading} className="space-y-4 border-t border-[#c7c3b5]/12 pt-6">
                  <h3 className="font-mono text-xl uppercase tracking-[0.12em] text-[#d7d3c3] md:text-2xl">
                    {block.heading}
                  </h3>

                  {block.body?.map((paragraph) => (
                    <p key={paragraph} className="max-w-5xl text-base leading-8 text-[#c7c3b5]/85 md:text-[1.07rem]">
                      {paragraph}
                    </p>
                  ))}

                  {block.bullets && (
                    <ul className="space-y-3 pl-5 text-base text-[#c7c3b5]/85 marker:text-[#e1dece] md:text-[1.07rem]">
                      {block.bullets.map((bullet) => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  )
}
