import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";

async function connectionDB() {
  try {
    const connectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_NAME}`
    );
    console.log(
      "MongoDB connected!! DB Host: ",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.error("MongoDB connection ERROR!! ERR: ", error);
    process.exit(1);
  }
}

export default connectionDB;
