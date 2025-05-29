"use client"

import { useState, useEffect } from "react"
import { ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

export default function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false)

  // Fungsi untuk toggle visibility berdasarkan posisi scroll
  const toggleVisibility = () => {
    if (window.scrollY > 300) {
      setIsVisible(true)
    } else {
      setIsVisible(false)
    }
  }

  // Fungsi untuk scroll ke atas dengan animasi
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility)
    return () => window.removeEventListener("scroll", toggleVisibility)
  }, [])

  return (
    <Button
      className={cn(
        "fixed bottom-8 right-8 z-50 rounded-full p-3 shadow-lg transition-all duration-300",
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
      )}
      onClick={scrollToTop}
      size="icon"
      variant="default"
      aria-label="Scroll to top"
    >
      <ArrowUp className="h-5 w-5" />
    </Button>
  )
}

// Named export juga untuk compatibility
export { ScrollToTopButton }
