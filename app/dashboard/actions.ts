"use server"
import { getServersByUserId, getServerStats, getRecentActivities, updateServerStatus } from "@/services/server-service"
import type { ServerStatus } from "@/types/server"
import { testConnection } from "@/lib/db"

// Fungsi untuk mendapatkan ID user dari session/cookie
// Dalam implementasi nyata, ini akan menggunakan sistem autentikasi yang tepat
function getCurrentUserId(): number {
  // Placeholder - dalam implementasi nyata, ambil dari session
  return 1
}

// Perbaiki penanganan error di getDashboardData
export async function getDashboardData() {
  try {
    // Cek koneksi database
    const isConnected = await testConnection()
    console.log("Database connection status:", isConnected)

    if (!isConnected) {
      console.log("Database connection failed, returning fallback data")
      return {
        isConnected: false,
        error: "Tidak dapat terhubung ke database. Periksa konfigurasi database Anda.",
        servers: [],
        stats: {
          totalServers: 0,
          activeServers: 0,
          totalPlayers: 0,
          averageCpuUsage: 0,
          uptime: 0,
        },
        activities: [],
      }
    }

    const userId = getCurrentUserId()
    console.log("Fetching data for user ID:", userId)

    // Ambil data secara sequential untuk menghindari race condition
    try {
      const servers = await getServersByUserId(userId)
      console.log(`Retrieved ${servers.length} servers`)

      const stats = await getServerStats(userId)
      console.log("Retrieved stats:", stats)

      const activities = await getRecentActivities(userId)
      console.log(`Retrieved ${activities.length} activities`)

      return {
        isConnected,
        servers,
        stats,
        activities,
      }
    } catch (error) {
      console.error("Error fetching specific data:", error)
      throw error
    }
  } catch (error) {
    console.error("Error in getDashboardData:", error)
    return {
      isConnected: false,
      error: `Terjadi kesalahan saat mengambil data dashboard: ${error.message || "Unknown error"}`,
      servers: [],
      stats: {
        totalServers: 0,
        activeServers: 0,
        totalPlayers: 0,
        averageCpuUsage: 0,
        uptime: 0,
      },
      activities: [],
    }
  }
}

export async function changeServerStatus(serverId: number, status: ServerStatus) {
  try {
    const result = await updateServerStatus(serverId, status)
    return { success: result }
  } catch (error) {
    console.error("Error updating server status:", error)
    return { success: false, error: "Gagal mengubah status server." }
  }
}
