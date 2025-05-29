import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "AverraByte - Support",
  description: "AverraByte Support Page",
}

const SupportPage = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-2xl font-bold mb-4">Support</h1>
      <p className="mb-4">
        Welcome to the support page. If you need assistance, please check out the following resources:
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">FAQ</h2>
          <p>Find answers to frequently asked questions.</p>
          <a href="/faq" className="text-blue-500 hover:underline">
            View FAQ
          </a>
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Contact Us</h2>
          <p>Get in touch with our support team.</p>
          <a href="/contact" className="text-blue-500 hover:underline">
            Contact Support
          </a>
        </div>
      </div>
    </div>
  )
}

export default SupportPage
