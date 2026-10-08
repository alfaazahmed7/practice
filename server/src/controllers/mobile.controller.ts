import { Request, Response } from "express"
import Mobile from "../models/Mobile.js"

export const getMobiles = async (
    req: Request,
    res: Response
): Promise<void> => {
    try {
        const mobiles = await Mobile.find();

        if (!mobiles) {
            res.status(404).json({
                message: 'No mobiles data has been found'
            });
            return;
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