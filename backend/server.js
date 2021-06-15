import express from "express";
import { products } from "./product.js";

const app = express();
const port = process.env.PORT || 5001;

app.get("/products", (req, res) => {
  res.send(products);
});

app.get("/", (req, res) => {
  res.send("Setup working now");
});

app.listen(port, () => {
  console.log(`server at http://localhost:${port}`);
});
