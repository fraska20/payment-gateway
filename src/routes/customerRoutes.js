import express from "express";
const router = express.Router();
import {
  postCustomer,
  getCustomer,
} from "../controllers/customerControllers.js";

router.post("/", postCustomer);
router.get("/:id", getCustomer);

export default router;
