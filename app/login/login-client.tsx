"use client"

import type React from "react"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Eye, EyeOff, LogIn, UserPlus, ArrowRight, Server, Shield, Zap } from "lucide-react"

export default function LoginClient() {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [rememberMe, setRememberMe] = useState(false)
  const [error, setError] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isClient, setIsClient] = useState(false)
  const router = useRouter()

  // Ensure we're on the client side
  useEffect(() => {
    setIsClient(true)
  }, [])

  const handleLogin = async (email: string, password: string): Promise<boolean> => {
    if (!isClient) return false

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1000))

      // Hardcoded user for demo purposes
      const user = {
        id: 1,
        username: "rans",
        email: email,
        fullName: "Rans Permana",
      }

      // Store user in localStorage
      localStorage.setItem("user", JSON.stringify(user))
      return true
    } catch (error) {
      console.error("Login failed:", error)
      return false
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError("")

    if (!isClient) return

    if (isLogin) {
      // Login logic
      setIsLoading(true)
      try {
        const success = await handleLogin(email, password)
        if (success) {
          router.push("/dashboard")
        } else {
          setError("Invalid email or password")
        }
      } catch (error) {
        setError("An error occurred during login")
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    } else {
      // Register logic
      if (password !== confirmPassword) {
        setError("Passwords do not match")
        return
      }

      setIsLoading(true)
      try {
        // In a real app, you would make an API call to register
        // For now, we'll simulate a successful registration
        await new Promise((resolve) => setTimeout(resolve, 1000))

        // After registration, log the user in
        const success = await handleLogin(email, password)
        if (success) {
          router.push("/dashboard")
        } else {
          setError("Registration successful but login failed")
        }
      } catch (error) {
        setError("An error occurred during registration")
        console.error(error)
      } finally {
        setIsLoading(false)
      }
    }
  }

  const toggleAuthMode = () => {
    setIsLogin(!isLogin)
    setError("")
  }

  // Show loading during hydration
  if (!isClient) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-900">
        <div className="text-white">Loading...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-900">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/3 -left-20 w-60 h-60 bg-purple-500 opacity-10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 right-1/4 w-80 h-80 bg-blue-500 opacity-10 rounded-full blur-3xl"></div>
      </div>

      {/* Header with logo */}
      <header className="relative z-10 py-6 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <Link href="/" className="flex items-center group">
            <motion.div
              className="h-8 w-8 bg-gradient-to-br from-blue-500 to-blue-700 rounded-md mr-2 relative overflow-hidden"
              whileHover={{
                scale: 1.1,
                rotate: 5,
                borderRadius: "30% 70% 70% 30% / 30% 30% 70% 70%",
              }}
              transition={{ type: "spring", stiffness: 500, damping: 10 }}
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-tr from-blue-400 to-transparent opacity-50"
                animate={{
                  rotate: [0, 180],
                  opacity: [0.5, 0.8, 0.5],
                  borderRadius: [
                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                    "50% 50% 50% 50%",
                    "30% 70% 70% 30% / 30% 30% 70% 70%",
                  ],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "linear",
                }}
              />
              <motion.div className="absolute inset-0 flex items-center justify-center text-white font-bold">
                AB
              </motion.div>
            </motion.div>
            <div className="relative">
              <span className="font-bold text-white text-xl relative">AverraByte</span>
            </div>
          </Link>
        </div>
      </header>

      {/* Main content */}
      <main className="flex-grow flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-5xl w-full flex flex-col lg:flex-row">
          {/* Left side - Form */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 bg-gray-800/50 backdrop-blur-sm rounded-t-2xl lg:rounded-l-2xl lg:rounded-tr-none border border-gray-700 relative z-10">
            <div className="mb-8">
              <h1 className="text-2xl sm:text-3xl font-bold text-white mb-2">
                {isLogin ? "Welcome back" : "Create an account"}
              </h1>
              <p className="text-gray-400">
                {isLogin
                  ? "Sign in to access your hosting services and infrastructure"
                  : "Join us to start hosting your infrastructure today"}
              </p>
            </div>

            {error && (
              <div className="mb-6 p-3 bg-red-500/20 border border-red-500/50 rounded-lg text-red-200 text-sm">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="••••••••"
                  />
                  <button
                    type="button"
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-300"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                  </button>
                </div>
              </div>

              {!isLogin && (
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-1">
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required={!isLogin}
                    className="w-full px-4 py-3 bg-gray-700/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white placeholder-gray-400"
                    placeholder="••••••••"
                  />
                </div>
              )}

              {isLogin && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember-me"
                      type="checkbox"
                      checked={rememberMe}
                      onChange={(e) => setRememberMe(e.target.checked)}
                      className="h-4 w-4 bg-gray-700 border-gray-600 rounded text-blue-500 focus:ring-blue-500 focus:ring-offset-gray-800"
                    />
                    <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                      Remember me
                    </label>
                  </div>
                  <div className="text-sm">
                    <a href="#" className="text-blue-400 hover:text-blue-300">
                      Forgot password?
                    </a>
                  </div>
                </div>
              )}

              <div>
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full flex justify-center items-center px-4 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white font-medium rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors duration-200"
                >
                  {isLoading ? (
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                  ) : isLogin ? (
                    <>
                      <LogIn className="mr-2 h-5 w-5" />
                      Sign in
                    </>
                  ) : (
                    <>
                      <UserPlus className="mr-2 h-5 w-5" />
                      Create account
                    </>
                  )}
                </button>
              </div>
            </form>

            <div className="mt-8 text-center">
              <p className="text-sm text-gray-400">
                {isLogin ? "Don't have an account?" : "Already have an account?"}
                <button
                  type="button"
                  onClick={toggleAuthMode}
                  className="ml-1 text-blue-400 hover:text-blue-300 font-medium"
                >
                  {isLogin ? "Sign up" : "Sign in"}
                </button>
              </p>
            </div>
          </div>

          {/* Right side - Features */}
          <div className="w-full lg:w-1/2 p-6 sm:p-8 bg-gray-800/30 backdrop-blur-sm rounded-b-2xl lg:rounded-r-2xl lg:rounded-bl-none border border-gray-700 border-t-0 lg:border-t lg:border-l-0 relative z-10">
            <div className="h-full flex flex-col">
              <h2 className="text-xl font-bold text-white mb-6">Why choose AverraByte?</h2>

              <ul className="space-y-6 flex-grow">
                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500/20 text-blue-400">
                      <Server className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">High-Performance Infrastructure</h3>
                    <p className="mt-1 text-gray-400">
                      Our infrastructure is optimized for performance with SSD storage, high-frequency CPUs, and
                      low-latency networking.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-green-500/20 text-green-400">
                      <Shield className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Enterprise Security</h3>
                    <p className="mt-1 text-gray-400">
                      All our services include enterprise-grade security with DDoS protection and advanced monitoring.
                    </p>
                  </div>
                </li>

                <li className="flex">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-md bg-purple-500/20 text-purple-400">
                      <Zap className="h-6 w-6" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-medium text-white">Instant Deployment</h3>
                    <p className="mt-1 text-gray-400">
                      Get your infrastructure up and running in seconds with our easy-to-use control panel and automated
                      deployments.
                    </p>
                  </div>
                </li>
              </ul>

              <div className="mt-8">
                <Link href="/pricing">
                  <button className="group inline-flex items-center text-blue-400 hover:text-blue-300 font-medium">
                    View our pricing plans
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
