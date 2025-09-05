import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Analytics } from '@vercel/analytics/react'
import "./globals.css"
import Footer from "@/components/Footer"
import CookieBanner from "@/components/CookieBanner"
import AnalyticsLoader from "@/components/AnalyticsLoader"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "DevIA — Assistant IA téléphonique 24/7",
  description:
    "Automatisez vos appels entrants, prenez des rendez-vous et renseignez vos clients automatiquement avec notre agent IA.",
  icons: {
    icon: [
      { url: "/logo-devia.png", sizes: "32x32" },
      { url: "/logo-devia.png", sizes: "64x64" },
      { url: "/logo-devia.png", sizes: "96x96" },
      { url: "/logo-devia.png", sizes: "128x128" },
      { url: "/logo-devia.png", sizes: "192x192" },
      { url: "/logo-devia.png", sizes: "256x256" },
      { url: "/logo-devia.png", sizes: "512x512" },
      { url: "/logo-devia.png", sizes: "180x180" },
    ],
    shortcut: "/logo-devia.png",
    apple: "/logo-devia.png",
  },
  openGraph: {
    title: "DevIA — Assistant IA téléphonique 24/7",
    description:
      "Automatisez vos appels entrants, prenez des rendez-vous et renseignez vos clients automatiquement avec notre agent IA.",
    url: "https://devia.example.com",
    siteName: "DevIA",
    locale: "fr_FR",
    type: "website",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>
        {children}
        <Footer />
        <CookieBanner />
        <AnalyticsLoader />
        <Analytics />
      </body>
    </html>
  )
}
