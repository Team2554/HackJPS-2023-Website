"use client"

import { ExternalLink } from "lucide-react"
import { SafeExternalLink } from "@/components/safe-external-link"

const archiveData = [
  {
    year: "2026",
    organizers: "Aryan Mittal, Trisha Panchangmath, and Neerav Gupta",
    links: [
      { label: "Project Gallery", href: "https://hackjps26.devpost.com/project-gallery" },
      { label: "Devpost", href: "https://hackjps26.devpost.com" },
    ],
  },
  {
    year: "2025",
    organizers: "Anumeha Haldar, Aditya Saini, Abir Modak, Trisha Panchangmath, Neerav Gupta, and Aryan Mittal",
    links: [
      { label: "Project Gallery", href: "https://hackjps25.devpost.com/project-gallery" },
      { label: "Livestream Recording", href: "https://youtu.be/kVIHTpSUaTw" },
    ],
  },
  {
    year: "2024",
    organizers: "Sai Voruganti, Troy Gunawardene, Naishadh Patel, and Ishaan Gupte with the support of JPS Robotics",
    links: [
      { label: "Project Gallery", href: "https://hackjps-2024.devpost.com/project-gallery" },
      { label: "Livestream Recording", href: "https://www.youtube.com/watch?v=PxcU1oWWCg4" },
      { label: "LinkedIn Article", href: "https://www.linkedin.com/pulse/hackjps-personal-recap-many-thanks-troy-gunawardene-rotee/" },
    ],
  },
  {
    year: "2023",
    organizers: "Sai Voruganti, Troy Gunawardene, Naishadh Patel, and Ishaan Gupte",
    links: [
      { label: "Project Gallery", href: "https://hackjps-2023.devpost.com/project-gallery" },
      { label: "Livestream Recording", href: "https://drive.google.com/file/d/1GKiAEpitQPj1tC8l0EvxY1nGhErid1z8/view?usp=drive_link" },
      { label: "GradeScout Blog Feature", href: "https://blog.gradescout.live/hackjps-2023/" },
    ],
  },
  {
    year: "2020",
    organizers: "Venkat Kunaparaju, Aditya Chakka, Rishi Sinha, Aayush Gupta, Krish Naik, and Ashwin Saraswatula",
    links: [
      { label: "Project Gallery", href: "https://hackjps.devpost.com/project-gallery" },
      { label: "Opening Ceremony", href: "https://www.youtube.com/watch?v=at3Q_unZvBo" },
    ],
  },
]

export function ArchiveSection() {
  return (
    <section id="archive" className="px-4 py-24 sm:py-32 md:px-6 lg:px-8">
      <div className="w-full">
        <div className="mb-12">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            ARCHIVE
          </h2>
          <p className="mt-6 font-subheading text-[28px] font-[300] leading-8 text-muted-foreground w-full max-w-none tracking-wide">
            A look back at our previous events.
          </p>
        </div>

        <div className="space-y-16">
          {archiveData.map((item) => (
            <div key={item.year} className="group relative">
              <div className="flex flex-col md:flex-row md:items-baseline md:gap-8">
                <div className="mb-4 md:mb-0 md:w-32">
                  <h3 className="text-4xl font-bold tracking-tighter text-foreground/50 group-hover:text-accent transition-colors duration-300 font-display">
                    {item.year}
                  </h3>
                </div>
                
                <div className="flex-1">
                  <p className="mb-6 text-sm font-medium text-muted-foreground/80">
                    Organized by <span className="text-foreground">{item.organizers}</span>
                  </p>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {item.links.map((link) => (
                      <SafeExternalLink
                        key={link.label}
                        href={link.href}
                        className="group/link relative p-4 border border-foreground/15 bg-card/30 hover:bg-foreground/5 transition-all"
                        style={{ fontFamily: "'ShareTechMono', monospace" }}
                      >
                        {/* Detached corners */}
                        <div className="absolute -left-[3px] -top-[3px] h-2 w-2 border-l border-t border-foreground opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        <div className="absolute -right-[3px] -top-[3px] h-2 w-2 border-r border-t border-foreground opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        <div className="absolute -bottom-[3px] -left-[3px] h-2 w-2 border-b border-l border-foreground opacity-0 group-hover/link:opacity-100 transition-opacity" />
                        <div className="absolute -bottom-[3px] -right-[3px] h-2 w-2 border-b border-r border-foreground opacity-0 group-hover/link:opacity-100 transition-opacity" />

                        <div className="flex items-center justify-between relative z-10">
                          <span className="text-sm font-bold uppercase tracking-wider text-muted-foreground group-hover/link:text-foreground">
                            {link.label}
                          </span>
                          <ExternalLink className="h-4 w-4 text-muted-foreground/50 group-hover/link:text-foreground transition-colors" />
                        </div>
                      </SafeExternalLink>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
