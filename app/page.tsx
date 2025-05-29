import Link from "next/link"
import Header from "@/components/header"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      <div className="flex-grow">
        {/* Hero Section */}
        <section className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-20">
          <div className="container mx-auto px-4 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Powering the Future of Digital Infrastructure
            </h1>
            <p className="text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
              Experience unparalleled performance and reliability with our Premium Infrastructure Solutions.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/pricing"
                className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                View Hosting Plans
              </Link>
              <Link
                href="/contact"
                className="bg-transparent border border-white hover:bg-white hover:text-gray-900 text-white font-bold py-3 px-6 rounded-md transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-semibold text-gray-800 mb-12 text-center">
              Infrastructure Hosting Built for Performance
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Dedicated Servers</h3>
                <p className="text-gray-600">Unmatched performance and control for your most demanding applications.</p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Cloud Hosting</h3>
                <p className="text-gray-600">
                  Scalable and reliable cloud hosting solutions for businesses of all sizes.
                </p>
              </div>
              <div className="bg-gray-50 p-6 rounded-lg shadow-sm">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Game Server Hosting</h3>
                <p className="text-gray-600">High-performance game servers with low latency and 24/7 support.</p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold text-gray-800 mb-12">Trusted by over 50,000 infrastructure admins</h2>
            <div className="max-w-3xl mx-auto">
              <div className="bg-white p-6 rounded-lg shadow-sm">
                <p className="text-gray-600 italic mb-4">
                  "AverraByte transformed our community server. The performance is outstanding and the support team is
                  always there when we need them."
                </p>
                <p className="text-gray-800 font-semibold">- John Doe, Community Admin</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-gray-900 text-white">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-semibold mb-6">Ready to Launch Your Infrastructure?</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Join thousands of users who trust our platform for their hosting needs.
            </p>
            <Link
              href="/pricing"
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-8 rounded-md transition-colors"
            >
              Get Started Today
            </Link>
          </div>
        </section>
      </div>

      <Footer />
    </main>
  )
}
