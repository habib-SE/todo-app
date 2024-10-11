import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config()
const URL = process.env.DB_URL;

const conn = async () => {
    if (!URL) {
        console.error("MongoDB connection URL is missing.");
        return;
    }
    try {
        await mongoose.connect(URL)
            .then(() => {
                console.log("Connected");
            });
    } catch (error) {
        console.error("Connection error", error);
    }
};

export default conn;
