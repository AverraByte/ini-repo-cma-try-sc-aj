// SEO utility functions
export function generateMetaTitle(title: string, siteName = "AverraByte"): string {
  return title.includes(siteName) ? title : `${title} | ${siteName}`
}

export function generateMetaDescription(description: string, maxLength = 160): string {
  if (description.length <= maxLength) return description
  return description.substring(0, maxLength - 3) + "..."
}

export function generateKeywords(baseKeywords: string[], pageKeywords: string[] = []): string[] {
  const allKeywords = [...baseKeywords, ...pageKeywords]
  return [...new Set(allKeywords)] // Remove duplicates
}

export function generateCanonicalUrl(path: string, baseUrl = "https://averrabyte.com"): string {
  return `${baseUrl}${path}`
}

export function generateOGImage(title: string, description: string, baseUrl = "https://averrabyte.com"): string {
  // You can integrate with services like Vercel OG or create dynamic OG images
  const params = new URLSearchParams({
    title: title,
    description: description,
  })
  return `${baseUrl}/api/og?${params.toString()}`
}

// Schema.org helpers
export const SCHEMA_TYPES = {
  ORGANIZATION: "Organization",
  WEBSITE: "WebSite",
  WEBPAGE: "WebPage",
  PRODUCT: "Product",
  SERVICE: "Service",
  FAQ: "FAQPage",
  BREADCRUMB: "BreadcrumbList",
  REVIEW: "Review",
  ARTICLE: "Article",
} as const

export function createWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "AverraByte",
    description: "Premium infrastructure hosting solutions with unmatched performance and reliability",
    url: "https://averrabyte.com",
    potentialAction: {
      "@type": "SearchAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://averrabyte.com/search?q={search_term_string}",
      },
      "query-input": "required name=search_term_string",
    },
  }
}

export function createOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "AverraByte",
    description:
      "Premium infrastructure hosting provider specializing in game servers, cloud hosting, and dedicated servers",
    url: "https://averrabyte.com",
    logo: "https://averrabyte.com/images/logo.png",
    foundingDate: "2024",
    founders: [
      {
        "@type": "Person",
        name: "AverraByte Team",
      },
    ],
    address: {
      "@type": "PostalAddress",
      addressCountry: "US",
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: "+1-555-HOSTING",
        contactType: "customer service",
        availableLanguage: ["English", "Indonesian"],
        areaServed: "Worldwide",
      },
      {
        "@type": "ContactPoint",
        telephone: "+1-555-SUPPORT",
        contactType: "technical support",
        availableLanguage: ["English", "Indonesian"],
        areaServed: "Worldwide",
      },
    ],
    sameAs: [
      "https://twitter.com/averrabyte",
      "https://facebook.com/averrabyte",
      "https://linkedin.com/company/averrabyte",
      "https://github.com/averrabyte",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Infrastructure Hosting Services",
      itemListElement: [
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Game Server Hosting",
            description: "High-performance game server hosting with instant setup and mod support",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Cloud Hosting",
            description: "Scalable cloud hosting solutions with auto-scaling and high availability",
          },
        },
        {
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: "Dedicated Servers",
            description: "Enterprise-grade dedicated servers with full root access and premium hardware",
          },
        },
      ],
    },
  }
}
