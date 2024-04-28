import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO)
        console.log(`MongoDb Connected : ✅`);
    } catch (error) {
        console.error(`Error : ${error.message}`);
    }
}
export default connectDB;