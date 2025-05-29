"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Check, ChevronDown, Globe, Shield, Zap, Server, Database, Clock } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function WebHosting() {
  const [expandedFaq, setExpandedFaq] = useState<number | null>(null)

  const featuresRef = useRef<HTMLDivElement>(null)
  const plansRef = useRef<HTMLDivElement>(null)
  const faqRef = useRef<HTMLDivElement>(null)

  const scrollToSection = (ref: React.RefObject<HTMLDivElement>) => {
    ref.current?.scrollIntoView({ behavior: "smooth" })
  }

  const toggleFaq = (index: number) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  const faqs = [
    {
      question: "What is web hosting?",
      answer:
        "Web hosting is a service that allows individuals and organizations to make their websites accessible on the internet. It involves storing website files on a server that is connected to the internet 24/7, ensuring your website is always available to visitors.",
    },
    {
      question: "What type of websites can I host?",
      answer:
        "Our web hosting solutions are suitable for a wide range of websites, including personal blogs, business websites, e-commerce stores, portfolios, and more. Whether you're a beginner or an experienced developer, our hosting plans can accommodate your needs.",
    },
    {
      question: "Do I need technical knowledge to set up web hosting?",
      answer:
        "Not at all! Our user-friendly control panel and one-click installers make it easy for anyone to set up and manage their website. If you ever need assistance, our 24/7 support team is ready to help you every step of the way.",
    },
    {
      question: "Can I upgrade my plan later?",
      answer:
        "Yes, you can easily upgrade your hosting plan as your website grows. The transition is seamless, with no downtime, and our team will assist you in migrating your data to the new plan if needed.",
    },
    {
      question: "What is the uptime guarantee?",
      answer:
        "We offer a 99.9% uptime guarantee for all our web hosting plans. This means your website will be accessible to visitors at least 99.9% of the time. If we fail to meet this guarantee, you may be eligible for account credits.",
    },
    {
      question: "Do you offer WordPress hosting?",
      answer:
        "Yes, all our web hosting plans support WordPress. We offer one-click WordPress installation, automatic updates, and optimized server configurations to ensure your WordPress site runs smoothly and securely.",
    },
  ]

  const features = [
    {
      icon: <Globe className="h-6 w-6 text-blue-500" />,
      title: "Lightning-Fast SSD Storage",
      description:
        "All websites are hosted on high-performance SSD drives, ensuring faster page loading times and improved overall performance.",
    },
    {
      icon: <Shield className="h-6 w-6 text-blue-500" />,
      title: "Free SSL Certificates",
      description:
        "Secure your website with free SSL certificates, protecting your visitors' data and improving your search engine rankings.",
    },
    {
      icon: <Database className="h-6 w-6 text-blue-500" />,
      title: "Unlimited MySQL Databases",
      description:
        "Create as many databases as you need for your websites, applications, and content management systems.",
    },
    {
      icon: <Server className="h-6 w-6 text-blue-500" />,
      title: "99.9% Uptime Guarantee",
      description:
        "Our robust infrastructure ensures your website is always available to visitors, backed by our uptime guarantee.",
    },
    {
      icon: <Zap className="h-6 w-6 text-blue-500" />,
      title: "One-Click Installers",
      description:
        "Install popular applications like WordPress, Joomla, and Drupal with just one click, no technical knowledge required.",
    },
    {
      icon: <Clock className="h-6 w-6 text-blue-500" />,
      title: "24/7 Expert Support",
      description:
        "Our knowledgeable support team is available around the clock to assist you with any questions or issues.",
    },
  ]

  const plans = [
    {
      name: "Basic",
      description: "Perfect for personal websites and blogs",
      monthlyPrice: 2.99,
      features: [
        "10 GB SSD Storage",
        "Unmetered Bandwidth",
        "1 Website",
        "Free Domain (1 year)",
        "5 Email Accounts",
        "1-Click WordPress Install",
        "Free SSL Certificate",
        "99.9% Uptime Guarantee",
        "24/7 Support",
      ],
      popular: false,
      color: "blue",
    },
    {
      name: "Business",
      description: "Ideal for small businesses and portfolios",
      monthlyPrice: 5.99,
      features: [
        "25 GB SSD Storage",
        "Unmetered Bandwidth",
        "Unlimited Websites",
        "Free Domain (1 year)",
        "Unlimited Email Accounts",
        "1-Click WordPress Install",
        "Free SSL Certificate",
        "99.9% Uptime Guarantee",
        "24/7 Support",
        "Daily Backups",
        "CDN Integration",
      ],
      popular: true,
      color: "blue",
    },
    {
      name: "Enterprise",
      description: "Advanced solution for growing businesses",
      monthlyPrice: 9.99,
      features: [
        "50 GB SSD Storage",
        "Unmetered Bandwidth",
        "Unlimited Websites",
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
      popular: false,
      color: "blue",
    },
  ]

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
    }

    return colorMap[color][type]
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
              Fast & Reliable
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
            Premium Web Hosting <br /> For Any Website
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Lightning-fast SSD hosting with 99.9% uptime guarantee, free SSL certificates, and 24/7 expert support.
            Perfect for blogs, business websites, and e-commerce stores.
          </motion.p>
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
              onClick={() => scrollToSection(plansRef)}
            >
              <span className="relative z-10 font-medium">View Hosting Plans</span>
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
              <div className="text-3xl font-bold text-white mb-1">99.9%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">10,000+</div>
              <div className="text-gray-400 text-sm">Websites Hosted</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, borderColor: "rgba(37, 99, 235, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Expert Support</div>
            </motion.div>
          </div>
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
              Premium Features
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Everything You Need <br /> For Your Website
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our web hosting plans include all the features you need to create and manage a successful website.
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

      {/* Plans Section */}
      <section className="py-24 border-t border-gray-800/50 relative" ref={plansRef}>
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
              Hosting Plans
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Choose Your Perfect Plan
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Select the hosting plan that best suits your needs and budget. All plans include our premium features.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <motion.div
                key={index}
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
                      <span className="text-3xl font-bold text-white">${plan.monthlyPrice}</span>
                      <span className="text-sm text-gray-400 ml-1">/month</span>
                    </div>
                    <div className="mt-2 text-sm text-green-500">
                      Save ${(plan.monthlyPrice * 12 * 0.2).toFixed(2)} with yearly billing
                    </div>
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
            <Link href="/pricing">
              <motion.button
                className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto group relative overflow-hidden border border-gray-700/50"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(37, 99, 235, 0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="relative z-10 font-medium">Compare All Plans</span>
                <ChevronRight className="h-5 w-5 ml-2" />
              </motion.button>
            </Link>
          </motion.div>
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
              Got Questions?
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our web hosting services.
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
                  Ready to Launch Your Website?
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Get started with our web hosting plans today and enjoy lightning-fast performance, reliable uptime,
                  and expert support.
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
                  <span className="relative z-10 font-medium">Get Started Now</span>
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
