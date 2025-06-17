import { Elysia } from "elysia";
import { db } from "../utils/db";
import { verifyJWT } from "../utils/jwt";

export const postRoutes = new Elysia({ prefix: "/posts" })
  .get("/", async () => {
    const result = await db.execute("SELECT * FROM posts");
    return result.rows;
  })
  .post("/", async ({ body, headers, set }) => {
    const auth = headers["authorization"];
    if (!auth) {
      set.status = 401;
      return { error: "No token provided" };
    }

    let payload;
    try {
      payload = verifyJWT(auth.replace("Bearer ", ""));
    } catch {
      set.status = 401;
      return { error: "Invalid token" };
    }

    const { title, content } = body;
    const id = crypto.randomUUID();

    await db.execute({
      sql: "INSERT INTO posts (id, title, content, author_id) VALUES (?, ?, ?, ?)",
      args: [id, title, content, payload.id],
    });

    return { success: true };
  });
