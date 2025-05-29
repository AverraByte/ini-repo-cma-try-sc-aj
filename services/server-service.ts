import { query } from "@/lib/db"
import type { GameServer, ServerStats, ServerActivity, ServerStatus } from "@/types/server"

// Mendapatkan semua server untuk user tertentu
export async function getServersByUserId(userId: number): Promise<GameServer[]> {
  return query<GameServer[]>(`SELECT * FROM game_servers WHERE userId = ? ORDER BY createdAt DESC`, [userId])
}

// Mendapatkan server berdasarkan ID
export async function getServerById(id: number): Promise<GameServer | null> {
  const servers = await query<GameServer[]>(`SELECT * FROM game_servers WHERE id = ?`, [id])
  return servers.length > 0 ? servers[0] : null
}

// Mendapatkan statistik server untuk user tertentu
export async function getServerStats(userId: number): Promise<ServerStats> {
  const [result] = await query<any[]>(
    `SELECT 
      COUNT(*) as totalServers,
      SUM(CASE WHEN status = 'online' THEN 1 ELSE 0 END) as activeServers,
      SUM(currentPlayers) as totalPlayers,
      AVG(cpuUsage) as averageCpuUsage,
      AVG(uptime) as uptime
    FROM game_servers 
    WHERE userId = ?`,
    [userId],
  )

  return {
    totalServers: result.totalServers || 0,
    activeServers: result.activeServers || 0,
    totalPlayers: result.totalPlayers || 0,
    averageCpuUsage: result.averageCpuUsage || 0,
    uptime: result.uptime || 99.9,
  }
}

// Mendapatkan aktivitas server terbaru untuk user tertentu
export async function getRecentActivities(userId: number, limit = 5): Promise<ServerActivity[]> {
  // Kembali ke implementasi asli, tapi dengan fungsi query yang sudah diperbaiki
  return query<ServerActivity[]>(
    `SELECT a.*, s.name as serverName 
     FROM server_activities a
     JOIN game_servers s ON a.serverId = s.id
     WHERE s.userId = ?
     ORDER BY a.timestamp DESC
     LIMIT ?`,
    [userId, limit],
  )
}

// Mengubah status server
export async function updateServerStatus(serverId: number, status: ServerStatus): Promise<boolean> {
  const result = await query<any>(`UPDATE game_servers SET status = ?, updatedAt = NOW() WHERE id = ?`, [
    status,
    serverId,
  ])

  // Catat aktivitas
  await logServerActivity(serverId, `Status changed to ${status}`, `Server status updated to ${status}`)

  return true
}

// Mencatat aktivitas server
export async function logServerActivity(serverId: number, action: string, details: string): Promise<void> {
  await query(
    `INSERT INTO server_activities (serverId, action, details, timestamp) 
     VALUES (?, ?, ?, NOW())`,
    [serverId, action, details],
  )
}
