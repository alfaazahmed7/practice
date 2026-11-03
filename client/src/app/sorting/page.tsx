import { getMobilesData } from "@/services/mobiles.services";
import SortingView from "@/components/sorting/SortingView";

interface PageProps {
    searchParams: Promise<{
        search?: string
    }>
}

const SortingPage = async ({ searchParams }: PageProps) => {
    const params = await searchParams;

    const queryString = new URLSearchParams(params as Record<string, string>).toString();
    const mobiles = await getMobilesData(queryString);


    return <SortingView mobiles={mobiles.mobiles} />;
};

export default SortingPage;
