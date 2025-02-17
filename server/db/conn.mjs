import { MongoClient } from "mongodb";

const connectionString = process.env.MONGODB_URI || "";
const client = new MongoClient(connectionString);
let conn;
try {
  conn = await client.connect();
} catch (e) {
  console.error(e);
}
const db = conn.db("sample_mflix");
export default db;
