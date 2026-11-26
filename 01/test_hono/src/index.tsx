import { Hono } from 'hono'
import { renderer } from './renderer'
import { Pool } from "pg"


const app = new Hono()

app.use(renderer)

app.get('/', (c) => {
  return c.render(<h1>Hello!</h1>);
});

app.get("/games", (c) =>{
  return c.json([
    {
      game_id: 1,
      game_title: "TEST"
    }
  ]);
});

app.post("/post_result", async (c) =>{
  const body = await c.req.json();
  // pythonに送
  // 返ってきたOCR結果をデータベースに登録
  return c.json({ received: body})
})





app.get("/games", )

export default app
