import type { Metadata } from "next"
import PrivacyPageClient from "./PrivacyPageClient"

export const metadata: Metadata = {
  title: "Privacy Policy | GameServer",
  description: "Privacy policy for GameServer hosting services",
}

export default function PrivacyPage() {
  return <PrivacyPageClient />
}
