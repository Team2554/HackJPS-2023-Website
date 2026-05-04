"use client"

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { SITE_CONFIG } from '@/lib/site-config'

export function FloatingResourcesButton() {
  const pathname = usePathname()

  if (pathname === SITE_CONFIG.links.resources) {
    return null
  }

  return (
    <div className="group fixed bottom-4 right-4 z-50 scale-80 md:bottom-6 md:right-6 md:scale-90">
      {/* Container with sharp corners and thin border */}
      <div className="relative border border-[#16a34a]/30 bg-[#16a34a]/5 p-1 backdrop-blur-sm">
        {/* Corner accents */}
        <div className="absolute -left-[1px] -top-[1px] h-3 w-3 border-l-2 border-t-2 border-[#16a34a]" />
        <div className="absolute -right-[1px] -top-[1px] h-3 w-3 border-r-2 border-t-2 border-[#16a34a]" />
        <div className="absolute -bottom-[1px] -left-[1px] h-3 w-3 border-b-2 border-l-2 border-[#16a34a]" />
        <div className="absolute -bottom-[1px] -right-[1px] h-3 w-3 border-b-2 border-r-2 border-[#16a34a]" />

        <Button 
          asChild 
          className="relative rounded-none bg-transparent px-6 py-4 text-sm font-bold tracking-[0.15em] text-[#16a34a] transition-all hover:bg-[#16a34a]/10 active:scale-95 border-none shadow-none font-display md:px-8 md:py-6 md:text-base md:tracking-widest"
        >
          <Link href={SITE_CONFIG.links.resources} className="flex items-center gap-2 md:gap-4">
            HACKER RESOURCES
            <span className="text-base font-light opacity-80 md:text-xl">&gt;</span>
          </Link>
        </Button>
      </div>
    </div>
  )
}
