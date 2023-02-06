import { Router } from "express";
import _controller from "../controllers/product.controller.js";

const router = Router();

// Create
router.post("/", _controller.create);

// Get
router.get("/", _controller.get);

// Add Stock
router.put("/addStock", _controller.addStock)

// Get One
router.get("/:_id", _controller.getOne)

// Update
router.put("/", _controller.update);

export default router;