"use client"

const CareersClient = () => {
  return (
    <div className="container mx-auto py-12">
      <h1 className="text-3xl font-bold mb-6">Join Our Team</h1>
      <p className="mb-4">
        We are building the next generation of infrastructure technology and are looking for talented individuals to
        join us.
      </p>
      <p className="mb-4">
        If you are passionate about infrastructure platform and want to make a difference for users around the world, we
        encourage you to apply.
      </p>
      <p className="mb-4">
        We offer a challenging and rewarding work environment, competitive salaries, and excellent benefits.
      </p>
      <p className="mb-4">
        Explore our open positions and find the perfect opportunity to contribute to innovative infrastructure
        solutions.
      </p>

      {/* Example of a job listing (replace with actual data) */}
      <div className="bg-gray-100 p-4 rounded-md mb-4">
        <h2 className="text-xl font-semibold">Software Engineer</h2>
        <p className="text-gray-600">Location: Remote</p>
        <p className="text-gray-700">
          We are looking for a skilled software engineer to help us build and maintain our infrastructure platform.
        </p>
        <a href="#" className="text-blue-500 hover:underline">
          Learn More
        </a>
      </div>

      {/* Add more job listings here */}
    </div>
  )
}

export default CareersClient
