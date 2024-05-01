import mongoose from "mongoose";
import "dotenv/config";

const DB_URI = process.env.DB_URI;

async function run() {
  try {
    await mongoose.connect(DB_URI);

    console.log("Database connection successfully");
  } finally {
    // await mongoose.process.exit(1);
    await mongoose.disconnect();
  }
}

run().catch((error) => console.error(error));
