import mongoose from "mongoose";

export const connectDB=async ()=>{
    await mongoose.connect("mongodb+srv://Shakir:S1234h%24%25@cluster0.2ouvw.mongodb.net/food").then(()=>{
        console.log("db connected")
    })
}