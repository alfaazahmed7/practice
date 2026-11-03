import { Request, Response } from "express"
import Mobile from "../models/Mobile.js"

export const getMobiles = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { search } = req.query;

        // query object
        const query: Record<string, unknown> = {};

        // search 
        if (search) {
            query.$or = [
                { brand: { $regex: search, $options: 'i' } },
                { processor: { $regex: search, $options: 'i' } },
                { display: { $regex: search, $options: 'i' } }
            ]
        }

        const mobiles = await Mobile.find(query);

        if (!mobiles) {
            res.status(404).json({
                message: 'No mobiles data has been found'
            });
        }

        res.status(200).json({
            success: true,
            total: mobiles.length,
            mobiles
        });
    }
    catch (error) {
        console.error(error);

        res.status(500).json({
            message: 'Failed to fetch mobiles data'
        });
    }
}

// void means -> "This function doesn't intentionally return a value."