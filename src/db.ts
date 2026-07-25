import { Pool } from 'pg'

// Railway inject DATABASE_URL อัตโนมัติเมื่อ add PostgreSQL service
if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL env var is required')
}

export const db = new Pool({
  connectionString: process.env.DATABASE_URL,
  max: 10,
})
