import mongoose from 'mongoose';
import dotenv from 'dotenv';

// Load environment variables from .env file
dotenv.config();

export const connectDB = async () => {
  try {
    // Check if MONGO_URI is defined
    if (!process.env.MONGO_URI) {
      console.error('MONGO_URI is not defined in the environment variables.');
      process.exit(1); // Exit the process if MONGO_URI is missing
    }
console.log("************************",process.env.MONGO_URI)
    // Attempt to connect to MongoDB
    const connect = await mongoose.connect(process.env.MONGO_URI);

    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection failed:', error);
    process.exit(1); // Exit the process if the connection fails
  }
};
