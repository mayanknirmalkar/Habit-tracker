import mongoose from "mongoose";

const db = mongoose.connect("mongodb+srv://mayanknir:Mayank06!@cluster0.7wps3gf.mongodb.net/?retryWrites=true&w=majority");

console.log("mongodb connected");

export default db;