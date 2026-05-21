import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ScheduleSection } from "@/components/schedule-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { ArchiveSection } from "@/components/archive-section"
import { FAQSection } from "@/components/faq-section"
import { StickyBanner } from "@/components/ui/sticky-banner"

export default function Home() {
  return (
    <main className="bg-black text-foreground">
      <StickyBanner className="border-y border-accent/40 bg-black/95 px-0 py-0 text-accent shadow-[0_0_28px_rgba(22,163,74,0.22)] backdrop-blur">
        <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,transparent,rgba(22,163,74,0.18),transparent)] animate-banner-scan" />
        <div className="relative flex min-h-14 w-full items-center overflow-hidden pr-14 font-mono text-sm uppercase tracking-[0.2em] sm:min-h-16 sm:text-base">
          <div className="z-10 flex h-14 shrink-0 items-center border-r border-accent/35 bg-accent px-5 font-bold tracking-[0.16em] text-black sm:h-16 sm:px-8">
            Venue Update
          </div>
          <div className="flex min-w-0 flex-1 overflow-hidden">
            <div className="flex w-max animate-banner-marquee items-center whitespace-nowrap">
              {Array.from({ length: 4 }).map((_, index) => (
                <span key={index} className="mx-16 text-accent-foreground/90 sm:mx-24">
                  HackJPS 2026 will now be held entirely virtual due to unspecified venue issues.
                </span>
              ))}
            </div>
          </div>
        </div>
      </StickyBanner>
      <div className="flex min-h-screen flex-col">
        <HeroSection />
      </div>
      <div>
        <AboutSection />
      </div>
      <div>
        <ScheduleSection />
      </div>
      <div>
        <SponsorsSection />
      </div>
      <div>
        <ArchiveSection />
      </div>
      <div>
        <FAQSection />
      </div>
    </main>
  )
}
