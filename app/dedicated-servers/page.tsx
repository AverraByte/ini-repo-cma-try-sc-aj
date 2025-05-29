"use client"

import type React from "react"

import { useState, useRef } from "react"
import { motion } from "framer-motion"
import { ChevronRight, Check, ChevronDown, Shield, Server, Cpu, Clock, Network, HardDrive } from "lucide-react"
import ParticleBackground from "@/components/particle-background"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DedicatedServers() {
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
      question: "What is a dedicated server?",
      answer:
        "A dedicated server is a physical server where all resources are exclusively allocated to a single client. Unlike shared hosting or cloud solutions, dedicated servers provide full control, enhanced security, and maximum performance as the hardware is not shared with other users.",
    },
    {
      question: "Who should use dedicated servers?",
      answer:
        "Dedicated servers are ideal for businesses with high-traffic websites, resource-intensive applications, large databases, or specific compliance requirements. They're also perfect for gaming communities that need low latency and consistent performance.",
    },
    {
      question: "Can I customize my server configuration?",
      answer:
        "Yes, we offer fully customizable dedicated server solutions. You can choose your preferred CPU, RAM, storage configuration, operating system, and additional features to meet your specific requirements. Our team can also help you design the optimal setup for your needs.",
    },
    {
      question: "Do you offer managed dedicated servers?",
      answer:
        "Yes, we offer both managed and unmanaged dedicated server options. With managed services, our team handles server setup, security, monitoring, updates, and technical support. Unmanaged options provide full control for clients with technical expertise who prefer to manage their own environment.",
    },
    {
      question: "What kind of support do you provide?",
      answer:
        "We offer 24/7 technical support for all dedicated server clients. Our managed services include proactive monitoring, regular maintenance, security updates, and rapid response to any issues. For unmanaged servers, we provide hardware support and network maintenance.",
    },
    {
      question: "How quickly can my dedicated server be deployed?",
      answer:
        "Standard server configurations can typically be deployed within 24-48 hours. Custom configurations may take 3-5 business days depending on hardware availability and specific requirements. For urgent needs, we offer expedited deployment options.",
    },
  ]

  const features = [
    {
      icon: <Cpu className="h-6 w-6 text-purple-500" />,
      title: "Enterprise-Grade Hardware",
      description:
        "Latest generation Intel Xeon or AMD EPYC processors, DDR4 ECC RAM, and NVMe SSD storage for maximum performance and reliability.",
    },
    {
      icon: <Network className="h-6 w-6 text-purple-500" />,
      title: "High-Speed Network",
      description:
        "10Gbps network connections with unlimited bandwidth and multiple uplinks for exceptional speed and reliability.",
    },
    {
      icon: <Shield className="h-6 w-6 text-purple-500" />,
      title: "Advanced Security",
      description:
        "Enterprise-level DDoS protection, hardware firewalls, and secure data centers with 24/7 monitoring and physical security.",
    },
    {
      icon: <Server className="h-6 w-6 text-purple-500" />,
      title: "Full Root Access",
      description:
        "Complete control over your server environment with root access, allowing you to install any software and configure your server as needed.",
    },
    {
      icon: <HardDrive className="h-6 w-6 text-purple-500" />,
      title: "RAID Configuration",
      description:
        "Multiple RAID options (RAID 0, 1, 5, 10) for data redundancy and improved performance to protect your critical data.",
    },
    {
      icon: <Clock className="h-6 w-6 text-purple-500" />,
      title: "24/7 Expert Support",
      description:
        "Round-the-clock technical support from our experienced server specialists to assist with any issues or questions.",
    },
  ]

  const plans = [
    {
      name: "Pro",
      description: "Entry-level dedicated server",
      monthlyPrice: 99.99,
      specs: {
        cpu: "Intel Xeon E-2236 (6 cores, 3.4 GHz)",
        ram: "32 GB DDR4 ECC",
        storage: "2 × 1 TB NVMe SSD",
        bandwidth: "Unmetered (10 Gbps Port)",
      },
      features: [
        "Full Root Access",
        "DDoS Protection",
        "24/7 Technical Support",
        "99.9% Uptime Guarantee",
        "1 IPv4 Address",
        "Multiple Linux Distros",
        "Remote Reboot",
        "Basic Monitoring",
      ],
      popular: false,
      color: "purple",
    },
    {
      name: "Enterprise",
      description: "High-performance business server",
      monthlyPrice: 199.99,
      specs: {
        cpu: "Intel Xeon Silver 4214 (12 cores, 2.2 GHz)",
        ram: "64 GB DDR4 ECC",
        storage: "2 × 2 TB NVMe SSD (RAID 1)",
        bandwidth: "Unmetered (10 Gbps Port)",
      },
      features: [
        "Full Root Access",
        "Advanced DDoS Protection",
        "24/7 Priority Support",
        "99.99% Uptime Guarantee",
        "5 IPv4 Addresses",
        "Windows/Linux OS Options",
        "Remote Reboot & KVM",
        "Advanced Monitoring",
        "Hardware Firewall",
        "Managed Services Option",
      ],
      popular: true,
      color: "purple",
    },
    {
      name: "Ultimate",
      description: "Maximum power for demanding workloads",
      monthlyPrice: 349.99,
      specs: {
        cpu: "AMD EPYC 7402P (24 cores, 2.8 GHz)",
        ram: "128 GB DDR4 ECC",
        storage: "4 × 2 TB NVMe SSD (RAID 10)",
        bandwidth: "Unmetered (10 Gbps Port)",
      },
      features: [
        "Full Root Access",
        "Premium DDoS Protection",
        "24/7 Priority Support",
        "99.99% Uptime Guarantee",
        "10 IPv4 Addresses",
        "Windows/Linux OS Options",
        "Remote Reboot & KVM",
        "Premium Monitoring",
        "Hardware Firewall",
        "Managed Services Included",
        "Dedicated Account Manager",
        "Custom Control Panel",
      ],
      popular: false,
      color: "purple",
    },
  ]

  const getColorClass = (color: string, type: string) => {
    const colorMap: Record<string, Record<string, string>> = {
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
              className="bg-purple-600/20 text-purple-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
            >
              Maximum Performance
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
            Dedicated Servers <br /> Uncompromised Power
          </motion.h1>
          <motion.p
            className="text-gray-400 max-w-2xl mx-auto mb-12 text-lg"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Enterprise-grade dedicated servers with full root access, premium hardware, and 24/7 expert support.
            Experience unparalleled performance for your most demanding workloads.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row justify-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-md flex items-center justify-center group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={() => scrollToSection(plansRef)}
            >
              <span className="relative z-10 font-medium">View Server Options</span>
              <motion.span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform">
                <ChevronRight className="h-5 w-5" />
              </motion.span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.4 }}
              />
            </motion.button>
            <motion.button
              className="border border-gray-700 hover:border-purple-500 text-white px-6 py-3 rounded-md relative overflow-hidden group"
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
          className="absolute top-1/4 left-10 w-20 h-20 rounded-full bg-purple-500/10 blur-xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 10, 0],
            y: [0, -10, 0],
          }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-1/4 right-10 w-32 h-32 rounded-full bg-purple-500/10 blur-xl"
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
              whileHover={{ y: -5, borderColor: "rgba(147, 51, 234, 0.5)" }}
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
              whileHover={{ y: -5, borderColor: "rgba(147, 51, 234, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">10 Gbps</div>
              <div className="text-gray-400 text-sm">Network Speed</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5, borderColor: "rgba(147, 51, 234, 0.5)" }}
            >
              <div className="text-3xl font-bold text-white mb-1">6</div>
              <div className="text-gray-400 text-sm">Global Data Centers</div>
            </motion.div>
            <motion.div
              className="bg-gray-900/30 backdrop-blur-lg p-6 rounded-xl border border-gray-800/50"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5, borderColor: "rgba(147, 51, 234, 0.5)" }}
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
              className="bg-purple-600/20 text-purple-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
            >
              Server Features
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Enterprise-Grade <br /> Infrastructure
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Our dedicated servers are built with premium hardware and advanced features to deliver exceptional
              performance and reliability.
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
                  boxShadow: "0 10px 30px -10px rgba(147, 51, 234, 0.2)",
                  borderColor: "rgba(147, 51, 234, 0.3)",
                }}
              >
                <motion.div className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="flex items-center mb-4">
                  <motion.div
                    className="h-12 w-12 bg-purple-600/20 rounded-xl flex items-center justify-center mr-4 relative"
                    whileHover={{ rotate: 5, scale: 1.05 }}
                  >
                    {feature.icon}
                    <motion.div
                      className="absolute inset-0 border border-purple-500/30 rounded-xl"
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
              className="bg-purple-600/20 text-purple-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
            >
              Server Options
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Choose Your Dedicated Server
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Select from our range of high-performance dedicated servers or contact us for a custom configuration.
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
                  boxShadow: `0 10px 30px -10px ${
                    plan.popular ? "rgba(147, 51, 234, 0.4)" : "rgba(147, 51, 234, 0.2)"
                  }`,
                  borderColor: plan.popular ? "rgba(147, 51, 234, 0.6)" : "rgba(147, 51, 234, 0.3)",
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
                  </div>
                </div>

                {/* Specs */}
                <div className="px-6 py-4 border-t border-gray-800/50">
                  <h4 className={`text-sm font-semibold ${getColorClass(plan.color, "text")} uppercase mb-3`}>
                    Hardware Specifications
                  </h4>
                  <ul className="space-y-2">
                    <li className="flex items-start text-sm text-gray-300">
                      <Cpu className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <span className="font-medium">CPU:</span> {plan.specs.cpu}
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-gray-300">
                      <Server className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <span className="font-medium">RAM:</span> {plan.specs.ram}
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-gray-300">
                      <HardDrive className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <span className="font-medium">Storage:</span> {plan.specs.storage}
                      </span>
                    </li>
                    <li className="flex items-start text-sm text-gray-300">
                      <Network className="h-4 w-4 text-gray-500 mr-2 mt-0.5 flex-shrink-0" />
                      <span>
                        <span className="font-medium">Bandwidth:</span> {plan.specs.bandwidth}
                      </span>
                    </li>
                  </ul>
                </div>

                {/* Features */}
                <div className="px-6 py-4 border-t border-gray-800/50">
                  <h4 className={`text-sm font-semibold ${getColorClass(plan.color, "text")} uppercase mb-3`}>
                    Features
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
                    whileHover={{ scale: 1.02, boxShadow: "0 0 20px rgba(147, 51, 234, 0.3)" }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10 font-medium">Configure & Order</span>
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
              Need a custom server configuration? <br className="md:hidden" />
              Our experts can design a solution tailored to your specific requirements.
            </p>
            <motion.button
              className="bg-gray-800/50 hover:bg-gray-700/50 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto group relative overflow-hidden border border-gray-700/50"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.2)" }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="relative z-10 font-medium">Request Custom Configuration</span>
              <ChevronRight className="h-5 w-5 ml-2" />
            </motion.button>
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
              className="bg-purple-600/20 text-purple-500 text-xs px-4 py-1.5 rounded-full inline-block"
              whileHover={{ scale: 1.05, backgroundColor: "rgba(147, 51, 234, 0.3)" }}
            >
              Frequently Asked Questions
            </motion.span>
            <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white via-gray-100 to-gray-300">
              Dedicated Server FAQs
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto text-lg">
              Find answers to common questions about our dedicated server solutions.
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
              Still have questions about our dedicated servers? Our server specialists are here to help.
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-6 py-3 rounded-md flex items-center justify-center mx-auto group relative overflow-hidden"
              whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <span className="relative z-10 font-medium">Contact Support</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600"
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
              className="absolute inset-0 bg-gradient-to-br from-purple-600/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
              animate={{
                background: [
                  "radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.1), transparent 70%)",
                  "radial-gradient(circle at 80% 80%, rgba(147, 51, 234, 0.1), transparent 70%)",
                  "radial-gradient(circle at 20% 20%, rgba(147, 51, 234, 0.1), transparent 70%)",
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
                  Ready for Uncompromised Performance?
                </motion.h2>
                <motion.p
                  className="text-gray-400 text-lg"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                >
                  Get started with our dedicated server solutions today and experience the power of enterprise-grade
                  hardware with full control and expert support.
                </motion.p>
              </div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <motion.button
                  className="bg-gradient-to-r from-purple-600 to-purple-700 text-white px-8 py-4 rounded-md flex items-center justify-center group relative overflow-hidden"
                  whileHover={{ scale: 1.05, boxShadow: "0 0 20px rgba(147, 51, 234, 0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}
                >
                  <span className="relative z-10 font-medium">Get Started Now</span>
                  <motion.span className="relative z-10 ml-2 group-hover:translate-x-1 transition-transform">
                    <ChevronRight className="h-5 w-5" />
                  </motion.span>
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-purple-500 to-purple-600"
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
