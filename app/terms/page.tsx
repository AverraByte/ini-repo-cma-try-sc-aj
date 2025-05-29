import type { Metadata } from "next"
import TermsPageClient from "./TermsPageClient"

export const metadata: Metadata = {
  title: "Terms of Service | NextHost",
  description: "Terms and conditions for using NextHost services",
}

export default function TermsPage() {
  return <TermsPageClient />
}
