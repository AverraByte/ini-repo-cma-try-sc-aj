import type { Metadata } from "next"
import LoginClient from "./login-client"

export const metadata: Metadata = {
  title: "Login | AverraByte",
  description: "Login to your AverraByte account to manage your infrastructure and hosting services.",
}

export default function LoginPage() {
  return <LoginClient />
}
