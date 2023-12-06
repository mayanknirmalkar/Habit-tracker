import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()
const db = mongoose.connect(process.env.URI);

console.log("mongodb connected");

export default db;
