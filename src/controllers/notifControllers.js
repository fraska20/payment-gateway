import invoiceModel from "../models/invoiceModels.js";
import dotenv from "dotenv";
dotenv.config();

export const invoice = async (req, res) => {
  const CallbackTokenHeader = req.headers["x-callback-token"]
    ? req.headers["x-callback-token"]
    : "";

  if (CallbackTokenHeader === process.env.TOKEN_VERIFIKASI_CALLBACK) {
    // console.log("received webhook", req.body);
    await invoiceModel.findOneAndUpdate(
      { xenditInvoiceId: req.body.id },
      { status: (req.body.status = "PAID" ? true : false) }
    );
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
};

export const customer = async (req, res) => {
  const CallbackTokenHeader = req.headers["x-callback-token"]
    ? req.headers["x-callback-token"]
    : "";

  if (CallbackTokenHeader === process.env.TOKEN_VERIFIKASI_CALLBACK) {
    console.log("received webhook", req.body);
    res.sendStatus(200);
  } else {
    res.sendStatus(403);
  }
};
