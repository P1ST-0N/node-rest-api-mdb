import mongoose from "mongoose";
import "dotenv/config";

// import app from "./app";

const { DB_HOST, PORT = 3000 } = process.env.DB_HOST;

async function run() {
  try {
    await mongoose.connect(DB_HOST);
    // .then(() => {
    //   app.listen(PORT, () => {
    //     console.log("Database connection successfully");
    //   });
    // });

    console.log("Database connection successfully");
  } finally {
    // await mongoose.process.exit(1);
    await mongoose.disconnect();
  }
}

run().catch((error) => console.error(error));
