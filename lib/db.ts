import mysql from "mysql2/promise"
import { dbConfig } from "@/config/database"

// Pool koneksi untuk penggunaan yang efisien
let pool: mysql.Pool | null = null

// Inisialisasi pool koneksi
export async function initDb() {
  try {
    if (!pool) {
      pool = mysql.createPool({
        host: dbConfig.host,
        port: dbConfig.port,
        user: dbConfig.user,
        password: dbConfig.password,
        database: dbConfig.database,
        waitForConnections: true,
        connectionLimit: 10,
        queueLimit: 0,
      })
      console.log("Database connection pool initialized")
    }
    return pool
  } catch (error) {
    console.error("Failed to initialize database connection:", error)
    throw error
  }
}

// Fungsi untuk mendeteksi dan memperbaiki query dengan LIMIT parameter
function fixLimitParameter(sql: string, params?: any[]): { sql: string; params: any[] } {
  if (!params || params.length === 0) return { sql, params: [] }

  // Cek apakah query mengandung LIMIT ? pattern
  const limitRegex = /LIMIT\s+\?/i
  if (limitRegex.test(sql)) {
    console.log("Detected LIMIT parameter in query, fixing...")

    // Cari indeks parameter LIMIT (biasanya parameter terakhir)
    const limitParamIndex = params.length - 1
    const limitValue = Number.parseInt(String(params[limitParamIndex]), 10)

    // Ganti LIMIT ? dengan nilai literal
    const newSql = sql.replace(limitRegex, `LIMIT ${limitValue}`)

    // Hapus parameter LIMIT dari array params
    const newParams = params.slice(0, limitParamIndex)

    console.log("Fixed query:", newSql)
    console.log("Fixed params:", newParams)

    return { sql: newSql, params: newParams }
  }

  return { sql, params }
}

// Eksekusi query dengan parameter
export async function query<T>(sql: string, params?: any[]): Promise<T> {
  try {
    const db = await initDb()

    // Fix LIMIT parameter jika ada
    const { sql: fixedSql, params: fixedParams } = fixLimitParameter(sql, params)

    console.log("Executing query:", fixedSql)
    console.log("With parameters:", fixedParams)

    const [results] = await db.execute(fixedSql, fixedParams || [])
    return results as T
  } catch (error) {
    console.error("Database query error:", error)
    console.error("Failed query:", sql)
    console.error("With parameters:", params)
    throw error
  }
}

// Cek koneksi database
export async function testConnection(): Promise<boolean> {
  try {
    const db = await initDb()
    await db.execute("SELECT 1 as connection_test")
    return true
  } catch (error) {
    console.error("Database connection test failed:", error)
    return false
  }
}
