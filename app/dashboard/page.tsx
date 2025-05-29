import ClientAuthWrapper from "@/components/client-auth-wrapper"
import DashboardClient from "./dashboard-client"

export default function DashboardPage() {
  return (
    <ClientAuthWrapper requireAuth={true}>
      <DashboardClient />
    </ClientAuthWrapper>
  )
}
