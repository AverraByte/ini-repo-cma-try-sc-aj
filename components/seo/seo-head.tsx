"use client"

import Head from "next/head"
import { useRouter } from "next/router"

interface SEOProps {
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article" | "product"
  publishedTime?: string
  modifiedTime?: string
  author?: string
  siteName?: string
  noindex?: boolean
  nofollow?: boolean
  canonical?: string
}

export default function SEOHead({
  title = "AverraByte - Premium Infrastructure Hosting Solutions",
  description = "Experience unmatched performance with AverraByte's premium infrastructure hosting. Game servers, cloud hosting, dedicated servers, and VPS solutions with 99.9% uptime guarantee.",
  keywords = [
    "infrastructure hosting",
    "game server hosting",
    "cloud hosting",
    "dedicated servers",
    "VPS hosting",
    "premium hosting",
    "AverraByte",
    "high performance hosting",
    "reliable hosting",
    "scalable hosting",
  ],
  image = "/images/averrabyte-og-image.jpg",
  url,
  type = "website",
  publishedTime,
  modifiedTime,
  author = "AverraByte Team",
  siteName = "AverraByte",
  noindex = false,
  nofollow = false,
  canonical,
}: SEOProps) {
  const router = useRouter()
  const currentUrl = url || `https://averrabyte.com${router.asPath}`
  const canonicalUrl = canonical || currentUrl

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AverraByte",
    description: description,
    url: "https://averrabyte.com",
    logo: "https://averrabyte.com/images/logo.png",
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+1-555-HOSTING",
      contactType: "customer service",
      availableLanguage: ["English", "Indonesian"],
    },
    sameAs: [
      "https://twitter.com/averrabyte",
      "https://facebook.com/averrabyte",
      "https://linkedin.com/company/averrabyte",
    ],
    offers: {
      "@type": "Offer",
      category: "Infrastructure Hosting Services",
      availability: "https://schema.org/InStock",
    },
  }

  const breadcrumbStructuredData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "Home",
        item: "https://averrabyte.com",
      },
    ],
  }

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(", ")} />
      <meta name="author" content={author} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="robots" content={`${noindex ? "noindex" : "index"},${nofollow ? "nofollow" : "follow"}`} />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:locale" content="en_US" />

      {publishedTime && <meta property="article:published_time" content={publishedTime} />}
      {modifiedTime && <meta property="article:modified_time" content={modifiedTime} />}
      {author && <meta property="article:author" content={author} />}

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@averrabyte" />
      <meta name="twitter:creator" content="@averrabyte" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Additional Meta Tags */}
      <meta name="theme-color" content="#1e40af" />
      <meta name="msapplication-TileColor" content="#1e40af" />
      <meta name="application-name" content="AverraByte" />

      {/* Structured Data */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbStructuredData) }}
      />

      {/* Favicon and Icons */}
      <link rel="icon" href="/favicon.ico" />
      <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
      <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
      <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
  )
}
