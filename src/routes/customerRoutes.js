import express from "express";
const router = express.Router();
import {
  postCustomer,
  getCustomer,
} from "../controllers/customerControllers.js";

router.post("/customer", postCustomer);
router.get("/customer/:id", getCustomer);

export default router;
