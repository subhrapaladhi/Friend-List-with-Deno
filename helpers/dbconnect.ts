import { init, MongoClient } from "https://deno.land/x/mongo@v0.6.0/mod.ts";

// Intialize the plugin

await init()

const client = new MongoClient();
client.connectWithUri("mongodb://localhost:27017");

const db = client.database("Friend_list_deno");

const Friend = db.collection("friends");

export {db, Friend};