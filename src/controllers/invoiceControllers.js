import Xendit from "../xendit.js";

const { Invoice } = Xendit;
const i = new Invoice({});

export const postInvoice = (req, res) => {
  const { amount, payerEmail } = req.body;

  i.createInvoice({
    externalID: Date.now().toString(),
    amount,
    callback_virtual_account_id: 'your-virtual-account-id',
    payerEmail,
    description: 'Invoice for Shoes Purchase',
    invoice_duration: 24,
    currency: 'IDR',
    success_redirect_url: 'https://your-success-redirect-url',
    failure_redirect_url: 'https://your-failure-redirect-url',
  })
    .then((r) => {
      console.log("created invoice", r); // eslint-disable-line no-console
      res.json({
        success: true,
        invoice_id: r.id,
        payment_url: r.invoice_url
      });
    })
    .catch((e) => {
      console.error(e);
      res.status(500).json({ success: false, error: e.message });
    });
};

export const getInvoice = (req, res) => {

  i.getInvoice({
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



