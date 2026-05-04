"use client"

import { useEffect, useRef, useState } from "react"
import { SITE_CONFIG } from "@/lib/site-config"

const faqs = [
  {
    question: "Who can participate in HackJPS?",
    answer: "HackJPS is open to all high school and middle school students ages 13+. Whether you're a beginner or experienced developer, you're welcome to join!",
  },
  {
    question: "Do I need a team to participate?",
    answer: "No! You can register as an individual and we'll help you find teammates during our team formation session. Teams can have up to 4 members.",
  },
  {
    question: "What should I bring?",
    answer: "Bring your laptop, charger, any hardware you want to hack with, toiletries, and whatever you need to stay comfortable. We'll provide WiFi and food and drink will be available for purchase throughout the event!",
  },
  {
    question: "Is there a cost to participate?",
    answer: "HackJPS is completely free! Thanks to our sponsors, we cover prizes, swag, and all event activities at no cost to participants.",
  },
  {
    question: "What if I've never been to a hackathon before?",
    answer: "That's totally fine! About 40% of our participants are first-time hackers. We have beginner workshops, mentors on-site, and a supportive community to help you succeed.",
  },
  {
    question: "Can I start working on my project before the event?",
    answer: "No. To keep things fair, all coding must be done during the hackathon. However, you can brainstorm ideas and form teams beforehand.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const textRef = useRef<HTMLHeadingElement>(null)
  const [scaleX, setScaleX] = useState(1)

  useEffect(() => {
    const fitTextToWidth = () => {
      const containerWidth = containerRef.current?.clientWidth ?? 0
      const textWidth = textRef.current?.scrollWidth ?? 0
      const safetyInset = 2

      if (containerWidth > 0 && textWidth > 0) {
        setScaleX((containerWidth - safetyInset) / textWidth)
      }
    }

    fitTextToWidth()

    const observer = typeof ResizeObserver !== "undefined" ? new ResizeObserver(fitTextToWidth) : null
    if (observer && containerRef.current) observer.observe(containerRef.current)

    document.fonts?.ready?.then?.(fitTextToWidth).catch(() => {
      // Ignore font-loading event-style rejections and keep fallback sizing.
    })
    window.addEventListener("resize", fitTextToWidth)

    return () => {
      observer?.disconnect()
      window.removeEventListener("resize", fitTextToWidth)
    }
  }, [])

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section id="faq" className="flex flex-col px-4 pt-24 sm:pt-32 md:px-6 lg:px-8">
      <div className="w-full">
        <div className="w-full">
          <h2 className="font-display text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl uppercase">
            COMMON QUESTIONS
          </h2>

          <div className="mt-12 flex flex-col gap-6">
            {faqs.map((faq, index) => (
              <article
                key={faq.question}
                className="group relative border border-foreground/15 bg-card/10 transition-all hover:bg-foreground/5"
              >
                <button
                  type="button"
                  aria-expanded={openIndex === index}
                  onClick={() => toggleFaq(index)}
                  className="w-full cursor-pointer p-6 text-left"
                >
                  <div className="absolute -left-[4px] -top-[4px] h-3 w-3 border-l-2 border-t-2 border-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute -right-[4px] -top-[4px] h-3 w-3 border-r-2 border-t-2 border-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute -bottom-[4px] -left-[4px] h-3 w-3 border-b-2 border-l-2 border-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="absolute -bottom-[4px] -right-[4px] h-3 w-3 border-b-2 border-r-2 border-foreground opacity-0 transition-opacity group-hover:opacity-100" />

                  <div className="flex items-center justify-between gap-4">
                    <span className="text-lg font-display uppercase tracking-wider text-foreground">
                      {faq.question}
                    </span>
                    <span className="text-accent text-2xl font-display font-mono">
                      {openIndex === index ? "[-]" : "[+]"}
                    </span>
                  </div>
                </button>

                {openIndex === index && (
                  <div className="mt-1 border-t border-foreground/10 px-6 pb-6 pt-4">
                    <p className="text-muted-foreground leading-relaxed font-subheading text-lg">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </article>
            ))}
          </div>
        </div>
      </div>
      <div className="h-32" />
      <div className="relative flex flex-col items-center justify-center overflow-visible p-0">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-64 bg-gradient-to-b from-black via-black/80 to-transparent" />
        <div ref={containerRef} className="w-full">
          <h2
            ref={textRef}
            className="mx-auto w-max select-none font-display text-[23vw] font-bold uppercase leading-[0.7] tracking-tighter text-foreground/10"
            style={{ transform: `scaleX(${scaleX})`, transformOrigin: "center" }}
            aria-label={SITE_CONFIG.siteName}
          >
            {SITE_CONFIG.siteName.toUpperCase()}
          </h2>
        </div>
      </div>
    </section>
  )
}
