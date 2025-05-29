"use client"

import Link from "next/link"
import {
  Mail,
  Phone,
  MessageSquare,
  FileText,
  Users,
  Clock,
  Search,
  ArrowRight,
  Server,
  Globe,
  CreditCard,
  User,
  Shield,
  Zap,
  CheckCircle,
  HelpCircle,
  LifeBuoy,
  Upload,
  ChevronRight,
} from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Badge } from "@/components/ui/badge"

import Header from "@/components/header"
import Footer from "@/components/footer"

// Tambahkan import untuk useMobile
import { useMobile } from "@/hooks/use-mobile"

export default function SupportClientPage() {
  // Tambahkan hook useMobile di dalam komponen Support
  const { isMobile } = useMobile()

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      {/* Hero Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-b from-primary/20 via-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-20"></div>

        {/* Decorative elements */}
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"></div>

        <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center space-y-8 text-center">
            <div className="space-y-4">
              <Badge className="px-4 py-1.5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 transition-colors duration-200 shadow-md">
                24/7 Support Available
              </Badge>
              <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600 drop-shadow-sm">
                How Can We Help You?
              </h1>
              <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl lg:text-2xl">
                Find answers, get assistance, and resolve issues with our comprehensive support resources.
              </p>
            </div>
            <div className="w-full max-w-xl space-y-3">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-purple-500/20 rounded-full blur opacity-30 group-hover:opacity-100 transition duration-200"></div>
                <div className="relative">
                  <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors duration-200" />
                  <Input
                    type="search"
                    placeholder="Search our knowledge base..."
                    className="w-full bg-background/80 backdrop-blur-sm pl-12 pr-4 py-6 rounded-full border-2 border-muted shadow-lg transition-all duration-200 focus:shadow-xl focus:border-primary"
                  />
                  <Button size="lg" className="absolute right-1.5 top-1.5 rounded-full px-6 shadow-md">
                    Search
                  </Button>
                </div>
              </div>
              <p className="text-sm text-muted-foreground">
                Popular searches: server setup, billing, domain transfer, game mods
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      {/* Stats Section */}
      <section className="w-full py-12 md:py-16 border-y bg-muted/50">
        <div className="container px-4 md:px-6">
          <div className={`grid ${isMobile ? "grid-cols-1" : "grid-cols-4"} gap-8 md:gap-12 text-center`}>
            <div className="space-y-2 p-4 rounded-xl bg-background shadow-md border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-200">
              <h3 className="text-4xl font-bold text-primary">24/7</h3>
              <p className="text-sm text-muted-foreground">Support Available</p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-background shadow-md border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-200">
              <h3 className="text-4xl font-bold text-primary">&lt;1hr</h3>
              <p className="text-sm text-muted-foreground">Average Response Time</p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-background shadow-md border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-200">
              <h3 className="text-4xl font-bold text-primary">98%</h3>
              <p className="text-sm text-muted-foreground">Satisfaction Rate</p>
            </div>
            <div className="space-y-2 p-4 rounded-xl bg-background shadow-md border border-border/50 hover:shadow-lg hover:border-primary/20 transition-all duration-200">
              <h3 className="text-4xl font-bold text-primary">1000+</h3>
              <p className="text-sm text-muted-foreground">Knowledge Base Articles</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Methods Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-background to-muted/30">
        <div className="container px-4 md:px-6">
          <div className="text-center mb-12 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
              Contact Our Support Team
            </h2>
            <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
              Choose the support channel that works best for you
            </p>
          </div>
          <div className="mx-auto grid max-w-5xl gap-8 lg:grid-cols-3">
            <Card className="transition-all hover:shadow-xl border-2 border-border/50 hover:border-primary/50 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-2 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200 shadow-md">
                  <Mail className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl flex items-center gap-2 group-hover:text-primary transition-colors duration-200">
                  Email Support
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground">Get a response within 24 hours for all inquiries.</p>
              </CardContent>
              <CardFooter className="relative">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors duration-200 text-base"
                  asChild
                >
                  <Link href="mailto:support@gameserver.com" className="flex items-center justify-center gap-2">
                    <Mail className="h-4 w-4" />
                    support@gameserver.com
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:shadow-xl border-2 border-border/50 hover:border-primary/50 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-2 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200 shadow-md">
                  <Phone className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl flex items-center gap-2 group-hover:text-primary transition-colors duration-200">
                  Phone Support
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground">Available Monday to Friday, 9 AM - 6 PM EST.</p>
              </CardContent>
              <CardFooter className="relative">
                <Button
                  variant="outline"
                  className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors duration-200 text-base"
                  asChild
                >
                  <Link href="tel:+18001234567" className="flex items-center justify-center gap-2">
                    <Phone className="h-4 w-4" />
                    +1 (800) 123-4567
                  </Link>
                </Button>
              </CardFooter>
            </Card>
            <Card className="transition-all hover:shadow-xl border-2 border-border/50 hover:border-primary/50 group overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <CardHeader className="pb-2 relative">
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200 shadow-md">
                  <MessageSquare className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-xl flex items-center gap-2 group-hover:text-primary transition-colors duration-200">
                  Live Chat
                </CardTitle>
              </CardHeader>
              <CardContent className="relative">
                <p className="text-muted-foreground">Instant support available 24/7 for urgent issues.</p>
              </CardContent>
              <CardFooter className="relative">
                <Button className="w-full shadow-md hover:shadow-lg text-base text-white">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Start Chat
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Knowledge Base Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-muted/30">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Knowledge Base
              </h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                Browse our comprehensive guides and tutorials
              </p>
            </div>
            <Tabs defaultValue="game-servers" className="w-full">
              <TabsList className="grid w-full grid-cols-4 h-auto p-1 bg-muted/70 rounded-xl">
                <TabsTrigger
                  value="game-servers"
                  className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg shadow-sm data-[state=active]:shadow-md transition-all duration-200"
                >
                  <Server className="h-4 w-4 mr-2" />
                  Game Servers
                </TabsTrigger>
                <TabsTrigger
                  value="domains"
                  className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg shadow-sm data-[state=active]:shadow-md transition-all duration-200"
                >
                  <Globe className="h-4 w-4 mr-2" />
                  Domains
                </TabsTrigger>
                <TabsTrigger
                  value="billing"
                  className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg shadow-sm data-[state=active]:shadow-md transition-all duration-200"
                >
                  <CreditCard className="h-4 w-4 mr-2" />
                  Billing
                </TabsTrigger>
                <TabsTrigger
                  value="account"
                  className="py-3 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground rounded-lg shadow-sm data-[state=active]:shadow-md transition-all duration-200"
                >
                  <User className="h-4 w-4 mr-2" />
                  Account
                </TabsTrigger>
              </TabsList>
              <TabsContent value="game-servers" className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Setting up your Minecraft server",
                      description: "Learn how to configure and optimize your Minecraft server",
                      badge: "Popular",
                      icon: <Server className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Installing mods on your game server",
                      description: "Step-by-step guide to adding mods to your server",
                      icon: <Zap className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Server performance optimization",
                      description: "Tips and tricks to improve your server's performance",
                      icon: <Zap className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Backup and restore your game server",
                      description: "How to create backups and restore your server data",
                      icon: <Shield className="h-5 w-5 text-primary" />,
                    },
                  ].map((article, index) => (
                    <Card
                      key={index}
                      className="transition-all hover:shadow-xl border-2 border-border/50 hover:border-primary/50 group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="pb-2 relative">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                              {article.icon}
                            </div>
                            <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                              {article.title}
                            </CardTitle>
                          </div>
                          {article.badge && (
                            <Badge variant="secondary" className="bg-primary/20 text-primary hover:bg-primary/30">
                              {article.badge}
                            </Badge>
                          )}
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <CardDescription className="text-base">{article.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-auto group-hover:bg-primary/10 transition-colors duration-200"
                          asChild
                        >
                          <Link href="#" className="flex items-center gap-1">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="text-center">
                  <Button
                    variant="outline"
                    asChild
                    className="hover:bg-primary/10 hover:border-primary/50 transition-colors duration-200 text-base px-6 py-6 h-auto shadow-sm hover:shadow-md"
                  >
                    <Link href="#" className="flex items-center gap-1">
                      View All Game Server Articles
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="domains" className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Domain transfer guide",
                      description: "How to transfer your domain to GameServer",
                      icon: <Globe className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Setting up DNS records",
                      description: "Learn how to configure DNS records for your domain",
                      icon: <Globe className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Domain privacy protection",
                      description: "Protect your personal information with domain privacy",
                      icon: <Shield className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Domain renewal process",
                      description: "Understanding the domain renewal process and options",
                      icon: <Clock className="h-5 w-5 text-primary" />,
                    },
                  ].map((article, index) => (
                    <Card
                      key={index}
                      className="transition-all hover:shadow-xl border-2 border-border/50 hover:border-primary/50 group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="pb-2 relative">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                            {article.icon}
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                            {article.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <CardDescription className="text-base">{article.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-auto group-hover:bg-primary/10 transition-colors duration-200"
                          asChild
                        >
                          <Link href="#" className="flex items-center gap-1">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="text-center">
                  <Button
                    variant="outline"
                    asChild
                    className="hover:bg-primary/10 hover:border-primary/50 transition-colors duration-200 text-base px-6 py-6 h-auto shadow-sm hover:shadow-md"
                  >
                    <Link href="#" className="flex items-center gap-1">
                      View All Domain Articles
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="billing" className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Understanding your invoice",
                      description: "A guide to reading and understanding your invoice",
                      icon: <CreditCard className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Payment methods",
                      description: "Available payment methods and how to update them",
                      icon: <CreditCard className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Refund policy",
                      description: "Information about our refund policy and process",
                      icon: <CreditCard className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Subscription management",
                      description: "How to manage, upgrade, or cancel your subscriptions",
                      icon: <CreditCard className="h-5 w-5 text-primary" />,
                    },
                  ].map((article, index) => (
                    <Card
                      key={index}
                      className="transition-all hover:shadow-xl border-2 border-border/50 hover:border-primary/50 group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="pb-2 relative">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                            {article.icon}
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                            {article.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <CardDescription className="text-base">{article.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-auto group-hover:bg-primary/10 transition-colors duration-200"
                          asChild
                        >
                          <Link href="#" className="flex items-center gap-1">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="text-center">
                  <Button
                    variant="outline"
                    asChild
                    className="hover:bg-primary/10 hover:border-primary/50 transition-colors duration-200 text-base px-6 py-6 h-auto shadow-sm hover:shadow-md"
                  >
                    <Link href="#" className="flex items-center gap-1">
                      View All Billing Articles
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
              <TabsContent value="account" className="mt-8 space-y-6">
                <div className="grid gap-6 md:grid-cols-2">
                  {[
                    {
                      title: "Account security best practices",
                      description: "Tips to keep your account secure and protected",
                      icon: <Shield className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Two-factor authentication setup",
                      description: "How to enable and use two-factor authentication",
                      icon: <Shield className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "Managing API keys",
                      description: "Creating and managing API keys for your account",
                      icon: <User className="h-5 w-5 text-primary" />,
                    },
                    {
                      title: "User permissions and roles",
                      description: "Understanding different user roles and permissions",
                      icon: <User className="h-5 w-5 text-primary" />,
                    },
                  ].map((article, index) => (
                    <Card
                      key={index}
                      className="transition-all hover:shadow-xl border-2 border-border/50 hover:border-primary/50 group overflow-hidden"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      <CardHeader className="pb-2 relative">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                            {article.icon}
                          </div>
                          <CardTitle className="text-lg group-hover:text-primary transition-colors duration-200">
                            {article.title}
                          </CardTitle>
                        </div>
                      </CardHeader>
                      <CardContent className="relative">
                        <CardDescription className="text-base">{article.description}</CardDescription>
                      </CardContent>
                      <CardFooter className="relative">
                        <Button
                          variant="ghost"
                          size="sm"
                          className="ml-auto group-hover:bg-primary/10 transition-colors duration-200"
                          asChild
                        >
                          <Link href="#" className="flex items-center gap-1">
                            Read More
                            <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                          </Link>
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                <div className="text-center">
                  <Button
                    variant="outline"
                    asChild
                    className="hover:bg-primary/10 hover:border-primary/50 transition-colors duration-200 text-base px-6 py-6 h-auto shadow-sm hover:shadow-md"
                  >
                    <Link href="#" className="flex items-center gap-1">
                      View All Account Articles
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-gradient-to-b from-muted/30 to-background">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-3xl space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">Quick answers to common questions</p>
            </div>
            <Accordion type="single" collapsible className="w-full">
              {[
                {
                  question: "How do I reset my game server?",
                  answer:
                    "You can reset your game server through your control panel. Log in to your account, navigate to the server management section, and look for the reset or restart option. If you need immediate assistance, please contact our support team.",
                },
                {
                  question: "What payment methods do you accept?",
                  answer:
                    "We accept all major credit cards (Visa, MasterCard, American Express), PayPal, and cryptocurrency payments (Bitcoin, Ethereum). For annual plans, we also offer bank transfers. If you need an alternative payment method, please contact our billing department.",
                },
                {
                  question: "How do I upgrade my server plan?",
                  answer:
                    'Upgrading your server is simple. Log in to your account, go to the server management page, and select the "Upgrade" option. Choose your new plan, review the price difference, and confirm. The upgrade process typically takes 5-10 minutes, during which your server may experience a brief downtime.',
                },
                {
                  question: "Can I transfer my existing game save?",
                  answer:
                    "Yes, you can transfer your existing game save to our servers. We provide FTP access to upload your files directly. For larger saves or if you need assistance, our support team can help with the migration process. We recommend creating a backup of your save files before transferring.",
                },
                {
                  question: "What is your refund policy?",
                  answer:
                    "We offer a 7-day money-back guarantee for new customers. If you're not satisfied with our service within the first week, you can request a full refund. After this period, refunds are handled on a case-by-case basis. Please note that domain registrations are non-refundable due to the nature of the service.",
                },
              ].map((faq, index) => (
                <AccordionItem
                  key={index}
                  value={`item-${index + 1}`}
                  className="border-2 rounded-xl px-6 mb-6 data-[state=open]:bg-muted/30 data-[state=open]:border-primary/30 transition-all duration-200 shadow-sm hover:shadow-md"
                >
                  <AccordionTrigger className="text-left font-medium py-6 hover:text-primary transition-colors duration-200 text-lg">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                        <HelpCircle className="h-4 w-4 text-primary" />
                      </div>
                      {faq.question}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pb-6 pl-11 text-base">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="text-center">
              <Button
                variant="outline"
                asChild
                className="hover:bg-primary/10 hover:border-primary/50 transition-colors duration-200 text-base px-6 py-6 h-auto shadow-sm hover:shadow-md"
              >
                <Link href="#" className="flex items-center gap-1">
                  View All FAQs
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform duration-200" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Support Ticket Section */}
      <section className="w-full py-16 md:py-20 lg:py-24 bg-muted/30 relative overflow-hidden">
        <div className="absolute top-20 left-10 w-64 h-64 bg-primary/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="mx-auto max-w-3xl space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Submit a Support Ticket
              </h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                Can't find what you're looking for? Submit a ticket and our team will assist you.
              </p>
            </div>
            <Card className="border-2 shadow-xl overflow-hidden">
              <CardHeader className="bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-t-lg border-b">
                <CardTitle className="flex items-center gap-3 text-xl">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                    <LifeBuoy className="h-5 w-5 text-primary" />
                  </div>
                  New Support Ticket
                </CardTitle>
                <CardDescription className="text-base">
                  Please provide as much detail as possible so we can help you efficiently.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-8">
                <form className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-sm font-medium">
                        Name
                      </Label>
                      <Input
                        id="name"
                        placeholder="Your name"
                        className="border-2 focus:border-primary py-6 shadow-sm"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email" className="text-sm font-medium">
                        Email
                      </Label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="Your email address"
                        className="border-2 focus:border-primary py-6 shadow-sm"
                      />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-sm font-medium">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="Brief description of your issue"
                      className="border-2 focus:border-primary py-6 shadow-sm"
                    />
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div className="space-y-2">
                      <Label htmlFor="category" className="text-sm font-medium">
                        Category
                      </Label>
                      <Select>
                        <SelectTrigger className="border-2 focus:border-primary h-12 shadow-sm">
                          <SelectValue placeholder="Select a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="game-server">Game Server Issue</SelectItem>
                          <SelectItem value="billing">Billing Question</SelectItem>
                          <SelectItem value="domain">Domain Management</SelectItem>
                          <SelectItem value="account">Account Access</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="priority" className="text-sm font-medium">
                        Priority
                      </Label>
                      <Select>
                        <SelectTrigger className="border-2 focus:border-primary h-12 shadow-sm">
                          <SelectValue placeholder="Select priority" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="low">Low - General Question</SelectItem>
                          <SelectItem value="medium">Medium - Minor Issue</SelectItem>
                          <SelectItem value="high">High - Service Disruption</SelectItem>
                          <SelectItem value="urgent">Urgent - Service Unavailable</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Describe your issue in detail"
                      className="min-h-[200px] border-2 focus:border-primary shadow-sm"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="attachments" className="text-sm font-medium">
                      Attachments (optional)
                    </Label>
                    <div className="border-2 border-dashed rounded-xl p-8 text-center hover:bg-muted/30 hover:border-primary/30 transition-all duration-200 cursor-pointer group">
                      <Input id="attachments" type="file" multiple className="hidden" />
                      <div className="space-y-4">
                        <div className="flex justify-center">
                          <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-200">
                            <Upload className="h-8 w-8 text-primary" />
                          </div>
                        </div>
                        <div>
                          <p className="text-base font-medium">Drag and drop files here or click to browse</p>
                          <p className="text-sm text-muted-foreground mt-1">
                            Max file size: 10MB. Supported formats: jpg, png, pdf, zip.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </form>
              </CardContent>
              <CardFooter className="flex justify-between bg-gradient-to-r from-primary/10 to-purple-500/10 rounded-b-lg border-t p-6">
                <Button variant="outline" className="hover:bg-background transition-colors duration-200 border-2 px-6">
                  Cancel
                </Button>
                <Button className="px-8 py-6 h-auto text-base shadow-md hover:shadow-lg">
                  <CheckCircle className="h-5 w-5 mr-2" />
                  Submit Ticket
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Community Section */}
      <section className="w-full py-16 md:py-20 lg:py-24">
        <div className="container px-4 md:px-6">
          <div className="mx-auto max-w-5xl space-y-10">
            <div className="space-y-4 text-center">
              <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-purple-600">
                Join Our Community
              </h2>
              <p className="text-muted-foreground max-w-[700px] mx-auto text-lg">
                Connect with other users, share tips, and get help from the community
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-3">
              <Card className="transition-all hover:shadow-xl border-2 border-border/50 hover:border-primary/50 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="pb-2 relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200 shadow-md">
                    <Users className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                    Community Forum
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground">
                    Join discussions, share your experiences, and learn from other users.
                  </p>
                </CardContent>
                <CardFooter className="relative">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors duration-200 text-base"
                    asChild
                  >
                    <Link href="#" className="flex items-center justify-center gap-2">
                      Visit Forum
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-xl border-2 border-border/50 hover:border-primary/50 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="pb-2 relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200 shadow-md">
                    <FileText className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                    Documentation
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground">Comprehensive guides and documentation for all our services.</p>
                </CardContent>
                <CardFooter className="relative">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors duration-200 text-base"
                    asChild
                  >
                    <Link href="#" className="flex items-center justify-center gap-2">
                      Read Docs
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
              <Card className="transition-all hover:shadow-xl border-2 border-border/50 hover:border-primary/50 group overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <CardHeader className="pb-2 relative">
                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors duration-200 shadow-md">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-200">
                    Status Page
                  </CardTitle>
                </CardHeader>
                <CardContent className="relative">
                  <p className="text-muted-foreground">
                    Check the current status of our services and any ongoing issues.
                  </p>
                </CardContent>
                <CardFooter className="relative">
                  <Button
                    variant="outline"
                    className="w-full group-hover:bg-primary/10 group-hover:border-primary/50 transition-colors duration-200 text-base"
                    asChild
                  >
                    <Link href="#" className="flex items-center justify-center gap-2">
                      View Status
                      <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full py-16 md:py-24 lg:py-32 bg-gradient-to-br from-primary to-purple-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/10 bg-[size:20px_20px] opacity-10"></div>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
        <div className="absolute top-0 left-0 right-0 h-24 bg-gradient-to-b from-background to-transparent"></div>
        <div className="container px-4 md:px-6 relative z-10">
          <div className="flex flex-col items-center justify-center space-y-6 text-center">
            <div className="space-y-4 max-w-3xl">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl text-white">
                Need Immediate Assistance?
              </h2>
              <p className="mx-auto max-w-[800px] text-white md:text-xl lg:text-2xl">
                Our support team is available 24/7 to help you with any issues or questions.
              </p>
            </div>
            <div className="flex flex-col gap-4 min-[400px]:flex-row">
              <Button
                variant="secondary"
                size="lg"
                asChild
                className="font-medium text-lg px-8 py-7 h-auto shadow-lg hover:shadow-xl bg-white text-primary"
              >
                <Link href="tel:+18001234567" className="flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Call Us Now
                </Link>
              </Button>
              <Button
                size="lg"
                className="bg-primary-foreground/20 backdrop-blur-sm border-2 border-white/50 text-white hover:bg-primary-foreground/30 font-medium text-lg px-8 py-7 h-auto shadow-lg hover:shadow-xl"
              >
                <MessageSquare className="h-5 w-5 mr-2" />
                Start Live Chat
              </Button>
            </div>
            <div className="mt-8 flex items-center justify-center space-x-4">
              <div className="flex -space-x-4">
                {[1, 2, 3].map((i) => (
                  <div
                    key={i}
                    className="h-12 w-12 rounded-full bg-white border-4 border-primary flex items-center justify-center text-sm font-bold text-primary shadow-lg"
                  >
                    {i}
                  </div>
                ))}
              </div>
              <p className="text-lg text-white">
                <span className="font-bold">3 support agents</span> are online and ready to help
              </p>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent"></div>
      </section>

      <Footer />
    </div>
  )
}
