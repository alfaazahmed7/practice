import mongoose, { Document, Model, Schema } from "mongoose";

export interface IMobile extends Document {
    mobilename: string;
    brand: string;
    price: number;
    warrenty: string;
    camera: string;
    battery: string;
    ram: string;
    storage: string;
    processor: string;
    display: string;
    rating: number;
    inStock: boolean;
    releaseYear: number;
    tags: string[];
}

const mobileSchema = new Schema<IMobile>(
    {
        mobilename: {
            type: String,
            required: true,
            trim: true,
        },

        brand: {
            type: String,
            required: true,
            trim: true,
        },

        price: {
            type: Number,
            required: true,
        },

        warrenty: {
            type: String,
            required: true,
            trim: true,
        },

        camera: {
            type: String,
            required: true,
            trim: true,
        },

        battery: {
            type: String,
            required: true,
            trim: true,
        },

        ram: {
            type: String,
            required: true,
            trim: true,
        },

        storage: {
            type: String,
            required: true,
            trim: true,
        },

        processor: {
            type: String,
            required: true,
            trim: true,
        },

        display: {
            type: String,
            required: true,
            trim: true,
        },

        rating: {
            type: Number,
            required: true,
            min: 0,
            max: 5,
        },

        inStock: {
            type: Boolean,
            required: true,
            default: true,
        },

        releaseYear: {
            type: Number,
            required: true,
        },

        tags: {
            type: [String],
            required: true,
            default: [],
        },
    },
    {
        timestamps: true,
    }
);

const Mobile: Model<IMobile> = mongoose.model<IMobile>("Mobile", mobileSchema);

export default Mobile;

// : Model<IMobile> -> Mobile must be a Mongoose Model that works with documents of type IMobile.
// interface IMobile extends Document -> IMobile gets all the properties and behavior defined by Mongoose's Document type, and then you can add your own Mobile properties.