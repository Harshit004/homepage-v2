import type React from "react"
import "./globals.css"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "WAE",
  description:
    "WAE leads transformative projects and develops cutting-edge purification systems, all aimed at ensuring a sustainable future.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="font-helvetica antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}



import './globals.css'