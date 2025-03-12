import type React from "react"
import "./globals.css"
import { Inter } from "next/font/google"
import Navbar from "./components/Navbar"
import MobileNav from "./components/MobileNav"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my personal portfolio",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body className={`${inter.className} bg-gray-900 text-white`}>
        <Navbar />
        <MobileNav />
        <main className="md:ml-24">{children}</main>
      </body>
    </html>
  )
}

