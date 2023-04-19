import Xendit from "../xendit.js";

const { Invoice } = Xendit;
const i = new Invoice({});

export const postInvoice = (req, res) => {
  i.createInvoice({
    externalID: Date.now().toString(),
    payerEmail: "example@gmail.com",
    description: "Invoice for Shoes Purchase",
    amount: 100000,
  })
    .then((r) => {
      console.log("created invoice", r); // eslint-disable-line no-console
      return r;
    })
    .catch((e) => {
      console.error(e); // eslint-disable-line no-console
      process.exit(1);
    });
};
