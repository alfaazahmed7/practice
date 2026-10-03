import mongoose from 'mongoose';

export const connectToDatabase = async () => {
    try {
        const mongoUri = process.env.MONGODB_URI;
        if (!mongoUri) {
            throw new Error('MongoDB Connection Failed');
        }
        await mongoose.connect(mongoUri);
        console.log('MongoDB connection successful');
        console.log("Database:", mongoose.connection.name);
    }
    catch (error) {
        console.error('MongoDB connection failed');
        process.exit(1);
    }
}