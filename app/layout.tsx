import type { Metadata } from "next"
import { Space_Grotesk, Inter } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { FloatingResourcesButton } from "@/components/floating-resources-button"
import { SITE_CONFIG } from "@/lib/site-config"
import "./globals.css"

const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  variable: "--font-display",
})
const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-sans",
})

export const metadata: Metadata = {
  title: `${SITE_CONFIG.siteName} ${SITE_CONFIG.year}`,
  description: `${SITE_CONFIG.siteName} ${SITE_CONFIG.year} was a ${SITE_CONFIG.buildDurationLabel.toLowerCase()} virtual hackathon for middle and high school students, held ${SITE_CONFIG.eventDatesLabel}. Browse the projects and past events.`,
  manifest: "/site.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.ico" },
      { url: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className="bg-background">
      <body className={`${spaceGrotesk.variable} ${inter.variable} font-sans antialiased`}>
        {children}
        <FloatingResourcesButton />
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  )
}
