import Link from "next/link"

const Header = () => {
  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <Link href="/" className="text-2xl font-bold">
          AB <span className="text-green-400">AverraByte</span>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex space-x-6">
            <li>
              <Link href="/" className="hover:text-green-400">
                Home
              </Link>
            </li>
            <li>
              <Link href="/game-hosting" className="hover:text-green-400">
                Game Hosting
              </Link>
            </li>
            <li>
              <Link href="/cloud-hosting" className="hover:text-green-400">
                Cloud Hosting
              </Link>
            </li>
            <li>
              <Link href="/web-hosting" className="hover:text-green-400">
                Web Hosting
              </Link>
            </li>
            <li>
              <Link href="/pricing" className="hover:text-green-400">
                Pricing
              </Link>
            </li>
            <li>
              <Link href="/support" className="hover:text-green-400">
                Support
              </Link>
            </li>
          </ul>
        </nav>

        {/* Call to Action Button */}
        <div className="flex items-center space-x-4">
          <Link href="/login" className="hover:text-green-400">
            Login
          </Link>
          <Link href="/pricing" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Get Started
          </Link>
        </div>
      </div>
    </header>
  )
}

export default Header
