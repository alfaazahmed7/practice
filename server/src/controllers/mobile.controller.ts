import { Request, Response } from "express"
import Mobile from "../models/Mobile.js"

export const getMobiles = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const { search, sort } = req.query;

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

        // sort
        let sortOption = {};

        if (sort === 'price-asc') {
            sortOption = { price: 1 };
        }
        else if (sort === 'price-desc') {
            sortOption = { price: -1 };
        }
        else if (sort === 'rating-asc') {
            sortOption = { rating: -1 };
        }
        else if (sort === 'newest') {
            sortOption = { releaseYear: -1 }
        }

        const mobiles = await Mobile.find(query)
            .sort(sortOption);

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