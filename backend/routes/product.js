import express from "express";
import { getProducts, getProductPhotos } from "../controllers/product.js";

const router = express.Router();

router.get("/", getProducts);
router.get("/:id", getProductPhotos);
export default router;
