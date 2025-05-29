"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion } from "framer-motion"
import { ChevronDown, ChevronRight, BookOpen, Gamepad2, Settings, CreditCard, HelpCircle, Search } from "lucide-react"

import { cn } from "@/lib/utils"
import { Input } from "@/components/ui/input"

type DocCategory = {
  title: string
  icon: React.ReactNode
  items: {
    title: string
    href: string
    subitems?: { title: string; href: string }[]
  }[]
}

const docCategories: DocCategory[] = [
  {
    title: "Getting Started",
    icon: <BookOpen className="h-4 w-4" />,
    items: [
      { title: "Introduction", href: "/docs/introduction" },
      { title: "Quick Start", href: "/docs/quickstart" },
      { title: "System Requirements", href: "/docs/system-requirements" },
    ],
  },
  {
    title: "Game Servers",
    icon: <Gamepad2 className="h-4 w-4" />,
    items: [
      {
        title: "Minecraft",
        href: "/docs/games/minecraft",
        subitems: [
          { title: "Installation", href: "/docs/games/minecraft/installation" },
          { title: "Configuration", href: "/docs/games/minecraft/configuration" },
          { title: "Plugins", href: "/docs/games/minecraft/plugins" },
        ],
      },
      {
        title: "Valheim",
        href: "/docs/games/valheim",
        subitems: [
          { title: "Installation", href: "/docs/games/valheim/installation" },
          { title: "Configuration", href: "/docs/games/valheim/configuration" },
          { title: "Mods", href: "/docs/games/valheim/mods" },
        ],
      },
      {
        title: "Rust",
        href: "/docs/games/rust",
        subitems: [
          { title: "Installation", href: "/docs/games/rust/installation" },
          { title: "Configuration", href: "/docs/games/rust/configuration" },
          { title: "Plugins", href: "/docs/games/rust/plugins" },
        ],
      },
      {
        title: "ARK",
        href: "/docs/games/ark",
        subitems: [
          { title: "Installation", href: "/docs/games/ark/installation" },
          { title: "Configuration", href: "/docs/games/ark/configuration" },
          { title: "Mods", href: "/docs/games/ark/mods" },
        ],
      },
    ],
  },
  {
    title: "Management",
    icon: <Settings className="h-4 w-4" />,
    items: [
      { title: "Control Panel", href: "/docs/management/control-panel" },
      { title: "Backups", href: "/docs/management/backups" },
      { title: "Mods & Plugins", href: "/docs/management/mods-plugins" },
    ],
  },
  {
    title: "Billing",
    icon: <CreditCard className="h-4 w-4" />,
    items: [
      { title: "Payment Methods", href: "/docs/billing/payment-methods" },
      { title: "Subscriptions", href: "/docs/billing/subscriptions" },
      { title: "Refunds", href: "/docs/billing/refunds" },
    ],
  },
  {
    title: "Troubleshooting",
    icon: <HelpCircle className="h-4 w-4" />,
    items: [
      { title: "Common Issues", href: "/docs/troubleshooting/common-issues" },
      { title: "Connection Problems", href: "/docs/troubleshooting/connection-issues" },
      { title: "Performance Optimization", href: "/docs/troubleshooting/performance" },
    ],
  },
]

export function DocsSidebar() {
  const pathname = usePathname()
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedCategories, setExpandedCategories] = useState<Record<string, boolean>>({
    "Game Servers": true, // Default expanded
  })

  const toggleCategory = (category: string) => {
    setExpandedCategories((prev) => ({
      ...prev,
      [category]: !prev[category],
    }))
  }

  const filteredCategories = docCategories
    .map((category) => {
      const filteredItems = category.items.filter((item) => {
        const matchesItem = item.title.toLowerCase().includes(searchQuery.toLowerCase())
        const matchesSubitems =
          item.subitems?.some((subitem) => subitem.title.toLowerCase().includes(searchQuery.toLowerCase())) || false
        return matchesItem || matchesSubitems
      })

      return {
        ...category,
        items: filteredItems,
      }
    })
    .filter((category) => category.items.length > 0)

  return (
    <div className="w-full md:w-64 shrink-0">
      <div className="sticky top-20">
        <div className="relative mb-6">
          <Search className="absolute left-2 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
          <Input
            type="search"
            placeholder="Search documentation..."
            className="pl-8 bg-gray-800/30 border-gray-700 text-white placeholder:text-gray-400 focus-visible:ring-blue-500"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        <nav className="space-y-6">
          {filteredCategories.map((category) => (
            <div key={category.title} className="space-y-2">
              <button
                onClick={() => toggleCategory(category.title)}
                className="flex items-center justify-between w-full text-left font-medium text-white hover:text-blue-400 transition-colors"
              >
                <span className="flex items-center gap-2">
                  <span className="text-blue-500">{category.icon}</span>
                  {category.title}
                </span>
                {expandedCategories[category.title] ? (
                  <ChevronDown className="h-4 w-4 text-gray-400" />
                ) : (
                  <ChevronRight className="h-4 w-4 text-gray-400" />
                )}
              </button>

              {expandedCategories[category.title] && (
                <ul className="pl-6 space-y-1">
                  {category.items.map((item) => (
                    <li key={item.title} className="space-y-1">
                      <Link
                        href={item.href}
                        className={cn(
                          "block text-sm hover:text-blue-400 transition-colors",
                          pathname === item.href ? "text-blue-500 font-medium" : "text-gray-300",
                        )}
                      >
                        {item.title}
                      </Link>

                      {item.subitems && (
                        <ul className="pl-4 space-y-1">
                          {item.subitems.map((subitem) => (
                            <li key={subitem.title}>
                              <Link
                                href={subitem.href}
                                className={cn(
                                  "block text-xs hover:text-blue-400 transition-colors",
                                  pathname === subitem.href ? "text-blue-500 font-medium" : "text-gray-400",
                                )}
                              >
                                {subitem.title}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </nav>

        <div className="mt-8 p-4 bg-blue-900/20 rounded-lg border border-blue-800/30">
          <h4 className="font-medium text-blue-400 mb-2">Need more help?</h4>
          <p className="text-sm text-gray-300 mb-3">
            If you can't find the answer in our documentation, our support team is ready to assist you.
          </p>
          <Link
            href="/support"
            className="inline-flex items-center text-sm font-medium text-blue-400 hover:text-blue-300"
          >
            Contact Support
            <motion.span className="ml-1" initial={{ x: 0 }} whileHover={{ x: 4 }} transition={{ duration: 0.2 }}>
              →
            </motion.span>
          </Link>
        </div>
      </div>
    </div>
  )
}
