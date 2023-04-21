import mongoose from "mongoose";

const invoiceSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
    unique: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  expiry_date: {
    type: Date,
    required: true,
  },
  status: {
    type: Boolean,
    required: true,
    default: false,
  },
  xenditInvoiceId: {
    type: String,
    required: true,
    unique: true,
  },
  createdDate: {
    type: Date,
    required: true,
  },
});

const invoiceModel = mongoose.model("Invoice", invoiceSchema);

export default invoiceModel;
