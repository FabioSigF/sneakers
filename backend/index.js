import express from "express";
import cors from "cors";
import productRoutes from "./routes/product.js";
import usersRoutes from "./routes/users.js";
import cookieParser from "cookie-parser";
const app = express();

app.use(express.json());
app.use(cors({
  origin: ["http://localhost:3000"],
  methods: ["POST", "GET"],
  credentials: true
}));
app.use(cookieParser())
app.use("/products", productRoutes);
app.use("/users", usersRoutes)
app.listen(8800, () => {
  console.log("Server is running on port 8800");
});
