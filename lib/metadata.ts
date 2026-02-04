import type { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "Road2Events",
    template: "%s | Road2Events",
  },
  description:
    "A zero-friction platform for first-time vendors to find resources and apply for events via direct interaction.",
  applicationName: "Road2Events",
  authors: [{ name: "Road2Events Team" }],
  generator: "Next.js",
  keywords: ["events", "vendors", "market", "booth", "application", "organizer"],
  referrer: "origin-when-cross-origin",
  creator: "Road2Events",
  publisher: "Road2Events",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://road2events.com",
    title: "Road2Events - Connect Vendors with Events",
    description: "Simplifying the process for first-time vendors to find and apply for events.",
    siteName: "Road2Events",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Road2Events Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Road2Events",
    description: "Simplifying the process for first-time vendors to find and apply for events.",
    images: ["/og-image.jpg"],
    creator: "@road2events",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
}
