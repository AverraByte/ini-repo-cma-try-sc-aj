"use client"

import { useRouter } from "next/router"
import { useEffect, useState } from "react"

interface SEOData {
  title: string
  description: string
  keywords: string[]
  canonical: string
  ogImage: string
}

export function useSEO() {
  const router = useRouter()
  const [seoData, setSeoData] = useState<SEOData | null>(null)

  useEffect(() => {
    // Generate SEO data based on current route
    const generateSEOData = (): SEOData => {
      const baseUrl = "https://averrabyte.com"
      const path = router.asPath

      const seoMap: Record<string, SEOData> = {
        "/": {
          title: "AverraByte - Premium Infrastructure Hosting Solutions",
          description:
            "Experience unmatched performance with AverraByte's premium infrastructure hosting. Game servers, cloud hosting, dedicated servers with 99.9% uptime guarantee.",
          keywords: ["infrastructure hosting", "premium hosting", "AverraByte", "cloud hosting", "dedicated servers"],
          canonical: baseUrl,
          ogImage: `${baseUrl}/images/home-og.jpg`,
        },
        "/game-hosting": {
          title: "Game Server Hosting - AverraByte Premium Gaming Infrastructure",
          description:
            "High-performance game server hosting for Minecraft, Valheim, Rust, ARK. Instant setup, mod support, DDoS protection. Start your gaming server today!",
          keywords: [
            "game server hosting",
            "minecraft hosting",
            "valheim server",
            "rust server",
            "ark hosting",
            "gaming infrastructure",
          ],
          canonical: `${baseUrl}/game-hosting`,
          ogImage: `${baseUrl}/images/game-hosting-og.jpg`,
        },
        "/cloud-hosting": {
          title: "Enterprise Cloud Hosting Solutions - Scalable & Reliable | AverraByte",
          description:
            "Scalable cloud hosting with auto-scaling, 99.99% uptime guarantee. Perfect for businesses needing reliable, high-performance cloud infrastructure.",
          keywords: ["cloud hosting", "enterprise cloud", "scalable hosting", "auto-scaling", "business hosting"],
          canonical: `${baseUrl}/cloud-hosting`,
          ogImage: `${baseUrl}/images/cloud-hosting-og.jpg`,
        },
        "/dedicated-servers": {
          title: "Dedicated Server Hosting - Maximum Performance | AverraByte",
          description:
            "Enterprise-grade dedicated servers with full root access, premium hardware, 24/7 support. Uncompromised power for demanding workloads.",
          keywords: ["dedicated servers", "enterprise servers", "bare metal servers", "high performance hosting"],
          canonical: `${baseUrl}/dedicated-servers`,
          ogImage: `${baseUrl}/images/dedicated-servers-og.jpg`,
        },
        "/web-hosting": {
          title: "Premium Web Hosting - Fast SSD Hosting | AverraByte",
          description:
            "Lightning-fast SSD web hosting with 99.9% uptime, free SSL, WordPress support. Perfect for blogs, business websites, and e-commerce.",
          keywords: ["web hosting", "SSD hosting", "wordpress hosting", "business hosting", "fast hosting"],
          canonical: `${baseUrl}/web-hosting`,
          ogImage: `${baseUrl}/images/web-hosting-og.jpg`,
        },
        "/pricing": {
          title: "Hosting Pricing Plans - Transparent & Affordable | AverraByte",
          description:
            "Compare our hosting plans with transparent pricing. No hidden fees, 30-day money-back guarantee. Find the perfect plan for your needs.",
          keywords: ["hosting pricing", "hosting plans", "affordable hosting", "hosting costs"],
          canonical: `${baseUrl}/pricing`,
          ogImage: `${baseUrl}/images/pricing-og.jpg`,
        },
        "/domain": {
          title: "Domain Registration - Secure Your Online Identity | AverraByte",
          description:
            "Register your domain with free WHOIS privacy, DNS management, and 24/7 support. 300+ domain extensions available.",
          keywords: ["domain registration", "domain names", "WHOIS privacy", "DNS management"],
          canonical: `${baseUrl}/domain`,
          ogImage: `${baseUrl}/images/domain-og.jpg`,
        },
      }

      return (
        seoMap[path] || {
          title: "AverraByte - Premium Infrastructure Hosting",
          description: "Premium infrastructure hosting solutions with unmatched performance and reliability.",
          keywords: ["infrastructure hosting", "premium hosting", "AverraByte"],
          canonical: `${baseUrl}${path}`,
          ogImage: `${baseUrl}/images/default-og.jpg`,
        }
      )
    }

    setSeoData(generateSEOData())
  }, [router.asPath])

  return seoData
}
