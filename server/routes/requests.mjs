import express from "express";
import db from "../db/conn.mjs";
//import { ObjectId } from "mongodb";

const router = express.Router();

// Get a list of 50 posts
router.get("/", async (req, res) => {
  let collection = await db.collection("requests");
  let results = await collection.find({}).limit(50).toArray();

  res.send(results).status(200);
});

// Add a new document to the collection
router.post("/", async (req, res) => {
  let collection = await db.collection("requests");
  let newDocument = req.body;
  newDocument.date = new Date();
  let result = await collection.insertOne(newDocument);
  res.send(result).status(204);
});

export default router;
