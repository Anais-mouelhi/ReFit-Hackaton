import type React from "react"
import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "Réserver un atelier | ReFit",
  description: "Réservez un atelier ReFit près de chez vous pour apprendre à réparer et customiser vos vêtements",
}

export default function ReserverLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return <>{children}</>
}
