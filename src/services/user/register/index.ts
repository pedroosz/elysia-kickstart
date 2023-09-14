import { eq, sql } from "drizzle-orm";
import { db } from "../../../database/drizzle";
import { users } from "../../../database/drizzle/schema";

interface RegisterUserDTO {
  username: string;
  password: string;
  email: string;
}

export default async function ({ email, password, username }: RegisterUserDTO) {
  let [isEmailInUse] = await db
    .select()
    .from(users)
    .where(eq(users.email, email))
    .execute();

  if (isEmailInUse) {
    throw new Error("Email already in use");
  }

  const [isUsernameInUse] = await db
    .select()
    .from(users)
    .where(eq(users.username, username))
    .execute();

  if (isUsernameInUse) {
    throw new Error("Username already in use");
  }

  return await db
    .insert(users)
    .values({
      email,
      username,
      password: await Bun.password.hash(password),
    })
    .returning({
      id: users.id,
    })
    .execute();
}
