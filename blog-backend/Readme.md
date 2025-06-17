Great! Let's build a **complete backend for a blog app** using:

* **Bun** – Fast JavaScript runtime.
* **Elysia** – Express-like framework for Bun.
* **TursoDB** – Serverless SQLite (via libSQL).
* **Authentication** – With JWT (JSON Web Tokens).

---

### 🧱 Features

* User registration & login (auth with JWT)
* Create, read, update, delete (CRUD) blog posts
* Protected routes (only logged-in users can write/delete)
* SQLite-based DB via Turso
* Clean, modular code

---

## 📦 Step 1: Set Up Bun Project

```bash
bun init blog-backend
cd blog-backend
```

Choose `typescript`, and install dependencies:

```bash
bun add elysia jwt bcrypt @libsql/client
```

---

## 📁 Step 2: Project Structure

```
blog-backend/
│
├── src/
│   ├── index.ts          # Entry point
│   ├── db.ts             # Turso DB setup
│   ├── auth.ts           # Auth middleware
│   ├── routes/
│   │   ├── auth.ts       # Login/Register
│   │   └── posts.ts      # Blog CRUD
│   └── utils/
│       └── jwt.ts        # JWT helper
│
├── .env                  # Secrets
└── tsconfig.json
```

---

## 🔐 Step 3: Set Up TursoDB

1. Install Turso CLI: [https://docs.turso.tech/reference/cli/installation](https://docs.turso.tech/reference/cli/installation)

2. Login and create database:

```bash
turso auth login
turso db create blog-app
```

3. Create a `.env` file:

```env
TURSO_DB_URL=libsql://<your-db>.turso.io
TURSO_DB_TOKEN=<your-auth-token>
JWT_SECRET=supersecretkey
```

4. Add `.env` support with Bun (built-in!):

```ts
// At the top of `index.ts`
import "dotenv/config";
```

---

## 🔌 Step 4: Database Setup (src/db.ts)

```ts
import { createClient } from "@libsql/client";

export const db = createClient({
  url: process.env.TURSO_DB_URL!,
  authToken: process.env.TURSO_DB_TOKEN!,
});
```

Run schema (can use Turso CLI or inside Bun):

```ts
await db.execute(`
CREATE TABLE IF NOT EXISTS users (
  id TEXT PRIMARY KEY,
  username TEXT UNIQUE,
  password TEXT
);

CREATE TABLE IF NOT EXISTS posts (
  id TEXT PRIMARY KEY,
  title TEXT,
  content TEXT,
  author_id TEXT,
  created_at TEXT DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (author_id) REFERENCES users(id)
);
`);
```

You can also run this manually with:

```bash
turso db shell blog-app
```

---

## 🔐 Step 5: Auth Helpers (src/utils/jwt.ts)

```ts
import { sign, verify } from "jsonwebtoken";

const SECRET = process.env.JWT_SECRET!;

export const createJWT = (payload: object) =>
  sign(payload, SECRET, { expiresIn: "1d" });

export const verifyJWT = (token: string) =>
  verify(token, SECRET);
```

---

## 🔒 Step 6: Auth Middleware (src/auth.ts)

```ts
import { Elysia } from "elysia";
import { verifyJWT } from "./utils/jwt";

export const auth = new Elysia().onBeforeHandle(({ request, set }) => {
  const authHeader = request.headers.get("authorization");
  if (!authHeader) {
    set.status = 401;
    return { error: "No token" };
  }

  const token = authHeader.split(" ")[1];
  try {
    const user = verifyJWT(token) as any;
    (request as any).user = user;
  } catch {
    set.status = 401;
    return { error: "Invalid token" };
  }
});
```

---

## 🔐 Step 7: Auth Routes (src/routes/auth.ts)

```ts
import { Elysia } from "elysia";
import { db } from "../db";
import { createJWT } from "../utils/jwt";
import { randomUUID } from "crypto";
import bcrypt from "bcrypt";

export const authRoutes = new Elysia({ prefix: "/auth" })
  .post("/register", async ({ body, set }) => {
    const { username, password } = body;

    const hashed = await bcrypt.hash(password, 10);
    const id = randomUUID();

    try {
      await db.execute({
        sql: "INSERT INTO users (id, username, password) VALUES (?, ?, ?)",
        args: [id, username, hashed],
      });
    } catch (e) {
      set.status = 400;
      return { error: "Username already exists" };
    }

    return { token: createJWT({ id, username }) };
  })

  .post("/login", async ({ body, set }) => {
    const { username, password } = body;

    const result = await db.execute({
      sql: "SELECT * FROM users WHERE username = ?",
      args: [username],
    });

    const user = result.rows[0];
    if (!user) {
      set.status = 404;
      return { error: "User not found" };
    }

    const valid = await bcrypt.compare(password, user.password as string);
    if (!valid) {
      set.status = 401;
      return { error: "Invalid password" };
    }

    return { token: createJWT({ id: user.id, username }) };
  });
```

---

## 📝 Step 8: Post Routes (src/routes/posts.ts)

```ts
import { Elysia } from "elysia";
import { db } from "../db";
import { randomUUID } from "crypto";
import { auth } from "../auth";

export const postRoutes = new Elysia({ prefix: "/posts" })
  .use(auth)
  .post("/", async ({ request, body }) => {
    const { title, content } = body;
    const user = (request as any).user;

    const id = randomUUID();
    await db.execute({
      sql: "INSERT INTO posts (id, title, content, author_id) VALUES (?, ?, ?, ?)",
      args: [id, title, content, user.id],
    });

    return { success: true };
  })

  .get("/", async () => {
    const result = await db.execute("SELECT * FROM posts ORDER BY created_at DESC");
    return result.rows;
  })

  .put("/:id", async ({ params, body, request }) => {
    const user = (request as any).user;
    await db.execute({
      sql: "UPDATE posts SET title = ?, content = ? WHERE id = ? AND author_id = ?",
      args: [body.title, body.content, params.id, user.id],
    });
    return { success: true };
  })

  .delete("/:id", async ({ params, request }) => {
    const user = (request as any).user;
    await db.execute({
      sql: "DELETE FROM posts WHERE id = ? AND author_id = ?",
      args: [params.id, user.id],
    });
    return { success: true };
  });
```

---

## 🚀 Step 9: Server Entry (src/index.ts)

```ts
import { Elysia } from "elysia";
import { authRoutes } from "./routes/auth";
import { postRoutes } from "./routes/posts";
import "dotenv/config";

const app = new Elysia()
  .use(authRoutes)
  .use(postRoutes)
  .get("/", () => "Blog API running 🚀")
  .listen(3000);

console.log(`Server running at http://localhost:3000`);
```

---

## ✅ Step 10: Run the Server

```bash
bun run src/index.ts
```

---

## 📬 Sample API Requests

### Register

```http
POST /auth/register
{
  "username": "admin",
  "password": "123456"
}
```

### Login

```http
POST /auth/login
{
  "username": "admin",
  "password": "123456"
}
```

Returns:

```json
{ "token": "..." }
```

### Create Post

Add `Authorization: Bearer <token>` header

```http
POST /posts
{
  "title": "My First Post",
  "content": "Hello world!"
}
```

---

## 🧪 Next Steps

* Add validation with `zod`
* Rate limit login attempts
* Use sessions with Redis (optional)
* Deploy to Fly.io or Vercel functions (Elysia-compatible)

---

Would you like me to create a GitHub repo for this, or generate this into a single downloadable zip?
