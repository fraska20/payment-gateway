import express from "express";
const router = express.Router();
import { invoice } from "../controllers/notifControllers.js";

router.post("/invoice", invoice);

export default router;
