import express from "express";
import bodyParser from "body-parser";
import connectDB from "./utils/connectDb.js";
import dotenv from "dotenv";
dotenv.config();

// Express setup
let app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

connectDB();

import customerRoutes from "./src/routes/customerRoutes.js";
app.use("/", customerRoutes);

import invoiceRoutes from "./src/routes/invoiceRoutes.js";
app.use("/", invoiceRoutes);

import notifRoutes from "./src/routes/notifRoutes.js";
app.use("/", notifRoutes);

app.listen(process.env.PORT, () => {
  console.log("Server Berjalan di Port : " + process.env.PORT);
});
