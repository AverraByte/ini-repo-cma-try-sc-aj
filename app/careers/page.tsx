const CareersPage = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold text-center mb-8">Join AverraByte - Premium Infrastructure Hosting</h1>

      <p className="text-lg text-gray-700 text-center mb-6">
        We're always looking for talented and passionate individuals to join our team. If you're excited about
        infrastructure hosting and want to make a difference, we encourage you to apply!
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Example Job Listings - Replace with actual data */}
        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Software Engineer</h2>
          <p className="text-gray-600">Develop and maintain our backend systems.</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 block">
            Learn More
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">System Administrator</h2>
          <p className="text-gray-600">Manage and maintain our server infrastructure.</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 block">
            Learn More
          </a>
        </div>

        <div className="bg-white rounded-lg shadow-md p-4">
          <h2 className="text-xl font-semibold mb-2">Customer Support Specialist</h2>
          <p className="text-gray-600">Provide excellent support to our customers.</p>
          <a href="#" className="text-blue-500 hover:underline mt-2 block">
            Learn More
          </a>
        </div>
      </div>

      <div className="mt-12 text-center">
        <p className="text-gray-700">
          Don't see a position that fits your skills? Send us your resume at{" "}
          <a href="mailto:careers@example.com" className="text-blue-500 hover:underline">
            careers@example.com
          </a>
        </p>
      </div>
    </div>
  )
}

export default CareersPage
