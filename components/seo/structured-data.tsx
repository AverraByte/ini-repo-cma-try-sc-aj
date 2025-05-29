interface StructuredDataProps {
  data: Record<string, any>
}

export default function StructuredData({ data }: StructuredDataProps) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

// Predefined structured data schemas
export const createProductSchema = (product: {
  name: string
  description: string
  price: number
  currency: string
  availability: string
  brand: string
  category: string
  image: string
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  name: product.name,
  description: product.description,
  brand: {
    "@type": "Brand",
    name: product.brand,
  },
  category: product.category,
  image: product.image,
  url: product.url,
  offers: {
    "@type": "Offer",
    price: product.price,
    priceCurrency: product.currency,
    availability: `https://schema.org/${product.availability}`,
    seller: {
      "@type": "Organization",
      name: "AverraByte",
    },
  },
})

export const createServiceSchema = (service: {
  name: string
  description: string
  provider: string
  areaServed: string
  serviceType: string
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: service.provider,
  },
  areaServed: service.areaServed,
  serviceType: service.serviceType,
  url: service.url,
})

export const createFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
})

export const createBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})

// Add the missing schema functions
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
