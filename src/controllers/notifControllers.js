import dotenv from "dotenv";
dotenv.config();

export const invoice = async (req, res) => {
  const xenditXCallbackToken = process.env.TOKEN_VERIFIKASI_CALLBACK;

  const xIncomingCallbackTokenHeader = req.headers["x-callback-token"]
    ? req.headers["x-callback-token"]
    : "";

  if (xIncomingCallbackTokenHeader === xenditXCallbackToken) {
    console.log("received webhook", req.body);
    res.status(200).json(req.body);
  } else {
    res.sendStatus(403);
  }
};
