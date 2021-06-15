import express from "express";
import { data } from "./data.js";

const app = express();
const port = process.env.PORT || 5001;

app.get("/api/products", (req, res) => {
  res.send(data.products);
});

app.get("/", (req, res) => {
  res.send("Setup working now");
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
