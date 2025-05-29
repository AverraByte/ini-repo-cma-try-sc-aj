const RustPricing = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Rust Game Hosting Pricing</h1>
      <p className="text-gray-700 text-center mb-4">
        We offer flexible and affordable Rust game hosting plans to suit your needs. Our servers are optimized for
        performance and reliability, ensuring a smooth gaming experience for you and your players.
      </p>
      <p className="text-gray-700 text-center mb-4">
        Powered by cutting-edge technology and supported by our team of technical experts, we provide the best Rust
        hosting solution available.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Basic</h2>
          <p className="text-gray-600 mb-2">Ideal for small communities.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Up to 25 Players</li>
            <li>4 GB RAM</li>
            <li>50 GB SSD Storage</li>
            <li>Basic DDoS Protection</li>
          </ul>
          <div className="text-2xl font-bold mb-4">$14.99/month</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        </div>

        {/* Standard Plan */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Standard</h2>
          <p className="text-gray-600 mb-2">Perfect for medium-sized communities.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Up to 50 Players</li>
            <li>8 GB RAM</li>
            <li>100 GB SSD Storage</li>
            <li>Advanced DDoS Protection</li>
          </ul>
          <div className="text-2xl font-bold mb-4">$29.99/month</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-semibold mb-4">Premium</h2>
          <p className="text-gray-600 mb-2">For large and active communities.</p>
          <ul className="list-disc list-inside mb-4">
            <li>Up to 100 Players</li>
            <li>16 GB RAM</li>
            <li>200 GB SSD Storage</li>
            <li>Premium DDoS Protection</li>
          </ul>
          <div className="text-2xl font-bold mb-4">$59.99/month</div>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
        </div>
      </div>

      <div className="mt-8 text-center">
        <p className="text-gray-500">
          Need a custom plan?{" "}
          <a href="#" className="text-blue-500 hover:underline">
            Contact us
          </a>{" "}
          for a personalized quote.
        </p>
      </div>
    </div>
  )
}

export default RustPricing
