import { ArrowRight, Clock, Sparkles } from "lucide-react"
import { SafeExternalLink } from "@/components/safe-external-link"
import { SITE_CONFIG } from "@/lib/site-config"

export function RegisterSection() {
  return (
    <section id="register" className="px-6 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl">
        <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-accent/20 via-card to-card p-8 sm:p-12 md:p-16">
          {/* Decorative elements */}
          <div className="pointer-events-none absolute -right-20 -top-20 h-64 w-64 rounded-full bg-accent/10 blur-3xl" />
          <div className="pointer-events-none absolute -bottom-20 -left-20 h-64 w-64 rounded-full bg-accent/5 blur-3xl" />
          
          <div className="relative z-10 text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-accent/20 px-4 py-2">
              <Sparkles className="h-4 w-4 text-accent" />
              <span className="text-sm font-medium text-accent">Registration</span>
            </div>
            
            <h2 className="font-display text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
              <span className="text-balance">Ready to build something amazing?</span>
            </h2>
            
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">
              Join fellow innovators for a full weekend of hacking, learning, and fun.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
              <SafeExternalLink
                href={SITE_CONFIG.links.register}
                className="group inline-flex items-center gap-2 rounded-full bg-accent px-8 py-3.5 text-base font-medium text-accent-foreground transition-all hover:scale-105"
              >
                Register Now
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </SafeExternalLink>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Clock className="h-4 w-4" />
                <span className="text-sm">Takes less than 5 minutes</span>
              </div>
            </div>

            <p className="mt-8 text-sm text-muted-foreground">
              Questions?{" "}
              <a href={SITE_CONFIG.links.generalContact} className="text-accent hover:underline">
                Contact us
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
