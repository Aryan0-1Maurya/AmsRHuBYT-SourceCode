import { Elysia } from "elysia";
import { db } from "../utils/db";
import { createJWT } from "../utils/jwt";
import bcrypt from "bcryptjs";

export const authRoutes = new Elysia({ prefix: "/auth" })

  // Register Route
  .post("/register", async (c) => {
    const { username, password } = await c.body;

    if (!username || !password) {
      return {
        error: "Username and password are required"
      };
    }

    const result = await db.execute({
      sql: "SELECT * FROM users WHERE username = ?",
      args: [username],
    });
    const existing = result.rows[0];

    if (existing) {
      return {
        error: "Username already exists"
      };
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await db.execute({
      sql: "INSERT INTO users (username, password) VALUES (?, ?)",
      args: [username, hashedPassword],
    });

    const token = createJWT({ username });

    return { token };
  })

  // Login Route
  .post("/login", async (c) => {
    const { username, password } = await c.body;

    const result = await db.execute({
      sql: "SELECT * FROM users WHERE username = ?",
      args: [username],
    });
    const user = result.rows[0];

    if (!user || !(await bcrypt.compare(password, user.password))) {
      c.set.status = 401;
      return { error: "Invalid username or password" };
    }

    const token = createJWT({ id: user.id, username });

    return { token };
  });
