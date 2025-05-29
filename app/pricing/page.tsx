"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Check, X, ChevronDown, Server, Globe, Zap } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Pricing() {
  const [billingPeriod, setBillingPeriod] = useState<"monthly" | "yearly">("monthly")
  const [activeTab, setActiveTab] = useState<"web" | "cloud" | "game">("web")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const pricingRef = useRef<HTMLDivElement>(null)
  const comparisonRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What's the difference between billing periods?",
      answer:
        "Monthly billing offers flexibility with a month-to-month commitment. Yearly billing provides a 20% discount compared to monthly rates, billed once annually. Both options include the same features and support.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes! You can upgrade your plan at any time. The price difference will be prorated for the remainder of your billing cycle. Upgrades take effect immediately with no downtime.",
    },
    {
      question: "Do you offer custom plans for large organizations?",
      answer:
        "Absolutely. We offer custom enterprise solutions for organizations with specific requirements. Contact our sales team for a personalized quote and to discuss your needs.",
    },
    {
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards (Visa, Mastercard, American Express), PayPal, and cryptocurrency payments including Bitcoin and Ethereum. All transactions are secure and encrypted.",
    },
    {
      question: "Is there a setup fee?",
      answer:
        "No, there are no setup fees for any of our standard plans. What you see is what you pay, with no hidden costs or surprise charges.",
    },
    {
      question: "What's your refund policy?",
      answer:
        "We offer a 30-day money-back guarantee for all new customers. If you're not satisfied with our service within the first 30 days, we'll issue a full refund, no questions asked.",
    },
  ]

  const plans = {
    web: [
      {
        name: "Basic",
        description: "Perfect for personal websites and blogs",
        monthlyPrice: 2.99,
        yearlyPrice: 28.7,
        features: [
          "10 GB SSD Storage",
          "Unmetered Bandwidth",
          "1 CPU Core",
          "1 GB RAM",
          "Free Domain (1 year)",
          "5 Email Accounts",
          "1-Click WordPress Install",
          "Free SSL Certificate",
          "99.9% Uptime Guarantee",
          "24/7 Support",
        ],
        notIncluded: ["Priority Support", "Daily Backups", "CDN Integration", "Staging Environment"],
        popular: false,
        color: "blue",
      },
      {
        name: "Business",
        description: "Ideal for small businesses and portfolios",
        monthlyPrice: 5.99,
        yearlyPrice: 57.5,
        features: [
          "25 GB SSD Storage",
          "Unmetered Bandwidth",
          "2 CPU Cores",
          "2 GB RAM",
          "Free Domain (1 year)",
          "Unlimited Email Accounts",
          "1-Click WordPress Install",
          "Free SSL Certificate",
          "99.9% Uptime Guarantee",
          "24/7 Support",
          "Daily Backups",
          "CDN Integration",
        ],
        notIncluded: ["Staging Environment", "White Label Options"],
        popular: true,
        color: "blue",
      },
      {
        name: "Enterprise",
        description: "Advanced solution for growing businesses",
        monthlyPrice: 9.99,
        yearlyPrice: 95.9,
        features: [
          "50 GB SSD Storage",
          "Unmetered Bandwidth",
          "4 CPU Cores",
          "4 GB RAM",
          "Free Domain (1 year)",
          "Unlimited Email Accounts",
          "1-Click WordPress Install",
          "Free SSL Certificate",
          "99.9% Uptime Guarantee",
          "Priority Support",
          "Daily Backups",
          "CDN Integration",
          "Staging Environment",
          "White Label Options",
        ],
        notIncluded: [],
        popular: false,
        color: "blue",
      },
    ],
    cloud: [
      {
        name: "Starter",
        description: "Entry-level cloud computing solution",
        monthlyPrice: 5.99,
        yearlyPrice: 57.5,
        features: [
          "50 GB SSD Storage",
          "Unmetered Bandwidth",
          "2 CPU Cores",
          "4 GB RAM",
          "Free Domain (1 year)",
          "Unlimited Email Accounts",
          "Auto Scaling Resources",
          "Free SSL Certificate",
          "99.99% Uptime Guarantee",
          "24/7 Support",
        ],
        notIncluded: ["Priority Support", "Load Balancing", "Dedicated IP", "Private Network"],
        popular: false,
        color: "indigo",
      },
      {
        name: "Professional",
        description: "Reliable cloud hosting for businesses",
        monthlyPrice: 12.99,
        yearlyPrice: 124.7,
        features: [
          "100 GB SSD Storage",
          "Unmetered Bandwidth",
          "4 CPU Cores",
          "8 GB RAM",
          "Free Domain (1 year)",
          "Unlimited Email Accounts",
          "Auto Scaling Resources",
          "Free SSL Certificate",
          "99.99% Uptime Guarantee",
          "Priority Support",
          "Daily Backups",
          "Load Balancing",
          "Dedicated IP",
        ],
        notIncluded: ["Private Network", "Multi-region Deployment"],
        popular: true,
        color: "indigo",
      },
      {
        name: "Enterprise",
        description: "Enterprise-grade cloud infrastructure",
        monthlyPrice: 24.99,
        yearlyPrice: 239.9,
        features: [
          "250 GB SSD Storage",
          "Unmetered Bandwidth",
          "8 CPU Cores",
          "16 GB RAM",
          "Free Domain (1 year)",
          "Unlimited Email Accounts",
          "Auto Scaling Resources",
          "Free SSL Certificate",
          "99.99% Uptime Guarantee",
          "Priority Support",
          "Daily Backups",
          "Load Balancing",
          "Dedicated IP",
          "Private Network",
          "Multi-region Deployment",
        ],
        notIncluded: [],
        popular: false,
        color: "indigo",
      },
    ],
    game: [
      {
        name: "Rookie",
        description: "Perfect for small gaming communities",
        monthlyPrice: 8.99,
        yearlyPrice: 86.3,
        features: [
          "50 GB NVMe Storage",
          "Unmetered Bandwidth",
          "2 CPU Cores (3.8+ GHz)",
          "4 GB DDR4 RAM",
          "1-Click Game Installation",
          "Mod Support",
          "DDoS Protection",
          "Custom Control Panel",
          "99.9% Uptime Guarantee",
          "24/7 Support",
        ],
        notIncluded: ["Priority Support", "Automated Backups", "Multiple Server Locations", "Dedicated IP"],
        popular: false,
        color: "purple",
      },
      {
        name: "Pro Gamer",
        description: "For serious gaming communities",
        monthlyPrice: 15.99,
        yearlyPrice: 153.5,
        features: [
          "100 GB NVMe Storage",
          "Unmetered Bandwidth",
          "4 CPU Cores (3.8+ GHz)",
          "8 GB DDR4 RAM",
          "1-Click Game Installation",
          "Mod Support",
          "DDoS Protection",
          "Custom Control Panel",
          "99.99% Uptime Guarantee",
          "Priority Support",
          "Automated Backups",
          "Multiple Server Locations",
        ],
        notIncluded: ["Dedicated IP", "Custom Branding"],
        popular: true,
        color: "purple",
      },
      {
        name: "Legend",
        description: "Ultimate gaming server experience",
        monthlyPrice: 29.99,
        yearlyPrice: 287.9,
        features: [
          "250 GB NVMe Storage",
          "Unmetered Bandwidth",
          "8 CPU Cores (3.8+ GHz)",
          "16 GB DDR4 RAM",
          "1-Click Game Installation",
          "Mod Support",
          "DDoS Protection",
          "Custom Control Panel",
          "99.99% Uptime Guarantee",
          "Priority Support",
          "Automated Backups",
          "Multiple Server Locations",
          "Dedicated IP",
          "Custom Branding",
          "API Access",
        ],
        notIncluded: [],
        popular: false,
        color: "purple",
      },
    ],
  }

  // Define comparison features for each hosting type
  const comparisonFeatures = {
    web: [
      { name: "Price", type: "price" },
      { name: "Storage", type: "storage" },
      { name: "CPU", type: "cpu" },
      { name: "RAM", type: "ram" },
      { name: "Bandwidth", type: "bandwidth" },
      { name: "Uptime Guarantee", type: "uptime" },
      { name: "WordPress Support", type: "feature", feature: "1-Click WordPress Install" },
      { name: "Email Accounts", type: "email" },
      { name: "SSL Certificate", type: "feature", feature: "Free SSL Certificate" },
      { name: "Support", type: "support" },
      { name: "Backups", type: "backups" },
      { name: "CDN Integration", type: "feature", feature: "CDN Integration" },
      { name: "Staging Environment", type: "feature", feature: "Staging Environment" },
    ],
    cloud: [
      { name: "Price", type: "price" },
      { name: "Storage", type: "storage" },
      { name: "CPU", type: "cpu" },
      { name: "RAM", type: "ram" },
      { name: "Bandwidth", type: "bandwidth" },
      { name: "Uptime Guarantee", type: "uptime" },
      { name: "Auto Scaling", type: "feature", feature: "Auto Scaling Resources" },
      { name: "Load Balancing", type: "feature", feature: "Load Balancing" },
      { name: "Dedicated IP", type: "feature", feature: "Dedicated IP" },
      { name: "Private Network", type: "feature", feature: "Private Network" },
      { name: "Multi-region", type: "feature", feature: "Multi-region Deployment" },
      { name: "Support", type: "support" },
      { name: "Backups", type: "backups" },
    ],
    game: [
      { name: "Price", type: "price" },
      { name: "Storage", type: "storage" },
      { name: "CPU", type: "cpu" },
      { name: "RAM", type: "ram" },
      { name: "Bandwidth", type: "bandwidth" },
      { name: "Uptime Guarantee", type: "uptime" },
      { name: "1-Click Game Install", type: "feature", feature: "1-Click Game Installation" },
      { name: "Mod Support", type: "feature", feature: "Mod Support" },
      { name: "DDoS Protection", type: "feature", feature: "DDoS Protection" },
      { name: "Control Panel", type: "feature", feature: "Custom Control Panel" },
      { name: "Multiple Locations", type: "feature", feature: "Multiple Server Locations" },
      { name: "Dedicated IP", type: "feature", feature: "Dedicated IP" },
      { name: "Support", type: "support" },
      { name: "Backups", type: "backups" },
    ],
  }

  const activePlans = plans[activeTab]
  const activeFeatures = comparisonFeatures[activeTab]

  const getColorClass = (color: string, type: string) => {
    const colorMap: Record<string, Record<string, string>> = {
      blue: {
        bg: "bg-blue-600",
        bgHover: "hover:bg-blue-700",
        bgLight: "bg-blue-600/20",
        text: "text-blue-500",
        border: "border-blue-600",
        borderLight: "border-blue-600/50",
        gradient: "from-blue-600 to-blue-700",
        gradientHover: "from-blue-500 to-blue-600",
      },
      indigo: {
        bg: "bg-indigo-600",
        bgHover: "hover:bg-indigo-700",
        bgLight: "bg-indigo-600/20",
        text: "text-indigo-500",
        border: "border-indigo-600",
        borderLight: "border-indigo-600/50",
        gradient: "from-indigo-600 to-indigo-700",
        gradientHover: "from-indigo-500 to-indigo-600",
      },
      purple: {
        bg: "bg-purple-600",
        bgHover: "hover:bg-purple-700",
        bgLight: "bg-purple-600/20",
        text: "text-purple-500",
        border: "border-purple-600",
        borderLight: "border-purple-600/50",
        gradient: "from-purple-600 to-purple-700",
        gradientHover: "from-purple-500 to-purple-600",
      },
    }

    return colorMap[color][type]
  }

  // Helper function to render feature comparison cell
  const renderFeatureCell = (feature: any, plan: any, index: number) => {
    switch (feature.type) {
      case "price":
        return (
          <div key={index} className="col-span-1 text-center">
            <div className="font-bold text-white">
              ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
              <span className="text-sm text-gray-400 font-normal">/{billingPeriod === "monthly" ? "mo" : "yr"}</span>
            </div>
          </div>
        )
      case "storage":
        return (
          <div key={index} className="col-span-1 text-center text-gray-300">
            {plan.features.find((f: string) => f.includes("Storage"))?.replace("Storage", "")}
            <span className="text-gray-500">Storage</span>
          </div>
        )
      case "cpu":
        return (
          <div key={index} className="col-span-1 text-center text-gray-300">
            {plan.features.find((f: string) => f.includes("CPU"))?.replace("CPU", "")}
            <span className="text-gray-500">CPU</span>
          </div>
        )
      case "ram":
        return (
          <div key={index} className="col-span-1 text-center text-gray-300">
            {plan.features.find((f: string) => f.includes("RAM"))?.replace("RAM", "")}
            <span className="text-gray-500">RAM</span>
          </div>
        )
      case "bandwidth":
        return (
          <div key={index} className="col-span-1 text-center">
            {plan.features.includes("Unmetered Bandwidth") ? (
              <Check className={`h-5 w-5 ${getColorClass(plan.color, "text")} mx-auto`} />
            ) : (
              <X className="h-5 w-5 text-gray-600 mx-auto" />
            )}
          </div>
        )
      case "uptime":
        return (
          <div key={index} className="col-span-1 text-center text-gray-300">
            {plan.features.find((f: string) => f.includes("Uptime"))?.split(" ")[0]}
          </div>
        )
      case "support":
        return (
          <div key={index} className="col-span-1 text-center text-gray-300">
            {plan.features.includes("Priority Support") ? "Priority 24/7" : "Standard 24/7"}
          </div>
        )
      case "backups":
        return (
          <div key={index} className="col-span-1 text-center">
            {plan.features.some((f: string) => f.includes("Backup")) ? (
              <Check className={`h-5 w-5 ${getColorClass(plan.color, "text")} mx-auto`} />
            ) : (
              <X className="h-5 w-5 text-gray-600 mx-auto" />
            )}
          </div>
        )
      case "email":
        return (
          <div key={index} className="col-span-1 text-center text-gray-300">
            {plan.features.find((f: string) => f.includes("Email"))?.includes("Unlimited")
              ? "Unlimited"
              : plan.features.find((f: string) => f.includes("Email"))?.split(" ")[0]}
          </div>
        )
      case "feature":
        return (
          <div key={index} className="col-span-1 text-center">
            {plan.features.includes(feature.feature) ? (
              <Check className={`h-5 w-5 ${getColorClass(plan.color, "text")} mx-auto`} />
            ) : (
              <X className="h-5 w-5 text-gray-600 mx-auto" />
            )}
          </div>
        )
      default:
        return (
          <div key={index} className="col-span-1 text-center">
            -
          </div>
        )
    }
  }

  return (
    <div className="min-h-screen bg-[#080c14] text-white">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Header */}
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 relative">
        <motion.div
          className="absolute top-32 left-0 w-full"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <div className="text-center">
            <motion.span
              className="bg-blue-600/20 text-blue-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.3)" }}
            >
              Transparent Pricing
            </motion.span>
          </div>
        </motion.div>
        <div className="container mx-auto px-4 pt-16 relative z-10 text-center">
          <motion.h1
            className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300 text-center mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Simple, Predictable <br /> Pricing Plans
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Choose the perfect plan for your needs. No hidden fees, no surprises. All plans include our award-winning
            customer support.
          </motion.p>

          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <div className="bg-gray-900/50 p-1 rounded-lg flex items-center">
              <button
                onClick={() => setBillingPeriod("monthly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  billingPeriod === "monthly" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                Monthly
              </button>
              <button
                onClick={() => setBillingPeriod("yearly")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                  billingPeriod === "yearly" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                Yearly
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  Save 20%
                </span>
              </button>
            </div>
          </motion.div>

          <motion.div
            className="flex justify-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-gray-900/50 p-1 rounded-lg flex items-center">
              <button
                onClick={() => setActiveTab("web")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${
                  activeTab === "web" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                <Globe className="h-4 w-4 mr-2" />
                Web Hosting
              </button>
              <button
                onClick={() => setActiveTab("cloud")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${
                  activeTab === "cloud" ? "bg-indigo-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                <Server className="h-4 w-4 mr-2" />
                Cloud Hosting
              </button>
              <button
                onClick={() => setActiveTab("game")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 flex items-center ${
                  activeTab === "game" ? "bg-purple-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                <Zap className="h-4 w-4 mr-2" />
                Game Hosting
              </button>
            </div>
          </motion.div>
        </div>

        {/* Floating elements */}
        <motion.div
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-blue-500/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-blue-500/10 blur-xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2],
            x: [0, -15, 0],
            y: [0, 15, 0],
          }}
          transition={{ duration: 7, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
        />
      </section>

      {/* Pricing Cards Section */}
      <section className="py-12 relative" ref={pricingRef}>
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {activePlans.map((plan, index) => (
              <motion.div
                key={`${activeTab}-${plan.name}`}
                className={`bg-gray-900/30 backdrop-blur-lg rounded-xl ${
                  plan.popular
                    ? `border-2 ${getColorClass(plan.color, "borderLight")} lg:scale-105 lg:-my-2 z-10`
                    : "border border-gray-800/50"
                } overflow-hidden group`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: `0 10px 30px -10px ${plan.popular ? "rgba(79, 70, 229, 0.4)" : "rgba(37, 99, 235, 0.2)"}`,
                  borderColor: plan.popular ? "rgba(79, 70, 229, 0.6)" : "rgba(37, 99, 235, 0.3)",
                }}
              >
                {/* Popular Badge */}
                {plan.popular && (
                  <div className="absolute top-0 right-0">
                    <div
                      className={`${getColorClass(plan.color, "bg")} text-xs font-bold text-white px-3 py-1 rounded-bl-lg`}
                    >
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Card Header */}
                <div className="relative">
                  <div className={`h-8 ${getColorClass(plan.color, "bgLight")} w-full`}></div>
                  <div className="p-6 pb-4">
                    <h3 className="font-bold text-2xl text-white">{plan.name}</h3>
                    <p className="text-gray-400 text-sm mt-1">{plan.description}</p>
                    <div className="flex items-baseline mt-4">
                      <span className="text-3xl font-bold text-white">
                        ${billingPeriod === "monthly" ? plan.monthlyPrice : plan.yearlyPrice}
                      </span>
                      <span className="text-sm text-gray-400 ml-1">
                        /{billingPeriod === "monthly" ? "month" : "year"}
                      </span>
                    </div>
                    {billingPeriod === "yearly" && (
                      <div className="mt-2 text-sm text-green-500">
                        Save ${(plan.monthlyPrice * 12 - plan.yearlyPrice).toFixed(2)} per year
                      </div>
                    )}
                  </div>
                </div>

                {/* Features */}
                <div className="px-6 py-4 border-t border-gray-800/50">
                  <h4 className={`text-sm font-semibold ${getColorClass(plan.color, "text")} uppercase mb-3`}>
                    What's included
                  </h4>
                  <ul className="space-y-2">
                    {plan.features.map((feature, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center text-sm text-gray-300"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.3, delay: i * 0.05 }}
                      >
                        <Check className={`h-4 w-4 ${getColorClass(plan.color, "text")} mr-2 flex-shrink-0`} />
                        <span>{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Not Included */}
                {plan.notIncluded.length > 0 && (
                  <div className="px-6 py-4 border-t border-gray-800/50">
                    <h4 className="text-sm font-semibold text-gray-500 uppercase mb-3">Not included</h4>
                    <ul className="space-y-2">
                      {plan.notIncluded.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-gray-500">
                          <X className="h-4 w-4 text-gray-600 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CTA */}
                <div className="p-6 bg-gradient-to-b from-transparent to-gray-900/50">
                  <motion.button
                    className={`w-full bg-gradient-to-r ${getColorClass(plan.color, "gradient")} text-white py-3 rounded-md flex items-center justify-center group relative overflow-hidden`}
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(37, 99, 235, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 font-medium">Get Started</span>
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-r ${getColorClass(plan.color, "gradientHover")}`}
                      initial={{ x: "-100%" }}
                      whileHover={{ x: 0 }}
                      transition={{ duration: 0.4 }}
                    />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 mb-6">
              Not sure which plan is right for you? <br className="md:hidden" />
              Contact our sales team for a personalized recommendation.
            </p>
            <motion.button
              className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto group relative overflow-hidden border border-gray-700/50"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToSection(comparisonRef)}
            >
              <span className="relative z-10 font-medium">Compare All Features</span>
              <ChevronDown className="h-5 w-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Feature Comparison Section */}
      <section className="py-24 border-t border-gray-800/50 relative" ref={comparisonRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="bg-blue-600/20 text-blue-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.3)" }}
            >
              Detailed Comparison
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Compare {activeTab === "web" ? "Web Hosting" : activeTab === "cloud" ? "Cloud Hosting" : "Game Hosting"}{" "}
              Features
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find the perfect plan with all the features you need
            </p>
          </motion.div>

          <div className="overflow-x-auto">
            <motion.div
              className="min-w-[800px]"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              {/* Table Header */}
              <div className="grid grid-cols-4 gap-4 mb-6">
                <div className="col-span-1"></div>
                {activePlans.map((plan, index) => (
                  <motion.div
                    key={index}
                    className={`col-span-1 text-center ${plan.popular ? getColorClass(plan.color, "text") : "text-white"} font-bold text-lg`}
                    initial={{ opacity: 0, y: -10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                  >
                    {plan.name}
                    {plan.popular && (
                      <span
                        className={`ml-2 text-xs ${getColorClass(plan.color, "bg")} text-white px-2 py-0.5 rounded-full`}
                      >
                        Popular
                      </span>
                    )}
                  </motion.div>
                ))}
              </div>

              {/* Feature Rows */}
              {activeFeatures.map((feature, featureIndex) => (
                <div key={featureIndex} className="grid grid-cols-4 gap-4 py-4 border-t border-gray-800/50">
                  <div className="col-span-1 flex items-center font-medium text-white">{feature.name}</div>
                  {activePlans.map((plan, planIndex) => renderFeatureCell(feature, plan, planIndex))}
                </div>
              ))}

              {/* CTA Row */}
              <div className="grid grid-cols-4 gap-4 py-6 border-t border-gray-800/50">
                <div className="col-span-1"></div>
                {activePlans.map((plan, index) => (
                  <div key={index} className="col-span-1 text-center">
                    <motion.button
                      className={`px-4 py-2 bg-gradient-to-r ${getColorClass(plan.color, "gradient")} text-white rounded-md text-sm font-medium relative overflow-hidden`}
                      whileHover={{ scale: 1.05, boxShadow: "0 0 15px rgba(37, 99, 235, 0.3)" }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="relative z-10">Select Plan</span>
                      <motion.div
                        className={`absolute inset-0 bg-gradient-to-r ${getColorClass(plan.color, "gradientHover")}`}
                        initial={{ x: "-100%" }}
                        whileHover={{ x: 0 }}
                        transition={{ duration: 0.4 }}
                      />
                    </motion.button>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 border-t border-gray-800/50 relative" ref={faqRef}>
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <motion.span
              className="bg-blue-600/20 text-blue-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(37, 99, 235, 0.3)" }}
            >
              Frequently Asked Questions
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Pricing Questions
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our pricing and plans
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                className="mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.button
                  className={`w-full text-left p-6 rounded-xl flex justify-between items-center ${
                    expandedFaq === index ? "bg-gray-800/70 shadow-lg" : "bg-gray-900/30 hover:bg-gray-800/50"
                  } backdrop-blur-lg border border-gray-800/50`}
                  onClick={() => toggleFaq(index)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.99 }}
                >
                  <h3 className="font-medium text-lg text-white">{faq.question}</h3>
                  <motion.div animate={{ rotate: expandedFaq === index ? 180 : 0 }} transition={{ duration: 0.3 }}>
                    <ChevronDown className="h-5 w-5 text-gray-400" />
                  </motion.div>
                </motion.button>
                <motion.div
                  className="overflow-hidden"
                  initial={{ height: 0 }}
                  animate={{ height: expandedFaq === index ? "auto" : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="p-6 bg-gray-900/20 border-x border-b border-gray-800/50 rounded-b-xl">
                    <p className="text-gray-400">{faq.answer}</p>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <p className="text-gray-400 mb-6">Still have questions? Our support team is here to help.</p>
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 font-medium">Contact Support</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Enterprise Section */}
      <section className="py-24 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4">
          <div className="bg-gradient-to-br from-gray-900/80 to-gray-800/80 backdrop-blur-lg p-8 md:p-12 rounded-2xl border border-gray-700/50 relative overflow-hidden">
            <motion.div
              className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.1), transparent 70%)",
                  "radial-gradient(circle at 80% 80%, rgba(37, 99, 235, 0.1), transparent 70%)",
                  "radial-gradient(circle at 20% 20%, rgba(37, 99, 235, 0.1), transparent 70%)",
                ],
              }}
              transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            />

            <div className="md:flex items-center justify-between">
              <div className="md:w-2/3 mb-8 md:mb-0">
                <motion.h2
                  className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  Need a Custom Solution?
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Our enterprise plans offer tailored solutions for large organizations with specific requirements. Get
                  dedicated resources, custom configurations, and personalized support.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-8 py-4 rounded-md flex items-center justify-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 font-medium">Contact Sales</span>
                  <motion.span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="h-5 w-5" />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                    initial={{ x: "-100%" }}
                    whileHover={{ x: 0 }}
                    transition={{ duration: 0.4 }}
                  />
                </motion.button>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
