"use client"

import type React from "react"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion } from "framer-motion"
import { ChevronRight, Check, ChevronDown, Shield, Zap, Server, Database, Clock, Scale } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CloudHosting() {
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
      question: "What is cloud hosting?",
      answer:
        "Cloud hosting is a type of web hosting that uses multiple connected servers to balance load and maximize uptime. Instead of using a single server, your website is hosted on a virtual partition that draws computing resources from an extensive network of physical servers.",
    },
    {
      question: "How does cloud hosting differ from traditional hosting?",
      answer:
        "Unlike traditional hosting where your site is hosted on a single server, cloud hosting distributes resources across multiple servers. This provides better reliability, scalability, and performance. If one server fails, others take over, ensuring your website remains online.",
    },
    {
      question: "Can I scale my resources up or down?",
      answer:
        "Yes, one of the main advantages of cloud hosting is its scalability. You can easily scale your resources up during traffic spikes or down during quieter periods. This ensures you only pay for what you need while maintaining optimal performance.",
    },
    {
      question: "Is cloud hosting secure?",
      answer:
        "Yes, our cloud hosting includes enterprise-grade security features such as DDoS protection, firewalls, and regular security updates. Your data is also backed up regularly across multiple servers for added protection.",
    },
    {
      question: "What kind of websites benefit most from cloud hosting?",
      answer:
        "Cloud hosting is ideal for growing businesses, e-commerce sites, high-traffic blogs, and applications that require scalability and high availability. If your website experiences variable traffic or you anticipate growth, cloud hosting is an excellent choice.",
    },
    {
      question: "Do you offer managed cloud hosting?",
      answer:
        "Yes, we offer fully managed cloud hosting services. Our team handles all technical aspects including server setup, security, updates, and optimization, allowing you to focus on your business while we take care of the infrastructure.",
    },
  ]

  const features = [
    {
      icon: <Scale className="h-6 w-6 text-indigo-500" />,
      title: "Auto-Scaling Resources",
      description:
        "Automatically adjust resources based on demand, ensuring optimal performance during traffic spikes without manual intervention.",
    },
    {
      icon: <Shield className="h-6 w-6 text-indigo-500" />,
      title: "Enterprise-Grade Security",
      description:
        "Advanced security measures including DDoS protection, firewalls, and regular security audits to keep your data safe.",
    },
    {
      icon: <Database className="h-6 w-6 text-indigo-500" />,
      title: "Distributed Database",
      description:
        "Your data is distributed across multiple servers, ensuring high availability and protection against hardware failures.",
    },
    {
      icon: <Server className="h-6 w-6 text-indigo-500" />,
      title: "99.99% Uptime Guarantee",
      description:
        "Our redundant infrastructure ensures your applications are always available, backed by our industry-leading uptime guarantee.",
    },
    {
      icon: <Zap className="h-6 w-6 text-indigo-500" />,
      title: "Global CDN Integration",
      description:
        "Content delivery network integration ensures fast loading times for users worldwide by serving content from the nearest location.",
    },
    {
      icon: <Clock className="h-6 w-6 text-indigo-500" />,
      title: "24/7 Expert Support",
      description:
        "Our cloud specialists are available around the clock to assist with any questions or issues you may encounter.",
    },
  ]

  const plans = [
    {
      name: "Starter",
      description: "Entry-level cloud computing solution",
      monthlyPrice: 5.99,
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
      popular: false,
      color: "indigo",
    },
    {
      name: "Professional",
      description: "Reliable cloud hosting for businesses",
      monthlyPrice: 12.99,
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
      popular: true,
      color: "indigo",
    },
    {
      name: "Enterprise",
      description: "Enterprise-grade cloud infrastructure",
      monthlyPrice: 24.99,
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
      popular: false,
      color: "indigo",
    },
  ]

  const getColorClass = (color: string, type: string) => {
    const colorMap: Record<string, Record<string, string>> = {
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
              className="bg-indigo-600/20 text-indigo-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.3)" }}
            >
              Scalable & Reliable
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
            Enterprise-Grade <br /> Cloud Hosting
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Scalable, secure, and high-performance cloud hosting with auto-scaling resources and 99.99% uptime
            guarantee. Perfect for growing businesses and high-traffic applications.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-md flex items-center justify-center group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => scrollToSection(plansRef)}
            >
              <span className="relative z-10 font-medium">View Cloud Plans</span>
              <motion.span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform">
                <ChevronRight className="h-5 w-5" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
            <motion.button
              className="border border-gray-700 hover:border-indigo-500 text-white px-6 py-3 rounded-md relative overflow-hidden group"
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
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-indigo-500/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-indigo-500/10 blur-xl"
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
              whileHover={{ y: -5, borderColor: "rgba(79, 70, 229, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">99.99%</div>
              <div className="text-gray-400 text-sm">Uptime Guarantee</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(79, 70, 229, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">5,000+</div>
              <div className="text-gray-400 text-sm">Cloud Deployments</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, borderColor: "rgba(79, 70, 229, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">7</div>
              <div className="text-gray-400 text-sm">Global Data Centers</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, borderColor: "rgba(79, 70, 229, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">24/7</div>
              <div className="text-gray-400 text-sm">Cloud Support</div>
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
              className="bg-indigo-600/20 text-indigo-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.3)" }}
            >
              Cloud Features
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Powerful Cloud <br /> Infrastructure
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our cloud hosting platform is built on cutting-edge technology to provide unmatched performance,
              reliability, and security.
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
                  boxShadow: "0 10px 30px -10px rgba(79, 70, 229, 0.2)",
                  borderColor: "rgba(79, 70, 229, 0.3)",
                }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center mb-4">
                  <motion.div
                    className="h-12 w-12 bg-indigo-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    {feature.icon}
                    <motion.div
                      className="absolute inset-0 border border-indigo-500/30 rounded-xl"
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
              className="bg-indigo-600/20 text-indigo-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.3)" }}
            >
              Cloud Plans
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Choose Your Cloud Solution
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Select the cloud hosting plan that best suits your needs and budget. All plans include our premium
              features.
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
                  boxShadow: `0 10px 30px -10px ${plan.popular ? "rgba(79, 70, 229, 0.4)" : "rgba(79, 70, 229, 0.2)"}`,
                  borderColor: plan.popular ? "rgba(79, 70, 229, 0.6)" : "rgba(79, 70, 229, 0.3)",
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
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(79, 70, 229, 0.3)" }}
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
              Need a custom cloud solution? <br className="md:hidden" />
              Contact our cloud experts for a tailored infrastructure plan.
            </p>
            <Link href="/pricing">
              <motion.button
                className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto group relative overflow-hidden border border-gray-700/50"
                whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.2)" }}
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
              className="bg-indigo-600/20 text-indigo-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(79, 70, 229, 0.3)" }}
            >
              Frequently Asked Questions
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Cloud Hosting FAQs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our cloud hosting services.
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
              Still have questions about our cloud hosting? Our cloud experts are here to help.
            </p>
            <motion.button
              className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 font-medium">Contact Support</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600"
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
              className="absolute inset-0 bg-gradient-to-br from-indigo-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.1), transparent 70%)",
                  "radial-gradient(circle at 80% 80%, rgba(79, 70, 229, 0.1), transparent 70%)",
                  "radial-gradient(circle at 20% 20%, rgba(79, 70, 229, 0.1), transparent 70%)",
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
                  Ready to Scale Your Business?
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Get started with our cloud hosting solutions today and experience the power of scalable, reliable, and
                  secure infrastructure for your applications.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-indigo-600 to-indigo-700 text-white px-8 py-4 rounded-md flex items-center justify-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(79, 70, 229, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 font-medium">Get Started Now</span>
                  <motion.span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="h-5 w-5" />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-indigo-600"
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
