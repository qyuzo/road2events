import * as React from "react"

import "@/assets/styles/globals.css"
import { plusJakartaSans, playfairDisplay } from "@/lib/fonts"
import { metadata } from "@/lib/metadata"

export { metadata }

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml"></link>
      </head>
      <body
        className={`${plusJakartaSans.variable} ${playfairDisplay.variable} h-screen w-full font-sans antialiased`}
      >
        {children}
      </body>
    </html>
  )
}
