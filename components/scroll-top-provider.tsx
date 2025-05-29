"use client"

import type React from "react"

import { useScrollTop } from "@/hooks/use-scroll-top"

interface ScrollTopProviderProps {
  children: React.ReactNode
}

export function ScrollTopProvider({ children }: ScrollTopProviderProps) {
  // Gunakan hook untuk scroll to top
  useScrollTop()

  return <>{children}</>
}
