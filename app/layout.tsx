import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { WishlistProvider } from "@/components/wishlist-provider"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Chrono - Premium Watch Collection",
  description: "Discover our collection of premium watches crafted with precision and style",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <WishlistProvider>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer />
          </div>
        </WishlistProvider>
      </body>
    </html>
  )
}



import './globals.css'