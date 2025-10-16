import type React from "react"
import { Inter, Merriweather } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
})

const merriweather = Merriweather({
  weight: ["300", "400", "700", "900"],
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
})

export const metadata = {
  title: "STTV - Portal de Notícias",
  description: "Seu portal de notícias atualizado e confiável",
  keywords: "notícias, STTV, jornalismo, informação",
  openGraph: {
    title: "STTV - Portal de Notícias",
    description: "Seu portal de notícias atualizado e confiável",
    type: "website",
  },
    generator: '@EliasOlie.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
