export type ServerStatus = "online" | "offline" | "restarting" | "maintenance"

export interface GameServer {
  id: number
  name: string
  game: string
  hostname: string
  port: number
  status: ServerStatus
  currentPlayers: number
  maxPlayers: number
  location: string
  cpuUsage: number
  ramUsage: number
  diskUsage: number
  uptime: number
  userId: number
  createdAt: string
  updatedAt: string
}

export interface ServerStats {
  totalServers: number
  activeServers: number
  totalPlayers: number
  averageCpuUsage: number
  uptime: number
}

export interface ServerActivity {
  id: number
  serverId: number
  action: string
  details: string
  timestamp: string
  serverName?: string
}
