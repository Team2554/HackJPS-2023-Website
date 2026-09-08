import Image from "next/image"

export function AboutSection() {
  return (
    <section id="about" className="relative flex min-h-screen items-center px-4 py-24 md:px-6 lg:px-8 overflow-hidden">
      <div className="grid w-full grid-cols-1 gap-12 lg:grid-cols-2 items-center">
        {/* Left side: Hawk Statue Image */}
        <div className="hidden lg:block relative h-[600px] md:h-[800px] w-full lg:h-[900px] pointer-events-none select-none overflow-hidden">
          <div className="relative h-full w-full scale-125 translate-y-[10%]">
            <Image
              src="/hawk staue alternte view.png"
              alt="Hawk Statue Alternate View"
              fill
              className="object-contain object-center saturate-[0.4] brightness-90"
              priority
            />
          </div>
          {/* Restored Vignette/Fade effect at bottom - outside the scaling div to ensure visibility */}
          <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black via-black/80 to-transparent z-10" />
        </div>

        {/* Right side: Content */}
        <div className="max-w-3xl lg:max-w-none relative z-10">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            ABOUT HACKJPS
          </h2>
          <p className="mt-8 font-subheading text-[28px] font-[300] leading-8 text-muted-foreground tracking-wide">
            HackJPS is our annual flagship hackathon, bringing together the most creative minds for a weekend of intense learning and building. Whether you're a seasoned developer or just starting out, we provide the environment and resources you need to turn your ideas into reality.
            <br />
            <br />
            HackJPS 2026 wrapped up on May 31, 2026. Participation was open to middle and high school students (aged 13+) from Edison as well as from other locations and school districts, at any level of experience or none at all &mdash; we were welcoming to beginners and experts alike!
            <br />
            <br />
            Participants also attended virtual workshops hosted by our sponsors and student organizations, exposing them to a multitude of other topics that might interest them.
            <br />
            <br />
            Thank you to everyone who built with us. Keep an eye on this page for news about the next HackJPS.
          </p>
        </div>
      </div>
    </section>
  )
}
