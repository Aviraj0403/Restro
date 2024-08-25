import mongoose from "mongoose";

export const connectDB = async () => {
    await mongoose.connect('mongodb://localhost:27017/TD').then(()=>console.log("DataBase Connected"));
}