import express from "express";
const router = express.Router();
import { postInvoice } from "../controllers/invoiceControllers.js";

router.post("/", postInvoice);

export default router;
