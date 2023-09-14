import swagger from "@elysiajs/swagger";
import { Elysia } from "elysia";
import userRoutes from "./routes/user.routes";

const app = new Elysia()
  .use(swagger())
  .use(userRoutes)
  .get("/", () => "Hello World!")
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
