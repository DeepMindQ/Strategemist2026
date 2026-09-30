import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

// Lazily instantiate so that merely importing this module never triggers a
// database connection (important for serverless / build environments where
// the configured DATABASE_URL may not be reachable).
function createClient() {
  try {
    return new PrismaClient({ log: ['error'] })
  } catch (err) {
    console.warn('[db] PrismaClient instantiation failed:', err)
    // Return a stub that no-ops so API routes can degrade gracefully.
    return new Proxy(
      {},
      {
        get: () => () => {
          throw new Error('Database not available')
        },
      }
    ) as unknown as PrismaClient
  }
}

export const db = globalForPrisma.prisma ?? createClient()

if (process.env.NODE_ENV !== 'production') globalForPrisma.prisma = db
