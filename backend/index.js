import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.js";

const app = express();

app.use(express.json());

app.use(cors());

app.use("/products", productRoutes);

app.listen(8800);
