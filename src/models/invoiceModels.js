import mongoose from 'mongoose';
import dotenv from "dotenv";
dotenv.config();

// URI koneksi ke database
const uri = process.env.MONGO_URI + "/payments";

// Membuat koneksi
mongoose.connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Database connected successfully!');
  })
  .catch((error) => {
    console.error('Database connection failed:', error);
  });

const invoiceSchema = new mongoose.Schema({
  customerId: {
    type: String,
    required: true,
    unique: true
  },
  amount: {
    type: Number,
    required: true
  },
  expiry_date: {
    type: Date,
    required: true
  },
  status: {
    type: Boolean,
    required: true,
    default : false,
  },
  xenditInvoiceId: {
    type: String,
    required: true,
    unique: true
  },
  createdDate: {
    type: Date,
    required: true,
  }
});

export const invoiceModel =  mongoose.model('Invoice', invoiceSchema);
