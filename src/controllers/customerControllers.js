import Xendit from "../xendit.js";

const { Customer } = Xendit;
const c = new Customer();

export const postCustomer = async (req, res) => {
  try {
    const { referenceID, givenNames, email, mobileNumber } = req.body;

    let customer = await c.createCustomer({
      referenceID,
      givenNames,
      email,
      mobileNumber,
      date_of_registration: new Date().toISOString(),
      apiVersion: "2020-05-19",
    });
    console.log("created customer", customer); // eslint-disable-line no-console

    res.status(201).json({
      message: "Invoice created successfully",
      data: customer,
    });
  } catch (error) {
    console.error(error);
    // Send error response
    res.status(400).json({ error: error.message });
  }
};

export const getCustomer = async (req, res) => {
  try {
    const customers = await c.getCustomerByReferenceID({
      referenceID: req.params.id,
      apiVersion: "2020-05-19",
    });
    // eslint-disable-next-line no-console
    console.log("retrieved customers", customers);
  } catch (error) {
    console.error(error);
    res.status(404).json({ message: error.message });
  }
};
