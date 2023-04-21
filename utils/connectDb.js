import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const DB_URI = "mongodb://root:root@mongo/payment?authSource=admin";

const connectDB = async () => {
  try {
    await mongoose.connect(DB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Connected to database");
  } catch (error) {
    console.error("Database connection failed", error.message);
    process.exit(1);
  }
};

export default connectDB;
