// Konfigurasi database
export const dbConfig = {
  host: process.env.DB_HOST || "localhost",
  port: Number.parseInt(process.env.DB_PORT || "3306", 10),
  user: process.env.DB_USER || "gameuser",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "gameserver_hosting",
}

// Fungsi untuk memvalidasi konfigurasi database
export function validateDbConfig(): { isValid: boolean; missingVars: string[] } {
  const requiredVars = ["DB_HOST", "DB_USER", "DB_PASSWORD", "DB_NAME"]
  const missingVars = requiredVars.filter((varName) => !process.env[varName])

  return {
    isValid: missingVars.length === 0,
    missingVars,
  }
}

// Log konfigurasi database (tanpa password)
export function logDbConfig(): void {
  console.log("Database Configuration:")
  console.log(`- Host: ${dbConfig.host}`)
  console.log(`- Port: ${dbConfig.port}`)
  console.log(`- User: ${dbConfig.user}`)
  console.log(`- Database: ${dbConfig.database}`)
  console.log(`- Password: ${dbConfig.password ? "******" : "Not set"}`)
}
