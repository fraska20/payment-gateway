import Xendit from "xendit-node";
import dotenv from "dotenv";
dotenv.config();

const x = new Xendit({
  secretKey: process.env.SECRET_KEY,
  xenditURL: process.env.XENDIT_URL,
});

export default x;
