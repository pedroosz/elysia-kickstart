import { Pool } from "pg";
import { drizzle } from "drizzle-orm/node-postgres";
import { migrate } from "drizzle-orm/node-postgres/migrator";

const pool = new Pool({
  connectionString: Bun.env.DATABASE_URL,
});

const db = drizzle(pool);

async function main() {
  console.log("Starting migration...");
  await migrate(db, {
    migrationsFolder: "drizzle",
  });

  console.log("Migration complete.");
  process.exit(0);
}

main().catch((err) => {
  console.error(err);
  process.exit(0);
});
