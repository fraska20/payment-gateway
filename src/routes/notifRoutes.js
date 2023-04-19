import express from "express";
const router = express.Router();
import { customer, invoice } from "../controllers/notifControllers.js";

router.post("/notifikasi/invoice", invoice);
router.post("/notifikasi/customer", customer);

export default router;
