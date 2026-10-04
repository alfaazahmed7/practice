import { Mobile } from "@/types/Mobile"

const baseUrl = process.env.NEXT_SERVER_URL;

interface GetMobilesResponse {
    success: boolean,
    total: number,
    mobiles: Mobile[]
}

export const getMobilesData = async (): Promise<GetMobilesResponse> => {
    if (!baseUrl) {
        throw new Error('NEXT_SERVER_URL is not configured!');
    }

    try {
        const res = await fetch(`${baseUrl}/api/mobiles`);

        if (!res.ok) {
            throw new Error(`Request failed with status ${res.status}`);
        }

        const data: GetMobilesResponse = await res.json();
        return data;
    }
    catch (error) {
        throw new Error(
            error instanceof Error
                ? error.message
                : 'Something went wrong while fetching mobile data'
        );
    }
}

// : Promise<GetMobilesResponse> -> "This async function will eventually give me a GetMobilesResponse." (generics)
// data: GetMobilesResponse -> "data should be treated as a GetMobilesResponse."