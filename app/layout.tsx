import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Toaster } from "@/components/ui/toaster"
import ScrollToTopButton from "@/components/scroll-to-top-button"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: {
    default: "AverraByte - Premium Infrastructure Hosting",
    template: "%s | AverraByte",
  },
  description:
    "Premium infrastructure hosting solutions for businesses. Game servers, cloud hosting, dedicated servers, and more.",
  keywords: ["hosting", "infrastructure", "game servers", "cloud hosting", "dedicated servers", "AverraByte"],
  authors: [{ name: "AverraByte" }],
  creator: "AverraByte",
  publisher: "AverraByte",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://averrabyte.com",
    siteName: "AverraByte",
    title: "AverraByte - Premium Infrastructure Hosting",
    description:
      "Premium infrastructure hosting solutions for businesses. Game servers, cloud hosting, dedicated servers, and more.",
    images: [
      {
        url: "/api/og",
        width: 1200,
        height: 630,
        alt: "AverraByte - Premium Infrastructure Hosting",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AverraByte - Premium Infrastructure Hosting",
    description:
      "Premium infrastructure hosting solutions for businesses. Game servers, cloud hosting, dedicated servers, and more.",
    images: ["/api/og"],
    creator: "@averrabyte",
  },
  verification: {
    google: "your-google-verification-code",
  },
  alternates: {
    canonical: "https://averrabyte.com",
  },
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <meta name="theme-color" content="#000000" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange>
          {children}
          <ScrollToTopButton />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
