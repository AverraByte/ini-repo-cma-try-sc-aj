import type { ReactNode } from "react"
import SEOHead from "./seo-head"
import StructuredData, { createWebsiteSchema, createOrganizationSchema } from "./structured-data"

interface SEOWrapperProps {
  children: ReactNode
  title?: string
  description?: string
  keywords?: string[]
  image?: string
  url?: string
  type?: "website" | "article" | "product"
  noindex?: boolean
  canonical?: string
  includeOrganizationSchema?: boolean
  includeWebsiteSchema?: boolean
  customStructuredData?: Record<string, any>[]
}

export default function SEOWrapper({
  children,
  title,
  description,
  keywords,
  image,
  url,
  type,
  noindex,
  canonical,
  includeOrganizationSchema = true,
  includeWebsiteSchema = true,
  customStructuredData = [],
}: SEOWrapperProps) {
  return (
    <>
      <SEOHead
        title={title}
        description={description}
        keywords={keywords}
        image={image}
        url={url}
        type={type}
        noindex={noindex}
        canonical={canonical}
      />

      {includeWebsiteSchema && <StructuredData data={createWebsiteSchema()} />}

      {includeOrganizationSchema && <StructuredData data={createOrganizationSchema()} />}

      {customStructuredData.map((data, index) => (
        <StructuredData key={index} data={data} />
      ))}

      {children}
    </>
  )
}
