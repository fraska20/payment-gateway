import Xendit from "../xendit.js";
import { invoiceModel } from "../models/invoiceModels.js"

const { Invoice } = Xendit;
const i = new Invoice({});

export const postInvoice = async (req, res) => {
  
  try {
    const { customerId, amount } = req.body;
  
    // Create new invoice document
    const invoiceDoc = new invoiceModel({
      customerId,
      amount,
    });

    let invoice = await i.createInvoice({
      externalID: customerId,
      amount,
      invoice_duration: 43200,
      currency: 'IDR',
      success_redirect_url: 'https://your-success-redirect-url',
      failure_redirect_url: 'https://your-failure-redirect-url',
    });

    console.log("created invoice", invoice); // eslint-disable-line no-console

    // Save the new invoice document to the database
    invoiceDoc.xenditInvoiceId = invoice.id;
    invoiceDoc.expiry_date = invoice.expiry_date;
    invoiceDoc.createdDate = invoice.created;
    const result = await invoiceDoc.save();

    // Send success response
    res.status(201).json({
      message: 'Invoice created successfully',
      invoice_url : invoice.invoice_url,
      data: result
    });

  } catch (error) {
    console.error(e);
    // Send error response
    res.status(500).json({ error: error.message }); 
  }
};

export const getInvoice = async (req, res) => {

  try {
    const invoice = await invoiceModel.findById(req.params.id);
    
    if (!invoice) {
      return res.status(404).send('Invoice not found');
    }

    const retrievedInvoice = await i.getInvoice({ invoiceID: invoice.customerId });

    res.json(retrievedInvoice);
  } catch (error) {
    console.error(error);
    res.status(500).send('Something went wrong');
  }
};

export const delInvoice = (req, res) => {
  
  i.expireInvoice({
    invoiceID : req.params.id,
  })
    .then((r) => {
      res.json(r);
    })
    .catch((e) => {
      console.error(e);
      res.status(404).json({ message: e.message })
    });
};



