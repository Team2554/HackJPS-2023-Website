import Image from "next/image"
import { SITE_CONFIG } from "@/lib/site-config"
import { SafeExternalLink } from "@/components/safe-external-link"

type Sponsor = {
  name: string
  href: string
  src: string
  width: number
  height: number
  logoClassName?: string
}

const sponsors: Sponsor[] = [
  {
    name: "Wolfram",
    href: "https://www.wolfram.com/",
    src: "/sponsors/wolfram.png",
    width: 2048,
    height: 1365,
    logoClassName: "max-h-[136px] max-w-[184px]",
  },
  {
    name: "nexos.ai",
    href: "https://nexos.ai/",
    src: "/sponsors/nexos-ai.png",
    width: 454,
    height: 111,
    logoClassName: "max-h-[92px] max-w-[244px]",
  },
  {
    name: "Incogni",
    href: "https://incogni.com/",
    src: "/sponsors/incogni.png",
    width: 2969,
    height: 863,
    logoClassName: "max-h-[96px] max-w-[244px] invert",
  },
  {
    name: "Interview Cake",
    href: "https://www.interviewcake.com/",
    src: "/sponsors/interviewcake.png",
    width: 1298,
    height: 232,
    logoClassName: "max-h-[84px] max-w-[244px]",
  },
  {
    name: "NordProtect",
    href: "https://nordprotect.com/",
    src: "/sponsors/nordprotect.png",
    width: 1023,
    height: 773,
    logoClassName: "max-h-[136px] max-w-[200px]",
  },
  {
    name: "NordVPN",
    href: "https://nordvpn.com/hackathons",
    src: "/sponsors/nordvpn.png",
    width: 1600,
    height: 746,
    logoClassName: "max-h-[116px] max-w-[232px]",
  },
  {
    name: "NordPass",
    href: "https://nordpass.com/",
    src: "/sponsors/nordpass.png",
    width: 440,
    height: 400,
    logoClassName: "max-h-[136px] max-w-[188px]",
  },
  {
    name: "Appwrite",
    href: "https://appwrite.io/",
    src: "/sponsors/appwrite.avif",
    width: 454,
    height: 111,
    logoClassName: "max-h-[92px] max-w-[244px]",
  },
  {
    name: "Saily",
    href: "https://saily.com/",
    src: "/sponsors/saily.png",
    width: 500,
    height: 500,
    logoClassName: "max-h-[136px] max-w-[188px] invert",
  },
  {
    name: "Art of Problem Solving",
    href: "https://artofproblemsolving.com/",
    src: "/sponsors/AOPS.png",
    width: 454,
    height: 111,
    logoClassName: "max-h-[92px] max-w-[244px]",
  },
]

export function SponsorsSection() {
  return (
    <section id="sponsors" className="flex min-h-screen flex-col justify-center px-4 py-24 sm:py-32 md:px-6 lg:px-8">
      <div className="w-full">
        <div className="w-full">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            OUR SPONSORS
          </h2>

          <p className="mt-6 font-subheading text-[28px] font-[300] leading-relaxed text-muted-foreground w-full max-w-none tracking-wide">
            Our sponsors make HackJPS possible by providing resources, mentorship, and opportunities for all participants.
          </p>

          <div className="mt-16">
            <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-5 lg:grid-cols-5 xl:gap-6">
              {sponsors.map((sponsor) => (
                <SafeExternalLink
                  key={sponsor.name}
                  href={sponsor.href}
                  aria-label={`Visit ${sponsor.name}`}
                  className="group block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-4 focus-visible:ring-offset-background"
                >
                  <div
                    className="relative flex h-[152px] items-center justify-center border border-foreground/15 bg-card/10 p-2 transition-all hover:border-accent/70 hover:bg-foreground/5 sm:h-[168px] lg:h-[176px]"
                  >
                    {/* Detached corners */}
                    <div className="absolute -left-[4px] -top-[4px] h-3 w-3 border-l-2 border-t-2 border-foreground transition-colors group-hover:border-accent" />
                    <div className="absolute -right-[4px] -top-[4px] h-3 w-3 border-r-2 border-t-2 border-foreground transition-colors group-hover:border-accent" />
                    <div className="absolute -bottom-[4px] -left-[4px] h-3 w-3 border-b-2 border-l-2 border-foreground transition-colors group-hover:border-accent" />
                    <div className="absolute -bottom-[4px] -right-[4px] h-3 w-3 border-b-2 border-r-2 border-foreground transition-colors group-hover:border-accent" />

                    <Image
                      src={sponsor.src}
                      alt={`${sponsor.name} logo`}
                      width={sponsor.width}
                      height={sponsor.height}
                      sizes="(min-width: 1024px) 20vw, (min-width: 640px) 33vw, 50vw"
                      className={`h-auto w-auto object-contain transition-transform duration-200 group-hover:scale-[1.03] ${sponsor.logoClassName ?? ""}`}
                    />
                  </div>
                </SafeExternalLink>
              ))}
            </div>
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
