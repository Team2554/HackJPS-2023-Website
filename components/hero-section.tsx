import { Navigation } from "./navigation";
import Image from "next/image";
import { SITE_CONFIG } from "@/lib/site-config";
import { SafeExternalLink } from "@/components/safe-external-link";

export function HeroSection() {
  return (
    <section className="relative flex min-h-screen flex-col justify-start px-4 pt-6 pb-24 md:px-6 lg:px-8 overflow-hidden">
      <Navigation />

      {/* Background Hawk Statue */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        <div className="relative h-[130%] w-full translate-y-[3%] scale-[1.2] md:h-[110%] md:translate-y-[10%] md:scale-100">
          <Image
            src="/hawk-statue-hero.png"
            alt="Hawk Statue"
            fill
            className="object-contain object-[98%_32%] md:object-right-bottom"
            priority
          />
          {/* Vignette/Fade effect */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-l from-black/60 via-black/20 to-transparent" />
        </div>
      </div>

      <div className="relative z-10 flex flex-1 w-full flex-col justify-center -mt-16 md:mt-0">
        {/* Main headline */}
        <h1 className="mt-0 font-display text-5xl font-bold leading-none tracking-tighter text-foreground sm:text-7xl md:mt-8 md:text-8xl lg:text-[12rem] xl:text-[14rem]">
          {SITE_CONFIG.siteName.toUpperCase()}
        </h1>

        {/* Post-event CTA */}
        <div
          className="mt-8 self-start"
          style={{ fontFamily: "'ShareTechMono', monospace" }}
        >
          <SafeExternalLink
            href={SITE_CONFIG.links.devpostGallery}
            className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-accent transition-colors hover:text-accent/80 md:text-base"
          >
            <span>View the 2026 Projects</span>
            <span aria-hidden="true">-&gt;</span>
          </SafeExternalLink>
        </div>
      </div>

      {/* Scroll indicator */}

      {/*
        <div className="absolute bottom-10 left-1/2 hidden -translate-x-1/2 md:block">
        <div className="flex h-10 w-6 items-start justify-center rounded-full border border-muted-foreground/30 p-2">
          <div className="h-2 w-1 animate-bounce rounded-full bg-muted-foreground" />
        </div>
      </div>
      */}
    </section>
  );
}
