"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"

interface ClientAuthWrapperProps {
  children: React.ReactNode
  requireAuth?: boolean
  redirectTo?: string
}

export default function ClientAuthWrapper({
  children,
  requireAuth = false,
  redirectTo = "/login",
}: ClientAuthWrapperProps) {
  const [isClient, setIsClient] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const router = useRouter()

  useEffect(() => {
    setIsClient(true)

    // Check authentication status
    const checkAuth = () => {
      try {
        const storedUser = localStorage.getItem("user")
        setIsAuthenticated(!!storedUser)

        // If auth is required but user is not authenticated, redirect
        if (requireAuth && !storedUser) {
          router.push(redirectTo)
        }
      } catch (error) {
        console.error("Auth check failed:", error)
        setIsAuthenticated(false)
      }
    }

    checkAuth()
  }, [requireAuth, redirectTo, router])

  // Show loading or children based on client state
  if (!isClient) {
    return <div>Loading...</div>
  }

  // If auth is required but user is not authenticated, show loading
  if (requireAuth && !isAuthenticated) {
    return <div>Redirecting...</div>
  }

  return <>{children}</>
}
