import express from "express";

// Express setup
let app = express();
app.use(express.urlencoded({ extended: true })); // to support URL-encoded POST body
app.use(express.json()); // to support parsing JSON POST body

import customerRoutes from "./src/routes/customerRoutes.js";
app.use("/customer", customerRoutes);

import invoiceRoutes from "./src/routes/invoiceRoutes.js";
app.use("/invoice", invoiceRoutes);

import notifRoutes from "./src/routes/notifRoutes.js";
app.use("/notifikasi", notifRoutes);

app.listen(5000, () => {
  console.log("Server Berjalan di Port : 5000");
});
