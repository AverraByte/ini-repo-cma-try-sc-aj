import type React from "react"

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Description */}
          <div>
            <div className="text-2xl font-bold mb-4">
              <span className="text-blue-500">AB</span> AverraByte
            </div>
            <p className="text-gray-400">
              Premium infrastructure hosting with unmatched performance. Trusted by users worldwide.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Services</h4>
            <ul className="text-gray-400">
              <li>
                <a href="#" className="hover:text-blue-500">
                  Web Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  VPS Hosting
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Dedicated Servers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-blue-500">
                  Cloud Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h4 className="text-lg font-semibold mb-2">Contact</h4>
            <p className="text-gray-400">Email: support@averrabyte.com</p>
            <p className="text-gray-400">Phone: +1 (555) 123-4567</p>
            <p className="text-gray-400">Address: 123 Main Street, Anytown, USA</p>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 text-center text-gray-500">
          &copy; {new Date().getFullYear()} AverraByte. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
