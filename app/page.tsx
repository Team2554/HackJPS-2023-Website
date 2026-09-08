import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ScheduleSection } from "@/components/schedule-section"
import { SponsorsSection } from "@/components/sponsors-section"
import { ArchiveSection } from "@/components/archive-section"
import { FAQSection } from "@/components/faq-section"

export default function Home() {
  return (
    <main className="bg-black text-foreground">
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
