import express from "express";
const router = express.Router();
import { postInvoice, getInvoice, delInvoice } from "../controllers/invoiceControllers.js";

router.post("/invoice", postInvoice);
router.get("/invoice/:id", getInvoice);
router.post("/invoice/delete/:id", delInvoice);

export default router;
