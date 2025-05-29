"use client"

import { useState } from "react"
import Link from "next/link"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { DocsSidebar } from "./components/docs-sidebar"
import { ArrowRight, CheckCircle, Clock, FileText, Gamepad2, Server } from "lucide-react"

import Header from "@/components/header"
import Footer from "@/components/footer"

export default function DocsClientPage() {
  const [activeTab, setActiveTab] = useState("overview")

  return (
    <>
      <Header />
      <main className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-950 text-white pt-20">
        {/* Hero Section */}
        <div className="relative overflow-hidden border-b border-gray-800">
          <div className="absolute inset-0 bg-blue-900/10"></div>
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/20 to-transparent"></div>

          <div className="container mx-auto px-4 py-16 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">GameServer Documentation</h1>
              <p className="text-lg text-gray-300 mb-8">
                Comprehensive guides to maximize your game server hosting experience
              </p>

              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/docs/quickstart"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                >
                  Quick Start Guide
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
                <Link
                  href="/docs/games"
                  className="inline-flex items-center px-6 py-3 rounded-lg bg-gray-800 hover:bg-gray-700 text-white font-medium transition-colors"
                >
                  View All Games
                  <Gamepad2 className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="container mx-auto px-4 py-16">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar */}
            <DocsSidebar />

            {/* Content */}
            <div className="flex-1">
              <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-6 mb-8">
                <h2 className="text-2xl font-bold mb-4">Welcome to GameServer Documentation</h2>
                <p className="text-gray-300 mb-4">
                  This documentation contains all the information you need to start, configure, and manage your game
                  server. Choose a category in the sidebar to find specific guides or use the search to find a
                  particular topic.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Step-by-Step Guides</h3>
                      <p className="text-sm text-gray-400">Detailed instructions for all features</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Server className="h-5 w-5 text-blue-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Server Configuration</h3>
                      <p className="text-sm text-gray-400">Optimization for best performance</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-purple-500 shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-medium text-white">Always Updated</h3>
                      <p className="text-sm text-gray-400">Latest documentation for all games</p>
                    </div>
                  </div>
                </div>
              </div>

              <h2 className="text-2xl font-bold mb-6">Popular Documentation</h2>

              <Tabs defaultValue={activeTab} onValueChange={setActiveTab} className="mb-8">
                <TabsList className="bg-gray-800/30 border border-gray-700/30">
                  <TabsTrigger value="overview">Overview</TabsTrigger>
                  <TabsTrigger value="minecraft">Minecraft</TabsTrigger>
                  <TabsTrigger value="valheim">Valheim</TabsTrigger>
                  <TabsTrigger value="rust">Rust</TabsTrigger>
                </TabsList>
                <TabsContent value="overview" className="mt-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <Link href="/docs/quickstart" className="group">
                      <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-5 h-full transition-colors hover:bg-gray-800/40">
                        <div className="flex items-center mb-3">
                          <FileText className="h-5 w-5 text-blue-500 mr-2" />
                          <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                            Quick Start Guide
                          </h3>
                        </div>
                        <p className="text-sm text-gray-400">
                          Get your game server up and running in less than 5 minutes
                        </p>
                      </div>
                    </Link>
                    <Link href="/docs/management/control-panel" className="group">
                      <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-5 h-full transition-colors hover:bg-gray-800/40">
                        <div className="flex items-center mb-3">
                          <FileText className="h-5 w-5 text-blue-500 mr-2" />
                          <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                            Control Panel
                          </h3>
                        </div>
                        <p className="text-sm text-gray-400">
                          Learn how to use the control panel to manage your server
                        </p>
                      </div>
                    </Link>
                    <Link href="/docs/management/backups" className="group">
                      <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-5 h-full transition-colors hover:bg-gray-800/40">
                        <div className="flex items-center mb-3">
                          <FileText className="h-5 w-5 text-blue-500 mr-2" />
                          <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                            Server Backups
                          </h3>
                        </div>
                        <p className="text-sm text-gray-400">Protect your server data with automatic backups</p>
                      </div>
                    </Link>
                    <Link href="/docs/troubleshooting/common-issues" className="group">
                      <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-5 h-full transition-colors hover:bg-gray-800/40">
                        <div className="flex items-center mb-3">
                          <FileText className="h-5 w-5 text-blue-500 mr-2" />
                          <h3 className="font-medium text-white group-hover:text-blue-400 transition-colors">
                            Troubleshooting
                          </h3>
                        </div>
                        <p className="text-sm text-gray-400">Solutions for common issues you might encounter</p>
                      </div>
                    </Link>
                  </div>
                </TabsContent>
                <TabsContent value="minecraft" className="mt-6">
                  <div className="space-y-6">
                    <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">Minecraft Server</h3>
                      <p className="text-gray-300 mb-4">
                        Learn how to set up and manage your Minecraft server for an optimal gaming experience.
                      </p>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-blue-400">
                            System Requirements
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            <p className="mb-2">For optimal performance, your Minecraft server requires:</p>
                            <ul className="list-disc pl-5 space-y-1 text-gray-400">
                              <li>Minimum 2GB RAM (4GB recommended)</li>
                              <li>2 core processor (4 cores for 10+ players)</li>
                              <li>Stable internet connection</li>
                              <li>5GB+ storage</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-blue-400">
                            Installing Plugins
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            <p>Plugins can enhance your Minecraft server experience. To install plugins:</p>
                            <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-400">
                              <li>Access your server control panel</li>
                              <li>Navigate to the "Plugins" section</li>
                              <li>Upload the plugin .jar file</li>
                              <li>Restart your server</li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-3" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-blue-400">
                            Optimizing Performance
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            <p>To optimize your Minecraft server performance:</p>
                            <ul className="list-disc pl-5 mt-2 space-y-1 text-gray-400">
                              <li>Set view-distance to 8-10</li>
                              <li>Limit entity and redstone counts</li>
                              <li>Use optimization plugins like Paper or Purpur</li>
                              <li>Set spawn-protection as needed</li>
                            </ul>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <div className="mt-4">
                        <Link
                          href="/docs/games/minecraft"
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                        >
                          View all Minecraft documentation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="valheim" className="mt-6">
                  <div className="space-y-6">
                    <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">Valheim Server</h3>
                      <p className="text-gray-300 mb-4">
                        Learn how to set up and manage your Valheim server for an optimal Viking adventure.
                      </p>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-blue-400">
                            Setting Up Valheim Server
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            <p>To set up your Valheim server:</p>
                            <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-400">
                              <li>Choose a Valheim hosting package</li>
                              <li>Set your server name and password</li>
                              <li>Configure world settings</li>
                              <li>Start the server and connect</li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-blue-400">
                            Installing Mods
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            <p>Mods can enhance your Valheim experience. To install mods:</p>
                            <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-400">
                              <li>Install BepInEx to your server</li>
                              <li>Upload mod files to the plugins folder</li>
                              <li>Configure mods as needed</li>
                              <li>Restart your server</li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <div className="mt-4">
                        <Link
                          href="/docs/games/valheim"
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                        >
                          View all Valheim documentation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
                <TabsContent value="rust" className="mt-6">
                  <div className="space-y-6">
                    <div className="bg-gray-800/20 border border-gray-700/30 rounded-lg p-6">
                      <h3 className="text-xl font-bold mb-4">Rust Server</h3>
                      <p className="text-gray-300 mb-4">
                        Learn how to set up and manage your Rust server for an optimal survival experience.
                      </p>
                      <Accordion type="single" collapsible className="w-full">
                        <AccordionItem value="item-1" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-blue-400">
                            Setting Up Rust Server
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            <p>To set up your Rust server:</p>
                            <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-400">
                              <li>Choose a Rust hosting package</li>
                              <li>Set your server name and description</li>
                              <li>Configure map size and seed</li>
                              <li>Set server rules and plugins</li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                        <AccordionItem value="item-2" className="border-gray-700">
                          <AccordionTrigger className="text-white hover:text-blue-400">
                            Installing Oxide/uMod
                          </AccordionTrigger>
                          <AccordionContent className="text-gray-300">
                            <p>Oxide/uMod allows you to use plugins on your Rust server:</p>
                            <ol className="list-decimal pl-5 mt-2 space-y-1 text-gray-400">
                              <li>Install Oxide/uMod from the control panel</li>
                              <li>Wait for installation to complete</li>
                              <li>Restart your server</li>
                              <li>Begin installing desired plugins</li>
                            </ol>
                          </AccordionContent>
                        </AccordionItem>
                      </Accordion>
                      <div className="mt-4">
                        <Link
                          href="/docs/games/rust"
                          className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium"
                        >
                          View all Rust documentation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                </TabsContent>
              </Tabs>

              {/* FAQ Section */}
              <div className="mt-12">
                <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="faq-1" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-blue-400">
                      How do I start my game server?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      After purchasing a hosting package, you'll get access to the control panel. From there, you can
                      select the game you want to install, configure settings, and start your server. This process
                      usually takes less than 5 minutes.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-2" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-blue-400">
                      Can I upgrade my server later?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      Yes, you can upgrade your server at any time through the control panel. RAM, CPU, or storage
                      upgrades will be applied quickly, usually requiring only a brief server restart.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-3" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-blue-400">
                      How do I install mods or plugins?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      The mod or plugin installation process varies depending on the game. Generally, you can use the
                      file upload feature in the control panel to add mods to the appropriate folder. For popular games
                      like Minecraft, we provide automatic mod installers.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-4" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-blue-400">
                      How do I backup my server?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      All our hosting packages come with an automatic backup system that creates daily backups of your
                      server. You can also create manual backups at any time through the control panel. Backups can be
                      easily downloaded or restored if needed.
                    </AccordionContent>
                  </AccordionItem>
                  <AccordionItem value="faq-5" className="border-gray-700">
                    <AccordionTrigger className="text-white hover:text-blue-400">
                      What should I do if my server is lagging?
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-300">
                      If your server is experiencing lag, check the resource usage in the control panel. You may need to
                      optimize game settings, reduce the number of mods, or upgrade your package. See our
                      troubleshooting documentation for game-specific guides or contact our support.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
