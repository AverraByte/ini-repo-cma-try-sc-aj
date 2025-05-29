const ArkPricing = () => {
  return (
    <div className="container mx-auto py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">ARK: Survival Evolved Server Hosting Pricing</h2>
      <p className="text-gray-600 text-center mb-4">
        Our ARK: Survival Evolved server hosting provides a seamless and reliable gaming experience. We offer flexible
        pricing plans to suit your needs, whether you're a small group of friends or a large gaming community.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Basic Plan */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Basic</h3>
          <p className="text-gray-700 mb-2">Ideal for small groups of friends.</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Up to 10 Players</li>
            <li>2 GB RAM</li>
            <li>Fast SSD Storage</li>
            <li>24/7 Support</li>
          </ul>
          <p className="text-2xl font-bold">$9.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Get Started
          </button>
        </div>

        {/* Standard Plan */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Standard</h3>
          <p className="text-gray-700 mb-2">Perfect for medium-sized communities.</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Up to 25 Players</li>
            <li>4 GB RAM</li>
            <li>Fast SSD Storage</li>
            <li>Priority Support</li>
          </ul>
          <p className="text-2xl font-bold">$19.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Get Started
          </button>
        </div>

        {/* Premium Plan */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-semibold mb-4">Premium</h3>
          <p className="text-gray-700 mb-2">For large communities and competitive play.</p>
          <ul className="list-disc list-inside text-gray-600 mb-4">
            <li>Up to 50 Players</li>
            <li>8 GB RAM</li>
            <li>Fast SSD Storage</li>
            <li>Dedicated IP Address</li>
            <li>24/7 Priority Support</li>
          </ul>
          <p className="text-2xl font-bold">$39.99/month</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-4">
            Get Started
          </button>
        </div>
      </div>

      <p className="text-gray-600 text-center mt-8">
        All plans include our easy-to-use control panel, automated backups, and DDoS protection. Our team of technical
        experts is available to assist you with any questions or issues.
      </p>
    </div>
  )
}

export default ArkPricing
