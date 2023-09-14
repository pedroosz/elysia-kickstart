import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

const pool = new Pool({
  connectionString: Bun.env.DATABASE_URL,
});

export const db = drizzle(pool);
