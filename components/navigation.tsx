import { SITE_CONFIG } from "@/lib/site-config"

export function Navigation() {
  return (
    <div className="relative hidden w-full px-0 pt-4 pb-12 font-mono tracking-[0.2em] uppercase text-[#c7c3b5] md:block">
      {/* SVG Line with geometric kink - Increased stroke weight and moved branding below */}
      <div className="absolute top-8 left-0 w-full overflow-visible pointer-events-none opacity-50">
        <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 15 H350 L370 25 H630 L650 15 H1000" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="relative flex w-full justify-between items-start pt-12">
        {/* Left Block: Location & Dates */}
        <div className="flex flex-col items-start gap-1 text-left" style={{ fontFamily: "'ShareTechMono', monospace" }}>
          <div className="flex gap-2 items-baseline text-[10px] md:text-xs">
            <span className="font-bold">LOCATION:</span>
            <span className="font-bold">
              <span className="hidden lg:inline">{SITE_CONFIG.locationLong.toUpperCase()}</span>
              <span className="lg:hidden">{SITE_CONFIG.locationShort}</span>
            </span>
          </div>
          <div className="flex gap-2 items-baseline text-[10px] md:text-xs">
            <span className="font-bold">DATES:</span>
            <span className="font-bold">{SITE_CONFIG.eventDatesLabel.toUpperCase()}</span>
          </div>
        </div>

        {/* Center Block: Main Branding - Smaller and positioned underneath the line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-8 flex flex-col items-center pointer-events-none">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter leading-none mt-6 text-[#c7c3b5]/90 uppercase font-display">
            {SITE_CONFIG.siteName}
          </h1>
        </div>

        {/* Right Block: Status & Duration */}
        <div className="flex flex-col items-end gap-1 text-right" style={{ fontFamily: "'ShareTechMono', monospace" }}>
          <div className="flex w-full gap-2 justify-end items-baseline text-[10px] md:text-xs">
            <span className="font-bold">STATUS:</span>
            <span className="font-bold">{SITE_CONFIG.eventStatusLabel.toUpperCase()}</span>
          </div>
          <div className="flex w-full gap-2 justify-end items-baseline text-[10px] md:text-xs">
            <span className="font-bold">BUILDING:</span>
            <span className="font-bold">{SITE_CONFIG.buildDurationLabel.toUpperCase()}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
