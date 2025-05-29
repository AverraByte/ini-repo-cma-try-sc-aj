"use client"

const AboutUsClient = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">About AverraByte</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Story</h2>
          <p className="text-gray-700 mb-4">
            AverraByte was founded in 2018 by a team of passionate technologists who saw a need for better
            infrastructure hosting options. We started with a simple goal: to provide reliable, high-performance
            infrastructure services to businesses and individuals alike.
          </p>
          <p className="text-gray-700 mb-4">
            Since then, we've grown into a leading provider of infrastructure hosting services, serving thousands of
            customers worldwide. We're proud of the work we do and the impact we have on our user communities.
          </p>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
          <p className="text-gray-700 mb-4">
            Our mission is to empower our customers with the tools and resources they need to succeed online. We believe
            that everyone deserves access to fast, reliable, and affordable infrastructure services.
          </p>
          <p className="text-gray-700 mb-4">
            We're committed to providing our customers with the best possible user experience, from our easy-to-use
            control panel to our world-class support team.
          </p>
        </div>
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-center mb-4">Why Choose AverraByte?</h2>
        <ul className="list-disc list-inside text-gray-700">
          <li>Enterprise-grade performance</li>
          <li>24/7 expert support</li>
          <li>Affordable pricing</li>
          <li>Scalable solutions</li>
          <li>Experience the difference with our high-performance infrastructure hosting</li>
        </ul>
      </div>
    </div>
  )
}

export default AboutUsClient
