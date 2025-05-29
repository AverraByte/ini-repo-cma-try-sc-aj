import { NextResponse } from "next/server"

export const dynamic = "force-static"

export async function GET() {
  const baseUrl = "https://averrabyte.com"

  const routes = [
    "",
    "/pricing",
    "/game-hosting",
    "/cloud-hosting",
    "/web-hosting",
    "/dedicated-servers",
    "/domain",
    "/support",
    "/docs",
    "/about",
    "/careers",
    "/terms",
    "/privacy",
  ]

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${routes
  .map(
    (route) => `
  <url>
    <loc>${baseUrl}${route}</loc>
    <lastmod>${new Date().toISOString()}</lastmod>
    <changefreq>weekly</changefreq>
    <priority>${route === "" ? "1.0" : "0.8"}</priority>
  </url>`,
  )
  .join("")}
</urlset>`

  return new NextResponse(sitemap, {
    headers: {
      "Content-Type": "application/xml",
    },
  })
}
