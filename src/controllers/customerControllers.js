import Xendit from "../xendit.js";

const { Customer } = Xendit;
const c = new Customer();

export const postCustomer = (req, res) => {
  c.createCustomer({
    referenceID: new Date().toISOString(),
    givenNames: "customer 1",
    email: "customer@website.com",
    mobileNumber: "+6281212345678",
    description: "dummy customer",
    middleName: "middle",
    surname: "surname",
    addresses: [],
    apiVersion: "2020-05-19",
  })
    .then((r) => {
      res.json(r);
    })
    .catch((e) => {
      res.json(e);
      process.exit(1);
    });
};

export const getCustomer = (req, res) => {
  c.getCustomerByReferenceID({
    referenceID: req.params.id,
  })
    .then((r) => {
      res.json(r);
    })
    .catch((e) => {
      res.json(e);
      process.exit(1);
    });
};
