import { getMobilesData } from "@/services/mobiles.services";
import SortingView from "@/components/sorting/SortingView";

const SortingPage = async () => {
    const { mobiles } = await getMobilesData();

    return <SortingView mobiles={mobiles} />;
};

export default SortingPage;
