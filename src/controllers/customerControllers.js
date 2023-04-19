import Xendit from "../xendit.js";

const { Customer } = Xendit;
const c = new Customer();

export const postCustomer = (req, res) => {
  const {givenNames,email,mobileNumber,surname,middleName} = req.body;

  c.createCustomer({
    referenceID: new Date().toISOString(),
    givenNames,
    email,
    mobileNumber,
    description: "dummy customer",
    middleName,
    surname,
    addresses: [],
    apiVersion: "2020-05-19",
  })
    .then((r) => {
      res.json(r);
    })
    .catch((e) => {
      console.error(e);
      res.status(400).json({ error: e.message });
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
      console.error(e);
      res.status(404).json({ message: e.message })
    });
};
