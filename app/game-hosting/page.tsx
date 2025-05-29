const GameHostingPage = () => {
  return (
    <div className="container mx-auto py-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Infrastructure Hosting Built for Performance</h1>
        <p className="text-gray-600 mb-8">Premium Infrastructure Solutions for serious users.</p>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">Get Started</button>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">Why Choose AverraByte?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">High Performance</h3>
            <p className="text-gray-700">Experience lightning-fast performance with our optimized infrastructure.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Reliable Uptime</h3>
            <p className="text-gray-700">
              We guarantee exceptional uptime, ensuring your infrastructure is always available.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-md">
            <h3 className="text-xl font-semibold mb-2">Expert Support</h3>
            <p className="text-gray-700">Our technical experts are available 24/7 to assist you.</p>
          </div>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="text-2xl font-bold mb-4">AverraByte Features</h2>
        <ul className="list-disc list-inside">
          <li>Dedicated Resources</li>
          <li>Customizable Configurations</li>
          <li>Scalable Infrastructure</li>
          <li>Advanced Security Measures</li>
        </ul>
      </section>

      <section className="mt-20 text-center">
        <h2 className="text-3xl font-bold mb-6">Ready to Start Your Infrastructure?</h2>
        <p className="text-gray-600 mb-8">Join thousands of users who trust our platform.</p>
        <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
          Get Started Now
        </button>
      </section>
    </div>
  )
}

export default GameHostingPage
