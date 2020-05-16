import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import {addFriend} from './Routes/addFriend.ts' 
import {getFriend} from './Routes/getFriend.ts'

const router = new Router();
const app = new Application();
const PORT = 3000;

router
    .post("/addFriend", addFriend)
    .get("/getFriend/:id", getFriend)

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: PORT});