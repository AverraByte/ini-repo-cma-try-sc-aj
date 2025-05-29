"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"

export default function DashboardClient() {
  const [servers, setServers] = useState([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  useEffect(() => {
    const fetchServers = async () => {
      setLoading(true)
      try {
        // Replace with your actual API endpoint
        const response = await fetch("/api/servers")
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`)
        }
        const data = await response.json()
        setServers(data)
      } catch (error) {
        console.error("Could not fetch servers:", error)
        // Handle error appropriately, e.g., display an error message to the user
      } finally {
        setLoading(false)
      }
    }

    fetchServers()
  }, [])

  const handleCreateServer = () => {
    router.push("/create-server")
  }

  return (
    <div className="container mx-auto p-4">
      <header className="flex items-center justify-between mb-6">
        <div className="flex items-center">
          <div className="bg-blue-500 text-white font-bold py-2 px-4 rounded-full mr-4">AB</div>
          <h1 className="text-2xl font-semibold">AverraByte Dashboard</h1>
        </div>
        <button
          className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleCreateServer}
        >
          Create New Server
        </button>
      </header>

      {loading ? (
        <p>Loading infrastructure services...</p>
      ) : (
        <>
          {servers.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {servers.map((server) => (
                <div key={server.id} className="bg-white shadow-md rounded-md p-4">
                  <h2 className="text-lg font-semibold">{server.name}</h2>
                  <p>IP Address: {server.ipAddress}</p>
                  <p>Status: {server.status}</p>
                  {/* Add more server details here */}
                </div>
              ))}
            </div>
          ) : (
            <p>No infrastructure services available.</p>
          )}
        </>
      )}

      <footer className="mt-8 text-center text-gray-500">
        <p>&copy; {new Date().getFullYear()} AverraByte. All rights reserved. Built by technical experts.</p>
      </footer>
    </div>
  )
}
