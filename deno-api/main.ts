import { Application, Router } from "https://deno.land/x/oak/mod.ts";

const port = 7000;

const app = new Application();
const router = new Router();
app.use(router.routes());
app.use(router.allowedMethods());

router.get("/", (ctx) => {
  ctx.response.body = "🦕 Hello from a Deno Container 🦕";
});

router.get("/givemecookie", (ctx) => {
  ctx.cookies.set("denocookie", "deno", {
    maxAge: 15,
    httpOnly: true,
    signed: true,
    secure: true,
    sameSite: "strict"
  });

  const spongebob = {
    name: "spongebob",
    bestFriend: "patrick"
  };

  ctx.response.body = spongebob;
});


await app.listen({ port });