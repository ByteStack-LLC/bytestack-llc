import express from "express";
import cors from "cors";
import "./loadEnvironment.mjs";
import "express-async-errors";
import requests from "./routes/requests.mjs";
import rateLimit from "express-rate-limit";

const PORT = process.env.PORT || 5050;
const app = express();

const limiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 100,
});

app.use(limiter);
app.use(cors());
app.use(express.json());

// Load the /posts routes
app.use("/requests", requests);

// Global error handling
app.use((err, _req, res, next) => {
  res.status(500).send("Uh oh! An unexpected error occured.");
});

// start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
