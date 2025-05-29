"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight, ChevronDown, Search, Globe, Shield, Server, Clock, RefreshCw, Lock } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

type DomainExtension = {
  extension: string
  price: number
  renewalPrice: number
  transferPrice: number
  popular?: boolean
  sale?: boolean
  salePrice?: number
}

export default function Domain() {
  const [domainName, setDomainName] = useState<string>("")
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)
  const [activeTab, setActiveTab] = useState<"all" | "popular" | "sale">("all")

  const pricingRef = useRef<HTMLDivElement>(null)
  const featuresRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const handleDomainSearch = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real application, this would trigger a domain search API call
    alert(`Searching for domain: ${domainName}`)
  }

  const domainExtensions: DomainExtension[] = [
    { extension: ".com", price: 9.99, renewalPrice: 12.99, transferPrice: 9.99, popular: true },
    { extension: ".net", price: 11.99, renewalPrice: 14.99, transferPrice: 11.99, popular: true },
    { extension: ".org", price: 12.99, renewalPrice: 15.99, transferPrice: 12.99, popular: true },
    { extension: ".io", price: 39.99, renewalPrice: 45.99, transferPrice: 39.99, popular: true },
    { extension: ".co", price: 24.99, renewalPrice: 29.99, transferPrice: 24.99, popular: true },
    { extension: ".dev", price: 14.99, renewalPrice: 17.99, transferPrice: 14.99, popular: true },
    { extension: ".app", price: 15.99, renewalPrice: 18.99, transferPrice: 15.99 },
    { extension: ".tech", price: 4.99, renewalPrice: 39.99, transferPrice: 29.99, sale: true, salePrice: 4.99 },
    { extension: ".store", price: 5.99, renewalPrice: 49.99, transferPrice: 39.99, sale: true, salePrice: 5.99 },
    { extension: ".online", price: 3.99, renewalPrice: 29.99, transferPrice: 24.99, sale: true, salePrice: 3.99 },
    { extension: ".site", price: 2.99, renewalPrice: 24.99, transferPrice: 19.99, sale: true, salePrice: 2.99 },
    { extension: ".xyz", price: 1.99, renewalPrice: 12.99, transferPrice: 9.99, sale: true, salePrice: 1.99 },
    { extension: ".info", price: 8.99, renewalPrice: 11.99, transferPrice: 8.99 },
    { extension: ".me", price: 19.99, renewalPrice: 22.99, transferPrice: 19.99 },
    { extension: ".biz", price: 9.99, renewalPrice: 12.99, transferPrice: 9.99 },
    { extension: ".ai", price: 79.99, renewalPrice: 89.99, transferPrice: 79.99 },
  ]

  const filteredDomains = domainExtensions.filter((domain) => {
    if (activeTab === "popular") return domain.popular
    if (activeTab === "sale") return domain.sale
    return true
  })

  const faqs = [
    {
      question: "How do I register a domain name?",
      answer:
        "Registering a domain name is easy! Simply use our domain search tool to find your desired domain, select the extension you want, and complete the checkout process. Once payment is confirmed, your domain will be registered and ready to use.",
    },
    {
      question: "What is domain privacy protection?",
      answer:
        "Domain privacy protection shields your personal information (name, address, phone number, email) from being publicly visible in the WHOIS database. This helps prevent spam, identity theft, and unwanted solicitations. We offer domain privacy protection as an add-on service for all domain registrations.",
    },
    {
      question: "Can I transfer my existing domain to your service?",
      answer:
        "Yes, you can transfer your existing domain to us from another registrar. The process is simple: unlock your domain at your current registrar, obtain the authorization code (EPP code), and initiate the transfer through our website. The transfer typically takes 5-7 days to complete.",
    },
    {
      question: "What is auto-renewal and how does it work?",
      answer:
        "Auto-renewal is a feature that automatically renews your domain before it expires, ensuring you never lose ownership of your domain. When enabled, we'll charge your default payment method a few days before the expiration date. You can enable or disable auto-renewal at any time from your domain management dashboard.",
    },
    {
      question: "How do I set up DNS records for my domain?",
      answer:
        "You can manage DNS records through our domain management dashboard. After logging in, select your domain, go to the DNS management section, and add, edit, or delete records as needed. We support all common record types including A, AAAA, CNAME, MX, TXT, and SRV records.",
    },
    {
      question: "What happens if my domain expires?",
      answer:
        "If your domain expires, it enters a grace period (typically 30 days) during which you can renew it at the standard renewal rate. After the grace period, the domain enters a redemption period where it can still be recovered but at a higher fee. If not renewed during the redemption period, the domain eventually becomes available for registration by anyone.",
    },
  ]

  const features = [
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Free DNS Management",
      description:
        "Manage your domain's DNS records with our intuitive control panel. Add, edit, or delete records with ease.",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Privacy Protection",
      description:
        "Keep your personal information private with our WHOIS privacy protection service, included free with every domain.",
    },
    {
      icon: <Server className="h-6 w-6 text-blue-500" />,
      title: "Domain Forwarding",
      description:
        "Redirect your domain to any URL with our simple domain forwarding service. No technical knowledge required.",
    },
    {
      icon: <Lock className="h-6 w-6 text-blue-500" />,
      title: "Domain Lock",
      description:
        "Prevent unauthorized transfers with our domain lock feature. Keep your domain secure from hijacking attempts.",
    },
    {
      icon: <RefreshCw className="h-6 w-6 text-blue-500" />,
      title: "Auto-Renewal",
      description:
        "Never lose your domain with our auto-renewal service. We'll automatically renew your domain before it expires.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "24/7 Support",
      description:
        "Our domain experts are available around the clock to assist with any questions or issues you may encounter.",
    },
  ]

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
              Domain Registration
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
            Find Your Perfect <br /> Domain Name
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Secure your online identity with our domain registration service. Find, register, and manage domains with
            ease.
          </motion.p>

          {/* Domain Search */}
          <motion.div
            className="max-w-3xl mx-auto mb-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <form onSubmit={handleDomainSearch} className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Find your perfect domain name..."
                  className="w-full pl-10 pr-4 py-3 bg-gray-900/50 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent text-white"
                  value={domainName}
                  onChange={(e) => setDomainName(e.target.value)}
                />
              </div>
              <motion.button
                type="submit"
                className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center group relative overflow-hidden"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 17 }}
              >
                <span className="relative z-10 font-medium">Search Domain</span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.4 }}
                />
              </motion.button>
            </form>
            <div className="flex flex-wrap justify-center gap-4 mt-4">
              <div className="text-sm text-gray-400">Popular extensions:</div>
              {domainExtensions
                .filter((domain) => domain.popular)
                .slice(0, 5)
                .map((domain) => (
                  <div key={domain.extension} className="text-sm text-gray-300">
                    {domain.extension} <span className="text-blue-500">${domain.price.toFixed(2)}/yr</span>
                  </div>
                ))}
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-blue-600 to-blue-700 text-white px-6 py-3 rounded-md flex items-center justify-center group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => scrollToSection(pricingRef)}
            >
              <span className="relative z-10 font-medium">View Domain Pricing</span>
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
            <motion.button
              className="border border-gray-700 hover:border-blue-500 text-white px-6 py-3 rounded-md relative overflow-hidden group"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(255, 255, 255, 0.1)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => scrollToSection(featuresRef)}
            >
              <span className="relative z-10 font-medium">Explore Features</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100"
                transition={{ duration: 0.4 }}
              />
            </motion.button>
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

      {/* Stats Section */}
      <section className="py-12 border-t border-gray-800/50 relative">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">10M+</div>
              <div className="text-gray-400 text-sm">Domains Registered</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">300+</div>
              <div className="text-gray-400 text-sm">Domain Extensions</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">Free</div>
              <div className="text-gray-400 text-sm">WHOIS Privacy</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Expert Support</div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Domain Pricing Section */}
      <section className="py-24 border-t border-gray-800/50 relative" ref={pricingRef}>
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
              Domain Pricing
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Affordable Domain Names
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find and register your perfect domain name at competitive prices. Free WHOIS privacy protection included.
            </p>
          </motion.div>

          {/* Domain Tabs */}
          <div className="flex justify-center mb-12">
            <div className="bg-gray-900/50 p-1 rounded-lg flex items-center">
              <button
                onClick={() => setActiveTab("all")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "all" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                All Extensions
              </button>
              <button
                onClick={() => setActiveTab("popular")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 ${
                  activeTab === "popular" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                Popular
              </button>
              <button
                onClick={() => setActiveTab("sale")}
                className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 relative ${
                  activeTab === "sale" ? "bg-blue-600 text-white shadow-lg" : "text-gray-400 hover:text-white"
                }`}
              >
                On Sale
                <span className="absolute -top-2 -right-2 bg-green-500 text-white text-[10px] px-1.5 py-0.5 rounded-full">
                  Save
                </span>
              </button>
            </div>
          </div>

          {/* Domain Table */}
          <div className="overflow-x-auto">
            <table className="min-w-full bg-gray-900/30 backdrop-blur-lg rounded-xl border border-gray-800/50 overflow-hidden">
              <thead>
                <tr className="border-b border-gray-800/50">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Domain Extension</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Registration</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Renewal</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-300">Transfer</th>
                  <th className="px-6 py-4 text-right text-sm font-semibold text-gray-300"></th>
                </tr>
              </thead>
              <tbody>
                {filteredDomains.map((domain, index) => (
                  <motion.tr
                    key={domain.extension}
                    className="border-b border-gray-800/50 hover:bg-gray-800/30"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.05 }}
                  >
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <span className="text-lg font-semibold text-white">{domain.extension}</span>
                        {domain.popular && (
                          <span className="ml-2 bg-blue-600/20 text-blue-500 text-xs px-2 py-0.5 rounded-full">
                            Popular
                          </span>
                        )}
                        {domain.sale && (
                          <span className="ml-2 bg-green-600/20 text-green-500 text-xs px-2 py-0.5 rounded-full">
                            Sale
                          </span>
                        )}
                      </div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      {domain.sale ? (
                        <div>
                          <span className="text-green-500 font-semibold">${domain.salePrice?.toFixed(2)}</span>
                          <span className="ml-2 text-gray-500 line-through text-sm">${domain.price.toFixed(2)}</span>
                        </div>
                      ) : (
                        <span className="text-white">${domain.price.toFixed(2)}</span>
                      )}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">${domain.renewalPrice.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-white">${domain.transferPrice.toFixed(2)}</td>
                    <td className="px-6 py-4 whitespace-nowrap text-right">
                      <motion.button
                        className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Register
                      </motion.button>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>

          <motion.div
            className="mt-12 text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-gray-400 mb-6">
              Looking for a specific domain extension? <br className="md:hidden" />
              Contact our domain experts for assistance with any TLD.
            </p>
            <motion.button
              className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto group relative overflow-hidden border border-gray-700/50"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-medium">Contact Domain Experts</span>
              <ChevronRight className="h-5 w-5 ml-2" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 border-t border-gray-800/50 relative" ref={featuresRef}>
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
              Domain Features
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Everything You Need <br /> For Your Domain
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our domain registration service includes all the features you need to manage your online presence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="bg-gray-900/30 backdrop-blur-lg p-8 rounded-xl border border-gray-800/50 relative overflow-hidden group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{
                  y: -5,
                  boxShadow: "0 10px 30px -10px rgba(37, 99, 235, 0.2)",
                  borderColor: "rgba(37, 99, 235, 0.3)",
                }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-blue-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center mb-4">
                  <motion.div
                    className="h-12 w-12 bg-blue-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    {feature.icon}
                    <motion.div
                      className="absolute inset-0 border border-blue-500/30 rounded-xl"
                      animate={{
                        scale: [1, 1.2, 1],
                        opacity: [1, 0, 1],
                      }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, delay: index * 0.3 }}
                    />
                  </motion.div>
                  <h3 className="font-bold text-xl">{feature.title}</h3>
                </div>
                <p className="text-gray-400">{feature.description}</p>
              </motion.div>
            ))}
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
              Domain Registration FAQs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our domain registration services.
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
            <p className="text-gray-400 mb-6">
              Still have questions about domains? Our domain experts are here to help.
            </p>
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

      {/* CTA Section */}
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
                  Ready to Secure Your Domain?
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Register your domain name today and take the first step in establishing your online presence. Free
                  WHOIS privacy protection and DNS management included.
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
                  <span className="relative z-10 font-medium">Find Your Domain</span>
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
