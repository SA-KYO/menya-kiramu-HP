import type React from "react"
import type { Metadata } from "next"
import { Noto_Serif_JP, Zen_Kaku_Gothic_New } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import "./globals.css"

const notoSerif = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-serif-jp",
})

const zenKaku = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
  variable: "--font-sans-jp",
})

export const metadata: Metadata = {
  title: "らーめん希楽夢 | 渋谷 - 炭火焼豚と中華そば",
  description:
    "らーめん希楽夢 - 渋谷で味わう炭火焼豚が自慢の中華そば。女性が一人でも気軽に入れるお店を目指し、こだわり抜いた至福の一杯をご提供。",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="ja">
      <body className={`${zenKaku.variable} ${notoSerif.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
