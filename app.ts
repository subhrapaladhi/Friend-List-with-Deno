import { Application, Router } from "https://deno.land/x/oak/mod.ts";

import {addFriend} from './Controllers/addFriend.ts';
import {getFriend} from './Controllers/getFriend.ts';
import {updateFriend} from './Controllers/updateFriend.ts';
import {deleteFriend} from './Controllers/deleteFriend.ts';

const router = new Router();
const app = new Application();
const PORT = 3000;

router
    .post("/addFriend", addFriend)
    .get("/getFriend/:id", getFriend)
    .patch("/updateFriend/:id", updateFriend)
    .delete("/deleteFriend/:id", deleteFriend)

app.use(router.routes());
app.use(router.allowedMethods());

await app.listen({port: PORT});