"use client"

import { createContext, useContext, useEffect, useState, type ReactNode } from "react"
import { useRouter } from "next/navigation"

type User = {
  id: number
  username: string
  email: string
  fullName?: string
}

type AuthContextType = {
  user: User | null
  isLoading: boolean
  login: (email: string, password: string) => Promise<boolean>
  logout: () => void
  isAuthenticated: boolean
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  // Check if user is logged in on mount
  useEffect(() => {
    if (!isClient) return

    const checkAuth = async () => {
      try {
        // Check if we have a session in localStorage
        const storedUser = localStorage.getItem("user")
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        }
      } catch (error) {
        console.error("Failed to restore auth state:", error)
      } finally {
        setIsLoading(false)
      }
    }

    checkAuth()
  }, [isClient])

  // Login function
  const login = async (email: string, password: string): Promise<boolean> => {
    if (!isClient) return false

    setIsLoading(true)
    try {
      // In a real app, you would make an API call to verify credentials
      // For now, we'll simulate a successful login with the first user in our database

      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Hardcoded user for demo purposes
      // In production, this would come from your API
      const user = {
        id: 1,
        username: "rans",
        email: email,
        fullName: "Rans Permana",
      }

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(user))
      setUser(user)
      return true
    } catch (error) {
      console.error("Login failed:", error)
      return false
    } finally {
      setIsLoading(false)
    }
  }

  // Logout function
  const logout = () => {
    if (!isClient) return

    localStorage.removeItem("user")
    setUser(null)
    router.push("/")
  }

  const value = {
    user,
    isLoading: isClient ? isLoading : false,
    login,
    logout,
    isAuthenticated: !!user,
  }

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider")
  }
  return context
}

// Safe hook that can be used in components that might not have AuthProvider
export function useAuthSafe() {
  const context = useContext(AuthContext)
  return (
    context || {
      user: null,
      isLoading: false,
      login: async () => false,
      logout: () => {},
      isAuthenticated: false,
    }
  )
}
