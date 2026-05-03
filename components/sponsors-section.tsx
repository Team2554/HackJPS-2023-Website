import Image from "next/image"
import { SITE_CONFIG } from "@/lib/site-config"

const sponsors: any[] = []

export function SponsorsSection() {
  return (
    <section id="sponsors" className="flex min-h-screen flex-col justify-center px-4 py-24 sm:py-32 md:px-6 lg:px-8">
      <div className="w-full">
        {/* Main content */}
        <div className="w-full">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            OUR SPONSORS
          </h2>

            <p className="mt-6 font-subheading text-[28px] font-[300] leading-relaxed text-muted-foreground w-full max-w-none tracking-wide">
              Our sponsors make HackJPS possible by providing resources, mentorship, and opportunities for all participants.
            </p>

            {/* Sponsor list - simple text layout */}
            <div className="mt-16">
              {sponsors.length === 0 ? (
                <div className="flex items-center justify-center py-16">
                  <p className="text-4xl text-muted-foreground font-subheading">
                    Sponsors coming soon...
                  </p>
                </div>
              ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                  {sponsors.map((sponsor) => (
                    <div
                      key={sponsor.name}
                      className="relative p-3 border border-foreground/15 bg-card/10 hover:bg-foreground/5 transition-all flex items-center justify-center min-h-[160px]"
                    >
                      {/* Detached corners */}
                      <div className="absolute -left-[4px] -top-[4px] h-3 w-3 border-l-2 border-t-2 border-foreground" />
                      <div className="absolute -right-[4px] -top-[4px] h-3 w-3 border-r-2 border-t-2 border-foreground" />
                      <div className="absolute -bottom-[4px] -left-[4px] h-3 w-3 border-b-2 border-l-2 border-foreground" />
                      <div className="absolute -bottom-[4px] -right-[4px] h-3 w-3 border-b-2 border-r-2 border-foreground" />

                      <div className="relative">
                        <Image
                          src="/placeholder-logo.svg"
                          alt={`${sponsor.name} logo placeholder`}
                          width={200}
                          height={150}
                          className="h-auto w-full max-w-[200px]"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            <div className="mt-12">
              <a 
                href={SITE_CONFIG.links.sponsorContact}
                className="inline-flex items-center gap-2 text-accent transition-colors hover:text-accent/80"
              >
                <span>Become a sponsor</span>
                <span aria-hidden="true">-&gt;</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    )
  }
