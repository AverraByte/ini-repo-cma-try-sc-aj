import Link from "next/link"
import { ChevronRight } from "lucide-react"
import StructuredData, { createBreadcrumbSchema } from "./structured-data"

interface BreadcrumbItem {
  name: string
  href: string
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[]
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  const breadcrumbItems = [{ name: "Home", href: "/" }, ...items]

  const structuredData = createBreadcrumbSchema(
    breadcrumbItems.map((item) => ({
      name: item.name,
      url: `https://averrabyte.com${item.href}`,
    })),
  )

  return (
    <>
      <StructuredData data={structuredData} />
      <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-sm text-gray-500 mb-6">
        {breadcrumbItems.map((item, index) => (
          <div key={item.href} className="flex items-center">
            {index > 0 && <ChevronRight className="h-4 w-4 mx-2" />}
            {index === breadcrumbItems.length - 1 ? (
              <span className="text-gray-900 font-medium" aria-current="page">
                {item.name}
              </span>
            ) : (
              <Link href={item.href} className="hover:text-blue-600 transition-colors">
                {item.name}
              </Link>
            )}
          </div>
        ))}
      </nav>
    </>
  )
}
