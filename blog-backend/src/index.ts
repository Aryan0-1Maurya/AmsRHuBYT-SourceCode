import { Elysia } from "elysia";
import { cors } from "@elysiajs/cors";
import dotenv from "dotenv";
import { authRoutes } from "./routes/auth";
import { postRoutes } from "./routes/posts";

dotenv.config();

const app = new Elysia()
  .use(cors())
  .use(authRoutes)
  .use(postRoutes)
  .get("/", () => "Blog API running 🚀")
  .listen(3000);

console.log("Server running at http://localhost:3000");
