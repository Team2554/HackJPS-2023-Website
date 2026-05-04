"use client"

import { useState, useEffect } from "react"
import { SITE_CONFIG } from "@/lib/site-config"

type TimeLeft = {
  days: number
  hours: number
  minutes: number
}

function getTimeLeft(targetDateMs: number): TimeLeft {
  const now = Date.now()
  const distance = targetDateMs - now

  if (distance <= 0) {
    return { days: 0, hours: 0, minutes: 0 }
  }

  return {
    days: Math.floor(distance / (1000 * 60 * 60 * 24)),
    hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
    minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
  }
}

export function Navigation() {
  const targetDateMs = Date.parse(SITE_CONFIG.countdownTargetIso)
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(() => getTimeLeft(targetDateMs))

  useEffect(() => {
    setTimeLeft(getTimeLeft(targetDateMs))

    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft(targetDateMs))
    }, 30_000)

    return () => clearInterval(timer)
  }, [targetDateMs])

  const formatNumber = (num: number) => num.toString().padStart(2, '0')

  return (
    <div className="relative hidden w-full px-0 pt-4 pb-12 font-mono tracking-[0.2em] uppercase text-[#c7c3b5] md:block">
      {/* SVG Line with geometric kink - Increased stroke weight and moved branding below */}
      <div className="absolute top-8 left-0 w-full overflow-visible pointer-events-none opacity-50">
        <svg width="100%" height="40" viewBox="0 0 1000 40" preserveAspectRatio="none" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 15 H350 L370 25 H630 L650 15 H1000" stroke="currentColor" strokeWidth="2.5" />
        </svg>
      </div>

      <div className="relative flex w-full justify-between items-start pt-12">
        {/* Left Block: Location & Timer */}
        <div className="flex flex-col items-start gap-1 text-left" style={{ fontFamily: "'ShareTechMono', monospace" }}>
          <div className="flex gap-2 items-baseline text-[10px] md:text-xs">
            <span className="font-bold">LOCATION:</span>
            <span className="font-bold">
              <span className="hidden lg:inline">{SITE_CONFIG.locationLong.toUpperCase()}</span>
              <span className="lg:hidden">{SITE_CONFIG.locationShort}</span>
            </span>
          </div>
          <div className="flex gap-2 items-baseline text-[10px] md:text-xs font-bold tracking-[0.2em] tabular-nums">
            <span>REMAINING:</span>
            <span>{formatNumber(timeLeft.days)}:{formatNumber(timeLeft.hours)}:{formatNumber(timeLeft.minutes)}</span>
          </div>
        </div>

        {/* Center Block: Main Branding - Smaller and positioned underneath the line */}
        <div className="absolute left-1/2 -translate-x-1/2 top-8 flex flex-col items-center pointer-events-none">
          <h1 className="text-2xl md:text-3xl font-bold tracking-tighter leading-none mt-6 text-[#c7c3b5]/90 uppercase font-display">
            {SITE_CONFIG.siteName}
          </h1>
        </div>

        {/* Right Block: Hackers & Duration */}
        <div className="flex flex-col items-end gap-1 text-right" style={{ fontFamily: "'ShareTechMono', monospace" }}>
          <div className="flex w-full gap-2 justify-end items-baseline text-[10px] md:text-xs">
            <span className="font-bold">HACKERS:</span>
            <span className="font-bold">{SITE_CONFIG.hackerCountLabel}</span>
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
